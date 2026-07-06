'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';

// ─── terminal transcript ──────────────────────────────────────────────────────
// One "row" prints at a time. The full transcript is always in the DOM by
// default (typed === 'all'), so with no JS / reduced motion the content is fully
// visible — the printing is a pure enhancement, never a gate on visibility.

type Tok = { text: string; className?: string };
type Row =
    | { kind: 'line'; toks: Tok[] }
    | { kind: 'svc'; label: string; desc: string }
    | { kind: 'uptime' }
    | { kind: 'gap' };

const UPTIME_BARS = [34, 52, 40, 68, 44, 88, 56, 72, 62, 96];

const PROMPT = 'loopers-lab ~ % ';

const cx = {
    prompt: 'text-white/30',
    cmd: 'text-white/90',
    flag: 'text-[#ff6b6b]',
    dim: 'text-white/40',
    ink: 'text-white/70',
    accent: 'text-[#ff4444]',
    plain: 'text-white/85',
};

const transcript: Row[] = [
    { kind: 'line', toks: [{ text: PROMPT, className: cx.prompt }, { text: 'whoami', className: cx.cmd }] },
    { kind: 'line', toks: [{ text: 'two devs, one PM — a studio that ships, then stays.', className: cx.ink }] },
    { kind: 'gap' },
    {
        kind: 'line',
        toks: [
            { text: PROMPT, className: cx.prompt },
            { text: './studio ', className: cx.cmd },
            { text: '--services', className: cx.flag },
        ],
    },
    { kind: 'svc', label: 'design', desc: 'web · ux · systems architecture' },
    { kind: 'svc', label: 'build', desc: 'web apps · databases · APIs' },
    { kind: 'svc', label: 'host', desc: 'deploy · SSL · CI/CD' },
    { kind: 'svc', label: 'automate', desc: 'AI agents · workflows · reporting' },
    { kind: 'svc', label: 'maintain', desc: 'monitoring · patches · long-term support' },
    { kind: 'gap' },
    { kind: 'line', toks: [{ text: PROMPT, className: cx.prompt }, { text: 'uptime', className: cx.cmd }] },
    { kind: 'uptime' },
    { kind: 'gap' },
    {
        kind: 'line',
        toks: [
            { text: 'loop: ', className: cx.dim },
            { text: 'design → build → deploy → maintain → ', className: cx.ink },
            { text: '∞', className: cx.accent },
        ],
    },
];

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Prints the transcript row-by-row; falls back to fully-shown when motion is off. */
function useLinePrinter(total: number, enabled: boolean): number | 'all' {
    const [shown, setShown] = useState<number | 'all'>('all');
    const timer = useRef<ReturnType<typeof setTimeout>>();

    useIsomorphicLayoutEffect(() => {
        if (!enabled) {
            setShown('all');
            return;
        }
        let i = 0;
        setShown(0);

        const step = () => {
            i += 1;
            if (i >= total) {
                setShown('all');
                return;
            }
            setShown(i);
            const row = transcript[i];
            const delay = row.kind === 'gap' ? 90 : row.kind === 'svc' ? 120 : 300;
            timer.current = setTimeout(step, delay);
        };
        timer.current = setTimeout(step, 260);

        return () => clearTimeout(timer.current);
    }, [enabled, total]);

    return shown;
}

function Caret() {
    return <span className="terminal-caret text-[#ff4444]" aria-hidden="true">▋</span>;
}

export default function ConsoleHeroSection() {
    const reduced = useReducedMotion();
    const shown = useLinePrinter(transcript.length, !reduced);

    const shownCount = shown === 'all' ? transcript.length : shown;
    // caret sits on the last visible non-gap row
    let activeIndex = -1;
    for (let i = 0; i < shownCount; i += 1) {
        if (transcript[i].kind !== 'gap') activeIndex = i;
    }

    const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
    const rise = (delay: number): Transition =>
        reduced ? { duration: 0 } : { duration: 0.7, delay, ease };

    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0B0B0C] px-6 pb-16 pt-28 lg:px-10 lg:pt-24">
            {/* restrained ground: a faint drafting grid, no glow blobs */}
            <div
                aria-hidden="true"
                className="grid-pattern pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_60%_35%,black_10%,transparent_72%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0B0B0C]"
            />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-x-14 gap-y-12 lg:grid-cols-[1.05fr_0.95fr]">
                {/* ── copy ── */}
                <div className="max-w-xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={rise(0)}
                        className="font-terminal text-[13px] text-white/40"
                    >
                        <span className="text-[#ff4444]">{'//'}</span> software studio · two devs &amp; a PM
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={rise(0.08)}
                        className="mt-5 text-balance font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.4rem]"
                    >
                        We build software.
                        <br />
                        Then we{' '}
                        <span className="text-[#ff4444]">keep it running.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={rise(0.16)}
                        className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg"
                    >
                        Design, build, host, automate, and maintain — websites, web apps, data
                        workflows, and AI-assisted operations, handled as one connected stack.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={rise(0.24)}
                        className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
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
                    </motion.div>
                </div>

                {/* ── terminal ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={rise(0.18)}
                    className="w-full"
                >
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d10] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
                        {/* title bar */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
                            <span className="font-terminal text-[12px] text-white/40">
                                loopers-lab — studio.sh
                            </span>
                            <span className="flex items-center gap-2 font-terminal text-[11px] uppercase tracking-wider text-white/35">
                                <span className="relative flex h-2 w-2">
                                    {!reduced && (
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4444]/60" />
                                    )}
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff4444]" />
                                </span>
                                live
                            </span>
                        </div>

                        {/* body */}
                        <div
                            role="group"
                            aria-label="Loopers Lab studio terminal: services and uptime"
                            className="font-terminal min-h-[19.5rem] px-4 py-4 text-[12.5px] leading-[1.65] sm:min-h-[20.5rem] sm:px-5 sm:text-[13px]"
                        >
                            {transcript.map((row, i) => {
                                const visible = shown === 'all' || i < shownCount;
                                if (!visible) return null;
                                const withCaret = i === activeIndex;

                                if (row.kind === 'gap') return <div key={i} className="h-3" aria-hidden="true" />;

                                if (row.kind === 'uptime') {
                                    return (
                                        <div key={i} className="flex items-center whitespace-pre-wrap">
                                            <span
                                                aria-hidden="true"
                                                className="mr-3 inline-flex h-3.5 items-end gap-[2px]"
                                            >
                                                {UPTIME_BARS.map((h, b) => (
                                                    <span
                                                        key={b}
                                                        className="w-[3px] rounded-[1px] bg-[#ff4444]/70"
                                                        style={{ height: `${h}%` }}
                                                    />
                                                ))}
                                            </span>
                                            <span className={cx.plain}>99.98%</span>
                                            <span className={cx.dim}>{'  — still running, long after launch'}</span>
                                            {withCaret && <Caret />}
                                        </div>
                                    );
                                }

                                if (row.kind === 'svc') {
                                    return (
                                        <div
                                            key={i}
                                            className="grid grid-cols-[4.75rem_1fr] gap-x-3 whitespace-pre-wrap break-words sm:grid-cols-[6rem_1fr]"
                                        >
                                            <span className="text-white/90">{row.label}</span>
                                            <span className={cx.dim}>
                                                {row.desc}
                                                {withCaret && <Caret />}
                                            </span>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={i} className="whitespace-pre-wrap break-words">
                                        {row.toks.map((t, j) => (
                                            <span key={j} className={t.className}>
                                                {t.text}
                                            </span>
                                        ))}
                                        {withCaret && <Caret />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
