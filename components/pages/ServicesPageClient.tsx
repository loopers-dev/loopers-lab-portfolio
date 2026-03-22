'use client';

import type { ComponentType } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Paintbrush,
    Code2,
    Cloud,
    Shield,
    Bot,
    BarChart3,
    BookOpen,
    Monitor,
    Award,
} from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';

const services = [
    {
        number: '01',
        icon: Paintbrush,
        title: 'Web Design & UX Systems',
        slogan: 'Interfaces planned for clarity, conversion, and real workflows.',
        content:
            'We design in Figma before we build. That includes UX research, user flows, wireframes, clickable prototypes, brand systems, and reusable design libraries. The goal is not just to make things look good. It is to create interfaces your team can keep extending without visual chaos.',
        imageDescription:
            'A design workflow board showing wireframes, polished UI screens, typography, and reusable components.',
        layout: 'image-left' as const,
    },
    {
        number: '02',
        icon: Code2,
        title: 'Website Building & System Architecture',
        slogan: 'From marketing sites to portals, dashboards, and internal tools.',
        content:
            'We build custom websites and software systems with the structure behind them: API contracts, database schema planning, architecture diagrams, CMS decisions, and technical roadmaps. This is where web development, database design, build tooling, and workflow planning come together as one delivery stream.',
        imageDescription:
            'A technical blueprint showing app screens connected to APIs, database tables, and system diagrams.',
        layout: 'image-right' as const,
    },
    {
        number: '03',
        icon: Cloud,
        title: 'Hosting, DevOps & Infrastructure',
        slogan: 'Deployment pipelines and cloud foundations that stay predictable.',
        content:
            'We set up hosting the way teams actually need it: VPS or cloud, Dockerized deployment, CI/CD pipelines, reverse proxy, SSL, automated backups, monitoring, and rollback planning. Whether the stack lives on AWS, GCP, Azure, or a lean VPS, we shape it for stability and repeatable releases.',
        imageDescription:
            'A deployment dashboard with pipelines, cloud regions, SSL status, backup history, and monitoring widgets.',
        layout: 'image-left' as const,
    },
    {
        number: '04',
        icon: Shield,
        title: 'Maintenance, Performance & Scalability',
        slogan: 'Long-term care for software that keeps changing after launch.',
        content:
            'Maintenance is not only bug fixing. We handle performance tuning, Core Web Vitals, observability, security hardening, uptime checks, patching, and scale reviews as your stack grows. We can also fold in technical SEO, schema work, and ongoing optimization when the product depends on search visibility.',
        imageDescription:
            'A maintenance panel showing speed scores, uptime checks, patch schedules, and scaling milestones.',
        layout: 'image-right' as const,
    },
    {
        number: '05',
        icon: Bot,
        title: 'AI Agents & Workflow Automation',
        slogan: 'Automate repetitive work without breaking the stack.',
        content:
            'We integrate AI where it is useful: support bots, report automation, proposal generation, smart dashboards, custom LLM workflows, and internal assistants connected to your real data. That also includes Zapier, Make, and custom API automations that remove copy-paste operations from the team.',
        imageDescription:
            'An automation canvas connecting AI agents, apps, datasets, and approval steps into one workflow.',
        layout: 'image-left' as const,
    },
    {
        number: '06',
        icon: BarChart3,
        title: 'Data Analysis & Reporting',
        slogan: 'Dashboards and insights your team can actually use.',
        content:
            'We help teams turn operational and product data into something actionable: KPI dashboards, funnel analysis, heatmaps, reporting flows, and monthly insight reviews. Instead of raw numbers sitting in disconnected tools, we shape them into decision-ready reporting for product, marketing, and operations.',
        imageDescription:
            'A reporting screen with funnels, trend charts, segment views, and highlighted KPI callouts.',
        layout: 'image-right' as const,
    },
    {
        number: '07',
        icon: BookOpen,
        title: 'Content Operations & CMS Support',
        slogan: 'Keep content moving without manual bottlenecks.',
        content:
            'We support the day-to-day content side too: blog publishing workflows, product updates, landing page refreshes, structured content systems, and AI-assisted content pipelines with review controls. If your team regularly edits content, we design the process so updates are faster, safer, and easier to delegate.',
        imageDescription:
            'A content operations board with CMS entries, publishing stages, AI-assisted drafts, and review checkpoints.',
        layout: 'image-left' as const,
    },
];

function ImagePlaceholder({
    icon: Icon,
    description,
    className = '',
}: {
    icon: ComponentType<{ className?: string }>;
    description: string;
    className?: string;
}) {
    return (
        <div className={`relative rounded-xl bg-[#1a1a1c] border border-border overflow-hidden flex flex-col items-center justify-center min-h-[320px] lg:min-h-[400px] ${className}`}>
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-20" style={{ background: 'var(--accent-primary)' }} />
                <div className="relative w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white/40" />
                </div>
            </div>
            <p className="text-white/30 text-xs text-center max-w-[260px] leading-relaxed px-4">Image: {description}</p>
        </div>
    );
}

function ServiceSection({ service, index }: { service: (typeof services)[0]; index: number }) {
    const isImageLeft = service.layout === 'image-left';
    const imageBlock = (
        <ScrollReveal animation="fadeUp" delay={0.1}>
            <ImagePlaceholder icon={service.icon} description={service.imageDescription} />
        </ScrollReveal>
    );

    const contentBlock = (
        <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="flex flex-col justify-center h-full">
                <span className="text-sm font-mono text-primary/60 mb-3 tracking-widest">{service.number}</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                    {service.title}
                </h2>
                <p className="text-sm italic text-primary/80 mb-6">{service.slogan}</p>
                <p className="text-white/50 leading-relaxed text-[15px]">{service.content}</p>
            </div>
        </ScrollReveal>
    );

    return (
        <section className="relative px-6 lg:px-8" id={`service-${index + 1}`}>
            {index % 3 === 0 && <div className="absolute inset-0 glow-bg-red opacity-30 pointer-events-none" />}
            {index % 3 === 1 && <div className="absolute inset-0 glow-bg-purple opacity-20 pointer-events-none" />}
            <div className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isImageLeft ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={!isImageLeft ? 'lg:[direction:ltr]' : ''}>{isImageLeft ? imageBlock : contentBlock}</div>
                    <div className={!isImageLeft ? 'lg:[direction:ltr]' : ''}>{isImageLeft ? contentBlock : imageBlock}</div>
                </div>
            </div>
        </section>
    );
}

function LogoPlaceholder() {
    return (
        <div className="w-24 h-12 rounded-lg bg-[#1a1a1c] border border-border flex items-center justify-center">
            <Award className="w-5 h-5 text-white/20" />
        </div>
    );
}

export default function ServicesPageClient() {
    return (
        <Layout>
            <div className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 glow-bg-red" />
                <div className="absolute inset-0 grid-pattern" />

                <section className="relative px-6 lg:px-8 mb-24 lg:mb-32">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <ScrollReveal animation="fadeUp">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                                        <GradientText>Software Services</GradientText> for teams that need design, systems, and long-term support.
                                    </h1>
                                </ScrollReveal>
                                <ScrollReveal animation="fadeUp" delay={0.1}>
                                    <p className="text-lg md:text-xl text-white/50 leading-relaxed">
                                        Web design, system architecture, hosting, maintenance, AI automation, analytics, and content operations in one delivery stack.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <ScrollReveal animation="fadeUp" delay={0.2}>
                                <ImagePlaceholder
                                    icon={Monitor}
                                    description="A software services overview spanning design systems, app architecture, deployment pipelines, analytics, and content operations."
                                />
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                <div className="space-y-24 lg:space-y-32 mb-24 lg:mb-32">
                    {services.map((service, index) => (
                        <ServiceSection key={service.number} service={service} index={index} />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24 lg:mb-32">
                    <div className="line-glow" />
                </div>

                <section className="relative px-6 lg:px-8">
                    <div className="absolute inset-0 glow-bg-mixed opacity-40 pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center relative">
                        <ScrollReveal animation="scale">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
                                Need one team for <GradientText>design, delivery, and support</GradientText>?
                            </h2>
                            <Link href="/contact">
                                <GlowButton size="lg" rounded="md" className="inline-flex items-center gap-2 mx-auto">
                                    Book a Consultation
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </GlowButton>
                            </Link>
                            <div className="mt-16">
                                <p className="text-xs text-white/25 uppercase tracking-widest mb-6">Systems We Commonly Support</p>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    {[1, 2, 3, 4, 5].map((i) => <LogoPlaceholder key={i} />)}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
