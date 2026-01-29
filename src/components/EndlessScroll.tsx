import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

// Use all 300 frames available in public/hero-frames-video/ (00001.png to 00300.png)
const TOTAL_FRAMES = 240;
const FRAME_PATH = '/4k-earth/';

interface ScrollTextProps {
    text: {
        start: number;
        end: number;
        title: string;
        subtitle: string;
        align: 'left' | 'center' | 'right';
    };
    scrollYProgress: any;
}

// Separate component for text overlays to fix hooks violation
function ScrollTextOverlay({ text, scrollYProgress }: ScrollTextProps) {
    const opacity = useTransform(
        scrollYProgress,
        [text.start, text.start + 0.1, text.end - 0.1, text.end],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [text.start, text.start + 0.1, text.end - 0.1, text.end],
        [20, 0, 0, -20]
    );

    const alignmentClasses = {
        left: 'items-start text-left pl-8 md:pl-16',
        center: 'items-center text-center',
        right: 'items-end text-right pr-8 md:pr-16',
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses[text.align]} pointer-events-none px-4`}
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white/90 mb-2 leading-tight tracking-tight">
                {text.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/60 tracking-tight">
                {text.subtitle}
            </p>
        </motion.div>
    );
}

const SCROLL_TEXTS = [
    {
        start: 0,
        end: 0.25,
        title: 'We build websites.',
        subtitle: 'Custom. Pixel-perfect.',
        align: 'center' as const,
    },
    {
        start: 0.25,
        end: 0.5,
        title: 'Design + Code.',
        subtitle: 'From concept to launch.',
        align: 'left' as const,
    },
    {
        start: 0.5,
        end: 0.75,
        title: 'Your brand.',
        subtitle: 'Our craft.',
        align: 'right' as const,
    },
    {
        start: 0.75,
        end: 1,
        title: "Let's create.",
        subtitle: 'Together.',
        align: 'center' as const,
    },
];

// Global image cache - persists between component mounts
const imageCache: HTMLImageElement[] = [];
let imagesPreloaded = false;

export default function EndlessScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>(imageCache);
    const [imagesLoaded, setImagesLoaded] = useState(imagesPreloaded);
    const { setContentReady } = useLoading();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Preload all images (only once globally)
    useEffect(() => {
        // If already cached, use cached images
        if (imagesPreloaded && imageCache.length > 0) {
            setImages(imageCache);
            setImagesLoaded(true);
            setContentReady();
            return;
        }

        const loadImages = async () => {
            const imagePromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameNumber = String(i + 1).padStart(5, '0');
                    img.src = `${FRAME_PATH}${frameNumber}.png`;
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                });
            });

            try {
                const loadedImages = await Promise.all(imagePromises);
                // Store in global cache
                imageCache.length = 0;
                imageCache.push(...loadedImages);
                imagesPreloaded = true;

                setImages(loadedImages);
                setImagesLoaded(true);
                setContentReady();
            } catch (error) {
                console.error('Error loading images:', error);
                setContentReady();
            }
        };

        loadImages();
    }, []);

    // Handle scroll and canvas rendering - optimized for smooth 60fps
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let currentFrameRef = -1;
        let rafId: number;
        let lastRect = { width: 0, height: 0 };

        const render = (forceFrame?: number) => {
            const progress = scrollYProgress.get();
            const frameIndex = forceFrame !== undefined
                ? forceFrame
                : Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

            // Skip if same frame (optimization)
            if (forceFrame === undefined && frameIndex === currentFrameRef) return;
            currentFrameRef = frameIndex;

            const img = images[frameIndex];
            if (!img || !img.complete) return;

            const rect = canvas.getBoundingClientRect();

            // Only resize canvas if dimensions changed
            if (rect.width !== lastRect.width || rect.height !== lastRect.height) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                lastRect = { width: rect.width, height: rect.height };
            }

            // Clear and draw
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Calculate scaling (cover)
            const canvasAspect = rect.width / rect.height;
            const imgAspect = img.width / img.height;

            let drawWidth = rect.width;
            let drawHeight = rect.height;
            let offsetX = 0;
            let offsetY = 0;

            if (canvasAspect > imgAspect) {
                drawWidth = rect.width;
                drawHeight = rect.width / imgAspect;
                offsetY = (rect.height - drawHeight) / 2;
            } else {
                drawHeight = rect.height;
                drawWidth = rect.height * imgAspect;
                offsetX = (rect.width - drawWidth) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Throttled scroll handler using RAF
        const onScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => render());
        };

        const unsubscribe = scrollYProgress.on('change', onScroll);

        // Initial render
        render(0);

        // Handle resize
        const handleResize = () => render();
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
        };
    }, [imagesLoaded, images, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white/80 mx-auto"></div>
                            <p className="text-sm text-white/60 tracking-tight">Loading experience...</p>
                        </div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="w-full h-full transition-opacity duration-300"
                    style={{ opacity: imagesLoaded ? 1 : 0 }}
                />

                {/* Scroll-driven Text Overlays - now using separate components */}
                {imagesLoaded && SCROLL_TEXTS.map((text, index) => (
                    <ScrollTextOverlay
                        key={index}
                        text={text}
                        scrollYProgress={scrollYProgress}
                    />
                ))}

                {/* Bottom gradient overlay for smooth transition to next section */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, rgb(9, 9, 11) 100%)'
                    }}
                />
            </div>
        </div>
    );
}
