import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Code2, Server, Zap, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal, StaggerList, TiltCard, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';

const services = [
    {
        icon: Code2,
        title: 'Design Systems',
        description: 'Structured foundations for interfaces that scale. Components, tokens, and patterns — not one-off pages.',
    },
    {
        icon: Server,
        title: 'Deployment & Infrastructure',
        description: 'Production-ready builds. Reliable hosting. Clean pipelines. Your system ships, and it stays up.',
    },
    {
        icon: Zap,
        title: 'Performance & Scalability',
        description: 'Fast by default. Optimized for growth. Systems that perform under pressure.',
    },
    {
        icon: RefreshCw,
        title: 'Maintenance & Evolution',
        description: 'Websites change. We plan for it. Ongoing support, versioned updates, long-term care.',
    },
];

// Abstract system video component with scroll-driven animation
function AbstractSystemVideo({ scrollYProgress }: { scrollYProgress: any }) {
    // Phase 1 (0-0.2): Not visible
    // Phase 2 (0.2-0.4): Fade in and scale up
    // Phase 3 (0.4-0.8): Stable, "locked in"
    // Phase 4 (0.8-1.0): Fade out

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.9],
        [0, 0, 0.5, 0.5, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0.15, 0.35, 0.85],
        [0.98, 1, 1]
    );

    const filter = useTransform(
        scrollYProgress,
        [0.7, 0.95],
        ['brightness(1)', 'brightness(0.2)']
    );

    return (
        <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-1/2 h-full pointer-events-none z-0 overflow-hidden"
            style={{ opacity, scale, filter }}
        >
            {/* Top gradient overlay for blending */}
            <div
                className="absolute inset-x-0 top-0 h-48 z-10"
                style={{
                    background: 'linear-gradient(to bottom, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />

            {/* Bottom gradient overlay */}
            <div
                className="absolute inset-x-0 bottom-0 h-32 z-10"
                style={{
                    background: 'linear-gradient(to top, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />

            {/* Side gradients for smooth edges */}
            <div
                className="absolute inset-y-0 left-0 w-32 z-10"
                style={{
                    background: 'linear-gradient(to right, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-32 z-10"
                style={{
                    background: 'linear-gradient(to left, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />

            <video
                src="/6143460-hd_1920_1080_24fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Split services into two rows
    const topRow = services.slice(0, 2);
    const bottomRow = services.slice(2, 4);

    return (
        <section
            ref={sectionRef}
            className="py-32 px-6 lg:px-8 relative overflow-hidden"
            style={{ backgroundColor: 'rgb(9, 9, 11)' }} // Match hero end frame
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Abstract system image - positioned between card rows */}
            <AbstractSystemVideo scrollYProgress={scrollYProgress} />

            <div className="relative max-w-6xl mx-auto z-10">
                {/* Header */}
                <ScrollReveal animation="fadeUp" className="mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Systems We <GradientText>Build</GradientText>
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl">
                        We design, deploy, and maintain web systems built to last.
                    </p>
                </ScrollReveal>

                {/* Top Row Cards */}
                <StaggerList
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8"
                    staggerDelay={0.1}
                    animation="fadeUp"
                >
                    {topRow.map((service) => (
                        <TiltCard key={service.title} tiltAmount={5} scale={1.02}>
                            <Card className="h-full p-8 backdrop-blur-sm bg-zinc-900/80" hoverable>
                                <CardContent className="p-0">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 relative">
                                            <service.icon className="h-7 w-7 text-primary" />
                                            <PulsingDot className="absolute -top-1 -right-1" size="sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/40 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TiltCard>
                    ))}
                </StaggerList>

                {/* Bottom Row Cards */}
                <StaggerList
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                    staggerDelay={0.15}
                    animation="fadeUp"
                >
                    {bottomRow.map((service) => (
                        <TiltCard key={service.title} tiltAmount={5} scale={1.02}>
                            <Card className="h-full p-8 backdrop-blur-sm bg-zinc-900/80" hoverable>
                                <CardContent className="p-0">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 relative">
                                            <service.icon className="h-7 w-7 text-primary" />
                                            <PulsingDot className="absolute -top-1 -right-1" size="sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/40 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TiltCard>
                    ))}
                </StaggerList>
            </div>
        </section>
    );
}
