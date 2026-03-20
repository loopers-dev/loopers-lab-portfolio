'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '@/context/ThemeContext';
import { GlowButton } from '@/components/ui/GlowButton';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
];

export default function Header() {
    const navRef = useRef<HTMLElement>(null);
    const navInnerRef = useRef<HTMLDivElement>(null);
    const activeIndicatorRef = useRef<HTMLDivElement>(null);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const [mobileMenuRoute, setMobileMenuRoute] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const pathname = usePathname();
    const navigate = useRouter();
    const { cycleColorTheme } = useTheme();
    const isMobileMenuOpen = mobileMenuRoute === pathname;

    // GSAP ScrollTrigger for navbar shrink effect
    useEffect(() => {
        const nav = navRef.current;
        const navInner = navInnerRef.current;
        const scrollTriggerRoot = document.documentElement;
        if (!nav || !navInner) return;

        gsap.set(navInner, {
            transformOrigin: 'top center',
        });

        const ctx = gsap.context(() => {
            const navTl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollTriggerRoot,
                    start: 'top top',
                    end: '200 top',
                    scrub: 0.8,
                    onUpdate: (self) => {
                        if (self.progress > 0.1) {
                            navInner.classList.add('nav-scrolled');
                        } else {
                            navInner.classList.remove('nav-scrolled');
                        }
                    }
                }
            });

            navTl.to(navInner, {
                y: 10,
                scale: 0.92,
                borderRadius: '999px',
                ease: 'none',
            }, 0);

        }, nav);

        return () => ctx.revert();
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setMobileMenuRoute(null);
    };

    const toggleMobileMenu = () => {
        setMobileMenuRoute(current => (current === pathname ? null : pathname));
    };

    // Get offset left for indicator positioning
    const getOffsetLeft = (element: HTMLElement) => {
        if (!linksContainerRef.current || !activeIndicatorRef.current) return 0;
        const elementRect = element.getBoundingClientRect();
        const containerRect = linksContainerRef.current.getBoundingClientRect();
        return elementRect.left - containerRect.left + (elementRect.width - 36) / 2;
    };

    // Position indicator on mount and route change
    useEffect(() => {
        const activeIndex = navLinks.findIndex(link => link.href === pathname);
        if (activeIndex !== -1 && linksRef.current[activeIndex] && activeIndicatorRef.current) {
            const activeLink = linksRef.current[activeIndex]!;
            gsap.set(activeIndicatorRef.current, {
                x: getOffsetLeft(activeLink),
                opacity: 1,
            });
        }
    }, [pathname]);

    // Handle nav link click with beam animation
    const handleNavClick = (index: number) => {
        const targetLink = linksRef.current[index];
        const indicator = activeIndicatorRef.current;
        const container = linksContainerRef.current;

        if (!targetLink || !indicator || !container || isAnimating) return;

        const currentIndex = navLinks.findIndex(link => link.href === pathname);
        if (index === currentIndex) return;

        const newX = getOffsetLeft(targetLink);
        const currentX = gsap.getProperty(indicator, 'x') as number || 0;
        const distance = Math.abs(newX - currentX);
        const direction = index > currentIndex ? 1 : -1;

        setIsAnimating(true);

        // Create beam/trail effect
        const beam = document.createElement('div');
        beam.className = 'nav-beam';
        beam.style.cssText = `
            position: absolute;
            bottom: 0;
            left: ${currentX}px;
            height: 3px;
            width: 36px;
            background: linear-gradient(${direction > 0 ? '90deg' : '-90deg'}, color-mix(in srgb, var(--accent-primary), transparent 20%), transparent);
            border-radius: 2px;
            filter: blur(1px);
            pointer-events: none;
        `;
        container.appendChild(beam);

        // Animate beam expansion
        gsap.to(beam, {
            width: distance + 36,
            x: direction > 0 ? 0 : -(distance),
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
                // Animate beam shrink
                gsap.to(beam, {
                    width: 0,
                    x: direction > 0 ? distance + 36 : 0,
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power2.in',
                    onComplete: () => {
                        beam.remove();
                    }
                });
            }
        });

        // Move indicator
        gsap.to(indicator, {
            x: newX,
            duration: 0.5,
            ease: 'power3.out',
            onComplete: () => {
                setIsAnimating(false);
            }
        });
    };

    return (
        <>
            <style>{`
                .nav-inner {
                    width: 100%;
                    padding: 16px 50px;
                    border-radius: 0.25rem !important;
                    background: transparent;
                    backdrop-filter: none;
                    border: 1px solid transparent;
                    box-shadow: none;
                    transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                }
                .nav-inner.nav-scrolled {
                    background: rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
                    border-color: rgba(255, 255, 255, 0.2);
                    border-radius: 0.25rem !important;
                }
                .nav-link-text {
                    position: relative;
                    display: inline-block;
                }
                .nav-link-text::after {
                    content: attr(data-text);
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: var(--accent-primary);
                    clip-path: inset(0 100% 0 0);
                    transition: clip-path 0.3s ease;
                }
                .nav-link:hover .nav-link-text::after {
                    clip-path: inset(0 0 0 0);
                }
            `}</style>

            <motion.header
                ref={navRef}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="fixed top-0 left-0 right-0 z-50"
            >
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        ref={navInnerRef}
                        className="nav-inner mt-4 rounded px-6 py-4"
                    >
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); cycleColorTheme(); navigate.push('/'); }}>
                                <motion.div
                                    className="relative h-10 w-10"
                                    whileHover={{ rotate: 180, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary glow-red" />
                                    <div className="absolute inset-[2px] rounded-[10px] bg-[#0B0B0C] flex items-center justify-center">
                                        <span className="text-xl font-black text-primary">∞</span>
                                    </div>
                                </motion.div>
                                <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">Studio</span>
                            </Link>

                            {/* Desktop Navigation */}
                            <div ref={linksContainerRef} className="hidden md:flex items-center gap-1 relative">
                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            ref={(el) => { linksRef.current[index] = el; }}
                                            href={link.href}
                                            onClick={() => handleNavClick(index)}
                                            className={cn(
                                                'nav-link relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                                                isActive ? 'text-primary' : 'text-white/60 hover:text-white'
                                            )}
                                        >
                                            <span className="nav-link-text" data-text={link.label}>
                                                {link.label}
                                            </span>
                                        </Link>
                                    );
                                })}

                                {/* Active indicator */}
                                <div
                                    ref={activeIndicatorRef}
                                    className="absolute left-0 bottom-0 h-[3px] w-[36px] rounded-full bg-white opacity-0"
                                    style={{
                                        boxShadow: '0 0 10px color-mix(in srgb, var(--accent-primary), transparent 40%), 0 0 20px color-mix(in srgb, var(--accent-primary), transparent 60%)',
                                    }}
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex items-center gap-3">
                                {/* CTA Button using GlowButton component */}
                                <Link href="/contact" className="hidden sm:block">
                                    <GlowButton size="sm" rounded="sm">
                                        Start a Project
                                    </GlowButton>
                                </Link>

                                {/* Mobile menu button */}
                                <button
                                    onClick={toggleMobileMenu}
                                    className={cn(
                                        "md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors",
                                        isMobileMenuOpen ? "bg-white/10" : "hover:bg-white/5"
                                    )}
                                    aria-label="Toggle menu"
                                >
                                    <span className={cn(
                                        "block w-5 h-0.5 bg-white rounded transition-all duration-300",
                                        isMobileMenuOpen && "rotate-45 translate-y-2"
                                    )} />
                                    <span className={cn(
                                        "block w-5 h-0.5 bg-white rounded transition-all duration-300",
                                        isMobileMenuOpen && "opacity-0 -translate-x-2"
                                    )} />
                                    <span className={cn(
                                        "block w-5 h-0.5 bg-white rounded transition-all duration-300",
                                        isMobileMenuOpen && "-rotate-45 -translate-y-2"
                                    )} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={closeMobileMenu}
                        />
                    )
                }
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-[85%] max-w-[350px] h-full bg-zinc-900 border-l border-white/10 z-50 overflow-y-auto"
                        >
                            <div className="pt-24 px-8 pb-10">
                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={closeMobileMenu}
                                                className={cn(
                                                    'block py-4 text-lg font-medium border-b border-white/5 transition-colors',
                                                    isActive ? 'text-primary' : 'text-white/60 hover:text-white hover:pl-2'
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Link
                                        href="/contact"
                                        onClick={closeMobileMenu}
                                        className="mt-8 block"
                                    >
                                        <GlowButton size="md" rounded="md" className="w-full">
                                            Start a Project
                                        </GlowButton>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}
