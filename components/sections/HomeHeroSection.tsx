'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/custom/GradientText';
import { GlowButton } from '@/components/ui/GlowButton';

/* ─── Particle system ─── */
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

function createParticles(width: number, height: number, count: number): Particle[] {
    return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.5 + 0.15,
    }));
}

/* ─── Framer Motion variants ─── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

/* ─── Component ─── */
export default function HomeHeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const rafRef = useRef<number>(0);

    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        ctx?.scale(dpr, dpr);
        // Reduce particles on mobile
        const count = rect.width < 768 ? 25 : 50;
        particlesRef.current = createParticles(rect.width, rect.height, count);
    }, []);

    useEffect(() => {
        initCanvas();

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const animate = () => {
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            ctx.clearRect(0, 0, w, h);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            for (const p of particles) {
                // Apply subtle mouse repulsion
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        const force = (180 - dist) / 180 * 0.6;
                        p.vx += (dx / dist) * force * 0.08;
                        p.vy += (dy / dist) * force * 0.08;
                    }
                }

                // Damping
                p.vx *= 0.995;
                p.vy *= 0.995;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();
            }

            // Draw connections between nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        const handleResize = () => initCanvas();
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [initCanvas]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current.active = false;
    };

    /* ─── Headline words ─── */
    const headlineWords = ['Design,', 'build,', 'and', 'support'];

    return (
        <section
            id="home-hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 lg:px-8"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            {/* ── Background layers ── */}
            <div className="pointer-events-none absolute inset-0">
                {/* Base */}
                <div className="absolute inset-0 bg-background" />

                {/* Floating gradient orbs */}
                <div
                    className="hero-orb absolute left-[-12%] top-[-8%] h-[38rem] w-[38rem] rounded-full opacity-50 blur-[100px]"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-primary, #ff4444) 30%, transparent) 0%, transparent 70%)',
                        animation: 'hero-float 22s ease-in-out infinite',
                    }}
                />
                <div
                    className="hero-orb absolute bottom-[-10%] right-[-8%] h-[32rem] w-[32rem] rounded-full opacity-40 blur-[100px]"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary, #8b5cf6) 28%, transparent) 0%, transparent 70%)',
                        animation: 'hero-float 26s ease-in-out infinite reverse',
                    }}
                />
                <div
                    className="hero-orb absolute left-[40%] top-[60%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full opacity-30 blur-[100px]"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-secondary, #ff6b6b) 22%, transparent) 0%, transparent 70%)',
                        animation: 'hero-float 18s ease-in-out 4s infinite',
                    }}
                />

                {/* Accent sweep line */}
                <div
                    className="absolute left-0 top-1/2 h-px w-full opacity-20"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent 0%, var(--accent-primary) 50%, transparent 100%)',
                        animation: 'hero-line-sweep 8s ease-in-out infinite',
                    }}
                />

                {/* Particle canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 h-full w-full"
                    style={{ opacity: 0.8 }}
                />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-foreground/[0.03] px-5 py-2.5 backdrop-blur-xl"
                >
                    <span
                        className="h-2 w-2 rounded-full bg-primary"
                        style={{
                            boxShadow:
                                '0 0 18px color-mix(in srgb, var(--accent-primary, #ff4444) 70%, transparent)',
                            animation: 'glow-pulse 2s ease-in-out infinite',
                        }}
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/55">
                        Software Support Studio
                    </span>
                </motion.div>

                {/* Headline — word by word stagger */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap items-baseline justify-center gap-x-[0.35em] text-5xl font-black leading-[1.0] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
                >
                    {headlineWords.map((word) => (
                        <motion.span key={word} variants={wordVariants} className="inline-block">
                            {word}
                        </motion.span>
                    ))}
                    <motion.span variants={wordVariants} className="inline-block w-full mt-2">
                        <GradientText>software that keeps moving.</GradientText>
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    custom={0.7}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/50 md:text-xl"
                >
                    From design to deployment — one connected stack for web, automation, and AI.
                </motion.p>

                {/* CTA */}
                <motion.div
                    custom={0.9}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-12"
                >
                    <GlowButton href="/contact" size="lg" rounded="full">
                        Start a Project
                    </GlowButton>
                </motion.div>
            </div>

            {/* ── Bottom fade ── */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
                style={{
                    background:
                        'linear-gradient(to bottom, transparent 0%, var(--color-background) 100%)',
                }}
            />
        </section>
    );
}
