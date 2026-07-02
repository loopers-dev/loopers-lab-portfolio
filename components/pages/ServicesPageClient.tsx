'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Paintbrush,
    Code2,
    Cloud,
    Shield,
    Bot,
    BarChart3,
    BookOpen,
    Award,
    ExternalLink,
} from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal } from '@/components/animations';
import { TiltCard, ParallaxLayer, AmbiGlow } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/context/translations';
import type { ComponentType } from 'react';

/* ─── Service data ────────────────────────────────────────────────────────── */

const services = [
    {
        number: '01',
        icon: Paintbrush,
        title: 'Web Design & UX Systems',
        slogan: 'Interfaces planned for clarity, conversion, and real workflows.',
        content: 'We design in Figma before we build. UX research, wireframes, clickable prototypes, brand systems, and reusable design libraries.',
        image: '/service-page/service-1.jpg',
        accentColor: 'rgba(255, 68, 68, 0.5)',
        gradientFrom: '#ff4444',
        gradientTo: '#8b5cf6',
    },
    {
        number: '02',
        icon: Code2,
        title: 'Website Building & System Architecture',
        slogan: 'From marketing sites to portals, dashboards, and internal tools.',
        content: 'Custom websites and software systems with API contracts, database schema planning, architecture diagrams, and technical roadmaps.',
        image: '/service-page/service-2.jpg',
        accentColor: 'rgba(139, 92, 246, 0.5)',
        gradientFrom: '#8b5cf6',
        gradientTo: '#22d3ee',
    },
    {
        number: '03',
        icon: Cloud,
        title: 'Hosting, DevOps & Infrastructure',
        slogan: 'Deployment pipelines and cloud foundations that stay predictable.',
        content: 'VPS or cloud, Dockerized deployment, CI/CD pipelines, reverse proxy, SSL, automated backups, monitoring, and rollback planning.',
        image: '/service-page/service-3.jpg',
        accentColor: 'rgba(34, 211, 238, 0.5)',
        gradientFrom: '#22d3ee',
        gradientTo: '#38bdf8',
    },
    {
        number: '04',
        icon: Shield,
        title: 'Maintenance, Performance & Scalability',
        slogan: 'Long-term care for software that keeps changing after launch.',
        content: 'Performance tuning, Core Web Vitals, observability, security hardening, uptime checks, patching, and scale reviews.',
        image: '/service-page/service-4.jpg',
        accentColor: 'rgba(16, 185, 129, 0.5)',
        gradientFrom: '#10b981',
        gradientTo: '#22d3ee',
    },
    {
        number: '05',
        icon: Bot,
        title: 'AI Agents & Workflow Automation',
        slogan: 'Automate repetitive work without breaking the stack.',
        content: 'Support bots, report automation, smart dashboards, custom LLM workflows, and internal assistants connected to your real data.',
        image: '/service-page/service-5.jpg',
        accentColor: 'rgba(245, 158, 11, 0.5)',
        gradientFrom: '#f59e0b',
        gradientTo: '#fb923c',
    },
    {
        number: '06',
        icon: BarChart3,
        title: 'Data Analysis & Reporting',
        slogan: 'Dashboards and insights your team can actually use.',
        content: 'KPI dashboards, funnel analysis, heatmaps, reporting flows, and monthly insight reviews shaped for decision-making.',
        image: '/service-page/service-6.jpg',
        accentColor: 'rgba(168, 85, 247, 0.5)',
        gradientFrom: '#a855f7',
        gradientTo: '#ec4899',
    },
    {
        number: '07',
        icon: BookOpen,
        title: 'Content Operations & CMS Support',
        slogan: 'Keep content moving without manual bottlenecks.',
        content: 'Blog publishing workflows, product updates, landing page refreshes, structured content systems, and AI-assisted content pipelines.',
        image: '/service-page/service-7.jpg',
        accentColor: 'rgba(255, 68, 68, 0.4)',
        gradientFrom: '#ff4444',
        gradientTo: '#f59e0b',
    },
];

/* ─── ServiceCard ─────────────────────────────────────────────────────────── */

const keyMap: Record<string, string> = {
    '01': 'ux',
    '02': 'building',
    '03': 'hosting',
    '04': 'maintenance',
    '05': 'automation',
    '06': 'analytics',
    '07': 'cms',
};

function ServiceCard({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;
    const key = keyMap[service.number];
    const localizedItem = t.items[key as keyof typeof t.items];

    const Icon = service.icon;

    return (
        <section
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ zIndex: index + 10 }}
            id={`service-${index + 1}`}
        >
            {/* ── Full-bleed background image + dark vignette ── */}
            <div className="absolute inset-0 z-0">
                {service.image && (
                    <>
                        <Image
                            src={service.image}
                            alt={localizedItem?.title ?? service.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority={index === 0}
                        />
                        {/* Gradient overlay — dark vignette for readability */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(5,5,10,0.88) 0%, rgba(8,8,18,0.75) 50%, rgba(5,5,10,0.92) 100%)',
                            }}
                        />
                    </>
                )}
                {/* Subtle noise texture overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '128px 128px',
                    }}
                />
            </div>

            {/* ── 3D Card wrapper ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center h-full">
                <ScrollReveal animation="fadeUp" delay={0.05}>
                    <TiltCard
                        tiltAmount={8}
                        perspective={1200}
                        scale={1.01}
                        className="w-full max-w-[820px] mx-auto"
                    >
                        {/* Ambient glow that tracks the mouse */}
                        <AmbiGlow
                            color={service.gradientFrom}
                            size={600}
                            opacity={0.18}
                            className="-inset-8 rounded-[2.5rem]"
                        />

                        {/* ── Glass Card Shell ── */}
                        <div
                            className="relative rounded-[2rem] overflow-hidden"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(12,12,24,0.85) 0%, rgba(8,8,18,0.90) 100%)',
                                backdropFilter: 'blur(32px)',
                                WebkitBackdropFilter: 'blur(32px)',
                                boxShadow: `
                                    0 2px 0 0 rgba(255,255,255,0.06) inset,
                                    0 -1px 0 0 rgba(255,255,255,0.03) inset,
                                    0 40px 80px rgba(0,0,0,0.6),
                                    0 0 0 1px rgba(255,255,255,0.07)
                                `,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Gradient top edge glow */}
                            <div
                                className="absolute inset-x-0 top-0 h-[1px]"
                                style={{
                                    background: `linear-gradient(90deg, transparent 0%, ${service.gradientFrom}99 30%, ${service.gradientTo}99 70%, transparent 100%)`,
                                }}
                            />
                            {/* Gradient bottom edge glow */}
                            <div
                                className="absolute inset-x-0 bottom-0 h-[1px] opacity-30"
                                style={{
                                    background: `linear-gradient(90deg, transparent 0%, ${service.gradientTo}66 50%, transparent 100%)`,
                                }}
                            />

                            <div className="p-8 lg:p-12">
                                {/* ─ Top row: Number + Icon floating layer ─ */}
                                <div className="flex items-start justify-between mb-8 gap-4">
                                    {/* Number badge */}
                                    <ParallaxLayer depth={4} z={6}>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="text-sm font-mono font-bold tracking-[0.25em] uppercase"
                                                style={{
                                                    background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                }}
                                            >
                                                {service.number}
                                            </span>
                                            <div
                                                className="h-px w-12 rounded-full"
                                                style={{
                                                    background: `linear-gradient(90deg, ${service.gradientFrom}88, transparent)`,
                                                }}
                                            />
                                        </div>
                                    </ParallaxLayer>

                                    {/* Floating 3D Icon Orb — highest depth, moves most */}
                                    <ParallaxLayer depth={20} z={30}>
                                        <div
                                            className="relative flex items-center justify-center w-20 h-20 rounded-2xl"
                                            style={{
                                                background: `linear-gradient(135deg, ${service.gradientFrom}22 0%, ${service.gradientTo}22 100%)`,
                                                border: `1px solid ${service.gradientFrom}44`,
                                                boxShadow: `
                                                    0 0 0 1px ${service.gradientFrom}22,
                                                    0 8px 32px ${service.accentColor},
                                                    0 0 60px ${service.gradientFrom}33 inset
                                                `,
                                            }}
                                        >
                                            {/* Icon glow ring */}
                                            <div
                                                className="absolute inset-0 rounded-2xl"
                                                style={{
                                                    background: `radial-gradient(circle at 50% 40%, ${service.gradientFrom}33 0%, transparent 70%)`,
                                                }}
                                            />
                                            <Icon
                                                className="relative z-10 w-9 h-9"
                                                style={{ color: service.gradientFrom }}
                                            />
                                        </div>
                                    </ParallaxLayer>
                                </div>

                                {/* ─ Title + Slogan ─ */}
                                <ParallaxLayer depth={8} z={10}>
                                    <h2
                                        className="text-3xl md:text-4xl lg:text-[2.75rem] font-black tracking-tight mb-3 leading-[1.08]"
                                        style={{ color: 'rgba(250,250,250,0.96)' }}
                                    >
                                        {localizedItem?.title ?? service.title}
                                    </h2>
                                    <p
                                        className="text-base md:text-lg font-medium italic mb-0 leading-snug"
                                        style={{
                                            background: `linear-gradient(135deg, ${service.gradientFrom}cc, ${service.gradientTo}cc)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {localizedItem?.slogan ?? service.slogan}
                                    </p>
                                </ParallaxLayer>

                                {/* ─ Divider ─ */}
                                <ParallaxLayer depth={5} z={4}>
                                    <div
                                        className="my-7 h-px"
                                        style={{
                                            background: `linear-gradient(90deg, ${service.gradientFrom}44 0%, ${service.gradientTo}22 60%, transparent 100%)`,
                                        }}
                                    />
                                </ParallaxLayer>

                                {/* ─ Two-column body ─ */}
                                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end">
                                    <ParallaxLayer depth={6} z={8}>
                                        <p className="text-base md:text-[15px] leading-relaxed" style={{ color: 'rgba(250,250,250,0.6)' }}>
                                            {localizedItem?.description ?? service.content}
                                        </p>
                                    </ParallaxLayer>

                                    {/* CTA arrow link */}
                                    <ParallaxLayer depth={12} z={16}>
                                        <Link
                                            href="/contact"
                                            className="group flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-all duration-200"
                                            style={{ color: service.gradientFrom }}
                                        >
                                            <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all duration-200">
                                                Start a project
                                            </span>
                                            <motion.div
                                                className="flex items-center justify-center w-8 h-8 rounded-full border"
                                                style={{ borderColor: `${service.gradientFrom}55` }}
                                                whileHover={{ x: 3 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </Link>
                                    </ParallaxLayer>
                                </div>

                                {/* ─ Feature pills ─ */}
                                <ParallaxLayer depth={3} z={4} className="mt-8">
                                    <div className="flex flex-wrap gap-2">
                                        {getServiceTags(service.number).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase"
                                                style={{
                                                    background: `${service.gradientFrom}14`,
                                                    border: `1px solid ${service.gradientFrom}30`,
                                                    color: `${service.gradientFrom}cc`,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </ParallaxLayer>
                            </div>
                        </div>
                    </TiltCard>
                </ScrollReveal>
            </div>

            {/* ── Service index indicator (bottom-right corner) ── */}
            <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3 opacity-40">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: 'rgba(250,250,250,0.6)' }}>
                    {service.number} / 07
                </span>
                <div
                    className="w-8 h-[2px] rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${service.gradientFrom}, transparent)`,
                    }}
                />
            </div>
        </section>
    );
}

/* ─── Tag data ─────────────────────────────────────────────────────────────── */

function getServiceTags(num: string): string[] {
    const tags: Record<string, string[]> = {
        '01': ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
        '02': ['Next.js', 'React', 'API Design', 'Database'],
        '03': ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
        '04': ['Core Web Vitals', 'Security', 'Monitoring', 'SEO'],
        '05': ['LLM', 'Zapier', 'Make', 'OpenAI'],
        '06': ['Dashboards', 'Analytics', 'KPI', 'Funnels'],
        '07': ['CMS', 'SEO', 'AI Content', 'Publishing'],
    };
    return tags[num] ?? [];
}

/* ─── Logo Placeholder ─────────────────────────────────────────────────────── */

function LogoPlaceholder() {
    return (
        <div className="w-24 h-12 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
            <Award className="w-5 h-5 text-foreground/20" />
        </div>
    );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function ServicesPageClient() {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;

    return (
        <Layout>
            <div className="relative bg-background">

                {/* ══ HERO ══════════════════════════════════════════════════════ */}
                <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-8 overflow-hidden z-0">
                    <div className="absolute inset-0 glow-bg-red opacity-30" />
                    <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />

                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute left-[-20rem] top-[-10rem] h-[50rem] w-[50rem] rounded-full blur-[100px] pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary) 15%, transparent) 0%, transparent 70%)',
                        }}
                    />

                    <div className="relative z-10 max-w-6xl mx-auto text-center">
                        <ScrollReveal animation="fadeUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-mono uppercase tracking-widest text-foreground/70">
                                    {t.badge}
                                </span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={0.1}>
                            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-foreground tracking-[-0.04em] mb-8 leading-[0.95]">
                                {t.heroTitlePrefix} <br className="hidden md:block" />
                                <GradientText>{t.heroTitleGradient}</GradientText>.
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={0.2}>
                            <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-3xl mx-auto mb-12">
                                {t.heroSubtitle}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link href="#service-1">
                                    <GlowButton size="lg" rounded="full" className="px-8 py-4 text-lg">
                                        {t.heroButton}
                                    </GlowButton>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-foreground/70 hover:text-foreground transition-colors font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/80"
                                >
                                    {t.heroLink}
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-mono">Scroll</span>
                        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                    </motion.div>
                </section>

                {/* ══ STICKY SERVICE CARDS ════════════════════════════════════ */}
                <div className="relative w-full" id="service-1">
                    {services.map((service, index) => (
                        <ServiceCard key={service.number} service={service} index={index} />
                    ))}
                </div>

                {/* ══ CTA ══════════════════════════════════════════════════════ */}
                <section className="relative z-50 px-6 lg:px-8 py-32 bg-background border-t border-white/5 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 glow-bg-mixed opacity-40 pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center relative">
                        <ScrollReveal animation="scale">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-8 leading-tight">
                                {t.ctaTitlePrefix}{' '}
                                <GradientText>{t.ctaTitleGradient}</GradientText>?
                            </h2>
                            <Link href="/contact">
                                <GlowButton
                                    size="lg"
                                    rounded="full"
                                    className="inline-flex items-center gap-3 px-8 py-5 text-xl font-bold mx-auto transition-transform hover:scale-105"
                                >
                                    {t.ctaButton}
                                    <ArrowRight className="h-6 w-6" />
                                </GlowButton>
                            </Link>
                            <div className="mt-20">
                                <p className="text-xs text-foreground/30 uppercase tracking-[0.2em] font-mono mb-8">
                                    {t.systemsSupported}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4 opacity-70">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <LogoPlaceholder key={i} />
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
