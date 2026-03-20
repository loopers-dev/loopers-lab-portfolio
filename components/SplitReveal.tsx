'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

// Cinematic studio reveal animation
// Plays once on site load - "A studio opening its doors"

export default function SplitReveal({ children }: { children: React.ReactNode }) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const { isContentReady } = useLoading();

    // Check for reduced motion preference
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            setIsRevealed(true);
            setShouldRender(false);
            return;
        }
    }, []);

    // Trigger reveal when content is ready
    useEffect(() => {
        if (!isContentReady) return;

        // Phase 1: Hold for brand moment (~700ms) after content is ready
        const holdTimer = setTimeout(() => {
            setIsRevealed(true);
        }, 700);

        // Phase 3: Cleanup after animation completes
        const cleanupTimer = setTimeout(() => {
            setShouldRender(false);
        }, 2200);

        return () => {
            clearTimeout(holdTimer);
            clearTimeout(cleanupTimer);
        };
    }, [isContentReady]);

    // Hard fallback so the site never stays hidden if the loading signal fails.
    useEffect(() => {
        const revealFallback = setTimeout(() => {
            setIsRevealed(true);
        }, 1200);

        const cleanupFallback = setTimeout(() => {
            setShouldRender(false);
        }, 2700);

        return () => {
            clearTimeout(revealFallback);
            clearTimeout(cleanupFallback);
        };
    }, []);

    // Custom easing curve - confident, controlled motion
    const splitEasing = [0.65, 0, 0.35, 1];

    return (
        <>
            {/* Main content - always rendered underneath */}
            <div style={{ visibility: isRevealed ? 'visible' : 'hidden' }}>
                {children}
            </div>

            {/* Split reveal overlay */}
            <AnimatePresence>
                {shouldRender && (
                    <div
                        className="fixed inset-0 z-[9999] pointer-events-none"
                        style={{ pointerEvents: isRevealed ? 'none' : 'auto' }}
                    >
                        {/* Top panel */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1/2 bg-black"
                            initial={{ y: 0 }}
                            animate={{ y: isRevealed ? '-100%' : 0 }}
                            transition={{
                                duration: 1.2,
                                ease: splitEasing,
                            }}
                        />

                        {/* Bottom panel */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"
                            initial={{ y: 0 }}
                            animate={{ y: isRevealed ? '100%' : 0 }}
                            transition={{
                                duration: 1.2,
                                ease: splitEasing,
                            }}
                        />

                        {/* Centered brand text */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isRevealed ? 0 : 1 }}
                            transition={{
                                duration: 0.6,
                                delay: isRevealed ? 0.3 : 0,
                                ease: 'easeOut'
                            }}
                        >
                            <h1
                                className="font-semibold uppercase tracking-[0.15em] select-none"
                                style={{
                                    fontSize: 'clamp(2rem, 10vw, 8rem)',
                                    color: 'transparent',
                                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
                                }}
                            >
                                LOOPERS STUDIO
                            </h1>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

