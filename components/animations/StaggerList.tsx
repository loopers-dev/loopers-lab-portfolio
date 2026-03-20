'use client'

import { motion, useInView } from "framer-motion";
import { useRef, Children, isValidElement } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerListProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    duration?: number;
    once?: boolean;
    animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
}

const itemAnimations = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
} as const;

export function StaggerList({
    children,
    className,
    staggerDelay = 0.1,
    duration = 0.5,
    once = true,
    animation = "fadeUp",
}: StaggerListProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const itemVariants = itemAnimations[animation];

    return (
        <motion.div
            ref={ref}
            className={cn(className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {Children.map(children, (child, index) => {
                if (isValidElement(child)) {
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration, ease: [0.25, 0.4, 0.25, 1] as const }}
                        >
                            {child}
                        </motion.div>
                    );
                }
                return child;
            })}
        </motion.div>
    );
}

