'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';

// ─────────────────────────────────────────────────────────────────────────────
// Team portraits. Drop real photos in `public/team/` and set `photo` below —
// e.g. photo: '/team/hung.jpg'. Until then a crafted placeholder frame renders.
// ─────────────────────────────────────────────────────────────────────────────
const TEAM: { role: string; tag: string; photo?: string }[] = [
    { role: 'Dev', tag: 'builds', photo: '' },
    { role: 'Dev', tag: 'ships', photo: '' },
    { role: 'PM', tag: 'keeps it running', photo: '' },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── particle depth field ─────────────────────────────────────────────────────
function ParticleField({ reduced }: { reduced: boolean }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const isSmall = window.matchMedia('(max-width: 768px)').matches;
        const COUNT = isSmall ? 34 : 74;

        type P = { x: number; y: number; z: number; r: number; vy: number };
        let parts: P[] = [];

        const seed = () => {
            parts = Array.from({ length: COUNT }, () => {
                const z = Math.random(); // 0 far … 1 near
                return {
                    x: Math.random(),
                    y: Math.random(),
                    z,
                    r: 0.4 + z * 1.8,
                    vy: (0.02 + z * 0.06) / 60,
                };
            });
        };

        const resize = () => {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            for (const p of parts) {
                const px = p.x * width;
                const py = p.y * height;
                ctx.beginPath();
                ctx.arc(px, py, p.r, 0, Math.PI * 2);
                const isRed = p.z > 0.82;
                ctx.fillStyle = isRed
                    ? `rgba(255,68,68,${0.15 + p.z * 0.5})`
                    : `rgba(255,255,255,${0.05 + p.z * 0.28})`;
                ctx.fill();
            }
        };

        let raf = 0;
        const tick = () => {
            for (const p of parts) {
                p.y -= p.vy;
                if (p.y < -0.02) {
                    p.y = 1.02;
                    p.x = Math.random();
                }
            }
            draw();
            raf = requestAnimationFrame(tick);
        };

        resize();
        seed();
        if (reduced) {
            draw();
        } else {
            raf = requestAnimationFrame(tick);
        }

        const onResize = () => {
            resize();
            draw();
        };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
        };
    }, [reduced]);

    return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

// ─── floating parallax item ───────────────────────────────────────────────────
// Outer motion.div = entrance; inner div = pointer-parallax translate (CSS vars).
function Float({
    className,
    depth,
    delay = 0,
    children,
    reduced,
}: {
    className?: string;
    depth: number;
    delay?: number;
    children: React.ReactNode;
    reduced: boolean;
}) {
    return (
        <motion.div
            className={`absolute ${className ?? ''}`}
            initial={reduced ? false : { opacity: 0, scale: 0.72 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.95, ease: EASE }}
        >
            <div
                style={{
                    transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)`,
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

// ─── team portrait frame ──────────────────────────────────────────────────────
function TeamCard({ role, tag, photo }: { role: string; tag: string; photo?: string }) {
    return (
        <figure className="w-[8.5rem] overflow-hidden rounded-xl border border-white/12 bg-[#0e0e11] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] sm:w-[9.5rem]">
            <div className="relative aspect-[3/4] w-full">
                {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photo} alt={`${role} at Loopers Lab`} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,68,68,0.12),transparent_65%)]">
                        <span className="font-display text-4xl font-extrabold text-white/12">{role}</span>
                    </div>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-6">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ff4444]" />
                    <figcaption className="font-terminal text-[10.5px] text-white/70">
                        <span className="text-white/90">{role}</span>
                        <span className="text-white/40"> · {tag}</span>
                    </figcaption>
                </div>
            </div>
        </figure>
    );
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-lg border border-white/10 bg-[#0d0d10]/90 px-3.5 py-2 font-terminal text-[11.5px] text-white/70 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-sm">
            {children}
        </div>
    );
}

export default function ImmersiveHeroSection() {
    const reduced = useReducedMotion() ?? false;
    const sectionRef = useRef<HTMLElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);

    // pointer parallax → writes eased --mx/--my onto the stage (no React re-render)
    useEffect(() => {
        if (reduced) return;
        const el = stageRef.current;
        if (!el) return;
        if (window.matchMedia('(pointer: coarse)').matches) return;

        let raf = 0;
        let tx = 0;
        let ty = 0;
        let cx = 0;
        let cy = 0;

        const onMove = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            tx = (e.clientX - r.left) / r.width - 0.5;
            ty = (e.clientY - r.top) / r.height - 0.5;
        };
        const loop = () => {
            cx += (tx - cx) * 0.07;
            cy += (ty - cy) * 0.07;
            el.style.setProperty('--mx', cx.toFixed(4));
            el.style.setProperty('--my', cy.toFixed(4));
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        raf = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener('pointermove', onMove);
            cancelAnimationFrame(raf);
        };
    }, [reduced]);

    // scroll fly-through (hooks called unconditionally; ranges collapse when reduced)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const frontY = useTransform(scrollYProgress, [0, 0.85], reduced ? [0, 0] : [0, -170]);
    const frontScale = useTransform(scrollYProgress, [0, 0.85], reduced ? [1, 1] : [1, 1.22]);
    const frontOpacity = useTransform(scrollYProgress, [0, 0.6], reduced ? [1, 1] : [1, 0]);

    const midY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -120]);
    const midScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.85]);
    const midOpacity = useTransform(scrollYProgress, [0, 0.72], reduced ? [1, 1] : [1, 0]);

    const bgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 70]);
    const bgScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.2]);
    const nudgeOpacity = useTransform(scrollYProgress, [0, 0.12], reduced ? [1, 1] : [1, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0B0B0C] lg:h-[210vh]"
        >
            <div
                ref={stageRef}
                className="relative flex min-h-[100svh] items-center overflow-hidden px-6 lg:sticky lg:top-0 lg:h-screen lg:px-10"
            >
                {/* ── deep background: particles + perspective floor + ∞ ── */}
                <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
                    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_60%_38%,black_15%,transparent_78%)]">
                        <ParticleField reduced={reduced} />
                    </div>

                    {/* perspective grid floor */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] [perspective:460px] [mask-image:linear-gradient(to_top,black_18%,transparent_92%)]"
                    >
                        <div
                            className="grid-floor absolute inset-0 origin-bottom [transform:rotateX(74deg)]"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(255,68,68,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                                backgroundSize: '46px 46px',
                            }}
                        />
                    </div>

                    {/* giant ∞ loop, far + faint */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-[-4%] top-[24%] hidden lg:block"
                        style={{
                            transform:
                                'translate3d(calc(var(--mx, 0) * 22px), calc(var(--my, 0) * 22px), 0)',
                        }}
                    >
                        <svg width="560" height="300" viewBox="0 0 560 300" fill="none">
                            <path
                                d="M140 150c0-55 45-90 90-90s70 30 90 90c20 60 50 90 90 90s90-35 90-90-45-90-90-90-70 30-90 90c-20 60-50 90-90 90s-90-35-90-90Z"
                                stroke="rgba(255,68,68,0.12)"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* ── mid layer: studio-world fragments + team ── */}
                <motion.div
                    style={{ y: midY, scale: midScale, opacity: midOpacity }}
                    className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block"
                >
                    <Float className="left-[6%] top-[15%]" depth={44} delay={0.15} reduced={reduced}>
                        <Chip>
                            <span className="text-[#ff6b6b]">deploy</span> → monitor → maintain{' '}
                            <span className="text-[#ff4444]">✓</span>
                        </Chip>
                    </Float>

                    <Float className="left-[2%] top-[30%]" depth={72} delay={0.28} reduced={reduced}>
                        <TeamCard {...TEAM[0]} />
                    </Float>

                    <Float className="right-[6%] top-[19%]" depth={96} delay={0.4} reduced={reduced}>
                        <TeamCard {...TEAM[1]} />
                    </Float>

                    <Float className="left-[30%] top-[47%]" depth={120} delay={0.52} reduced={reduced}>
                        <TeamCard {...TEAM[2]} />
                    </Float>

                    <Float className="right-[3%] top-[58%]" depth={132} delay={0.62} reduced={reduced}>
                        <div className="w-[13rem] rounded-xl border border-white/10 bg-[#0d0d10] p-3.5 font-terminal text-[11px] leading-relaxed text-white/55 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
                            <div className="text-white/30">loopers-lab ~ % uptime</div>
                            <div className="mt-1 flex items-center gap-2">
                                <span className="inline-flex h-3 items-end gap-[2px]">
                                    {[40, 60, 45, 78, 52, 92, 66].map((h, i) => (
                                        <span
                                            key={i}
                                            className="w-[3px] rounded-[1px] bg-[#ff4444]/70"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </span>
                                <span className="text-white/85">99.98%</span>
                            </div>
                        </div>
                    </Float>

                    <Float className="left-[16%] top-[73%]" depth={58} delay={0.72} reduced={reduced}>
                        <div className="flex flex-wrap gap-2">
                            {['web apps', 'automation', 'AI agents', 'hosting'].map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-terminal text-[10.5px] text-white/45"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Float>
                </motion.div>

                {/* ── foreground: headline ── */}
                <motion.div
                    style={{ y: frontY, scale: frontScale, opacity: frontOpacity }}
                    className="relative z-10 mx-auto w-full max-w-6xl"
                >
                    <div className="max-w-xl pt-16 lg:pt-0">
                        <motion.p
                            initial={reduced ? false : { opacity: 0, y: 12 }}
                            animate={reduced ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: EASE }}
                            className="font-terminal text-[13px] text-white/40"
                        >
                            <span className="text-[#ff4444]">{'//'}</span> software studio · two devs &amp; a PM
                        </motion.p>

                        <motion.h1
                            initial={reduced ? false : { opacity: 0, y: 18 }}
                            animate={reduced ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
                            className="mt-5 text-balance font-display text-[2.7rem] font-extrabold leading-[1.01] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.6rem]"
                        >
                            We build software.
                            <br />
                            Then we <span className="text-[#ff4444]">keep it running.</span>
                        </motion.h1>

                        <motion.p
                            initial={reduced ? false : { opacity: 0, y: 18 }}
                            animate={reduced ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.16, ease: EASE }}
                            className="mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg"
                        >
                            Design, build, host, automate, and maintain — websites, web apps, data
                            workflows, and AI-assisted operations, handled as one connected stack.
                        </motion.p>

                        <motion.div
                            initial={reduced ? false : { opacity: 0, y: 18 }}
                            animate={reduced ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.24, ease: EASE }}
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

                        {/* mobile / touch: a swipeable team row (the immersive cluster is lg-only) */}
                        <div className="-mx-6 mt-12 flex gap-3 overflow-x-auto px-6 pb-2 lg:hidden">
                            {TEAM.map((m) => (
                                <div key={m.role + m.tag} className="shrink-0">
                                    <TeamCard {...m} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* scroll nudge */}
                <motion.div
                    style={{ opacity: nudgeOpacity }}
                    className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
                >
                    <span className="font-terminal text-[11px] tracking-[0.3em] text-white/30">
                        scroll to dive in
                    </span>
                    <span className="h-9 w-px bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
