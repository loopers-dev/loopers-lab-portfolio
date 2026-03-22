'use client';

import { memo, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

// ─────────────────────────────────────────────────────────────
// Electric / Lightning Loading Screen
// Premium neon-sign power-up effect with letter-by-letter flicker,
// electric glow pulses, and a cinematic split reveal.
// ─────────────────────────────────────────────────────────────

const BRAND_TEXT = 'LOOPERS STUDIO';

/** Animation timing (ms) driven by content-ready signal */
const TIMING = {
    flash: 3500,
    reveal: 4200,
    cleanup: 6000,
    // Hard fallbacks if content-ready never fires
    fallbackFlash: 4500,
    fallbackReveal: 5200,
    fallbackCleanup: 7000,
} as const;

const SPLIT_EASING = [0.65, 0, 0.35, 1];

// Responsive font – smaller on mobile, large on desktop
const FONT_SIZE = 'clamp(1.2rem, 7vw, 7rem)';

// ─── Flicker keyframes (shared across all letters) ──────────
const FLICKER_OPACITY = [0, 0.4, 0, 0.7, 0.2, 1, 0.8, 1];
const FLICKER_TIMES = [0, 0.1, 0.2, 0.35, 0.5, 0.7, 0.85, 1];
const FLICKER_SHADOWS = [
    '0 0 0px transparent',
    '0 0 8px color-mix(in srgb, var(--accent-primary) 60%, transparent)',
    '0 0 0px transparent',
    '0 0 15px color-mix(in srgb, var(--accent-primary) 80%, transparent)',
    '0 0 4px color-mix(in srgb, var(--accent-primary) 30%, transparent)',
    '0 0 30px color-mix(in srgb, var(--accent-primary) 90%, transparent), 0 0 60px color-mix(in srgb, var(--accent-primary) 40%, transparent)',
    '0 0 20px color-mix(in srgb, var(--accent-primary) 70%, transparent)',
    '0 0 40px color-mix(in srgb, var(--accent-primary) 90%, transparent), 0 0 80px color-mix(in srgb, var(--accent-primary) 30%, transparent), 0 0 120px color-mix(in srgb, var(--accent-primary) 15%, transparent)',
];
const FLICKER_X = [0, -4, 4, -2, 2, -10, 5, 0];
const FLICKER_Y = [0, 2, -2, 1, -1, 3, -2, 0];
const FLICKER_KEYFRAMES = { opacity: FLICKER_OPACITY, textShadow: FLICKER_SHADOWS, x: FLICKER_X, y: FLICKER_Y };

// ─── Deterministic particle data (avoids Math.random hydration issues) ──
const PARTICLE_COUNT = 12;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const seed = (i * 7 + 3) % 11;
    return {
        size: 2 + (seed / 11) * 3,
        top: 35 + ((i * 13 + 5) % 30),
        left: 10 + ((i * 17 + 7) % 80),
        yMid: -20 - ((seed * 4) % 40),
        yEnd: -30 - ((i * 3) % 30),
        xMid: ((i * 11 + 2) % 30) - 15,
        xEnd: ((i * 7 + 4) % 20) - 10,
        duration: 2 + (seed / 11) * 1.5,
        delay: 1.5 + ((i * 9 + 1) % 20) / 10,
    };
});

// ─── Components ─────────────────────────────────────────────

/** Individual letter that flickers on like a neon tube powering up. */
const FlickerLetter = memo(function FlickerLetter({
    char,
    index,
    total,
}: {
    char: string;
    index: number;
    total: number;
}) {
    const delay = (index / total) * 2.2;

    return (
        <motion.span
            style={{
                display: 'inline-block',
                color: 'var(--accent-primary, #ff4444)',
                WebkitTextStroke: '1px var(--accent-primary, #ff4444)',
                minWidth: char === ' ' ? '0.35em' : undefined,
            }}
            initial={{ opacity: 0 }}
            animate={FLICKER_KEYFRAMES}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut',
                times: FLICKER_TIMES,
            }}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    );
});

/** A single floating electric spark particle. */
const Particle = memo(function Particle({ data }: { data: (typeof PARTICLES)[number] }) {
    return (
        <motion.div
            style={{
                position: 'absolute',
                width: data.size,
                height: data.size,
                borderRadius: '50%',
                background: 'var(--accent-primary, #ff4444)',
                boxShadow: '0 0 6px color-mix(in srgb, var(--accent-primary) 90%, transparent), 0 0 12px color-mix(in srgb, var(--accent-primary) 40%, transparent)',
                top: `${data.top}%`,
                left: `${data.left}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
                opacity: [0, 1, 0.3, 1, 0],
                y: [0, data.yMid, -10, data.yEnd, -60],
                x: [0, data.xMid, data.xEnd],
            }}
            transition={{ duration: data.duration, delay: data.delay, ease: 'easeOut' }}
        />
    );
});

// ─── Main component ─────────────────────────────────────────

export default function SplitReveal({ children }: { children: React.ReactNode }) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const [showFlash, setShowFlash] = useState(false);
    const { isContentReady } = useLoading();
    const prefersReducedMotion = useReducedMotion();
    const letters = useMemo(() => BRAND_TEXT.split(''), []);

    // Orchestrate the reveal sequence once content is ready
    useEffect(() => {
        if (!isContentReady || prefersReducedMotion) return;
        const t1 = setTimeout(() => setShowFlash(true), TIMING.flash);
        const t2 = setTimeout(() => setIsRevealed(true), TIMING.reveal);
        const t3 = setTimeout(() => setShouldRender(false), TIMING.cleanup);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [isContentReady, prefersReducedMotion]);

    // Hard fallback so the site is never permanently hidden
    useEffect(() => {
        if (prefersReducedMotion) return;
        const t1 = setTimeout(() => setShowFlash(true), TIMING.fallbackFlash);
        const t2 = setTimeout(() => setIsRevealed(true), TIMING.fallbackReveal);
        const t3 = setTimeout(() => setShouldRender(false), TIMING.fallbackCleanup);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [prefersReducedMotion]);

    return (
        <>
            {/* Site content – hidden behind overlay until reveal */}
            <div style={{ visibility: prefersReducedMotion || isRevealed ? 'visible' : 'hidden' }}>
                {children}
            </div>

            <AnimatePresence>
                {shouldRender && !prefersReducedMotion && (
                    <div
                        className="fixed inset-0 z-[9999]"
                        style={{ pointerEvents: isRevealed ? 'none' : 'auto' }}
                        role="status"
                        aria-label="Loading Loopers Studio"
                    >
                        {/* ── Split panels ── */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1/2 bg-black"
                            initial={{ y: 0 }}
                            animate={{ y: isRevealed ? '-100%' : 0 }}
                            transition={{ duration: 1.2, ease: SPLIT_EASING }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"
                            initial={{ y: 0 }}
                            animate={{ y: isRevealed ? '100%' : 0 }}
                            transition={{ duration: 1.2, ease: SPLIT_EASING }}
                        />

                        {/* ── Warp Drive Grid Floor ── */}
                        <div className="absolute inset-x-0 bottom-0 h-[50vh] overflow-hidden pointer-events-none z-0" style={{ perspective: '800px' }}>
                            <motion.div
                                className="absolute inset-[-100%]"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(transparent 0px, color-mix(in srgb, var(--accent-primary) 80%, transparent) 1px, transparent 2px),
                                        linear-gradient(90deg, transparent 0px, color-mix(in srgb, var(--accent-primary) 30%, transparent) 1px, transparent 2px)
                                    `,
                                    backgroundSize: '100px 100px',
                                    transformOrigin: 'top center',
                                }}
                                initial={{ rotateX: 80, y: '0%', opacity: 0 }}
                                animate={{
                                    backgroundPositionY: isRevealed ? ['0px', '3000px'] : ['0px', '400px'],
                                    opacity: isRevealed ? 0 : [0, 0.8],
                                    scale: isRevealed ? 2 : 1,
                                }}
                                transition={{
                                    backgroundPositionY: { duration: isRevealed ? 0.6 : 3, ease: isRevealed ? 'easeIn' : 'linear', repeat: isRevealed ? 0 : Infinity },
                                    opacity: { duration: isRevealed ? 0.4 : 2 },
                                    scale: { duration: 0.6, ease: 'easeIn' }
                                }}
                            />
                        </div>

                        {/* ── Radial background glow ── */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none z-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.03, 0, 0.05, 0, 0.08, 0.04, 0.1] }}
                            transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
                            style={{
                                background:
                                    'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent-primary) 40%, transparent) 0%, transparent 70%)',
                            }}
                        />

                        {/* ── Cinematic Warp Drive Flash ── */}
                        <AnimatePresence>
                            {showFlash && (
                                <motion.div
                                    className="absolute inset-0 pointer-events-none z-[100]"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 3] }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    style={{
                                        background:
                                            'radial-gradient(circle at center, #ffffff 0%, color-mix(in srgb, var(--accent-primary) 100%, transparent) 15%, transparent 60%)',
                                        filter: 'blur(10px)',
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {/* ── Brand text ── */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center px-6 sm:px-4"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isRevealed ? 0 : 1 }}
                            transition={{ duration: 0.4, delay: isRevealed ? 0.2 : 0, ease: 'easeOut' }}
                        >
                            <div className="relative inline-block max-w-[95vw]">
                                {/* Ghost outline (sizing reference) */}
                                <h1
                                    className="font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] select-none whitespace-nowrap"
                                    style={{
                                        fontSize: FONT_SIZE,
                                        color: 'transparent',
                                        WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                                    }}
                                    aria-hidden="true"
                                >
                                    {BRAND_TEXT}
                                </h1>

                                {/* Flickering letters overlay */}
                                <h1
                                    className="font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] select-none absolute top-0 left-0 whitespace-nowrap"
                                    style={{ fontSize: FONT_SIZE }}
                                    aria-label={BRAND_TEXT}
                                >
                                    {letters.map((char, i) => (
                                        <FlickerLetter
                                            key={i}
                                            char={char}
                                            index={i}
                                            total={letters.length}
                                        />
                                    ))}
                                </h1>

                                {/* Laser Slicer */}
                                <motion.div
                                    className="absolute left-[-15vw] right-[-15vw] rounded-full pointer-events-none z-50"
                                    style={{
                                        top: '50%',
                                        marginTop: '-1px',
                                        height: '2px',
                                        background: '#fff',
                                        boxShadow:
                                            '0 0 10px #fff, 0 0 20px var(--accent-primary), 0 0 50px var(--accent-primary), 0 0 100px var(--accent-primary)',
                                        transformOrigin: 'center left',
                                    }}
                                    initial={{ scaleX: 0, opacity: 0, scaleY: 1 }}
                                    animate={{
                                        scaleX: isRevealed ? [1, 1.2] : [0, 1],
                                        opacity: isRevealed ? [1, 0] : [0, 1, 1],
                                        scaleY: isRevealed ? [1, 120, 0] : 1,
                                    }}
                                    transition={{
                                        scaleX: { duration: isRevealed ? 0.4 : 2.8, ease: isRevealed ? 'easeIn' : [0.25, 0.1, 0.25, 1], delay: isRevealed ? 0 : 0.3 },
                                        scaleY: { duration: isRevealed ? 0.6 : 0, ease: 'easeInOut' },
                                        opacity: { duration: 0.3, delay: isRevealed ? 0 : 0.3 },
                                    }}
                                />

                                {/* Pulsing halo */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent-primary) 15%, transparent) 0%, transparent 60%)',
                                        filter: 'blur(20px)',
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: [0, 0, 0, 0.6, 0.3, 0.8, 0.5, 1],
                                        scale: [0.8, 0.8, 0.8, 1.1, 1, 1.15, 1.05, 1.2],
                                    }}
                                    transition={{ duration: 3.5, ease: 'easeInOut' }}
                                />
                            </div>
                        </motion.div>

                        {/* ── Electric spark particles ── */}
                        {PARTICLES.map((p, i) => (
                            <Particle key={i} data={p} />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
