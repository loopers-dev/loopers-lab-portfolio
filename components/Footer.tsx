'use client';

import Link from 'next/link';
import { GradientText } from '@/components/custom/GradientText';

const footerLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div>
                        <Link href="/" className="mb-4 flex items-center gap-3">
                            <div className="relative h-8 w-8">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                                <div className="absolute inset-[2px] flex items-center justify-center rounded-[6px] bg-[#0B0B0C]">
                                    <span className="text-[9px] font-black tracking-tight text-primary">LL</span>
                                </div>
                            </div>
                            <span className="text-lg font-bold tracking-tight">Loopers Lab</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-white/40">
                            Design systems. Deployment. Maintenance.
                            <br />
                            <GradientText>Built for time.</GradientText>
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-medium text-white/60">Navigate</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-sm text-white/40 transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-medium text-white/60">Get in touch</h4>
                        <a
                            href="mailto:hello@looperslab.com"
                            className="text-sm text-white/40 transition-colors hover:text-primary"
                        >
                            hello@looperslab.com
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
                    <p className="text-xs text-white/30">
                        (c) {currentYear} Loopers Lab. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">Systems, not pages.</p>
                </div>
            </div>
        </footer>
    );
}
