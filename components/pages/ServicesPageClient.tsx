'use client';

import type { ComponentType } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
        image: '/service-page/service-1.jpg',
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
        image: '/service-page/service-2.jpg',
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
        image: '/service-page/service-3.jpg',
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
        image: '/service-page/service-4.jpg',
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
        image: '/service-page/service-5.jpg',
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
        image: '/service-page/service-6.jpg',
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
        image: '/service-page/service-7.jpg',
        layout: 'image-left' as const,
    },
];

import Image from 'next/image';

function ServiceSection({ service, index }: { service: (typeof services)[0]; index: number }) {
    const bgColors = [
        'bg-[#0f1115]',
        'bg-[#13161c]',
        'bg-[#181b21]',
        'bg-[#1a1e26]',
        'bg-[#1c212a]',
        'bg-[#1d232e]',
        'bg-[#202733]'
    ];
    
    // Reverse content block placement every other slide (left/right)
    const isEven = index % 2 === 0;

    return (
        <section 
            className={`sticky top-0 h-screen w-full flex items-center overflow-hidden border-t border-border ${bgColors[index % bgColors.length]} shadow-[0_-20px_50px_rgba(0,0,0,0.5)] group`}
            style={{ zIndex: index + 10 }}
            id={`service-${index + 1}`}
        >
            {/* FULL-BLEED BACKGROUND IMAGE */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                {service.image ? (
                    <Image
                        src={service.image}
                        alt={service.imageDescription}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                ) : (
                    <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
                )}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center h-full">
                {/* GLASSMORPHIC CONTENT BLOCK */}
                <div className={`w-full max-w-xl ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                    <ScrollReveal animation="fadeUp" delay={0.1}>
                        <div className="glass rounded-[2rem] border border-border p-6 lg:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden bg-card/40 backdrop-blur-xl group-hover:bg-card/50 transition-colors duration-700">
                            
                            {/* Decorative Top Glow */}
                            <div className="absolute inset-x-0 top-0 h-[2px] opacity-60 bg-gradient-to-r from-transparent via-primary to-transparent" />
                            
                            <div className="flex items-center gap-4 mb-5">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-xl font-black text-transparent bg-clip-text tracking-[0.2em]" style={{ backgroundImage: 'var(--accent-gradient)' }}>
                                    {service.number}
                                </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-5 leading-[1.05]">
                                {service.title}
                            </h2>
                            
                            <p className="text-lg md:text-xl font-medium italic mb-6 shadow-sm" style={{ color: 'var(--accent-secondary)' }}>
                                {service.slogan}
                            </p>
                            
                            <div className="pt-5 border-t border-border/50">
                                <p className="text-foreground/75 leading-relaxed text-base">
                                    {service.content}
                                </p>
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

function LogoPlaceholder() {
    return (
        <div className="w-24 h-12 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
            <Award className="w-5 h-5 text-foreground/20" />
        </div>
    );
}

export default function ServicesPageClient() {
    return (
        <Layout>
            <div className="relative bg-background">
                
                {/* HERO SECTION - Normal Scroll */}
                <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-8 overflow-hidden z-0">
                    <div className="absolute inset-0 glow-bg-red opacity-30" />
                    <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />
                    
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute left-[-20rem] top-[-10rem] h-[50rem] w-[50rem] rounded-full blur-[100px] pointer-events-none"
                        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary) 15%, transparent) 0%, transparent 70%)' }}
                    />

                    <div className="relative z-10 max-w-6xl mx-auto text-center">
                        <ScrollReveal animation="fadeUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-mono uppercase tracking-widest text-foreground/70">Full-Stack Solutions</span>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fadeUp" delay={0.1}>
                            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-foreground tracking-[-0.04em] mb-8 leading-[0.95]">
                                Software Delivery <br className="hidden md:block" />
                                <GradientText>End-To-End</GradientText>.
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fadeUp" delay={0.2}>
                            <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-3xl mx-auto mb-12">
                                We don't just write code. We build the architecture, design the interfaces, set up the deployments, and handle long-term scalability.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fadeUp" delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link href="#service-1">
                                    <GlowButton size="lg" rounded="full" className="px-8 py-4 text-lg">
                                        Explore Our Process
                                    </GlowButton>
                                </Link>
                                <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/80">
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                    
                    {/* Scroll Down Indicator */}
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-mono">Scroll</span>
                        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                    </motion.div>
                </section>

                {/* STICKY SERVICES STACK */}
                <div className="relative w-full" id="service-1">
                    {services.map((service, index) => (
                        <ServiceSection key={service.number} service={service} index={index} />
                    ))}
                </div>

                {/* CALL TO ACTION - Final sticky slide or normal flow */}
                <section className="relative z-50 px-6 lg:px-8 py-32 bg-background border-t border-white/5 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 glow-bg-mixed opacity-40 pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center relative">
                        <ScrollReveal animation="scale">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-8 leading-tight">
                                Ready to build the <GradientText>next big thing</GradientText>?
                            </h2>
                            <Link href="/contact">
                                <GlowButton size="lg" rounded="full" className="inline-flex items-center gap-3 px-8 py-5 text-xl font-bold mx-auto transition-transform hover:scale-105">
                                    Book a Consultation
                                    <ArrowRight className="h-6 w-6" />
                                </GlowButton>
                            </Link>
                            <div className="mt-20">
                                <p className="text-xs text-foreground/30 uppercase tracking-[0.2em] font-mono mb-8">Systems We Currently Support</p>
                                <div className="flex flex-wrap items-center justify-center gap-4 opacity-70">
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
