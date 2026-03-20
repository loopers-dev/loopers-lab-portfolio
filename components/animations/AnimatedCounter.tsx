'use client'

import { motion, useInView, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
    value: number;
    className?: string;
    duration?: number;
    once?: boolean;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

function AnimatedNumber({
    motionValue,
    decimals
}: {
    motionValue: MotionValue<number>;
    decimals: number;
}) {
    const displayValue = useTransform(motionValue, (val) =>
        decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString()
    );

    return <motion.span>{displayValue}</motion.span>;
}

export function AnimatedCounter({
    value,
    className,
    duration = 2,
    once = true,
    prefix = "",
    suffix = "",
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, amount: 0.5 });

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 30,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref} className={cn("tabular-nums", className)}>
            {prefix}
            <AnimatedNumber motionValue={springValue} decimals={decimals} />
            {suffix}
        </span>
    );
}

