import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Server, Zap, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal, StaggerList, TiltCard, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';

const services = [
    {
        icon: Code2,
        title: 'Design Systems',
        description: 'We create component-based design systems that scale with your product.',
        details: [
            'Design tokens and variables',
            'Reusable component libraries',
            'Documentation and usage guidelines',
            'Version control for design assets',
        ],
        summary: 'Clients receive a living system — not static mockups.',
    },
    {
        icon: Server,
        title: 'Deployment & Infrastructure',
        description: 'We handle the full path from code to production.',
        details: [
            'CI/CD pipeline configuration',
            'Hosting setup and optimization',
            'Domain, SSL, and DNS management',
            'Environment configuration (staging, production)',
        ],
        summary: 'Your system ships reliably. Every time.',
    },
    {
        icon: Zap,
        title: 'Performance & Scalability',
        description: 'Speed is a feature. We optimize for:',
        details: [
            'Core Web Vitals compliance',
            'Asset optimization and lazy loading',
            'Caching strategies',
            'Architecture that handles traffic growth',
        ],
        summary: 'Fast now. Faster later.',
    },
    {
        icon: RefreshCw,
        title: 'Maintenance & Evolution',
        description: 'Websites are not finished products. They evolve. We provide:',
        details: [
            'Ongoing technical support',
            'Security updates and patches',
            'Feature iterations and improvements',
            'Performance monitoring',
        ],
        summary: 'We stay with projects after launch.',
    },
];

const boundaries = [
    'One-time landing pages with no long-term plan',
    'Unstructured "creative" work without a system',
    'Projects without clear ownership and feedback loops',
    'Rushing to launch without proper architecture',
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 glow-bg-red" />
            <div className="absolute inset-0 grid-pattern" />

            {/* Hero Section */}
            <section className="relative px-6 lg:px-8 mb-20">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal animation="fadeUp">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                            <GradientText>Services</GradientText>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeUp" delay={0.1}>
                        <p className="text-xl text-white/50 leading-relaxed">
                            We build web systems designed for clarity, performance, and longevity.
                            Every project is a structure — not a collection of pages.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services Detail */}
            <section className="relative px-6 lg:px-8 mb-32">
                <div className="max-w-4xl mx-auto">
                    <StaggerList className="space-y-16" staggerDelay={0.15}>
                        {services.map((service, index) => (
                            <TiltCard key={service.title} tiltAmount={3} scale={1.01}>
                                <Card className="p-8 md:p-12">
                                    <CardContent className="p-0">
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 relative">
                                                <service.icon className="h-7 w-7 text-primary" />
                                                <PulsingDot className="absolute -top-1 -right-1" size="sm" />
                                            </div>
                                            <div>
                                                <span className="text-sm text-white/30 font-mono">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                    {service.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="ml-20">
                                            <p className="text-white/50 mb-6">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-3 mb-6">
                                                {service.details.map((detail) => (
                                                    <li key={detail} className="flex items-center gap-3 text-white/40">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-white/70 font-medium gradient-text inline-block">
                                                {service.summary}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TiltCard>
                        ))}
                    </StaggerList>
                </div>
            </section>

            {/* What We Don't Do */}
            <section className="relative px-6 lg:px-8 mb-20">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal animation="fadeUp">
                        <Card className="p-8 md:p-12" glow>
                            <CardContent className="p-0">
                                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                                    What We <span className="text-primary">Don't</span> Do
                                </h3>
                                <StaggerList className="space-y-4 mb-6" staggerDelay={0.1}>
                                    {boundaries.map((boundary) => (
                                        <div key={boundary} className="flex items-start gap-3 text-white/40">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20" />
                                            {boundary}
                                        </div>
                                    ))}
                                </StaggerList>
                                <p className="text-white/50">
                                    We're selective. This allows us to deliver work that lasts.
                                </p>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="relative px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal animation="scale">
                        <p className="text-lg text-white/50 mb-8">
                            Have a project that fits this approach?
                        </p>
                        <Link to="/contact">
                            <GlowButton size="lg" rounded="md" className="inline-flex items-center gap-2">
                                Let's Talk
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </GlowButton>
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
