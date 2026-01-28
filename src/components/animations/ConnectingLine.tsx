import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ConnectingLineProps {
    className?: string;
    color?: string;
    strokeWidth?: number;
    path?: string;
    height?: number;
}

export function ConnectingLine({
    className,
    color = "var(--accent-primary, #ff4444)",
    strokeWidth = 2,
    path,
    height = 400,
}: ConnectingLineProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Animate the stroke-dashoffset based on scroll
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Default curved path if none provided
    const defaultPath = `M 50 0 Q 50 ${height * 0.25} 150 ${height * 0.5} Q 250 ${height * 0.75} 150 ${height}`;

    return (
        <div ref={ref} className={cn("relative w-full", className)} style={{ height }}>
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 300 ${height}`}
                fill="none"
                preserveAspectRatio="none"
            >
                {/* Background line (faded) */}
                <motion.path
                    d={path || defaultPath}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeOpacity={0.1}
                    fill="none"
                />
                {/* Animated line */}
                <motion.path
                    d={path || defaultPath}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    style={{
                        pathLength,
                    }}
                    initial={{ pathLength: 0 }}
                />
                {/* Glow effect */}
                <motion.path
                    d={path || defaultPath}
                    stroke={color}
                    strokeWidth={strokeWidth + 4}
                    fill="none"
                    strokeLinecap="round"
                    style={{
                        pathLength,
                        filter: "blur(4px)",
                    }}
                    initial={{ pathLength: 0 }}
                />
            </svg>
        </div>
    );
}
