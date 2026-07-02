'use client'

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    MotionValue,
} from 'framer-motion';
import { useRef, createContext, useContext } from 'react';
import type { ReactNode, MouseEvent, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

/* ─── Context ──────────────────────────────────────────────────────────────── */

interface TiltContext {
    mouseX: MotionValue<number>; // 0 → 1 across card width
    mouseY: MotionValue<number>; // 0 → 1 across card height
}

const TiltCtx = createContext<TiltContext | null>(null);

function useTiltContext() {
    const ctx = useContext(TiltCtx);
    if (!ctx) throw new Error('useTiltContext must be used inside <TiltCard>');
    return ctx;
}

/* ─── ParallaxLayer ────────────────────────────────────────────────────────── */

interface ParallaxLayerProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /**
     * How far (in px) the layer shifts relative to cursor at 100% travel.
     * Positive = same direction as cursor, negative = opposite (default depth effect).
     */
    depth?: number;
    /** Extra translateZ (px) to lift the layer above the card plane. */
    z?: number;
}

export function ParallaxLayer({
    children,
    className,
    style,
    depth = 10,
    z = 0,
}: ParallaxLayerProps) {
    const { mouseX, mouseY } = useTiltContext();

    // Map 0→1 range to -depth→+depth shift
    const x = useTransform(mouseX, [0, 1], [-depth, depth]);
    const y = useTransform(mouseY, [0, 1], [-depth, depth]);

    const springX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.5 });

    return (
        <motion.div
            className={cn('will-change-transform', className)}
            style={{
                x: springX,
                y: springY,
                translateZ: z,
                transformStyle: 'preserve-3d',
                ...style,
            }}
        >
            {children}
        </motion.div>
    );
}

/* ─── AmbiGlow ─────────────────────────────────────────────────────────────── */
/** Radial spotlight that follows the mouse behind the card */
export function AmbiGlow({
    className,
    color = 'var(--accent-primary)',
    size = 500,
    opacity = 0.25,
}: {
    className?: string;
    color?: string;
    size?: number;
    opacity?: number;
}) {
    const { mouseX, mouseY } = useTiltContext();

    // Convert 0-1 to percentage positions for the gradient origin
    const xPct = useSpring(useTransform(mouseX, [0, 1], [20, 80]), { stiffness: 150, damping: 20 });
    const yPct = useSpring(useTransform(mouseY, [0, 1], [20, 80]), { stiffness: 150, damping: 20 });

    // Compose into a CSS gradient string motion value
    const opacityHex = Math.round(opacity * 255).toString(16).padStart(2, '0');
    const background = useTransform(
        [xPct, yPct] as [typeof xPct, typeof yPct],
        ([x, y]: number[]) =>
            `radial-gradient(${size}px circle at ${x}% ${y}%, ${color}${opacityHex} 0%, transparent 70%)`,
    );

    return (
        <motion.div
            className={cn('absolute pointer-events-none rounded-[inherit]', className)}
            style={{ background }}
        />
    );
}

/* ─── TiltCard ─────────────────────────────────────────────────────────────── */

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    /** Max tilt angle in degrees */
    tiltAmount?: number;
    /** CSS perspective value in px */
    perspective?: number;
    /** Hover scale factor */
    scale?: number;
}

export function TiltCard({
    children,
    className,
    tiltAmount = 12,
    perspective = 1000,
    scale = 1.015,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(
        useTransform(mouseY, [0, 1], [tiltAmount, -tiltAmount]),
        { stiffness: 250, damping: 28 },
    );
    const rotateY = useSpring(
        useTransform(mouseX, [0, 1], [-tiltAmount, tiltAmount]),
        { stiffness: 250, damping: 28 },
    );

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <TiltCtx.Provider value={{ mouseX, mouseY }}>
            <motion.div
                ref={ref}
                className={cn('relative', className)}
                style={{ perspective }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <motion.div
                    className="w-full h-full"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </TiltCtx.Provider>
    );
}
