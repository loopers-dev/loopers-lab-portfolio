'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Paintbrush,
    Code2,
    Cloud,
    Shield,
    Bot,
    BarChart3,
    BookOpen,
} from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal } from '@/components/animations';
import { TiltCard, ParallaxLayer, AmbiGlow } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/context/translations';

/* ─────────────────────────────────────────────────────────────────────────────
   Service definitions
───────────────────────────────────────────────────────────────────────────── */

const services = [
    {
        number: '01',
        icon: Paintbrush,
        image: '/service-page/service-1.jpg',
        from: '#ff4444',
        to:   '#8b5cf6',
    },
    {
        number: '02',
        icon: Code2,
        image: '/service-page/service-2.jpg',
        from: '#8b5cf6',
        to:   '#22d3ee',
    },
    {
        number: '03',
        icon: Cloud,
        image: '/service-page/service-3.jpg',
        from: '#22d3ee',
        to:   '#38bdf8',
    },
    {
        number: '04',
        icon: Shield,
        image: '/service-page/service-4.jpg',
        from: '#10b981',
        to:   '#22d3ee',
    },
    {
        number: '05',
        icon: Bot,
        image: '/service-page/service-5.jpg',
        from: '#f59e0b',
        to:   '#fb923c',
    },
    {
        number: '06',
        icon: BarChart3,
        image: '/service-page/service-6.jpg',
        from: '#a855f7',
        to:   '#ec4899',
    },
    {
        number: '07',
        icon: BookOpen,
        image: '/service-page/service-7.jpg',
        from: '#ff4444',
        to:   '#f59e0b',
    },
] as const;

type ServiceDef = (typeof services)[number];

/* translation key → services[].number */
const keyMap: Record<string, string> = {
    '01': 'ux',
    '02': 'building',
    '03': 'hosting',
    '04': 'maintenance',
    '05': 'automation',
    '06': 'analytics',
    '07': 'cms',
};

/* tags per service */
const tagMap: Record<string, string[]> = {
    '01': ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
    '02': ['Next.js', 'React', 'API Design', 'Database'],
    '03': ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    '04': ['Core Web Vitals', 'Security', 'Monitoring'],
    '05': ['LLM', 'Zapier', 'Make', 'OpenAI'],
    '06': ['Dashboards', 'Analytics', 'KPI'],
    '07': ['CMS', 'SEO', 'AI Content'],
};

/* per-section bg — very dark, slightly different hue per service */
const sectionBg = [
    '#05050D',
    '#060610',
    '#050A10',
    '#05090C',
    '#080600',
    '#080510',
    '#09050A',
];

/* ─────────────────────────────────────────────────────────────────────────────
   LayeredServiceCard
   ─ 6 absolute layers stacked along the Z axis inside a TiltCard
   ─ Entry animation driven by scroll (useScroll / useTransform)
   ─ Section is position:sticky so cards accumulate in a physical deck
───────────────────────────────────────────────────────────────────────────── */

function LayeredServiceCard({
    service,
    index,
}: {
    service: ServiceDef;
    index: number;
}) {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;
    const key = keyMap[service.number];
    const item = t.items[key as keyof typeof t.items];
    const Icon = service.icon;
    const tags = tagMap[service.number] ?? [];

    /* ── Scroll-driven entry animation ── */
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // track from: section-start enters bottom of viewport  →  section-start hits viewport top
        offset: ['start 0.95', 'start 0.05'],
    });

    // First card is already visible; skip entry for it
    const isFirst = index === 0;

    const rawY     = useTransform(scrollYProgress, [0, 1], [isFirst ? 0 : 80, 0]);
    const rawScale = useTransform(scrollYProgress, [0, 1], [isFirst ? 1 : 0.93, 1]);
    const rawOpacity = useTransform(scrollYProgress, [0, 0.12], [isFirst ? 1 : 0, 1]);

    const cardY     = useSpring(rawY,     { stiffness: 190, damping: 28, mass: 0.8 });
    const cardScale = useSpring(rawScale, { stiffness: 190, damping: 28, mass: 0.8 });

    return (
        <section
            ref={sectionRef}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{
                /* Later cards sit above earlier ones in the stack */
                zIndex: index + 10,
                background: sectionBg[index % sectionBg.length],
            }}
            id={`service-${index + 1}`}
            aria-label={item?.title ?? `Service ${service.number}`}
        >
            {/* ── Per-section accent glow (background atmosphere) ── */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse 65% 55% at 50% 50%,
                        ${service.from}0f 0%, transparent 70%)`,
                }}
            />

            {/* ── Scroll-animated entry wrapper ── */}
            <motion.div
                style={{ y: cardY, scale: cardScale, opacity: rawOpacity }}
                className="relative w-full flex items-center justify-center px-5 md:px-10 lg:px-16"
            >
                <TiltCard
                    tiltAmount={6}
                    perspective={1500}
                    scale={1.008}
                    className="w-full max-w-[980px]"
                >
                    {/* Mouse-tracking ambient spotlight behind card */}
                    <AmbiGlow
                        color={service.from}
                        size={800}
                        opacity={0.09}
                        className="-inset-20 rounded-[4rem]"
                    />

                    {/* ════════════════════════════════════════════
                        THE CARD — 6 stacked layers on the Z-axis
                        All layers are position:absolute; inset-0
                        Parent has transformStyle:preserve-3d
                    ════════════════════════════════════════════ */}
                    <div
                        className="relative w-full"
                        style={{
                            /* Responsive height */
                            height: 'clamp(420px, 54vh, 560px)',
                            transformStyle: 'preserve-3d',
                        }}
                    >

                        {/* ── LAYER 1  z = -28px  ─────────────────────────────
                            Depth shadow ghost
                            Creates the physical "thickness" illusion
                        ─────────────────────────────────────────────────────── */}
                        <ParallaxLayer depth={1} z={-28} className="absolute inset-0">
                            <div
                                aria-hidden
                                className="absolute -inset-3 rounded-[2.5rem]"
                                style={{
                                    background: 'rgba(0,0,0,0.8)',
                                    filter: 'blur(28px)',
                                }}
                            />
                        </ParallaxLayer>

                        {/* ── LAYER 2  z = 0px  ───────────────────────────────
                            Service image
                            Heavy gradient overlay: opaque left → transparent right
                            Right 38% is the "image window"
                        ─────────────────────────────────────────────────────── */}
                        <ParallaxLayer depth={2} z={0} className="absolute inset-0">
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={item?.title ?? `Service ${service.number}`}
                                    fill
                                    className="object-cover select-none"
                                    sizes="(max-width: 768px) 100vw, 980px"
                                    priority={index < 2}
                                    draggable={false}
                                />
                                {/* Directional fade: left = readable, right = image peeks through */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `
                                            linear-gradient(108deg,
                                                rgba(5,5,14,0.99)  0%,
                                                rgba(5,5,14,0.92)  35%,
                                                rgba(5,5,14,0.58)  60%,
                                                rgba(5,5,14,0.10)  100%)
                                        `,
                                    }}
                                />
                            </div>
                        </ParallaxLayer>

                        {/* ── LAYER 3  z = 14px  ──────────────────────────────
                            Glass substrate + card border
                            Gives the card its glass-panel identity
                        ─────────────────────────────────────────────────────── */}
                        <ParallaxLayer depth={4} z={14} className="absolute inset-0">
                            {/* Full-card glass shell */}
                            <div
                                className="absolute inset-0 rounded-[2rem]"
                                style={{
                                    background:
                                        'linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.004) 100%)',
                                    boxShadow:
                                        '0 2px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.07)',
                                }}
                            />
                            {/* Top gradient edge highlight */}
                            <div
                                aria-hidden
                                className="absolute inset-x-0 top-0 h-px rounded-t-[2rem]"
                                style={{
                                    background: `linear-gradient(90deg,
                                        transparent 0%,
                                        ${service.from}99 22%,
                                        ${service.to}99   78%,
                                        transparent 100%)`,
                                }}
                            />
                            {/* Left accent stripe */}
                            <div
                                aria-hidden
                                className="absolute top-10 bottom-10 left-8 w-[2px] rounded-full"
                                style={{
                                    background: `linear-gradient(180deg, ${service.from}, ${service.to})`,
                                    boxShadow: `0 0 18px ${service.from}99`,
                                }}
                            />
                        </ParallaxLayer>

                        {/* ── LAYER 4  z = 24px  ──────────────────────────────
                            Service index + skill tags
                            Sits just above the glass substrate
                        ─────────────────────────────────────────────────────── */}
                        <ParallaxLayer depth={7} z={24} className="absolute inset-0">
                            {/* Number */}
                            <div className="absolute top-9 left-14">
                                <span
                                    className="text-[10px] font-mono font-bold tracking-[0.35em] uppercase leading-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.from}, ${service.to})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Service {service.number}
                                </span>
                            </div>

                            {/* Tags — bottom-left */}
                            <div className="absolute bottom-8 left-8 flex flex-wrap gap-1.5">
                                {tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-[3px] rounded-full text-[9px] font-mono tracking-wider uppercase"
                                        style={{
                                            background: `${service.from}14`,
                                            border: `1px solid ${service.from}2e`,
                                            color: `${service.from}bb`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </ParallaxLayer>

                        {/* ── LAYER 5  z = 38px  ──────────────────────────────
                            Typography: title, slogan, description, CTA link
                            Restricted to left ~60% so image shows on right
                        ─────────────────────────────────────────────────────── */}
                        <ParallaxLayer depth={11} z={38} className="absolute inset-0">
                            <div className="absolute inset-0 flex flex-col justify-center pl-14 pr-8 md:pr-[38%] py-16">
                                {/* Title */}
                                <h2
                                    className="text-[1.6rem] sm:text-[1.9rem] md:text-[2.3rem] font-black tracking-tight leading-[1.07] mb-2.5"
                                    style={{ color: 'rgba(250,250,250,0.97)' }}
                                >
                                    {item?.title ?? `Service ${service.number}`}
                                </h2>

                                {/* Slogan */}
                                <p
                                    className="text-[13px] sm:text-sm font-medium italic leading-snug mb-5"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.from}cc, ${service.to}cc)`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {item?.slogan ?? ''}
                                </p>

                                {/* Description */}
                                <p
                                    className="text-[12.5px] sm:text-[13px] leading-[1.7]"
                                    style={{ color: 'rgba(250,250,250,0.50)' }}
                                >
                                    {item?.description ?? ''}
                                </p>

                                {/* CTA link */}
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 mt-5 text-[12px] font-semibold w-fit transition-all"
                                    style={{ color: service.from }}
                                >
                                    <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all duration-200">
                                        Start a project
                                    </span>
                                    <ArrowRight
                                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </ParallaxLayer>

                        {/* ── LAYER 6  z = 62px  ──────────────────────────────
                            Floating icon orb
                            Highest z — most pronounced parallax shift on mouse
                            Visually breaks the card surface boundary on hover
                        ─────────────────────────────────────────────────────── */}
                        <ParallaxLayer depth={24} z={62} className="absolute inset-0">
                            <div className="absolute top-8 right-8 flex flex-col items-end gap-3">
                                {/* Icon orb */}
                                <div
                                    className="relative flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.from}28, ${service.to}28)`,
                                        border: `1px solid ${service.from}55`,
                                        boxShadow: `
                                            0 0 0 1px ${service.from}1e,
                                            0 10px 40px ${service.from}66,
                                            0 0 60px ${service.from}1e inset,
                                            0 2px 0 0 rgba(255,255,255,0.10) inset
                                        `,
                                    }}
                                >
                                    {/* Inner radial highlight */}
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 rounded-2xl"
                                        style={{
                                            background: `radial-gradient(circle at 38% 28%, ${service.from}55 0%, transparent 68%)`,
                                        }}
                                    />
                                    <Icon
                                        className="relative z-10 w-7 h-7 sm:w-8 sm:h-8"
                                        style={{ color: service.from }}
                                    />
                                </div>

                                {/* Position indicator */}
                                <span
                                    className="text-[9px] font-mono tracking-[0.22em] uppercase"
                                    style={{ color: 'rgba(255,255,255,0.20)' }}
                                >
                                    {service.number} / 07
                                </span>
                            </div>
                        </ParallaxLayer>

                    </div>{/* end 6-layer card */}
                </TiltCard>
            </motion.div>

            {/* ── Scroll progress bar (thin line at bottom of viewport) ── */}
            <motion.div
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] origin-left"
                style={{
                    background: `linear-gradient(90deg, ${service.from}, ${service.to})`,
                    scaleX: scrollYProgress,
                    boxShadow: `0 0 8px ${service.from}88`,
                }}
            />
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ServicesPageClient() {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;

    return (
        <Layout>
            <div className="relative bg-background">

                {/* ═══════════════════════════════════════════════════════════
                    HERO
                ═══════════════════════════════════════════════════════════ */}
                <section className="relative min-h-[88vh] flex items-center pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
                    <div className="absolute inset-0 glow-bg-red opacity-25 pointer-events-none" />
                    <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay pointer-events-none" />

                    {/* Floating orb */}
                    <motion.div
                        aria-hidden
                        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.12, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -left-60 -top-40 h-[52rem] w-[52rem] rounded-full blur-[110px] pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary) 14%, transparent) 0%, transparent 70%)',
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
                                {t.heroTitlePrefix}
                                <br className="hidden md:block" />
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

                    {/* Scroll cue */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/35 font-mono">
                            Scroll
                        </span>
                        <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />
                    </motion.div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                    STACKING CARD DECK
                    Each section is position:sticky / top:0 / z escalating.
                    New cards slide up from below and settle on top of the deck.
                ═══════════════════════════════════════════════════════════ */}
                <div className="relative">
                    {services.map((service, i) => (
                        <LayeredServiceCard key={service.number} service={service} index={i} />
                    ))}
                </div>

                {/* ═══════════════════════════════════════════════════════════
                    CTA
                ═══════════════════════════════════════════════════════════ */}
                <section
                    className="relative z-50 px-6 lg:px-8 py-32 border-t border-white/5"
                    style={{ background: '#04040A', boxShadow: '0 -30px 60px rgba(0,0,0,0.8)' }}
                >
                    <div className="absolute inset-0 glow-bg-mixed opacity-35 pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center relative">
                        <ScrollReveal animation="scale">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-10 leading-tight">
                                {t.ctaTitlePrefix}{' '}
                                <GradientText>{t.ctaTitleGradient}</GradientText>?
                            </h2>
                            <Link href="/contact">
                                <GlowButton
                                    size="lg"
                                    rounded="full"
                                    className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold mx-auto"
                                >
                                    {t.ctaButton}
                                    <ArrowRight className="h-6 w-6" />
                                </GlowButton>
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
