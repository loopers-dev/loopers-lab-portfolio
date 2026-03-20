'use client'

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Paintbrush, Database, Cloud, Shield, Bot, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal, StaggerList, TiltCard, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';

const services = [
    {
        icon: Paintbrush,
        title: 'Web Design & UX',
        description: 'Figma workflows, wireframes, prototypes, and interface systems built around clear user journeys.',
    },
    {
        icon: Database,
        title: 'Website Building & Architecture',
        description: 'Web apps, portals, database planning, API flows, and delivery patterns designed for maintainability.',
    },
    {
        icon: Cloud,
        title: 'Hosting & CI/CD',
        description: 'Cloud setup, deployment pipelines, backups, SSL, monitoring, and infrastructure that stays predictable.',
    },
    {
        icon: Shield,
        title: 'Maintenance & Scalability',
        description: 'Security patches, performance tuning, observability, and technical support for products that keep evolving.',
    },
    {
        icon: Bot,
        title: 'AI Agents & Automation',
        description: 'LLM integrations, workflow automation, support bots, and content pipelines that reduce manual work.',
    },
    {
        icon: BarChart3,
        title: 'Data Analysis & Reporting',
        description: 'Dashboards, funnel tracking, analytics reviews, and decision-ready reporting for product and ops teams.',
    },
];

function AbstractSystemVideo({ scrollYProgress }: { scrollYProgress: any }) {
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.9],
        [0, 0, 0.5, 0.5, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0.15, 0.35, 0.85],
        [0.98, 1, 1]
    );

    const filter = useTransform(
        scrollYProgress,
        [0.7, 0.95],
        ['brightness(1)', 'brightness(0.2)']
    );

    return (
        <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-1/2 h-full pointer-events-none z-0 overflow-hidden"
            style={{ opacity, scale, filter }}
        >
            <div
                className="absolute inset-x-0 top-0 h-48 z-10"
                style={{
                    background: 'linear-gradient(to bottom, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />
            <div
                className="absolute inset-x-0 bottom-0 h-32 z-10"
                style={{
                    background: 'linear-gradient(to top, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />
            <div
                className="absolute inset-y-0 left-0 w-32 z-10"
                style={{
                    background: 'linear-gradient(to right, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-32 z-10"
                style={{
                    background: 'linear-gradient(to left, rgb(9, 9, 11) 0%, transparent 100%)'
                }}
            />

            <video
                src="/6143460-hd_1920_1080_24fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    return (
        <section
            ref={sectionRef}
            className="py-32 px-6 lg:px-8 relative overflow-hidden"
            style={{ backgroundColor: 'rgb(9, 9, 11)' }}
        >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <AbstractSystemVideo scrollYProgress={scrollYProgress} />

            <div className="relative max-w-6xl mx-auto z-10">
                <ScrollReveal animation="fadeUp" className="mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Services We <GradientText>Deliver</GradientText>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl">
                        Design, engineering, hosting, automation, and long-term support for software teams that need more than a one-time launch.
                    </p>
                </ScrollReveal>

                <StaggerList
                    className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8"
                    staggerDelay={0.1}
                    animation="fadeUp"
                >
                    {services.map((service) => (
                        <TiltCard key={service.title} className="h-full" tiltAmount={5} scale={1.02}>
                            <Card className="flex h-full min-h-[18rem] flex-col bg-zinc-900/80 p-8 backdrop-blur-sm" hoverable>
                                <CardContent className="flex h-full p-0">
                                    <div className="flex h-full items-start gap-5">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 relative">
                                            <service.icon className="h-7 w-7 text-primary" />
                                            <PulsingDot className="absolute -top-1 -right-1" size="sm" />
                                        </div>
                                        <div className="flex min-w-0 flex-1 flex-col">
                                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/40 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TiltCard>
                    ))}
                </StaggerList>
            </div>
        </section>
    );
}
