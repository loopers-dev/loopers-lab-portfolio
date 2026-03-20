'use client'

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    staggerDelay?: number;
    once?: boolean;
    splitBy?: "chars" | "words";
    animation?: "fadeUp" | "fadeIn" | "slideUp" | "scale";
}

const animations = {
    fadeUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 40, rotateX: 90 },
        visible: { opacity: 1, y: 0, rotateX: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function SplitText({
    children,
    className,
    delay = 0,
    duration = 0.5,
    staggerDelay = 0.03,
    once = true,
    splitBy = "chars",
    animation = "fadeUp",
}: SplitTextProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

    const items = useMemo(() => {
        if (splitBy === "words") {
            return children.split(" ").map((word, i, arr) => ({
                text: word + (i < arr.length - 1 ? "\u00A0" : ""),
                key: `word-${i}`,
            }));
        }
        return children.split("").map((char, i) => ({
            text: char === " " ? "\u00A0" : char,
            key: `char-${i}`,
        }));
    }, [children, splitBy]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const baseAnimation = animations[animation];
    const itemVariants = {
        hidden: baseAnimation.hidden,
        visible: {
            ...baseAnimation.visible,
            transition: {
                duration,
                ease: [0.2, 0.65, 0.3, 0.9] as const,
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className={cn("inline-block", className)}
            style={{ perspective: "1000px" }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {items.map((item) => (
                <motion.span
                    key={item.key}
                    className="inline-block"
                    style={{ transformOrigin: "center bottom" }}
                    variants={itemVariants}
                >
                    {item.text}
                </motion.span>
            ))}
        </motion.span>
    );
}

