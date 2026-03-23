'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from '@/components/animations';
import { GlowButton } from '@/components/ui/GlowButton';
import { cn } from '@/lib/utils';
import { Search, Layout, Code2, ShieldCheck, ArrowRight, Clock, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Pattern URL from MokN
const PATTERN_URL = 'https://cdn.prod.website-files.com/68946a7f9dd4e558382abd0f/68c966b68d544c039ddd83b3_pattern-feature.webp';
const PATTERN_TRANSPARENT_URL = 'https://cdn.prod.website-files.com/68946a7f9dd4e558382abd0f/6898282c446beba2a87e1b40_pattern-transparent.webp';

// Feature steps data
const steps = [
    {
        number: '01',
        title: 'Audit & Scope',
        description:
            'We audit the product, workflow, and constraints first so the scope, risks, and technical priorities are clear before build work starts.',
        icon: Search,
    },
    {
        number: '02',
        title: 'Design the System',
        description: 'UX direction, database shape, API boundaries, and automation flows are mapped before build work scales.',
        icon: Layout,
    },
    {
        number: '03',
        title: 'Build & Integrate',
        description: 'Web apps, internal tools, integrations, and deployment workflows are delivered as one connected stack.',
        icon: Code2,
    },
    {
        number: '04',
        title: 'Support & Improve',
        description:
            'After launch we stay involved with maintenance, monitoring, performance tuning, analytics, and content support.',
        icon: ShieldCheck,
    },
];

/**
 * MokN Feature Card Component
 * Structure: .padding-1 > .home_feature_light + .border-mask + .home_feature_item
 */
const FeatureCard = ({
    step,
    className,
    side,
}: {
    step: (typeof steps)[0];
    className?: string;
    side: 'left' | 'right';
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const light = lightRef.current;

        if (!card || !light) return;

        // MokN animation: light moves from top to bottom of the card.
        gsap.set(light, {
            x: 0,
            y: 0,
            opacity: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        tl.fromTo(
            light,
            {
                y: '-100%',
                opacity: 0,
            },
            {
                y: '100%',
                opacity: 1,
                ease: 'none',
            }
        );

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={cn('relative overflow-hidden w-full md:w-[640px]', className)}
            style={{ padding: '1.5px' }}
        >
            <div
                ref={lightRef}
                className="absolute pointer-events-none will-change-transform"
                style={{
                    width: '600px',
                    height: '400px',
                    left: side === 'left' ? '80%' : '20%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -2,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 100% 60% at center, var(--accent-primary) 50%, transparent 100%)',
                        filter: 'blur(60px)',
                        opacity: 1,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 80% 50% at center, var(--accent-primary) 90%, transparent 100%)',
                        filter: 'blur(40px)',
                        opacity: 1,
                    }}
                />
                <div
                    className="absolute"
                    style={{
                        width: '200px',
                        height: '100px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background:
                            'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, var(--accent-primary) 40%, transparent 70%)',
                        filter: 'blur(20px)',
                        opacity: 0.8,
                    }}
                />
            </div>

            <div
                className="absolute pointer-events-none"
                style={{
                    top: '3.2px',
                    left: '3.2px',
                    right: '3.2px',
                    bottom: '3.2px',
                    background: 'linear-gradient(rgba(var(--color-background-rgb), 0.7), rgba(var(--color-background-rgb), 0.7))',
                    zIndex: -1,
                }}
            />

            <div
                className="relative flex flex-col justify-between overflow-hidden"
                style={{
                    backdropFilter: 'blur(32px)',
                    WebkitBackdropFilter: 'blur(32px)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    backgroundImage: `url("${PATTERN_URL}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '112px 48px',
                    minHeight: '354px',
                    zIndex: 5,
                }}
            >
                <div className="relative flex flex-col gap-6 mb-6">
                    <div className="relative w-12 h-14 flex items-center justify-center">
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: '24px',
                                height: '24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                filter: 'blur(9.6px)',
                            }}
                        />
                        <step.icon
                            className="relative z-10 text-foreground drop-shadow-md"
                            style={{ width: '28.8px', height: '28.8px' }}
                        />
                    </div>

                    <h3
                        className="font-bold text-foreground tracking-tight"
                        style={{
                            fontSize: '32px',
                            lineHeight: '1.1',
                        }}
                    >
                        {step.title}
                    </h3>
                </div>

                <p
                    className="font-medium"
                    style={{
                        fontSize: '18px',
                        lineHeight: '1.4',
                        color: 'var(--color-muted-foreground)',
                    }}
                >
                    {step.description}
                </p>
            </div>
        </div>
    );
};

/**
 * Support block with corner dots and pattern background
 */
const ImplementBlock = () => {
    const blockRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const block = blockRef.current;
        const light = lightRef.current;

        if (!block || !light) return;

        gsap.set(light, { y: 0, opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: block,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        tl.fromTo(light, { y: '-100%', opacity: 0 }, { y: '100%', opacity: 1, ease: 'none' });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <div ref={blockRef} className="relative overflow-hidden w-full" style={{ padding: '1.25px' }}>
            <div
                ref={lightRef}
                className="absolute pointer-events-none will-change-transform"
                style={{
                    width: '100%',
                    height: '400px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -2,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 100% 80% at center, var(--accent-primary) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                        opacity: 0.4,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 80% 60% at center, var(--accent-primary) 0%, transparent 50%)',
                        filter: 'blur(50px)',
                        opacity: 0.6,
                    }}
                />
                <div
                    className="absolute"
                    style={{
                        width: '60%',
                        height: '120px',
                        left: '20%',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background:
                            'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, var(--accent-primary) 40%, transparent 70%)',
                        filter: 'blur(30px)',
                        opacity: 0.8,
                    }}
                />
            </div>

            <div
                className="absolute pointer-events-none"
                style={{
                    top: '3.2px',
                    left: '3.2px',
                    right: '3.2px',
                    bottom: '3.2px',
                    background: 'linear-gradient(rgba(var(--color-background-rgb), 0.7), rgba(var(--color-background-rgb), 0.7))',
                    zIndex: -1,
                }}
            />

            <CornerDot position="top-left" />
            <CornerDot position="top-right" />
            <CornerDot position="bottom-left" />
            <CornerDot position="bottom-right" />

            <div
                className="relative flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
                style={{
                    backdropFilter: 'blur(32px)',
                    WebkitBackdropFilter: 'blur(32px)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    backgroundImage: `url("${PATTERN_TRANSPARENT_URL}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '64px 48px',
                    zIndex: 5,
                }}
            >
                <div className="flex flex-col gap-4 max-w-xl">
                    <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-foreground" />
                        <span className="text-foreground font-semibold" style={{ fontSize: '14px', letterSpacing: '0.1em' }}>
                            ONGOING SUPPORT
                        </span>
                    </div>

                    <h3
                        className="font-bold text-foreground tracking-tight"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            lineHeight: '1.1',
                        }}
                    >
                        Launch once.{' '}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                            }}
                        >
                            Improve continuously.
                        </span>
                    </h3>

                    <p
                        className="font-medium"
                        style={{
                            fontSize: '18px',
                            lineHeight: '1.5',
                            color: 'var(--color-muted-foreground)',
                        }}
                    >
                        We stay involved with maintenance, monitoring, backups, deployment safety, content updates, and
                        performance reviews so the stack keeps moving after release.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <StatItem icon={Zap} value="24/7" label="Monitoring" />
                    <StatItem icon={Shield} value="CI/CD" label="Safer Deploys" />
                </div>

                <Link href="/contact">
                    <GlowButton size="md" rounded="md" className="inline-flex items-center gap-2">
                        Discuss Support
                        <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </GlowButton>
                </Link>
            </div>
        </div>
    );
};

/**
 * Stat Item for support block
 */
const StatItem = ({ icon: Icon, value, label }: { icon: typeof Zap; value: string; label: string }) => (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg" style={{ background: 'rgba(var(--color-foreground-rgb), 0.05)' }}>
        <Icon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
        <span className="font-bold text-foreground" style={{ fontSize: '24px' }}>
            {value}
        </span>
        <span className="text-muted-foreground" style={{ fontSize: '14px' }}>
            {label}
        </span>
    </div>
);

/**
 * Corner Dot - MokN's .corner_dot element with SVG glow
 */
const CornerDot = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
    const positionClasses = {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
    };

    return (
        <div className={cn('absolute w-4 h-4 z-20', positionClasses[position])}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <circle cx="8" cy="8" r="3" fill="white" />
                <circle cx="8" cy="8" r="6" fill="white" fillOpacity="0.2" />
            </svg>
        </div>
    );
};

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const pathLightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        const container = containerRef.current;
        const pathLight = pathLightRef.current;

        if (!path || !container || !pathLight) return;

        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.set(pathLight, {
            scale: 0.3,
            opacity: 0,
            x: 75,
            y: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 40%',
                end: 'bottom 5%',
                scrub: 1.5,
            },
        });

        tl.to(
            pathLight,
            {
                scale: 1,
                opacity: 1,
                duration: 0.05,
                ease: 'power2.in',
            },
            0
        );

        tl.to(
            pathLight,
            {
                opacity: 1,
                scale: 1.2,
                duration: 0.9,
                ease: 'none',
            },
            0.05
        );

        tl.to(
            pathLight,
            {
                opacity: 0,
                scale: 0.8,
                duration: 0.05,
                ease: 'power2.out',
            },
            0.95
        );

        tl.to(
            path,
            {
                strokeDashoffset: 0,
                ease: 'none',
                duration: 1,
                onUpdate() {
                    const currentOffset = gsap.getProperty(path, 'strokeDashoffset') as number;
                    const revealedLength = length - currentOffset;
                    const point = path.getPointAtLength(revealedLength);
                    gsap.set(pathLight, {
                        x: point.x,
                        y: point.y,
                    });
                },
            },
            0
        );

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <section id="section-features" className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at top, rgba(39, 39, 42, 0.4), var(--color-background), var(--color-background))',
                }}
            />

            <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-32">
                <ScrollReveal animation="fadeUp" className="mb-32 text-center relative z-10">
                    <h2 className="font-black text-foreground tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                        How We{' '}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                                filter: 'drop-shadow(0 0 20px rgba(var(--accent-primary-rgb), 0.3))',
                            }}
                        >
                            Work
                        </span>
                    </h2>
                </ScrollReveal>

                <div ref={containerRef} className="relative w-full">
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[150px] overflow-visible pointer-events-none z-0">
                        <svg
                            className="overflow-visible w-full"
                            style={{ height: '2800px' }}
                            preserveAspectRatio="none"
                            viewBox="0 0 150 2800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="paint0_linear_active" x1="75.5" y1="0" x2="75.5" y2="2800" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0" />
                                    <stop offset="18%" stopColor="var(--accent-primary)" />
                                </linearGradient>
                                <linearGradient id="paint0_linear_bg" x1="75" y1="0" x2="75" y2="2800" gradientUnits="userSpaceOnUse">
                                    <stop offset="5%" stopColor="#343B3D" stopOpacity="0" />
                                    <stop offset="25%" stopColor="#343B3D" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M75.4781 0V429.095C76.9962 446.599 79.172 471.868 92.7505 507.113C168.473 703.656 172.531 780.674 75.4781 1030.73C-26.4278 1293.29 -21.1904 1360.8 75.4781 1595.85C169.678 1824.91 171.516 1940.93 85.6294 2162.98C78.4118 2188.8 72.4161 2220.99 75.4781 2250V2800"
                                stroke="url(#paint0_linear_bg)"
                                strokeWidth="1"
                            />

                            <path
                                ref={pathRef}
                                id="scroll-path"
                                d="M75.9813 0V429.095C77.5097 446.599 79.7002 471.868 93.3704 507.113C169.604 703.656 173.69 780.674 75.9813 1030.73C-26.6131 1293.29 -21.3403 1360.8 75.9813 1595.85C170.818 1824.91 172.668 1940.93 86.2012 2162.98C78.9349 2188.8 72.8987 2220.99 75.9813 2250V2800"
                                stroke="url(#paint0_linear_active)"
                                strokeWidth="1"
                                style={{ willChange: 'stroke-dashoffset' }}
                            />
                        </svg>

                        <div
                            ref={pathLightRef}
                            className="absolute top-0 left-0 pointer-events-none will-change-transform"
                            style={{
                                width: '120px',
                                height: '120px',
                                marginLeft: '-60px',
                                marginTop: '-60px',
                                zIndex: 20,
                            }}
                        >
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 60%)',
                                    filter: 'blur(60px)',
                                    transform: 'scale(3)',
                                    opacity: 0.4,
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                                    filter: 'blur(30px)',
                                    transform: 'scale(2)',
                                    opacity: 0.6,
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, var(--accent-primary) 30%, transparent 60%)',
                                    filter: 'blur(15px)',
                                    transform: 'scale(1.2)',
                                    opacity: 0.8,
                                }}
                            />
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto" style={{ gap: '0 96px' }}>
                        <div className="flex flex-col" style={{ gap: '192px', paddingTop: '0' }}>
                            <div className="relative flex justify-end">
                                <div
                                    className="hidden md:block absolute top-1/2 -right-12 lg:-right-24 h-[2px]"
                                    style={{
                                        width: '96px',
                                        background: 'linear-gradient(to right, transparent, #343B3D)',
                                    }}
                                />
                                <FeatureCard step={steps[0]} side="left" />
                            </div>

                            <div className="relative flex justify-end">
                                <div
                                    className="hidden md:block absolute top-1/2 -right-12 lg:-right-24 h-[2px]"
                                    style={{
                                        width: '96px',
                                        background: 'linear-gradient(to right, transparent, #343B3D)',
                                    }}
                                />
                                <FeatureCard step={steps[2]} side="left" />
                            </div>
                        </div>

                        <div className="flex flex-col" style={{ gap: '192px', paddingTop: '546px' }}>
                            <div className="relative flex justify-start">
                                <div
                                    className="hidden md:block absolute top-1/2 -left-12 lg:-left-24 h-[2px]"
                                    style={{
                                        width: '96px',
                                        background: 'linear-gradient(to left, transparent, #343B3D)',
                                    }}
                                />
                                <FeatureCard step={steps[1]} side="right" />
                            </div>

                            <div className="relative flex justify-start">
                                <div
                                    className="hidden md:block absolute top-1/2 -left-12 lg:-left-24 h-[2px]"
                                    style={{
                                        width: '96px',
                                        background: 'linear-gradient(to left, transparent, #343B3D)',
                                    }}
                                />
                                <FeatureCard step={steps[3]} side="right" />
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-32 max-w-[1400px] mx-auto">
                        <ImplementBlock />
                    </div>
                </div>
            </div>
        </section>
    );
}
