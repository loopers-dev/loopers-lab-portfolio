'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import {
    motion,
    AnimatePresence,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
    type MotionValue,
} from 'framer-motion';
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
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/context/translations';

/* ─────────────────────────────────────────────────────────────────────────────
   Deck constants
───────────────────────────────────────────────────────────────────────────── */

const PEEK_Y          = 18;    // px each depth level shifts card downward (peek at bottom)
const SCALE_PER_DEPTH = 0.024; // scale compression per depth level
const OPAC_PER_DEPTH  = 0.09;  // opacity reduction per depth level
const MIN_OPAC        = 0.20;  // floor opacity (deeply buried cards)
const ENTRY_LEAD      = 0.85;  // segments before land-point where entry animation begins

const clamp = (v: number, lo: number, hi: number) =>
    Math.min(Math.max(v, lo), hi);

/* ─────────────────────────────────────────────────────────────────────────────
   Service data
───────────────────────────────────────────────────────────────────────────── */

const services = [
    { number: '01', icon: Paintbrush, image: '/service-page/service-1.jpg', from: '#ff4444', to: '#8b5cf6' },
    { number: '02', icon: Code2,      image: '/service-page/service-2.jpg', from: '#8b5cf6', to: '#22d3ee' },
    { number: '03', icon: Cloud,      image: '/service-page/service-3.jpg', from: '#22d3ee', to: '#38bdf8' },
    { number: '04', icon: Shield,     image: '/service-page/service-4.jpg', from: '#10b981', to: '#22d3ee' },
    { number: '05', icon: Bot,        image: '/service-page/service-5.jpg', from: '#f59e0b', to: '#fb923c' },
    { number: '06', icon: BarChart3,  image: '/service-page/service-6.jpg', from: '#a855f7', to: '#ec4899' },
    { number: '07', icon: BookOpen,   image: '/service-page/service-7.jpg', from: '#ff4444', to: '#f59e0b' },
] as const;
type ServiceDef = (typeof services)[number];

type ServicesPageT = (typeof translations)['en']['servicesPage'];

const keyMap: Record<string, string> = {
    '01': 'ux', '02': 'building', '03': 'hosting', '04': 'maintenance',
    '05': 'automation', '06': 'analytics', '07': 'cms',
};
const tagMap: Record<string, string[]> = {
    '01': ['Figma', 'UX Research', 'Prototyping'],
    '02': ['Next.js', 'React', 'API Design'],
    '03': ['AWS', 'Docker', 'CI/CD'],
    '04': ['Core Web Vitals', 'Security', 'Monitoring'],
    '05': ['LLM', 'Zapier', 'OpenAI'],
    '06': ['Dashboards', 'Analytics', 'KPI'],
    '07': ['CMS', 'SEO', 'AI Content'],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Accent glow — enhanced per-service background atmosphere
───────────────────────────────────────────────────────────────────────────── */

function AccentGlow({ sv }: { sv: MotionValue<number> }) {
    const [active, setActive] = useState(0);
    useMotionValueEvent(sv, 'change', (p) =>
        setActive(Math.round(p * (services.length - 1)))
    );
    return (
        <div aria-hidden className="absolute inset-0 pointer-events-none">
            {services.map((s, i) => (
                <div
                    key={s.number}
                    className="absolute inset-0"
                    style={{ opacity: i === active ? 1 : 0, transition: 'opacity 0.65s ease' }}
                >
                    {/* Primary center glow — more visible than before */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 80% 60% at 50% 52%, ${s.from}2e 0%, transparent 68%)`,
                    }} />
                    {/* Secondary bottom-left orb for color depth */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 55% 45% at 18% 78%, ${s.to}18 0%, transparent 65%)`,
                    }} />
                    {/* Top-right counter-orb */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 40% 35% at 88% 20%, ${s.from}12 0%, transparent 60%)`,
                    }} />
                </div>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Floating ambient orbs — slow-drifting color blobs in the corners
───────────────────────────────────────────────────────────────────────────── */

function FloatingOrbs({ sv }: { sv: MotionValue<number> }) {
    const [active, setActive] = useState(0);
    const { mode } = useTheme();
    useMotionValueEvent(sv, 'change', (p) =>
        setActive(Math.round(p * (services.length - 1)))
    );
    const s = services[active];
    // In light mode use slightly stronger orbs so they're visible on light bg
    const orbAlpha = mode === 'light' ? '22' : '0d';
    const orbAlpha2 = mode === 'light' ? '1c' : '0b';
    return (
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
                className="absolute -top-32 -right-32 rounded-full"
                style={{
                    width: '38rem',
                    height: '38rem',
                    background: `radial-gradient(circle, ${s.from}${orbAlpha} 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    animation: 'orb-drift-a 22s ease-in-out infinite',
                    transition: 'background 0.8s ease',
                }}
            />
            <div
                className="absolute -bottom-24 -left-24 rounded-full"
                style={{
                    width: '30rem',
                    height: '30rem',
                    background: `radial-gradient(circle, ${s.to}${orbAlpha2} 0%, transparent 70%)`,
                    filter: 'blur(70px)',
                    animation: 'orb-drift-b 28s ease-in-out infinite',
                    transition: 'background 0.8s ease',
                }}
            />
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Watermark title — huge ghosted typography behind the cards
───────────────────────────────────────────────────────────────────────────── */

function WatermarkTitle({ sv }: { sv: MotionValue<number> }) {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;
    const [active, setActive] = useState(0);
    useMotionValueEvent(sv, 'change', (p) =>
        setActive(Math.round(p * (services.length - 1)))
    );
    const s = services[active];
    const item = t.items[keyMap[s.number] as keyof ServicesPageT['items']];
    // Shorten to first two words max for watermark
    const words = (item?.title ?? '').split(' ').slice(0, 2).join(' ');
    return (
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
            <AnimatePresence mode="wait">
                <motion.span
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center font-black uppercase leading-none whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(5rem, 13vw, 14rem)',
                        letterSpacing: '0.12em',
                        color: 'transparent',
                        WebkitTextStroke: '1px var(--deck-watermark-stroke)',
                        textShadow: `0 0 120px ${s.from}18`,
                        userSelect: 'none',
                    }}
                >
                    {words}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Section top bar — replaces the old ServiceLabel with a full-width header
───────────────────────────────────────────────────────────────────────────── */

function SectionTopBar({ sv }: { sv: MotionValue<number> }) {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;
    const [active, setActive] = useState(0);
    useMotionValueEvent(sv, 'change', (p) =>
        setActive(Math.round(p * (services.length - 1)))
    );
    const s = services[active];
    const item = t.items[keyMap[s.number] as keyof ServicesPageT['items']];

    // Progress bar: 0..1 across 7 services
    const progress = (active / (services.length - 1)) * 100;

    return (
        <div className="absolute top-0 inset-x-0 z-50 pointer-events-none px-8 md:px-12" style={{ height: '64px' }}>
            <div className="h-full flex items-center justify-between max-w-[1400px] mx-auto">

                {/* Left: Section label */}
                <div className="flex items-center gap-3">
                    <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: s.from }}
                    />
                    <span
                        className="text-[9px] font-mono tracking-[0.35em] uppercase"
                        style={{ color: 'var(--deck-text-muted)' }}
                    >
                        Capabilities
                    </span>
                </div>

                {/* Center: Active service title */}
                <AnimatePresence mode="wait">
                    <motion.span
                        key={active}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="text-[11px] font-semibold tracking-wide hidden sm:block"
                        style={{
                            background: `linear-gradient(135deg, ${s.from}, ${s.to})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {item?.title ?? ''}
                    </motion.span>
                </AnimatePresence>

                {/* Right: Counter + progress bar */}
                <div className="flex flex-col items-end gap-1.5">
                    <span
                        className="text-[10px] font-mono tracking-[0.28em] uppercase"
                        style={{ color: `${s.from}cc` }}
                    >
                        {s.number}<span style={{ color: 'var(--deck-text-muted)' }}>&nbsp;/&nbsp;07</span>
                    </span>
                    {/* Thin progress bar */}
                    <div className="w-16 h-px rounded-full overflow-hidden" style={{ background: 'var(--deck-divider-base)' }}>
                        <div
                            className="h-full rounded-full transition-all duration-500 ease-out"
                            style={{
                                width: `${progress}%`,
                                background: `linear-gradient(90deg, ${s.from}, ${s.to})`,
                                boxShadow: `0 0 6px ${s.from}88`,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom divider line */}
            <div
                className="absolute bottom-0 inset-x-8 md:inset-x-12 h-px"
                style={{
                    background: `linear-gradient(90deg, transparent, ${s.from}22, ${s.to}22, transparent)`,
                    transition: 'background 0.65s ease',
                }}
            />
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Section left panel — vertical label + accent line (desktop only)
───────────────────────────────────────────────────────────────────────────── */

function SectionLeftPanel({ sv }: { sv: MotionValue<number> }) {
    const [active, setActive] = useState(0);
    useMotionValueEvent(sv, 'change', (p) =>
        setActive(Math.round(p * (services.length - 1)))
    );
    const s = services[active];
    return (
        <div
            aria-hidden
            className="absolute left-6 xl:left-10 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center gap-5 pointer-events-none z-40"
        >
            {/* Vertical accent line top */}
            <div
                className="w-px rounded-full transition-all duration-700"
                style={{
                    height: '80px',
                    background: `linear-gradient(to bottom, transparent, ${s.from}55)`,
                }}
            />
            {/* Rotated label */}
            <span
                className="text-[9px] font-mono tracking-[0.4em] uppercase whitespace-nowrap"
                style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    color: 'var(--deck-text-dimmer)',
                    letterSpacing: '0.38em',
                }}
            >
                Our Services
            </span>
            {/* Vertical accent line bottom */}
            <div
                className="w-px rounded-full transition-all duration-700"
                style={{
                    height: '80px',
                    background: `linear-gradient(to bottom, ${s.from}55, transparent)`,
                }}
            />
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Section bottom bar — dot nav + slogan + scroll hint
───────────────────────────────────────────────────────────────────────────── */

function SectionBottomBar({ sv }: { sv: MotionValue<number> }) {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;
    const [active, setActive] = useState(0);
    useMotionValueEvent(sv, 'change', (p) =>
        setActive(Math.round(p * (services.length - 1)))
    );
    const s = services[active];
    const item = t.items[keyMap[s.number] as keyof ServicesPageT['items']];

    return (
        <div
            className="absolute bottom-0 inset-x-0 z-50 pointer-events-none px-8 md:px-12"
            style={{ height: '68px' }}
        >
            {/* Top divider line */}
            <div
                className="absolute top-0 inset-x-8 md:inset-x-12 h-px"
                style={{
                    background: `linear-gradient(90deg, transparent, ${s.from}22, ${s.to}22, transparent)`,
                    transition: 'background 0.65s ease',
                }}
            />

            <div className="h-full flex items-center justify-between max-w-[1400px] mx-auto">

                {/* Left: Active service slogan */}
                <div className="hidden md:block" style={{ maxWidth: '40%' }}>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={active}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="text-[10.5px] italic leading-snug"
                            style={{ color: 'var(--deck-text-dim)' }}
                        >
                            {item?.slogan ?? ''}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Center: Dot nav (unchanged behavior) */}
                <div
                    className="flex items-center gap-2"
                    role="tablist"
                    aria-label="Service navigation"
                >
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            role="tab"
                            aria-selected={i === active}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === active ? '22px' : '5px',
                                height: '5px',
                                background: i === active ? svc.from : 'var(--deck-text-dimmer)',
                                boxShadow: i === active ? `0 0 8px ${svc.from}99` : 'none',
                            }}
                        />
                    ))}
                </div>

                {/* Right: Scroll hint */}
                <div className="flex items-center gap-2" style={{ color: 'var(--deck-text-dimmer)' }}>
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase hidden sm:block">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ color: `${s.from}88` }}
                    >
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                            <path d="M5 1L5 13M5 13L2 10M5 13L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LayeredCard
   ─ 6 absolute layers along the Z axis inside a TiltCard
   ─ Y / scale / opacity driven by the shared deck scroll progress
───────────────────────────────────────────────────────────────────────────── */

function LayeredCard({
    service,
    index: i,
    n,
    sv,
    t,
}: {
    service: ServiceDef;
    index: number;
    n: number;
    sv: MotionValue<number>;
    t: ServicesPageT;
}) {
    const key   = keyMap[service.number];
    const item  = t.items[key as keyof ServicesPageT['items']];
    const Icon  = service.icon;
    const tags  = tagMap[service.number] ?? [];

    // Land point — fraction of [0,1] where this card settles
    const landAt = n === 1 ? 0 : i / (n - 1);

    /* ── Y (entry slide + depression) ── */
    const y = useTransform(sv, (p: number) => {
        // Entry: card slides up from 820px below its resting position
        const segSize  = n > 1 ? 1 / (n - 1) : 1;
        const startAt  = Math.max(0, landAt - ENTRY_LEAD * segSize);
        const range    = Math.max(0.001, landAt - startAt);
        const entryProg = i === 0 ? 1 : clamp((p - startAt) / range, 0, 1);
        const entryY    = (1 - entryProg) * 820;

        // Depression: smooth depth as subsequent cards land on top
        const depthRaw = Math.max(0, (p - landAt) * (n - 1));
        const depth    = Math.min(depthRaw, n - 1 - i);
        const deprY    = depth * PEEK_Y;

        return entryY + deprY;
    });

    /* ── Scale (compression in the stack) ── */
    const scale = useTransform(sv, (p: number) => {
        const depthRaw   = Math.max(0, (p - landAt) * (n - 1));
        const depth      = Math.min(depthRaw, n - 1 - i);
        const baseScale  = 1 - depth * SCALE_PER_DEPTH;

        if (i === 0) return baseScale;

        const segSize  = n > 1 ? 1 / (n - 1) : 1;
        const startAt  = Math.max(0, landAt - ENTRY_LEAD * segSize);
        const range    = Math.max(0.001, landAt - startAt);
        const entryProg = clamp((p - startAt) / range, 0, 1);
        // enters at 0.92 scale, lands at baseScale
        return 0.92 + entryProg * (baseScale - 0.92);
    });

    /* ── Opacity (fades in on entry, dims as buried deeper) ── */
    const opacity = useTransform(sv, (p: number) => {
        const depthRaw      = Math.max(0, (p - landAt) * (n - 1));
        const depth         = Math.min(depthRaw, n - 1 - i);
        const landedOpacity = Math.max(MIN_OPAC, 1 - depth * OPAC_PER_DEPTH);

        if (i === 0) return landedOpacity;

        const segSize  = n > 1 ? 1 / (n - 1) : 1;
        const startAt  = Math.max(0, landAt - ENTRY_LEAD * segSize);
        const range    = Math.max(0.001, landAt - startAt);
        const entryProg = clamp((p - startAt) / range, 0, 1);
        return entryProg * landedOpacity;
    });

    const springY     = useSpring(y,     { stiffness: 175, damping: 27, mass: 0.9 });
    const springScale = useSpring(scale, { stiffness: 175, damping: 27, mass: 0.9 });

    return (
        <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ y: springY, scale: springScale, opacity, zIndex: i }}
        >
            <TiltCard
                tiltAmount={6}
                perspective={1500}
                scale={1.008}
                className="w-full h-full"
            >
                {/* Mouse-tracking ambient spotlight */}
                <AmbiGlow
                    color={service.from}
                    size={750}
                    opacity={0.09}
                    className="-inset-20 rounded-[4rem]"
                />

                {/* ════ 6-LAYER CARD ════════════════════════════════════════ */}
                <div
                    className="relative w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* ── LAYER 1  z=−30  Shadow ghost ── */}
                    <ParallaxLayer depth={1} z={-30} className="absolute inset-0">
                        <div
                            aria-hidden
                            className="absolute -inset-4 rounded-[2.5rem]"
                            style={{
                                background: 'rgba(0,0,0,0.82)',
                                filter: 'blur(28px)',
                            }}
                        />
                    </ParallaxLayer>

                    {/* ── LAYER 2  z=0  Service image ── */}
                    <ParallaxLayer depth={2} z={0} className="absolute inset-0">
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                            <Image
                                src={service.image}
                                alt={item?.title ?? ''}
                                fill
                                className="object-cover select-none"
                                draggable={false}
                                sizes="(max-width: 768px) 100vw, 920px"
                                priority={i < 2}
                            />
                            {/* Directional fade: opaque left → image visible right */}
                            <div
                                aria-hidden
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(108deg, rgba(4,4,10,0.99) 0%, rgba(4,4,10,0.93) 34%, rgba(4,4,10,0.56) 61%, rgba(4,4,10,0.08) 100%)',
                                }}
                            />
                        </div>
                    </ParallaxLayer>

                    {/* ── LAYER 3  z=14  Glass shell ── */}
                    <ParallaxLayer depth={4} z={14} className="absolute inset-0">
                        <div
                            aria-hidden
                            className="absolute inset-0 rounded-[2rem]"
                            style={{
                                background:
                                    'linear-gradient(160deg, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.004) 100%)',
                                boxShadow:
                                    '0 2px 0 0 rgba(255,255,255,0.07) inset, 0 0 0 1px rgba(255,255,255,0.07)',
                            }}
                        />
                        {/* Gradient top edge */}
                        <div
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-px rounded-t-[2rem]"
                            style={{
                                background: `linear-gradient(90deg, transparent 0%, ${service.from}88 22%, ${service.to}88 78%, transparent 100%)`,
                            }}
                        />
                        {/* Left accent stripe */}
                        <div
                            aria-hidden
                            className="absolute top-10 bottom-10 left-8 w-[2px] rounded-full"
                            style={{
                                background: `linear-gradient(180deg, ${service.from}, ${service.to})`,
                                boxShadow: `0 0 18px ${service.from}88`,
                            }}
                        />
                    </ParallaxLayer>

                    {/* ── LAYER 4  z=24  Number + tags ── */}
                    <ParallaxLayer depth={7} z={24} className="absolute inset-0">
                        {/* Service number */}
                        <div className="absolute top-9 left-[3.5rem]">
                            <span
                                className="text-[10px] font-mono font-bold tracking-[0.35em] uppercase"
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
                        {/* Skill tags */}
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

                    {/* ── LAYER 5  z=38  Typography ── */}
                    <ParallaxLayer depth={11} z={38} className="absolute inset-0">
                        <div className="absolute inset-0 flex flex-col justify-center pl-[3.5rem] pr-8 md:pr-[38%] py-14">
                            <h2
                                className="text-[1.6rem] sm:text-[1.9rem] md:text-[2.25rem] font-black tracking-tight leading-[1.07] mb-2.5"
                                style={{ color: 'rgba(250,250,250,0.97)' }}
                            >
                                {item?.title ?? `Service ${service.number}`}
                            </h2>
                            <p
                                className="text-[13px] sm:text-[13.5px] font-medium italic leading-snug mb-5"
                                style={{
                                    background: `linear-gradient(135deg, ${service.from}cc, ${service.to}cc)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {item?.slogan ?? ''}
                            </p>
                            <p
                                className="text-[12.5px] sm:text-[13px] leading-[1.72]"
                                style={{ color: 'rgba(250,250,250,0.50)' }}
                            >
                                {item?.description ?? ''}
                            </p>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 mt-5 text-[12px] font-semibold w-fit"
                                style={{ color: service.from }}
                            >
                                <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all duration-200">
                                    Start a project
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </ParallaxLayer>

                    {/* ── LAYER 6  z=62  Floating icon orb ── */}
                    <ParallaxLayer depth={22} z={62} className="absolute inset-0">
                        <div className="absolute top-8 right-8 flex flex-col items-end gap-3">
                            <div
                                className="relative flex items-center justify-center w-[68px] h-[68px] rounded-2xl"
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
                                <div
                                    aria-hidden
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: `radial-gradient(circle at 38% 28%, ${service.from}55 0%, transparent 68%)`,
                                    }}
                                />
                                <Icon
                                    className="relative z-10 w-8 h-8"
                                    style={{ color: service.from }}
                                />
                            </div>
                        </div>
                    </ParallaxLayer>
                </div>
            </TiltCard>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CardDeck
   ─ Single tall scroll container (n × 100vh)
   ─ Sticky inner stage (100vh) — all cards render here simultaneously
   ─ One shared useScroll drives all card transforms
───────────────────────────────────────────────────────────────────────────── */

function CardDeck() {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;
    const n = services.length;

    const deckRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: deckRef,
        offset: ['start start', 'end end'],
    });

    return (
        /* ── Scroll space: 7 × 100vh ── */
        <div ref={deckRef} style={{ height: `${n * 100}vh` }}>
            {/* Keyframe styles for floating orbs */}
            <style>{`
                @keyframes orb-drift-a {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%       { transform: translate(-30px, 20px) scale(1.06); }
                    66%       { transform: translate(20px, -15px) scale(0.94); }
                }
                @keyframes orb-drift-b {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    40%       { transform: translate(25px, -30px) scale(1.08); }
                    70%       { transform: translate(-18px, 22px) scale(0.96); }
                }
            `}</style>

            {/* ── Sticky stage ── */}
            <div
                className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center"
                style={{ background: 'var(--deck-bg)' }}
            >
                {/* ── Background layers (bottom → top) ── */}

                {/* Layer 1: Enhanced per-service ambient glow */}
                <AccentGlow sv={scrollYProgress} />

                {/* Layer 2: Slow-drifting corner orbs */}
                <FloatingOrbs sv={scrollYProgress} />

                {/* Layer 3: Grid texture */}
                <div
                    aria-hidden
                    className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"
                    style={{ mixBlendMode: 'var(--deck-grid-blend)' as any }}
                />

                {/* Layer 4: Ghosted watermark title */}
                <WatermarkTitle sv={scrollYProgress} />

                {/* ── UI chrome ── */}

                {/* Top bar */}
                <SectionTopBar sv={scrollYProgress} />

                {/* Left vertical panel (desktop) */}
                <SectionLeftPanel sv={scrollYProgress} />

                {/* ── Card stack (unchanged) ── */}
                <div
                    className="relative z-10"
                    style={{
                        width: 'min(920px, 92vw)',
                        height: 'clamp(400px, 56vh, 540px)',
                    }}
                >
                    {services.map((s, i) => (
                        <LayeredCard
                            key={s.number}
                            service={s}
                            index={i}
                            n={n}
                            sv={scrollYProgress}
                            t={t}
                        />
                    ))}
                </div>

                {/* Bottom bar */}
                <SectionBottomBar sv={scrollYProgress} />
            </div>
        </div>
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

                {/* ══ HERO ════════════════════════════════════════════════════ */}
                <section className="relative min-h-[88vh] flex items-center pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
                    <div className="absolute inset-0 glow-bg-red opacity-25 pointer-events-none" />
                    <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay pointer-events-none" />
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
                                <Link href="#service-deck">
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

                {/* ══ CARD DECK ════════════════════════════════════════════════ */}
                <div id="service-deck">
                    <CardDeck />
                </div>

                {/* ══ CTA ══════════════════════════════════════════════════════ */}
                <section
                    className="relative z-50 px-6 lg:px-8 py-32 border-t border-foreground/5"
                    style={{
                        background: 'var(--deck-bg)',
                        boxShadow: '0 -30px 60px rgba(0,0,0,0.4)',
                    }}
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
