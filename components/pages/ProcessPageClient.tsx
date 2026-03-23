'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileCode, GitBranch, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal, StaggerList, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';

const phases = [
    {
        number: 1,
        title: 'Architecture',
        description: 'We define the foundation. Clean contracts, scalable data models, and technology validation.',
        icon: FileCode,
        color: 'from-primary to-secondary',
        deliverables: ['Technical requirements document', 'API specification (OpenAPI 3.0)', 'Database schema design', 'Infrastructure architecture diagram', 'Technology stack validation'],
        codeExample: `// API Contract Example\ninterface CreateUserRequest {\n  email: string;\n  name: string;\n  role: 'admin' | 'user';\n}`,
    },
    {
        number: 2,
        title: 'Development',
        description: 'Modular development. Component-driven UI, typed APIs, and rigorous Git workflow.',
        icon: GitBranch,
        color: 'from-secondary to-primary',
        deliverables: ['Feature branches with PR reviews', 'Component library documentation', 'API implementation with tests', 'Integration test suite', 'Weekly demo deployments'],
        codeExample: `// Clean Component Architecture\nexport const UserCard = ({ user }) => {\n  const { data } = useUser(user.id);\n  return (\n    <Card>\n      <Avatar src={data.avatar} />\n      <Text>{data.name}</Text>\n    </Card>\n  );\n};`,
    },
    {
        number: 3,
        title: 'DevOps & Scale',
        description: 'Automated pipelines, containerized deployment, and proactive monitoring ensure resilience.',
        icon: Rocket,
        color: 'from-primary/80 to-secondary/80',
        deliverables: ['CI/CD pipeline configuration', 'Docker containerization', 'Kubernetes manifests', 'Monitoring & alerting setup', 'Performance optimization'],
        codeExample: `# CI/CD Pipeline\nname: Deploy\non: push\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm test\n      - run: docker build -t app .`,
    },
];

function PhaseCard({ phase, index }: { phase: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start 85%', 'center center', 'end 15%'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.1, 1, 1, 0.1]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.85]);
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -30 : 30, 0, index % 2 === 0 ? 30 : -30]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
    
    // Blur effect
    const blurRaw = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [15, 0, 0, 15]);
    const filter = useTransform(blurRaw, (v) => `blur(${v}px)`);

    // Energy pulse
    const glowOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const boxShadow = useTransform(glowOpacity, (v) => `0 0 ${Number(v) * 60}px var(--accent-primary)`);
    const borderColor = useTransform(glowOpacity, (v) => `color-mix(in srgb, var(--accent-primary) ${Number(v) * 100}%, transparent)`);
    const cardBorder = useTransform(glowOpacity, (v) => `color-mix(in srgb, var(--accent-primary) ${Number(v) * 40}%, rgba(255,255,255,0.1))`);

    return (
        <div ref={cardRef} className={`relative mb-24 last:mb-0 sm:pl-24 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'}`} style={{ perspective: '1500px' }}>
            {/* Timeline Dot with Energy Pulse */}
            <motion.div 
               style={{ boxShadow, borderColor }} 
               className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl hidden sm:flex z-30 transition-colors duration-200 border-2 bg-gradient-to-br ${phase.color}`}
            >
                {phase.number}
            </motion.div>
            
            {/* 3D Glass Card */}
            <motion.div 
                style={{ opacity, scale, rotateY, rotateX, filter, transformOrigin: index % 2 === 0 ? 'right center' : 'left center', borderColor: cardBorder }}
                className={`group relative overflow-hidden rounded-[1.4rem] border border-border bg-background/40 backdrop-blur-2xl z-20 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
            >
                {/* Intense Internal Glow directly mapped to active center scroll state */}
                <motion.div style={{ opacity: glowOpacity, background: 'radial-gradient(circle at top right, var(--accent-primary) 0%, transparent 60%)' }} className="absolute inset-x-0 top-0 h-[200px] pointer-events-none mix-blend-screen" />
                
                <CardContent className="p-8 relative z-10">
                    <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} text-white shrink-0 relative`}>
                            <phase.icon className="h-6 w-6" />
                            <PulsingDot className="absolute -top-1 -right-1" size="sm" color="bg-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black mb-2 flex items-center gap-3 justify-start ${index % 2 === 0 ? 'lg:justify-end' : ''}">
                                Phase {phase.number}: {phase.title}
                            </h3>
                            <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                    </div>
                    <div className={`mb-6 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <h4 className="text-sm font-semibold text-primary mb-4">Deliverables</h4>
                        <StaggerList staggerDelay={0.08}>
                            {phase.deliverables.map((item: string) => (
                                <div key={item} className={`group/item flex items-center gap-3 text-sm text-muted-foreground mb-2 transition-colors duration-300 hover:text-foreground ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                                    onMouseEnter={(e) => {
                                        const svg = e.currentTarget.querySelector('svg');
                                        if (svg) {
                                            svg.style.color = 'var(--accent-secondary)';
                                            svg.style.filter = 'drop-shadow(0 0 8px var(--accent-secondary))';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const svg = e.currentTarget.querySelector('svg');
                                        if (svg) {
                                            svg.style.color = '';
                                            svg.style.filter = '';
                                        }
                                    }}
                                >
                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 transition-all duration-300" />
                                    {item}
                                </div>
                            ))}
                        </StaggerList>
                    </div>
                    {phase.codeExample && (
                        <motion.div className="rounded-xl bg-card border border-border overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative">
                            <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.02] border-b border-white/[0.05]">
                                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            </div>
                            {/* Auto-typing terminal reveal */}
                            <motion.pre 
                                initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                                viewport={{ margin: '-20% 0px -20% 0px' }}
                                transition={{ duration: 1.5, ease: 'linear' }}
                                className="p-5 text-[11px] sm:text-xs font-mono text-cyan-300 overflow-x-auto"
                            >
                                <code>{phase.codeExample}</code>
                            </motion.pre>
                        </motion.div>
                    )}
                </CardContent>
            </motion.div>
        </div>
    );
}

export default function ProcessPageClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    return (
        <Layout>
            <main className="pt-32 pb-24 relative overflow-hidden bg-background">
                <div className="absolute inset-0 glow-bg-purple opacity-50" />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-[-20rem] top-[10rem] h-[50rem] w-[50rem] rounded-full blur-[100px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-tertiary) 15%, transparent) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute right-[-10rem] bottom-[20rem] h-[40rem] w-[40rem] rounded-full blur-[100px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-primary) 15%, transparent) 0%, transparent 70%)' }}
                />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <ScrollReveal animation="fadeUp">
                            <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/10 text-primary">The SaaS Engine Blueprint</Badge>
                        </ScrollReveal>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                            Our <GradientText className="inline-block">Process</GradientText>
                        </h1>
                        <ScrollReveal delay={0.3} animation="fadeUp">
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A battle-tested methodology that transforms your vision into a production-ready, scalable SaaS platform.</p>
                        </ScrollReveal>
                    </div>
                    <div ref={containerRef} className="relative max-w-4xl mx-auto z-10">
                        {/* Static subtle track */}
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-foreground/[0.05] hidden sm:block" />
                        {/* Animated Glowing Line */}
                        <motion.div
                            style={{ 
                                scaleY: scrollYProgress,
                                backgroundImage: 'var(--accent-gradient)',
                                boxShadow: 'var(--accent-glow)' 
                            }}
                            className="absolute left-[31.5px] lg:left-[calc(50%-0.5px)] top-0 bottom-0 w-[2px] hidden sm:block origin-top z-0"
                        />
                        {phases.map((phase, index) => (
                            <PhaseCard key={phase.number} phase={phase} index={index} />
                        ))}
                    </div>
                    <ScrollReveal animation="scale" delay={0.2}>
                        <div className="text-center mt-24 p-16 rounded-2xl border border-border bg-card relative overflow-hidden">
                            <div className="absolute inset-0 glow-bg-mixed opacity-30" />
                            <div className="relative">
                                <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Start Your Project?</h2>
                                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let&apos;s discuss how our process can bring your SaaS vision to life.</p>
                                <Link href="/contact">
                                    <GlowButton size="lg" rounded="md" className="inline-flex items-center gap-2">
                                        Schedule a Call <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </GlowButton>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </Layout>
    );
}
