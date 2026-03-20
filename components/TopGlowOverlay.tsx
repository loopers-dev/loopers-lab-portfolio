'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

// MokN-style fixed glow overlay at viewport top
// Appears after hero section, fades out during ProcessSection dot animation, reappears after

export default function TopGlowOverlay() {
    const pathname = usePathname();
    const [sectionPositions, setSectionPositions] = useState({
        heroEnd: 0,
        processStart: 0,
        processEnd: 0,
    });
    const { scrollY } = useScroll();

    // Calculate section positions
    useEffect(() => {
        const calculatePositions = () => {
            const viewportHeight = window.innerHeight;
            const heroSection = pathname === '/' ? document.getElementById('home-hero') : null;
            const heroRect = heroSection?.getBoundingClientRect();
            const heroEnd = heroRect
                ? window.scrollY + heroRect.top + heroRect.height
                : viewportHeight * 4;

            // Find ProcessSection by its ID
            const processSection = document.getElementById('section-features');
            if (processSection) {
                const rect = processSection.getBoundingClientRect();
                const processStart = window.scrollY + rect.top;
                const processEnd = processStart + rect.height;

                setSectionPositions({
                    heroEnd,
                    processStart,
                    processEnd,
                });
            } else {
                setSectionPositions({
                    heroEnd,
                    processStart: heroEnd + viewportHeight, // Estimate
                    processEnd: heroEnd + viewportHeight * 4, // Estimate
                });
            }
        };

        // Calculate on mount and after a delay (for sections to render)
        calculatePositions();
        const timeout = setTimeout(calculatePositions, 1000);

        window.addEventListener('resize', calculatePositions);
        return () => {
            window.removeEventListener('resize', calculatePositions);
            clearTimeout(timeout);
        };
    }, [pathname]);

    // Glow opacity logic:
    // 1. Fade in after hero (70% -> 95% of heroEnd)
    // 2. Stay visible through ServicesSection
    // 3. Fade out when entering ProcessSection (processStart -> processStart + 300px)
    // 4. Stay off during dot animation
    // 5. Fade back in at end of ProcessSection (processEnd - 300px -> processEnd)

    const glowOpacity = useTransform(
        scrollY,
        [
            sectionPositions.heroEnd * 0.7,      // Start fade in
            sectionPositions.heroEnd * 0.95,     // Full visible
            sectionPositions.processStart,        // Start fade out
            sectionPositions.processStart + 400,  // Fully hidden
            sectionPositions.processEnd - 400,    // Start fade in again
            sectionPositions.processEnd,          // Full visible again
        ],
        [0, 1, 1, 0, 0, 1]
    );

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-96 pointer-events-none z-40"
            style={{
                opacity: glowOpacity,
                background: `
                    radial-gradient(
                        ellipse 40% 80% at 50% 0%,
                        color-mix(in srgb, var(--accent-primary, #ff4444) 70%, transparent) 0%,
                        color-mix(in srgb, var(--accent-primary, #ff4444) 35%, transparent) 30%,
                        color-mix(in srgb, var(--accent-primary, #ff4444) 10%, transparent) 60%,
                        transparent 100%
                    )
                `
            }}
        />
    );
}

