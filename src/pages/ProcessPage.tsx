import { motion } from 'framer-motion'
import { FileCode, GitBranch, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GlowButton } from '@/components/ui/GlowButton'
import { SplitText, ScrollReveal, StaggerList, PulsingDot } from '@/components/animations'

interface Phase {
    number: number
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    deliverables: string[]
    codeExample?: string
}

const phases: Phase[] = [
    {
        number: 1,
        title: 'Architecture',
        description: 'We define the foundation. Clean contracts, scalable data models, and technology validation.',
        icon: FileCode,
        color: 'from-primary to-secondary',
        deliverables: [
            'Technical requirements document',
            'API specification (OpenAPI 3.0)',
            'Database schema design',
            'Infrastructure architecture diagram',
            'Technology stack validation',
        ],
        codeExample: `// API Contract Example
interface CreateUserRequest {
  email: string;
  name: string;
  role: 'admin' | 'user';
}`,
    },
    {
        number: 2,
        title: 'Development',
        description: 'Modular development. Component-driven UI, typed APIs, and rigorous Git workflow.',
        icon: GitBranch,
        color: 'from-secondary to-primary',
        deliverables: [
            'Feature branches with PR reviews',
            'Component library documentation',
            'API implementation with tests',
            'Integration test suite',
            'Weekly demo deployments',
        ],
        codeExample: `// Clean Component Architecture
export const UserCard = ({ user }) => {
  const { data } = useUser(user.id);
  return (
    <Card>
      <Avatar src={data.avatar} />
      <Text>{data.name}</Text>
    </Card>
  );
};`,
    },
    {
        number: 3,
        title: 'DevOps & Scale',
        description: 'Automated pipelines, containerized deployment, and proactive monitoring ensure resilience.',
        icon: Rocket,
        color: 'from-primary/80 to-secondary/80',
        deliverables: [
            'CI/CD pipeline configuration',
            'Docker containerization',
            'Kubernetes manifests',
            'Monitoring & alerting setup',
            'Performance optimization',
        ],
        codeExample: `# CI/CD Pipeline
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: npm test
      - run: docker build -t app .`,
    },
]

export default function ProcessPage() {
    return (
        <main className="pt-32 pb-24 relative">
            <div className="absolute inset-0 glow-bg-purple" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-24">
                    <ScrollReveal animation="fadeUp">
                        <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/10 text-primary">
                            The SaaS Engine Blueprint
                        </Badge>
                    </ScrollReveal>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                        Our <span className="gradient-text"><SplitText animation="slideUp">Process</SplitText></span>
                    </h1>
                    <ScrollReveal delay={0.3} animation="fadeUp">
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            A battle-tested methodology that transforms your vision into a production-ready, scalable SaaS platform.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/50 hidden sm:block" />

                    {phases.map((phase, index) => (
                        <ScrollReveal
                            key={phase.number}
                            animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                            delay={0.2}
                        >
                            <div
                                className={`relative mb-20 last:mb-0 sm:pl-24 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'
                                    }`}
                            >
                                {/* Phase number circle */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-black text-xl hidden sm:flex glow-primary`}
                                >
                                    {phase.number}
                                </motion.div>

                                <Card className={`border-zinc-800 hover:border-primary/30 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                    <CardContent className="p-8">
                                        <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                                            <div className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} text-white shrink-0 relative`}>
                                                <phase.icon className="h-6 w-6" />
                                                <PulsingDot className="absolute -top-1 -right-1" size="sm" color="bg-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black mb-2">
                                                    Phase {phase.number}: {phase.title}
                                                </h3>
                                                <p className="text-gray-400">{phase.description}</p>
                                            </div>
                                        </div>

                                        {/* Deliverables */}
                                        <div className={`mb-6 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                                            <h4 className="text-sm font-semibold text-primary mb-4">Deliverables</h4>
                                            <StaggerList staggerDelay={0.08}>
                                                {phase.deliverables.map((item) => (
                                                    <div
                                                        key={item}
                                                        className={`flex items-center gap-3 text-sm text-gray-400 mb-2 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                                            }`}
                                                    >
                                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </StaggerList>
                                        </div>

                                        {/* Code Example */}
                                        {phase.codeExample && (
                                            <motion.div
                                                className="rounded-xl bg-black/50 border border-zinc-800 p-4 overflow-x-auto"
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <pre className="text-xs font-mono text-gray-400">
                                                    <code>{phase.codeExample}</code>
                                                </pre>
                                            </motion.div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal animation="scale" delay={0.2}>
                    <div className="text-center mt-24 p-16 rounded-2xl border border-zinc-800 bg-zinc-900 relative overflow-hidden">
                        <div className="absolute inset-0 glow-bg-mixed opacity-30" />
                        <div className="relative">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Let's discuss how our process can bring your SaaS vision to life.
                            </p>
                            <Link to="/contact">
                                <GlowButton size="lg" rounded="md" className="inline-flex items-center gap-2">
                                    Schedule a Call
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </GlowButton>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    )
}
