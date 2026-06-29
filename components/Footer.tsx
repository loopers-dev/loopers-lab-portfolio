'use client';

import Link from 'next/link';
import { GradientText } from '@/components/custom/GradientText';
import { Logo } from '@/components/ui/Logo';
import { useLanguage } from '@/context/LanguageContext';

const footerLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const getLocalizedLabel = (href: string, defaultLabel: string) => {
        switch (href) {
            case '/': return t('nav.home');
            case '/services': return t('nav.services');
            case '/work': return t('nav.work');
            case '/process': return t('nav.process');
            case '/about': return t('nav.about');
            case '/contact': return t('nav.startProject');
            default: return defaultLabel;
        }
    };

    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div>
                        <Link href="/" className="mb-4 flex items-center gap-3">
                            <div className="relative flex items-center">
                                <Logo className="h-16 md:h-20 w-auto" />
                            </div>
                        </Link>
                        <div className="max-w-xs text-sm leading-relaxed text-foreground/40">
                            {t('footer.tagline')}
                            <br />
                            <GradientText>{t('footer.builtForTime')}</GradientText>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-medium text-foreground/60">{t('footer.navigate')}</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-sm text-foreground/40 transition-colors hover:text-primary"
                                    >
                                        {getLocalizedLabel(link.path, link.label)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-medium text-foreground/60">{t('footer.getInTouch')}</h4>
                        <a
                            href="mailto:hello@looperslab.com"
                            className="text-sm text-foreground/40 transition-colors hover:text-primary"
                        >
                            hello@looperslab.com
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
                    <p className="text-xs text-foreground/30">
                        (c) {currentYear} Loopers Lab. {t('footer.allRightsReserved')}
                    </p>
                    <p className="text-xs text-foreground/30">{t('footer.taglineBottom')}</p>
                </div>
            </div>
        </footer>
    );
}

