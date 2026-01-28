import { Link } from 'react-router-dom';
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="relative h-8 w-8">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                                <div className="absolute inset-[2px] rounded-[6px] bg-[#0B0B0C] flex items-center justify-center">
                                    <span className="text-sm font-black text-primary">∞</span>
                                </div>
                            </div>
                            <span className="text-lg font-bold tracking-tight">Studio</span>
                        </Link>
                        <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                            Design systems. Deployment. Maintenance.
                            <br />
                            <GradientText>Built for time.</GradientText>
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-medium text-white/60 mb-4">Navigate</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-white/40 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-medium text-white/60 mb-4">Get in touch</h4>
                        <a
                            href="mailto:hello@studio.com"
                            className="text-sm text-white/40 hover:text-primary transition-colors"
                        >
                            hello@studio.com
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/30">
                        © {currentYear} Studio. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">
                        Systems, not pages.
                    </p>
                </div>
            </div>
        </footer>
    );
}
