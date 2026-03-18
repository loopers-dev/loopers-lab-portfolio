import { motion } from 'framer-motion'
import { TrendingUp, Terminal, Palette, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GlowButton } from '@/components/ui/GlowButton'
import { GradientText } from '@/components/custom/GradientText'
import { usePageMeta } from '@/lib/usePageMeta'

interface EngineCylinder {
    id: number
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    visual: React.ReactNode
}

const cylinders: EngineCylinder[] = [
    {
        id: 1,
        title: 'Strategy',
        description: 'Data-driven decisions. We analyze market opportunities and architect solutions that align business goals with technical feasibility.',
        icon: TrendingUp,
        color: 'from-primary to-secondary',
        visual: (
            <div className="space-y-2">
                <div className="flex items-end gap-1 h-20">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-secondary to-primary rounded-t"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 2,
        title: 'Systems',
        description: 'Infrastructure as code. We build resilient, scalable systems with modern DevOps practices and cloud-native architectures.',
        icon: Terminal,
        color: 'from-secondary to-primary',
        visual: (
            <div className="bg-black rounded-xl p-4 font-mono text-xs border border-zinc-800">
                <div className="space-y-1 text-gray-400">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="text-primary">$</span> kubectl get pods
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <span className="text-accent">api</span> Running 3/3
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                        <span className="text-accent">web</span> Running 2/2
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: 'Product',
        description: 'Design systems that scale. We craft user experiences that are beautiful, accessible, and consistent across platforms.',
        icon: Palette,
        color: 'from-primary/80 to-secondary/80',
        visual: (
            <div className="space-y-3">
                <div className="flex gap-2">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-10 px-4 rounded-lg bg-primary flex items-center justify-center text-xs text-white font-medium"
                    >
                        Button
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-10 px-4 rounded-lg border border-zinc-800 flex items-center justify-center text-xs"
                    >
                        Outline
                    </motion.div>
                </div>
                <div className="flex gap-2">
                    {['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-tertiary)', 'color-mix(in srgb, var(--accent-primary), white 20%)'].map((color, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="w-8 h-8 rounded-lg"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
        ),
    },
]

const values = [
    { title: 'Transparency', description: 'Clear communication at every step' },
    { title: 'Quality', description: 'Clean, tested, maintainable code' },
    { title: 'Ownership', description: 'Your success is our success' },
    { title: 'Innovation', description: 'Latest technologies and practices' },
]

export default function AboutPage() {
    usePageMeta({
        title: 'About Us — Strategy, Systems & Product',
        description:
            'Meet the Loopers Lab team: a remote-first group of engineers, architects, and designers united by a passion for building exceptional software. Strategy, Systems, and Product — firing on all cylinders.',
        canonical: '/about',
        keywords: 'about loopers lab, software team, remote developers, strategy systems product',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Loopers Lab',
            description: 'Remote-first team of engineers, architects and designers building exceptional software.',
            url: 'https://loopers.studio/about',
        },
    });

    return (
        <main className="pt-32 pb-24 relative">
            <div className="absolute inset-0 glow-bg-mixed" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/10 text-primary">
                        The Team
                    </Badge>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                        Powered by <GradientText>Expertise</GradientText>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We're a remote-first team of engineers, architects, and designers united by a passion for building exceptional software.
                    </p>
                </motion.div>

                {/* Engine Metaphor */}
                <div className="mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black mb-4">The Engine</h2>
                        <p className="text-gray-400">Three pillars working in perfect harmony</p>
                    </motion.div>

                    {/* Engine Visual */}
                    <div className="relative flex items-center justify-center mb-16">
                        <div className="relative flex gap-6 sm:gap-10">
                            {cylinders.map((cylinder, index) => (
                                <motion.div
                                    key={cylinder.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative group"
                                >
                                    <motion.div
                                        className={`w-24 sm:w-32 h-40 sm:h-48 rounded-2xl bg-gradient-to-b ${cylinder.color} relative overflow-hidden`}
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                                    >
                                        <div className="absolute inset-2 rounded-xl bg-white/10" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <cylinder.icon className="h-10 w-10 text-white" />
                                        </div>
                                        {/* Glow effect */}
                                        <div className={`absolute -inset-4 bg-gradient-to-b ${cylinder.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                                    </motion.div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-zinc-800 rounded-lg" />
                                    <div className="text-center mt-6">
                                        <div className="font-bold">{cylinder.title}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Cylinder Details */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {cylinders.map((cylinder, index) => (
                            <motion.div
                                key={cylinder.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-zinc-800 hover:border-primary/30">
                                    <CardContent className="p-8">
                                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cylinder.color} mb-6`}>
                                            <cylinder.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-black mb-3">{cylinder.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{cylinder.description}</p>
                                        <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-800">
                                            {cylinder.visual}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black mb-4">Our Values</h2>
                        <p className="text-gray-400">The principles that guide everything we do</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full text-center border-zinc-800 hover:border-primary/30">
                                    <CardContent className="p-8">
                                        <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl font-black text-primary">
                                            {index + 1}
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                        <p className="text-sm text-gray-400">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center p-16 rounded-2xl border border-zinc-800 bg-zinc-900 relative overflow-hidden"
                >
                    <div className="absolute inset-0 glow-bg-mixed opacity-30" />
                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl font-black mb-4">
                            Join the Engine
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Ready to work with a team that cares as much about your product as you do?
                        </p>
                        <Link to="/contact">
                            <GlowButton size="lg" rounded="md" className="inline-flex items-center gap-2">
                                Start a Conversation
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </GlowButton>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
