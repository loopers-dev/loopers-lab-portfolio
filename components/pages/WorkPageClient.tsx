'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Zap, Shield, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlowButton } from '@/components/ui/GlowButton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { ScrollReveal, TiltCard } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';

interface Project {
    id: string; title: string; category: string; description: string;
    challenge: string; architecture: string; color: string;
    tags: string[]; icon: React.ComponentType<{ className?: string }>; image?: string;
}

const projects: Project[] = [
    { id: 'academix', title: 'Academix', category: 'EdTech', description: 'A comprehensive learning management system with role-based access for instructors and students, featuring automated content generation.', challenge: 'Multi-tenant LMS for 10k+ users with complex role hierarchies and real-time collaboration.', architecture: 'Real-time progress tracking with Socket.io, modular microservices architecture, PostgreSQL with row-level security.', color: 'from-primary/20 to-secondary/20', tags: ['Next.js', 'AI Integration', 'Multi-role'], icon: Layers, image: '/work-page/academix.png' },
    { id: 'ecofit', title: 'EcoFit', category: 'E-commerce', description: 'Full-scale e-commerce solution with integrated inventory management and seamless payment processing via Stripe.', challenge: 'High-volume inventory & payment sync across multiple warehouses and sales channels.', architecture: 'Event-driven architecture with message queues for order processing, eventual consistency model.', color: 'from-secondary/20 to-primary/20', tags: ['React Native', 'Stripe', 'Real-time'], icon: Database, image: '/work-page/eco-fit.png' },
    { id: 'nclake', title: 'NC Lake Homes', category: 'Real Estate', description: 'A waterfront property listing platform specializing in lakefront homes and lots in the Blue Ridge Mountain Foothills of North Carolina.', challenge: 'Integrating reliable, real-time MLS data while providing a high-performance visual search experience.', architecture: 'Next.js optimized static builds, headless CMS integration, geographic querying via PostGIS.', color: 'from-blue-500/20 to-cyan-500/20', tags: ['Property Listings', 'MLS Integration', 'Responsive'], icon: Database, image: '/work-page/nclake.png' },
    { id: 'portal-learning', title: 'Portal Learning System', category: 'Enterprise Training', description: 'An employee training and compliance management platform with course assignment, phishing simulations, and real-time progress tracking dashboards.', challenge: 'Ensuring strict state compliance and auditability in training modules across thousands of disparate enterprise roles.', architecture: 'Serverless functions for tracking interactions, robust RBAC, multi-tenant separated data architecture.', color: 'from-indigo-500/20 to-purple-500/20', tags: ['Dashboard', 'Compliance', 'Analytics'], icon: Shield, image: '/work-page/portal-learning-system.png' },
    { id: 'enterprise-core', title: 'Enterprise Core', category: 'Internal Tools', description: 'Legacy-to-Cloud transformation for large scale organizations, moving from WinForms to modern web dashboards.', challenge: 'Migrating a monolithic on-prem application without data loss or downtime during the transition.', architecture: 'Strangler Fig pattern using API gateways, containerized microservices in AWS EKS, parallel database syncing.', color: 'from-emerald-500/20 to-teal-500/20', tags: ['Cloud Migration', 'Dashboard', 'Secure'], icon: Zap },
    { id: 'selecttech', title: 'SelectTech Inc', category: 'IT & Cybersecurity', description: 'AI-powered IT solutions & cybersecurity platform for a 23-year NC-based MSP — covering compliance management, managed IT, PC-Mac-Mobile repair services, and infrastructure.', challenge: 'Consolidating a wide range of services (FTC Safeguards, PCI, HIPAA compliance, device repair, network infrastructure) into one cohesive, modern web presence.', architecture: 'Vite + React SPA with modular service pages, animated UI with Framer Motion, SEO-optimized static output, integrated contact and pricing flows.', color: 'from-sky-500/20 to-blue-500/20', tags: ['Cybersecurity', 'MSP', 'AI Solutions', 'Compliance'], icon: ShieldCheck, image: '/work-page/selecttech.png' },
];

const categories = ['All', 'EdTech', 'E-commerce', 'Real Estate', 'Enterprise Training', 'Internal Tools', 'IT & Cybersecurity'];

export default function WorkPageClient() {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

    return (
        <Layout>
            <main className="pt-32 pb-24 relative">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute inset-0 grid-pattern opacity-70" />
                <div
                    className="absolute left-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-primary, #ff4444) 18%, transparent) 0%, transparent 72%)',
                    }}
                />
                <div
                    className="absolute right-[-10rem] top-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary, #8b5cf6) 12%, transparent) 0%, transparent 72%)',
                    }}
                />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <section className="relative mb-16 overflow-hidden rounded-[2rem] border border-border bg-background/25 px-6 pb-14 pt-16 backdrop-blur-sm sm:px-8 lg:px-14">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_42%)]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.08] via-transparent to-transparent" />

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-6 top-16 hidden xl:block"
                        >
                            <div className="glass max-w-[15rem] rounded-[1.5rem] border border-border px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                <div className="mb-3 flex items-center gap-3 text-primary">
                                    <Layers className="h-4 w-4" />
                                    <span className="text-[11px] uppercase tracking-[0.24em] text-foreground/40">
                                        Cross-Vertical
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-foreground/70">
                                    Case studies across EdTech, FinTech, commerce, and infrastructure systems.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-6 top-24 hidden xl:block"
                        >
                            <div className="glass max-w-[15rem] rounded-[1.5rem] border border-border px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                <div className="mb-3 flex items-center gap-3 text-primary">
                                    <Shield className="h-4 w-4" />
                                    <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                                        Architecture-Led
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-white/70">
                                    Product stories focused on systems, resilience, and scale rather than templates.
                                </p>
                            </div>
                        </motion.div>

                        <div className="relative mx-auto max-w-4xl text-center">
                            <ScrollReveal animation="fadeUp">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7 }}
                                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary"
                                    style={{
                                        boxShadow: '0 0 30px color-mix(in srgb, var(--accent-primary, #ff4444) 25%, transparent)',
                                    }}
                                >
                                    Case Studies
                                </motion.div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.08} animation="fadeUp">
                                <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[5.5rem]">
                                    Our <GradientText className="mt-2 inline-block">Work</GradientText>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.18} animation="fadeUp">
                                <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-foreground/60 md:text-2xl">
                                    Real projects, real impact. Explore how we&apos;ve helped founders build and
                                    scale their SaaS platforms.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.28} animation="fadeUp">
                                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-foreground/40">
                                    <span className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-2">
                                        Systems over templates
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                                        4 product verticals
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                                        Architecture first
                                    </span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.36} animation="fadeUp">
                                <div className="mt-12 flex justify-center">
                                    <div className="rounded-[1.35rem] border border-border bg-card/60 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                                        <Tabs defaultValue="All" onValueChange={setActiveCategory}>
                                            <TabsList className="border border-border bg-muted/80">
                                                {categories.map((category) => (
                                                    <TabsTrigger key={category} value={category}>
                                                        {category}
                                                    </TabsTrigger>
                                                ))}
                                            </TabsList>
                                        </Tabs>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    <motion.div layout className="grid md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div key={project.id} id={project.id} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ delay: index * 0.1 }} className="h-full">
                                <TiltCard tiltAmount={6} scale={1.01} className="h-full flex flex-col">
                                    <Card className="h-full flex flex-col overflow-hidden group border-border hover:border-primary/30">
                                        <div className="h-56 relative overflow-hidden shrink-0">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} ${project.category} case study preview`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                />
                                            ) : (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                                            )}

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border glow-primary">
                                                    <project.icon className="h-12 w-12 text-primary" />
                                                </motion.div>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="outline" className="bg-card/80 backdrop-blur-sm text-foreground border-border">{project.category}</Badge>
                                            </div>
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border">
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col flex-grow">
                                            <div className={`absolute inset-0 bg-gradient-to-tl ${project.color} opacity-20 pointer-events-none`} />
                                            <CardHeader className="relative">
                                                <CardTitle className="flex items-center justify-between text-2xl">{project.title}</CardTitle>
                                                <CardDescription className="text-base">{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4 relative flex-grow flex flex-col">
                                                <div className="p-4 rounded-lg bg-muted border border-border flex-1">
                                                    <h4 className="text-sm font-semibold mb-2 text-primary">Challenge</h4>
                                                    <p className="text-sm text-muted-foreground">{project.challenge}</p>
                                                </div>
                                                <div className="p-4 rounded-lg bg-muted border border-border flex-1">
                                                    <h4 className="text-sm font-semibold mb-2 text-secondary">Architecture</h4>
                                                    <p className="text-sm text-muted-foreground">{project.architecture}</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="relative mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">{tag}</Badge>
                                                    ))}
                                                </div>
                                            </CardFooter>
                                        </div>
                                    </Card>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </motion.div>
                    <ScrollReveal animation="scale" delay={0.2}>
                        <div className="text-center mt-24 p-16 rounded-2xl border border-border bg-card relative overflow-hidden">
                            <div className="absolute inset-0 glow-bg-red opacity-30" />
                            <div className="relative">
                                <h2 className="text-3xl sm:text-4xl font-black mb-4">Want to see your project here?</h2>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">Let&apos;s discuss how we can bring your SaaS vision to life.</p>
                                <Link href="/contact">
                                    <GlowButton size="lg" rounded="md">Start Your Project</GlowButton>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </Layout>
    );
}
