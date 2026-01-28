import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, Database, Zap, Shield, ArrowUpRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GlowButton } from '@/components/ui/GlowButton'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { SplitText, ScrollReveal, TiltCard } from '@/components/animations'

interface Project {
    id: string
    title: string
    category: string
    description: string
    challenge: string
    architecture: string
    color: string
    tags: string[]
    icon: React.ComponentType<{ className?: string }>
}

const projects: Project[] = [
    {
        id: 'academix',
        title: 'Academix',
        category: 'EdTech',
        description: 'A comprehensive multi-tenant Learning Management System serving 10,000+ concurrent users across multiple institutions.',
        challenge: 'Multi-tenant LMS for 10k+ users with complex role hierarchies and real-time collaboration.',
        architecture: 'Real-time progress tracking with Socket.io, modular microservices architecture, PostgreSQL with row-level security.',
        color: 'from-primary/20 to-secondary/20',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis'],
        icon: Layers,
    },
    {
        id: 'ecofit',
        title: 'EcoFit',
        category: 'E-commerce',
        description: 'High-performance e-commerce engine with real-time inventory management and multi-channel payment processing.',
        challenge: 'High-volume inventory & payment sync across multiple warehouses and sales channels.',
        architecture: 'Event-driven architecture with message queues for order processing, eventual consistency model.',
        color: 'from-secondary/20 to-primary/20',
        tags: ['Next.js', 'Node.js', 'MongoDB', 'RabbitMQ', 'Stripe'],
        icon: Database,
    },
    {
        id: 'finflow',
        title: 'FinFlow',
        category: 'FinTech',
        description: 'Real-time payment processing platform handling millions in daily transactions with bank-grade security.',
        challenge: 'Sub-100ms payment processing with full audit trails and compliance requirements.',
        architecture: 'CQRS pattern, event sourcing for audit compliance, distributed transactions with Saga pattern.',
        color: 'from-primary/30 to-secondary/10',
        tags: ['React', 'Go', 'PostgreSQL', 'Kafka', 'Kubernetes'],
        icon: Zap,
    },
    {
        id: 'securestack',
        title: 'SecureStack',
        category: 'Infrastructure',
        description: 'Enterprise-grade identity and access management platform with zero-trust architecture.',
        challenge: 'Federated identity across 50+ enterprise clients with custom SSO requirements.',
        architecture: 'Zero-trust security model, OAuth 2.0/OIDC compliant, hardware security module integration.',
        color: 'from-secondary/30 to-primary/10',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'HSM'],
        icon: Shield,
    },
]

const categories = ['All', 'FinTech', 'EdTech', 'E-commerce', 'Infrastructure']

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <main className="pt-32 pb-24 relative">
            <div className="absolute inset-0 glow-bg-mixed" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal animation="fadeUp">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
                        >
                            Case Studies
                        </motion.div>
                    </ScrollReveal>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                        Our <span className="gradient-text"><SplitText animation="slideUp">Work</SplitText></span>
                    </h1>
                    <ScrollReveal delay={0.3} animation="fadeUp">
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Real projects, real impact. Explore how we've helped founders build and scale their SaaS platforms.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Filter Tabs */}
                <ScrollReveal delay={0.4} animation="fadeUp">
                    <div className="flex justify-center mb-16">
                        <Tabs defaultValue="All" onValueChange={setActiveCategory}>
                            <TabsList className="bg-zinc-900 border border-zinc-800">
                                {categories.map((category) => (
                                    <TabsTrigger key={category} value={category}>
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TiltCard tiltAmount={6} scale={1.01}>
                                <Card className="h-full overflow-hidden group border-zinc-800 hover:border-primary/30">
                                    {/* Project Hero */}
                                    <div className={`h-56 relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                                        <div className="absolute inset-0 hex-pattern" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="p-8 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 glow-primary"
                                            >
                                                <project.icon className="h-12 w-12 text-primary" />
                                            </motion.div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="outline" className="bg-zinc-900/80 backdrop-blur-sm text-white border-zinc-800">
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="p-2 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-800">
                                                <ArrowUpRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between text-2xl">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-base">{project.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <div className="p-4 rounded-lg bg-zinc-800/30 border border-zinc-800">
                                            <h4 className="text-sm font-semibold mb-2 text-primary">Challenge</h4>
                                            <p className="text-sm text-gray-400">{project.challenge}</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-zinc-800/30 border border-zinc-800">
                                            <h4 className="text-sm font-semibold mb-2 text-secondary">Architecture</h4>
                                            <p className="text-sm text-gray-400">{project.architecture}</p>
                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <ScrollReveal animation="scale" delay={0.2}>
                    <div className="text-center mt-24 p-16 rounded-2xl border border-zinc-800 bg-zinc-900 relative overflow-hidden">
                        <div className="absolute inset-0 glow-bg-red opacity-30" />
                        <div className="relative">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                                Want to see your project here?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Let's discuss how we can bring your SaaS vision to life.
                            </p>
                            <GlowButton size="lg" rounded="md">
                                Start Your Project
                            </GlowButton>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    )
}
