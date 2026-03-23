'use client';

import { useRef, type MouseEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, Database, ShieldCheck } from 'lucide-react';
import { GradientText } from '@/components/custom/GradientText';
import { GlowButton } from '@/components/ui/GlowButton';

const servicePills = [
    'Web Design & UX',
    'System Architecture',
    'Database Planning',
    'Workflow Automation',
    'Hosting & CI/CD',
    'AI Agents',
];

const capabilityPanels = [
    {
        title: 'Design to Delivery',
        description: 'Figma, frontend systems, backend logic, and deployment handled as one stack.',
    },
    {
        title: 'Ops that Scale',
        description: 'Monitoring, maintenance, analytics, and safer release workflows after launch.',
    },
    {
        title: 'Automation-Ready',
        description: 'Internal tools, AI assistants, and business workflows connected to real data.',
    },
];

export default function HomeHeroSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        section.style.setProperty('--pointer-x', `${x}px`);
        section.style.setProperty('--pointer-y', `${y}px`);
    };

    const handleMouseLeave = () => {
        const section = sectionRef.current;
        if (!section) return;

        section.style.setProperty('--pointer-x', '0px');
        section.style.setProperty('--pointer-y', '0px');
    };

    return (
        <section
            ref={sectionRef}
            id="home-hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden px-6 pb-20 pt-28 lg:px-8 lg:pt-32"
            style={{
                backgroundColor: 'var(--color-background)',
                ['--pointer-x' as string]: '0px',
                ['--pointer-y' as string]: '0px',
            }}
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-background" />
                <div className="grid-pattern absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_42%)]" />
                <div
                    className="absolute left-[-16rem] top-[-14rem] h-[42rem] w-[42rem] rounded-full blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-primary, #ff4444) 18%, transparent) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute right-[-14rem] top-4 h-[36rem] w-[36rem] rounded-full blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary, #8b5cf6) 15%, transparent) 0%, transparent 72%)',
                    }}
                />
                <div
                    className="absolute bottom-[-20rem] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-secondary, #ff6b6b) 14%, transparent) 0%, transparent 72%)',
                    }}
                />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center text-center">
                <div className="pointer-events-none absolute inset-0 hidden 2xl:block">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-[5%] top-[18%]"
                    >
                        <div
                            className="glass rounded-[1.35rem] border border-border px-5 py-4 font-mono text-[11px] leading-relaxed text-foreground/55 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                            style={{
                                transform:
                                    'translate3d(calc(var(--pointer-x, 0px) * -0.03), calc(var(--pointer-y, 0px) * -0.03), 0)',
                                filter: 'blur(0.5px)',
                            }}
                        >
                            <span className="text-primary">schema</span> {'->'} workflows
                            <br />
                            <span className="text-foreground/75">deploy</span> {'->'} monitor
                            <br />
                            <span className="text-foreground/40">{'// content ops included'}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-[6%] top-[20%]"
                    >
                        <div
                            className="glass w-[15rem] rounded-[1.5rem] border border-border px-5 py-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                            style={{
                                transform:
                                    'translate3d(calc(var(--pointer-x, 0px) * 0.04), calc(var(--pointer-y, 0px) * 0.04), 0)',
                            }}
                        >
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35">Support Ready</p>
                                    <p className="text-2xl font-black text-foreground">24/7</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-foreground/58">
                                Monitoring, maintenance, and deployment safety built into the workflow.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-[22%] left-[9%]"
                    >
                        <div
                            className="glass rounded-[1.5rem] border border-border px-5 py-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                            style={{
                                transform:
                                    'translate3d(calc(var(--pointer-x, 0px) * -0.045), calc(var(--pointer-y, 0px) * -0.045), 0)',
                            }}
                        >
                            <div className="mb-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.85)]" />
                                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/40">
                                    Workflow Automation
                                </span>
                            </div>
                            <div className="flex h-10 items-end gap-1">
                                <span className="w-2 rounded-sm bg-cyan-400/35" style={{ height: '100%' }} />
                                <span className="w-2 rounded-sm bg-cyan-400/55" style={{ height: '72%' }} />
                                <span className="w-2 rounded-sm bg-cyan-400/80" style={{ height: '56%' }} />
                                <span className="w-2 rounded-sm bg-cyan-300" style={{ height: '88%' }} />
                                <span className="w-2 rounded-sm bg-cyan-400/45" style={{ height: '44%' }} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-[21%] right-[9%]"
                    >
                        <div
                            className="glass w-[14rem] rounded-[1.5rem] border border-border px-5 py-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                            style={{
                                transform:
                                    'translate3d(calc(var(--pointer-x, 0px) * 0.03), calc(var(--pointer-y, 0px) * 0.03), 0)',
                            }}
                        >
                            <div className="mb-4 flex items-center gap-3 text-primary">
                                <Database className="h-4 w-4" />
                                <Code2 className="h-4 w-4 text-foreground/55" />
                                <BarChart3 className="h-4 w-4 text-foreground/55" />
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35">Systems Stack</p>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/58">
                                Databases, internal tools, AI workflows, and reporting connected in one delivery loop.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 max-w-3xl xl:max-w-4xl"
                >
                    <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-foreground/12 bg-foreground/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/60 shadow-[0_0_20px_rgba(255,255,255,0.06)] backdrop-blur-xl">
                        <span
                            className="h-2 w-2 rounded-full bg-primary"
                            style={{
                                boxShadow: '0 0 18px color-mix(in srgb, var(--accent-primary, #ff4444) 70%, transparent)',
                            }}
                        />
                        Software Support Studio
                    </div>

                    <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-[4.7rem] xl:text-[5.4rem] 2xl:text-[5.8rem]">
                        Design, build, and support
                        <GradientText className="mt-3 block">software that keeps moving.</GradientText>
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-foreground/58 md:text-2xl">
                        Web design, website engineering, database planning, workflow automation, hosting, AI agents,
                        analytics, and long-term maintenance handled as one connected stack.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <GlowButton href="/contact" size="lg" rounded="full" className="min-w-[13rem]">
                            Start a Project
                        </GlowButton>

                        <Link
                            href="/services"
                            className="glass inline-flex min-w-[13rem] items-center justify-center gap-2 rounded-full border border-foreground/12 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/72 transition-colors hover:text-foreground"
                        >
                            View Services
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {servicePills.map((pill) => (
                            <span
                                key={pill}
                                className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/48 backdrop-blur-sm"
                            >
                                {pill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mt-16 w-full max-w-5xl"
                >
                    <div className="glass rounded-[2rem] border border-border p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                        <div className="grid gap-3 md:grid-cols-3">
                            {capabilityPanels.map((panel) => (
                                <div
                                    key={panel.title}
                                    className="rounded-[1.4rem] border border-foreground/8 bg-foreground/[0.03] px-5 py-5 text-left"
                                >
                                    <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35">{panel.title}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-foreground/58">{panel.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.42 }}
                    className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
                >
                    <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/30">Scroll</span>
                    <div className="mt-3 h-14 w-px bg-gradient-to-b from-foreground/35 to-transparent" />
                </motion.div>
            </div>

            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                style={{
                    background: 'linear-gradient(to bottom, transparent 0%, var(--color-background) 100%)',
                }}
            />
        </section>
    );
}
