'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation, type Variants } from 'framer-motion';

// ─── animation helpers ────────────────────────────────────────────────────────

const drawPath = (delay: number, duration = 1.0): Variants => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay, duration, ease: [0.4, 0, 0.2, 1] },
            opacity: { delay, duration: 0.01 },
        },
    },
});

const fadeIn = (delay: number, duration = 0.55): Variants => ({
    hidden: { opacity: 0, y: 6 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration, ease: 'easeOut' },
    },
});

// shared stroke props
const sk = {
    fill: 'none',
    stroke: '#D6CCBA',
    strokeWidth: 2.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};
const skRed  = { ...sk, stroke: '#FF4444' };
const skFaint = { ...sk, stroke: '#D6CCBA', strokeWidth: 1.4, opacity: 0.3 };
const skDash  = { ...skFaint, strokeDasharray: '5 5' as string };

// ─── reusable sketch pieces ───────────────────────────────────────────────────

/** Stick figure — head + spine + arms + legs */
function Person({
    cx, cy, d, flip = false, red = false,
}: { cx: number; cy: number; d: number; flip?: boolean; red?: boolean }) {
    const s  = red ? skRed : sk;
    const sc = flip ? -1 : 1;
    return (
        <g transform={`translate(${cx},${cy}) scale(${sc},1)`}>
            <motion.circle cx={0} cy={-60} r={15} {...s} variants={drawPath(d, 0.45)} />
            <motion.line x1={0} y1={-45} x2={0} y2={0} {...s} variants={drawPath(d + 0.15, 0.38)} />
            <motion.line x1={0} y1={-33} x2={-20} y2={-16} {...s} variants={drawPath(d + 0.28, 0.32)} />
            <motion.line x1={0} y1={-33} x2={20} y2={-16} {...s} variants={drawPath(d + 0.32, 0.32)} />
            <motion.line x1={0} y1={0} x2={-14} y2={28} {...s} variants={drawPath(d + 0.42, 0.32)} />
            <motion.line x1={0} y1={0} x2={14} y2={28} {...s} variants={drawPath(d + 0.46, 0.32)} />
        </g>
    );
}

/** Laptop icon at (cx, cy) */
function Laptop({ cx, cy, d }: { cx: number; cy: number; d: number }) {
    return (
        <g transform={`translate(${cx},${cy})`}>
            <motion.rect x={-18} y={-11} width={36} height={22} rx={2} {...sk} variants={drawPath(d, 0.45)} />
            <motion.line x1={-22} y1={11} x2={22} y2={11} {...sk} variants={drawPath(d + 0.28, 0.35)} />
            <motion.rect x={-13} y={-7} width={26} height={14} rx={1} {...skFaint} variants={drawPath(d + 0.32, 0.35)} />
        </g>
    );
}

/** Small code-bracket icon <> for Dev 2 */
function CodeBracket({ cx, cy, d }: { cx: number; cy: number; d: number }) {
    return (
        <g transform={`translate(${cx},${cy})`}>
            <motion.path d="M-10,-8 L-18,0 L-10,8" {...sk} strokeWidth={2} variants={drawPath(d, 0.4)} />
            <motion.path d="M10,-8 L18,0 L10,8" {...sk} strokeWidth={2} variants={drawPath(d + 0.12, 0.4)} />
            <motion.line x1={-4} y1={10} x2={4} y2={-10} {...skFaint} strokeWidth={1.8} variants={drawPath(d + 0.24, 0.35)} />
        </g>
    );
}

/** Board / clipboard for PM */
function Clipboard({ cx, cy, d }: { cx: number; cy: number; d: number }) {
    return (
        <g transform={`translate(${cx},${cy})`}>
            <motion.rect x={-13} y={-16} width={26} height={32} rx={2} {...sk} variants={drawPath(d, 0.45)} />
            <motion.rect x={-7} y={-18} width={14} height={6} rx={2} {...sk} strokeWidth={2} variants={drawPath(d + 0.2, 0.3)} />
            {[-6, -1, 4].map((oy, i) => (
                <motion.line key={i} x1={-8} y1={oy} x2={8} y2={oy} {...skFaint} strokeWidth={1.5}
                    variants={drawPath(d + 0.3 + i * 0.08, 0.28)} />
            ))}
        </g>
    );
}

/** Handshake line between two positions */
function Handshake({ x1, y1, x2, y2, d }: { x1:number; y1:number; x2:number; y2:number; d:number }) {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    return (
        <>
            <motion.line x1={x1} y1={y1} x2={mx} y2={my} {...sk} strokeWidth={2} variants={drawPath(d, 0.4)} />
            <motion.line x1={x2} y1={y2} x2={mx} y2={my} {...sk} strokeWidth={2} variants={drawPath(d + 0.05, 0.4)} />
            <motion.circle cx={mx} cy={my} r={5} {...skRed} strokeWidth={2} variants={drawPath(d + 0.4, 0.3)} />
        </>
    );
}

/** Dashed arrow from (x1,y1) to (x2,y2) with arrowhead */
function DashedArrow({ x1, y1, x2, y2, d }: { x1:number; y1:number; x2:number; y2:number; d:number }) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx*dx + dy*dy);
    const ux = dx / len, uy = dy / len;
    const ax = x2 - ux * 10, ay = y2 - uy * 10;
    const perp = 6;
    return (
        <>
            <motion.line x1={x1} y1={y1} x2={x2} y2={y2}
                {...skRed} strokeWidth={1.8} strokeDasharray="6 4"
                variants={drawPath(d, 0.7)} />
            <motion.line x1={ax - uy*perp} y1={ay + ux*perp} x2={x2} y2={y2}
                {...skRed} strokeWidth={1.8} variants={drawPath(d + 0.5, 0.25)} />
            <motion.line x1={ax + uy*perp} y1={ay - ux*perp} x2={x2} y2={y2}
                {...skRed} strokeWidth={1.8} variants={drawPath(d + 0.55, 0.25)} />
        </>
    );
}

/** Speech bubble at (cx, cy) pointing left */
function Bubble({ cx, cy, d }: { cx: number; cy: number; d: number }) {
    return (
        <motion.path
            d={`M${cx-48},${cy-22} C${cx-48},${cy-32} ${cx+48},${cy-32} ${cx+48},${cy-22}
                C${cx+48},${cy-12} ${cx+48},${cy+12} ${cx+20},${cy+12}
                L${cx-10},${cy+24} L${cx},${cy+12}
                C${cx-30},${cy+12} ${cx-48},${cy-12} ${cx-48},${cy-22}Z`}
            {...skFaint}
            variants={drawPath(d, 0.6)}
        />
    );
}

/** Small lightbulb */
function Bulb({ cx, cy, d }: { cx: number; cy: number; d: number }) {
    return (
        <g transform={`translate(${cx},${cy})`}>
            <motion.path d="M0,-22 C12,-22 20,-14 20,-5 C20,4 14,10 11,15 L-11,15 C-14,10 -20,4 -20,-5 C-20,-14 -12,-22 0,-22Z"
                {...skRed} variants={drawPath(d, 0.75)} />
            <motion.line x1={-7} y1={15} x2={7} y2={15} {...skRed} variants={drawPath(d + 0.55, 0.25)} />
            <motion.line x1={-5} y1={20} x2={5} y2={20} {...skRed} variants={drawPath(d + 0.65, 0.25)} />
            {[[-28,-4],[28,-4],[0,-32],[-20,-20],[20,-20]].map(([rx,ry], i) => (
                <motion.line key={i} x1={rx!*0.45} y1={ry!*0.45} x2={rx!} y2={ry!}
                    {...skRed} strokeWidth={1.4} variants={drawPath(d + 0.75 + i*0.06, 0.2)} />
            ))}
        </g>
    );
}

/** Automation flow boxes */
function Flow({ cx, cy, d }: { cx: number; cy: number; d: number }) {
    const steps = ['Design', 'Build', 'Deploy', '∞'];
    const bw = 52, gap = 26;
    const total = steps.length * bw + (steps.length - 1) * gap;
    const sx = cx - total / 2;
    return (
        <g>
            {steps.map((label, i) => {
                const bx = sx + i * (bw + gap);
                const last = i === steps.length - 1;
                return (
                    <g key={label}>
                        <motion.rect x={bx} y={cy-17} width={bw} height={34} rx={4}
                            {...(last ? skRed : sk)} variants={drawPath(d + i*0.2, 0.45)} />
                        <motion.text x={bx + bw/2} y={cy+5} textAnchor="middle"
                            fontFamily="Caveat, cursive" fontSize={last ? 19 : 12}
                            fill={last ? '#FF4444' : '#D6CCBA'}
                            variants={fadeIn(d + i*0.2 + 0.3, 0.35)}>
                            {label}
                        </motion.text>
                        {!last && (
                            <motion.path
                                d={`M${bx+bw+3},${cy} L${bx+bw+gap-3},${cy} M${bx+bw+gap-9},${cy-5} L${bx+bw+gap-3},${cy} L${bx+bw+gap-9},${cy+5}`}
                                {...sk} strokeWidth={1.6} variants={drawPath(d + i*0.2 + 0.4, 0.25)} />
                        )}
                    </g>
                );
            })}
        </g>
    );
}

/** Section label (small caps) */
function Label({ x, y, text, d }: { x:number; y:number; text:string; d:number }) {
    return (
        <motion.text x={x} y={y} fontFamily="Caveat, cursive" fontSize={12}
            fill="rgba(214,204,186,0.38)" letterSpacing={2}
            variants={fadeIn(d, 0.45)}>
            {text}
        </motion.text>
    );
}

/** Annotation (slightly larger, optional red) */
function Note({ x, y, text, d, red=false }: { x:number; y:number; text:string; d:number; red?:boolean }) {
    return (
        <motion.text x={x} y={y} fontFamily="Caveat, cursive" fontSize={14}
            fill={red ? '#FF6B6B' : 'rgba(214,204,186,0.65)'}
            variants={fadeIn(d, 0.45)}>
            {text}
        </motion.text>
    );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function SketchHeroSection({
    context = 'hero',
}: {
    context?: 'hero' | 'about';
} = {}) {
    const controls = useAnimation();
    const [ctaVisible, setCtaVisible] = useState(false);
    const isAbout = context === 'about';

    useEffect(() => {
        controls.start('visible');
        // CTA appears after animation ends (~9.5s)
        const t = setTimeout(() => setCtaVisible(true), 9500);
        return () => clearTimeout(t);
    }, [controls]);

    return (
        <section
            className={`sketch-paper sketch-grain relative flex flex-col items-center justify-center overflow-hidden px-4 ${
                isAbout ? 'py-24 lg:py-28' : 'min-h-screen py-20'
            }`}
        >
            {/* eyebrow */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6 flex items-center gap-3"
            >
                <span className="h-px w-8 bg-white/20" />
                <span className="font-sketch text-sm tracking-[0.25em] text-white/40">
                    {isAbout ? 'how we started' : 'origin story'}
                </span>
                <span className="h-px w-8 bg-white/20" />
            </motion.div>

            {/* ── SVG story canvas ── */}
            <motion.svg
                initial="hidden"
                animate={controls}
                viewBox="0 0 900 470"
                className="w-full max-w-3xl"
                aria-label="Sketch: Dev meets PM, then they invite a second Dev"
            >
                {/* graph paper grid */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.line key={`h${i}`} x1={0} y1={i*40} x2={900} y2={i*40}
                        stroke="rgba(255,255,255,0.022)" strokeWidth={1} variants={fadeIn(0, 1.4)} />
                ))}
                {Array.from({ length: 23 }).map((_, i) => (
                    <motion.line key={`v${i}`} x1={i*40} y1={0} x2={i*40} y2={470}
                        stroke="rgba(255,255,255,0.022)" strokeWidth={1} variants={fadeIn(0, 1.4)} />
                ))}

                {/* panel dividers */}
                <motion.line x1={300} y1={20} x2={300} y2={420} {...skDash} variants={drawPath(0.5, 1.2)} />
                <motion.line x1={600} y1={20} x2={600} y2={420} {...skDash} variants={drawPath(0.5, 1.2)} />

                {/* ══════════════════════════════════════════════════════════
                    PANEL 1 — THE MEET
                    Dev 1 (left) walking right — PM (right) walking left
                ══════════════════════════════════════════════════════════ */}
                <Label x={36} y={42} text="01 — THE MEET" d={0.6} />

                {/* Dev 1 — left side, faces right (no flip) */}
                <Person cx={100} cy={240} d={0.8} />
                <Laptop cx={128} cy={222} d={1.5} />
                <Note x={62} y={318} text="Dev 1" d={1.85} />

                {/* motion lines behind Dev 1 (walking right) */}
                {[0,1,2].map(i => (
                    <motion.line key={i}
                        x1={54 - i*10} y1={240 + (i-1)*8}
                        x2={66 - i*10} y2={240 + (i-1)*8}
                        {...skFaint} strokeWidth={1.2}
                        variants={drawPath(1.7 + i*0.06, 0.25)} />
                ))}

                {/* PM — right side of panel 1, faces left (flip) */}
                <Person cx={240} cy={240} d={1.2} flip />
                <Clipboard cx={214} cy={222} d={1.9} />
                <Note x={210} y={318} text="PM" d={2.2} />

                {/* motion lines behind PM (walking left) */}
                {[0,1,2].map(i => (
                    <motion.line key={i}
                        x1={278 + i*10} y1={240 + (i-1)*8}
                        x2={290 + i*10} y2={240 + (i-1)*8}
                        {...skFaint} strokeWidth={1.2}
                        variants={drawPath(2.0 + i*0.06, 0.25)} />
                ))}

                {/* handshake / meeting point */}
                <Handshake x1={120} y1={222} x2={220} y2={222} d={2.7} />

                {/* "Hey!" bubble above Dev 1 */}
                <motion.path
                    d="M80,150 C80,140 130,140 130,150 C130,158 130,164 120,164 L95,172 L100,164 C88,164 80,158 80,150Z"
                    {...skFaint} variants={drawPath(2.0, 0.5)} />
                <Note x={86} y={158} text="Hey!" d={2.4} />

                {/* "..." bubble above PM */}
                <motion.path
                    d="M178,148 C178,138 238,138 238,148 C238,156 238,162 228,162 L190,172 L200,162 C188,162 178,156 178,148Z"
                    {...skFaint} variants={drawPath(2.2, 0.5)} />
                <Note x={185} y={156} text="Oh nice!" d={2.6} />

                {/* ══════════════════════════════════════════════════════════
                    PANEL 2 — THE INVITE
                    Dev 1 + PM together, speech bubble "we need one more dev"
                    Dashed arrow pointing right to Dev 2 entering
                ══════════════════════════════════════════════════════════ */}
                <Label x={336} y={42} text="02 — THE INVITE" d={3.2} />

                {/* Dev 1 and PM standing side-by-side (left of panel 2) */}
                <Person cx={360} cy={240} d={3.4} />
                <Laptop cx={388} cy={222} d={4.0} />

                <Person cx={430} cy={240} d={3.6} flip />
                <Clipboard cx={404} cy={222} d={4.1} />

                {/* joint speech bubble pointing right */}
                <Bubble cx={450} cy={150} d={4.3} />
                <Note x={402} y={143} text='"we need" ' d={4.7} />
                <Note x={402} y={158} text="one more dev!" d={4.8} red />

                {/* dashed arrow from them toward Dev 2 */}
                <DashedArrow x1={468} y1={200} x2={535} y2={220} d={5.0} />

                {/* Dev 2 entering from right edge of panel 2 */}
                <Person cx={565} cy={240} d={5.5} />
                <CodeBracket cx={590} cy={215} d={6.1} />
                <Note x={534} y={318} text="Dev 2" d={6.3} />

                {/* motion lines behind Dev 2 (walking left) */}
                {[0,1,2].map(i => (
                    <motion.line key={i}
                        x1={602 + i*10} y1={240 + (i-1)*8}
                        x2={614 + i*10} y2={240 + (i-1)*8}
                        {...skFaint} strokeWidth={1.2}
                        variants={drawPath(5.9 + i*0.06, 0.25)} />
                ))}

                {/* wave / greeting from Dev 2 */}
                <motion.path d="M588,195 C594,190 600,193 602,198 C600,196 594,196 588,195Z"
                    {...sk} strokeWidth={1.8} variants={drawPath(6.1, 0.4)} />

                {/* ══════════════════════════════════════════════════════════
                    PANEL 3 — THE BUILD
                    All 3 around a table → idea → automation flow
                ══════════════════════════════════════════════════════════ */}
                <Label x={636} y={42} text="03 — THE BUILD" d={6.6} />

                {/* round table */}
                <motion.ellipse cx={745} cy={310} rx={65} ry={20} {...sk} variants={drawPath(6.7, 0.55)} />
                <motion.line x1={680} y1={310} x2={680} y2={345} {...sk} variants={drawPath(7.1, 0.28)} />
                <motion.line x1={810} y1={310} x2={810} y2={345} {...sk} variants={drawPath(7.1, 0.28)} />

                {/* Dev 1 at table — left */}
                <motion.circle cx={692} cy={278} r={9} {...sk} variants={drawPath(6.8, 0.35)} />
                <motion.line x1={692} y1={287} x2={692} y2={310} {...sk} variants={drawPath(7.0, 0.25)} />

                {/* PM at table — right */}
                <motion.circle cx={798} cy={278} r={9} {...sk} variants={drawPath(6.9, 0.35)} />
                <motion.line x1={798} y1={287} x2={798} y2={310} {...sk} variants={drawPath(7.05, 0.25)} />

                {/* Dev 2 at table — top */}
                <motion.circle cx={745} cy={262} r={9} {...skRed} variants={drawPath(7.0, 0.35)} />
                <motion.line x1={745} y1={271} x2={745} y2={290} {...sk} variants={drawPath(7.1, 0.25)} />

                {/* lightbulb above table */}
                <Bulb cx={745} cy={190} d={7.2} />

                {/* monitor bottom-right */}
                <motion.rect x={635} y={350} width={210} height={90} rx={5} {...sk} variants={drawPath(7.9, 0.6)} />
                <motion.rect x={643} y={357} width={194} height={76} rx={3} {...skFaint} variants={drawPath(8.2, 0.45)} />
                <motion.line x1={740} y1={440} x2={740} y2={455} {...sk} variants={drawPath(8.5, 0.25)} />
                <motion.line x1={718} y1={455} x2={762} y2={455} {...sk} variants={drawPath(8.55, 0.25)} />

                {/* code lines on screen */}
                {[0,1,2,3].map(i => (
                    <motion.line key={i}
                        x1={656} y1={372 + i*16} x2={656 + 70 - i*12} y2={372 + i*16}
                        {...skFaint} strokeWidth={2}
                        variants={drawPath(8.3 + i*0.1, 0.35)} />
                ))}
                <motion.line x1={656} y1={388} x2={718} y2={388}
                    {...skRed} strokeWidth={2.2} variants={drawPath(8.7, 0.35)} />

                {/* automation flow — top right of panel */}
                <Flow cx={755} cy={108} d={8.5} />
                <Note x={640} y={133} text="automated end-to-end" d={9.1} red />

                {/* signature */}
                <motion.text x={888} y={462} fontFamily="Caveat, cursive" fontSize={11}
                    fill="rgba(214,204,186,0.18)" textAnchor="end"
                    variants={fadeIn(9.2, 0.6)}>
                    Loopers Lab ∞
                </motion.text>
            </motion.svg>

            {/* ── heading ── */}
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 text-center"
            >
                <h1 className="font-sketch text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Two devs. One PM.
                    <br />
                    <span style={{ color: '#FF4444' }}>One obsession.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
                    We design, build, and maintain software that keeps running long after the first launch —
                    automation, web apps, and everything in between.
                </p>
            </motion.div>

            {/* ── CTA ── */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded border border-[#FF4444] bg-[#FF4444]/10 px-7 py-3.5 font-sketch text-lg text-white transition-colors hover:bg-[#FF4444]/20"
                >
                    Start a Project →
                </Link>
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded border border-white/15 px-7 py-3.5 font-sketch text-lg text-white/55 transition-colors hover:text-white"
                >
                    See Our Services
                </Link>
            </motion.div>

            {/* scroll nudge */}
            {!isAbout && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 10.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="font-sketch text-xs tracking-[0.3em] text-white/25">scroll</span>
                    <div className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent" />
                </motion.div>
            )}
        </section>
    );
}
