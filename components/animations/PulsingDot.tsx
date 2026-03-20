'use client'

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PulsingDotProps {
    className?: string;
    color?: string;
    size?: "sm" | "md" | "lg";
    pulseScale?: number;
    duration?: number;
}

const sizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
};

export function PulsingDot({
    className,
    color = "bg-primary",
    size = "md",
    pulseScale = 2.5,
    duration = 2,
}: PulsingDotProps) {
    return (
        <span className={cn("relative inline-flex", className)}>
            {/* Pulsing ring */}
            <motion.span
                className={cn("absolute inline-flex rounded-full opacity-75", sizes[size], color)}
                animate={{
                    scale: [1, pulseScale],
                    opacity: [0.7, 0],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
            {/* Center dot */}
            <span className={cn("relative inline-flex rounded-full", sizes[size], color)} />
        </span>
    );
}

