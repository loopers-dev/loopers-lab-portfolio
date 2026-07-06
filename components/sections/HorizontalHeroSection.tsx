'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';

// figure-8 / lemniscate path, normalized via pathLength={100}
const LOOP =
    'M360,150 C360,84 300,60 240,60 C150,60 100,102 100,150 C100,198 150,240 240,240 C300,240 360,216 360,150 C360,84 420,60 480,60 C570,60 620,102 620,150 C620,198 570,240 480,240 C420,240 360,216 360,150 Z';

const LOOP_STAGES: { x: number; y: number; t: string; anchor: 'start' | 'middle' | 'end' }[] = [
    { x: 78, y: 154, t: 'design', anchor: 'end' },
    { x: 240, y: 44, t: 'build', anchor: 'middle' },
    { x: 480, y: 44, t: 'deploy', anchor: 'middle' },
    { x: 642, y: 154, t: 'maintain', anchor: 'start' },
];

// ─── Panel 1: The Living Loop ─────────────────────────────────────────────────
function LoopPanel() {
    return (
        <div className="relative flex h-screen w-full shrink-0 flex-col items-center justify-center overflow-hidden px-6 lg:w-screen">
            <div
                aria-hidden="true"
                className="grid-pattern absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]"
            />

            <p className="font-terminal mb-2 text-[13px] text-white/40">
                <span className="text-[#ff4444]">{'//'}</span> software studio · two devs &amp; a PM
            </p>

            {/* the ∞ */}
            <svg
                viewBox="0 0 720 300"
                className="w-[min(88vw,720px)]"
                aria-label="An infinity loop: design, build, deploy, maintain — running forever"
            >
                <path d={LOOP} fill="none" stroke="rgba(255,68,68,0.13)" strokeWidth={2} />
                <path
                    d={LOOP}
                    pathLength={100}
                    className="loop-comet"
                    fill="none"
                    stroke="#ff4444"
                    strokeWidth={2.6}
                    strokeLinecap="round"
                    strokeDasharray="8 92"
                />
                <path
                    d={LOOP}
                    pathLength={100}
                    className="loop-comet"
                    style={{ animationDelay: '-1.7s' }}
                    fill="none"
                    stroke="#ff8a8a"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeDasharray="4 96"
                />
                {LOOP_STAGES.map((s) => (
                    <text
                        key={s.t}
                        x={s.x}
                        y={s.y}
                        textAnchor={s.anchor}
                        className="font-terminal"
                        fontSize={13}
                        fill="rgba(214,204,186,0.55)"
                    >
                        {s.t}
                    </text>
                ))}
            </svg>

            <h1 className="mt-4 max-w-3xl text-balance text-center font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.2rem]">
                We build software. Then we <span className="text-[#ff4444]">keep it running.</span>
            </h1>

            <p className="mt-5 max-w-xl text-center text-base leading-relaxed text-white/55 sm:text-lg">
                Design, build, host, automate, and maintain — one connected stack that stays alive
                long after launch.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <GlowButton href="/contact" size="lg" rounded="full" className="min-w-[12.5rem]">
                    Start a project
                </GlowButton>
                <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                    See our work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>

            {/* horizontal-scroll hint (desktop only; mobile just scrolls down) */}
            <div className="absolute bottom-8 right-8 hidden items-center gap-3 font-terminal text-[12px] tracking-[0.25em] text-white/40 lg:flex">
                scroll to move right
                <span className="nudge-x text-[#ff4444]">→</span>
            </div>
        </div>
    );
}

// ─── Panel 2: Self-drawing Blueprint ──────────────────────────────────────────
function Node({
    x,
    y,
    w = 132,
    h = 52,
    title,
    accent = false,
}: {
    x: number;
    y: number;
    w?: number;
    h?: number;
    title: string;
    accent?: boolean;
}) {
    return (
        <g>
            <rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx={8}
                pathLength={1}
                className="bp-line"
                fill="#0e0e11"
                stroke={accent ? '#ff4444' : 'rgba(214,204,186,0.5)'}
                strokeWidth={1.6}
            />
            <text
                x={x + w / 2}
                y={y + h / 2 + 4}
                textAnchor="middle"
                className="bp-label font-terminal"
                fontSize={13}
                fill={accent ? '#ff8a8a' : '#D6CCBA'}
            >
                {title}
            </text>
        </g>
    );
}

/** line + small chevron arrowhead pointing at (x2,y2) */
function Wire({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const hx = x2 - ux * 9;
    const hy = y2 - uy * 9;
    const p = 5;
    return (
        <>
            <line x1={x1} y1={y1} x2={x2} y2={y2} pathLength={1} className="bp-line" stroke="rgba(214,204,186,0.35)" strokeWidth={1.4} />
            <line x1={hx - uy * p} y1={hy + ux * p} x2={x2} y2={y2} pathLength={1} className="bp-line" stroke="rgba(214,204,186,0.35)" strokeWidth={1.4} />
            <line x1={hx + uy * p} y1={hy - ux * p} x2={x2} y2={y2} pathLength={1} className="bp-line" stroke="rgba(214,204,186,0.35)" strokeWidth={1.4} />
        </>
    );
}

function BlueprintPanel() {
    return (
        <div className="sketch-paper relative flex h-screen w-full shrink-0 items-center overflow-hidden px-6 lg:w-screen">
            <div className="mx-auto w-full max-w-5xl">
                <p className="font-sketch text-lg text-white/45">how it fits together</p>
                <h2 className="mt-1 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                    One connected stack — designed, then <span className="text-[#ff4444]">kept running.</span>
                </h2>

                <svg viewBox="0 0 900 360" className="mt-8 w-full" aria-label="System architecture blueprint: client to web app, API, database, automation, AI, and a monitoring loop back">
                    {/* wires (drawn first, behind nodes) */}
                    <Wire x1={158} y1={176} x2={230} y2={176} />
                    <Wire x1={362} y1={176} x2={434} y2={176} />
                    <Wire x1={566} y1={176} x2={638} y2={176} />
                    {/* branches up */}
                    <Wire x1={500} y1={150} x2={500} y2={98} />
                    <Wire x1={704} y1={150} x2={704} y2={98} />
                    {/* monitoring down + loop back */}
                    <Wire x1={704} y1={202} x2={704} y2={266} />
                    <path
                        d="M638,292 C420,292 300,292 224,240"
                        fill="none"
                        pathLength={1}
                        className="bp-line"
                        stroke="rgba(255,68,68,0.45)"
                        strokeWidth={1.6}
                        strokeDasharray="6 5"
                    />
                    {/* arrowhead for loop-back */}
                    <line x1={224} y1={240} x2={234} y2={236} pathLength={1} className="bp-line" stroke="#ff4444" strokeWidth={1.6} />
                    <line x1={224} y1={240} x2={230} y2={250} pathLength={1} className="bp-line" stroke="#ff4444" strokeWidth={1.6} />

                    {/* nodes */}
                    <Node x={26} y={150} w={132} title="Client" />
                    <Node x={230} y={150} w={132} title="Web App" />
                    <Node x={434} y={150} w={132} title="API" />
                    <Node x={638} y={150} w={132} title="Database" />
                    <Node x={434} y={46} w={132} title="Automation" />
                    <Node x={638} y={46} w={132} title="AI Agents" />
                    <Node x={638} y={266} w={132} title="Monitoring" accent />

                    {/* hand annotations */}
                    <text x={250} y={318} className="font-sketch" fontSize={22} fill="rgba(255,107,107,0.85)">
                        keeps running ∞
                    </text>
                    <text x={250} y={140} className="font-sketch" fontSize={18} fill="rgba(214,204,186,0.5)">
                        deploy →
                    </text>
                </svg>

                {/* continue-down hint */}
                <div className="mt-8 flex items-center gap-3 font-terminal text-[12px] tracking-[0.2em] text-white/35">
                    keep scrolling
                    <span className="h-4 w-px bg-gradient-to-b from-white/30 to-transparent" />
                    ↓
                </div>
            </div>
        </div>
    );
}

// ─── horizontal scroll orchestration ──────────────────────────────────────────
export default function HorizontalHeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const mql = window.matchMedia('(min-width: 1024px)');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Mobile / reduced-motion: no scroll-jack. Panels stack; blueprint stays drawn.
        if (!mql.matches || reduced) return;

        let cleanup: (() => void) | undefined;
        let cancelled = false;

        (async () => {
            const gsapMod = await import('gsap');
            const stMod = await import('gsap/ScrollTrigger');
            if (cancelled) return;
            const gsap = gsapMod.default;
            const ScrollTrigger = stMod.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                // hide blueprint strokes/labels so the timeline can draw them in
                gsap.set('.bp-line', { strokeDasharray: 1, strokeDashoffset: 1 });
                gsap.set('.bp-label', { opacity: 0 });

                const distance = () => track.scrollWidth - window.innerWidth;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: () => '+=' + distance() * 1.35,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(track, { x: () => -distance(), ease: 'none', duration: 1 }, 0)
                    .to('.bp-line', { strokeDashoffset: 0, ease: 'none', stagger: { each: 0.03 }, duration: 0.55 }, 0.5)
                    .to('.bp-label', { opacity: 1, ease: 'none', stagger: 0.02, duration: 0.3 }, 0.8);
            }, section);

            cleanup = () => ctx.revert();
        })();

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-[#0B0B0C] lg:h-screen">
            <div ref={trackRef} className="flex h-full flex-col lg:w-max lg:flex-row">
                <LoopPanel />
                <BlueprintPanel />
            </div>
        </section>
    );
}
