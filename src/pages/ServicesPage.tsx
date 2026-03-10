import { Link } from 'react-router-dom';
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

/* ─── Service Data ─── */
const services = [
    {
        number: '01',
        icon: Paintbrush,
        title: 'Persuasive Web Design (UI/UX Design)',
        slogan: 'You have 3 seconds to impress a customer.',
        content:
            "Beautiful design alone isn't enough. We create interfaces that customers can't look away from and, more importantly, can't stop clicking. By studying user behavior, we organize your digital storefront intuitively. The \"Buy Now\" button is always in the right place, product filters help customers find what they need in seconds, and the checkout process is streamlined to the max. Everything is meticulously designed in Figma, with a mobile-first focus, where most of your customers are waiting.",
        imageDescription:
            'A Before-After image: left side shows a cluttered old website, right side shows a modern, clean design with callouts pointing out improvements like "Clear layout", "Prominent buy button".',
        layout: 'image-left' as const,
    },
    {
        number: '02',
        icon: Code2,
        title: 'Solid Platform Development (Web Development)',
        slogan: 'Website architecture built for sales explosion.',
        content:
            'Behind every smooth-selling website is a well-programmed system. We build you a true "machine" where thousands of products, hundreds of variants (colors, sizes), and orders are processed simultaneously without lag. We connect your website to every necessary tool: payment gateways, shipping carriers, and marketing software. Our goal is to create a frictionless buying journey, where everything runs smoothly from the moment a customer visits until they receive their package.',
        imageDescription:
            'An infographic showing system architecture as a multi-story building (Front-end, Back-end, Database, APIs) with connecting icons around it.',
        layout: 'image-right' as const,
    },
    {
        number: '03',
        icon: Cloud,
        title: 'High-Speed Hosting & Infrastructure',
        slogan: 'Your store is always open 24/7, even when you\'re asleep.',
        content:
            'A slow website will make customers turn away in an instant. We use top-tier cloud servers, specially configured to ensure lightning-fast loading times. Crucially, our technology allows your website to auto-scale bandwidth and processing power. When you run a flash sale or get featured by a major publication, the system automatically "upgrades" to handle the massive traffic surge, ensuring no customer\'s experience is disrupted.',
        imageDescription:
            'A speed dashboard with graphs and an impressive number (e.g., 0.8s), along with an auto-scaling illustration like an upward arrow.',
        layout: 'image-left' as const,
    },
    {
        number: '04',
        icon: Shield,
        title: 'Long-Term Optimization & Maintenance',
        slogan: 'Protecting your most valuable digital asset.',
        content:
            'An e-commerce website isn\'t a "build it and forget it" project. It\'s a living entity that needs care. Our maintenance service acts as "health insurance" for your website. We constantly monitor speed, and when your product count grows from 100 to 10,000, we optimize the code and database so everything runs like new. Most importantly, we continuously apply security patches, protecting your customer data and your revenue from cyberattacks.',
        imageDescription:
            'A horizontal timeline with milestones: Weekly (security updates), Monthly (speed optimization), Quarterly (architecture review). A shield icon is in the corner.',
        layout: 'image-right' as const,
    },
    {
        number: '05',
        icon: Bot,
        title: 'AI Agent Integration',
        slogan: 'Sell smarter with the power of AI.',
        content:
            'Imagine having a super sales assistant, working 24/7, never tired, and knowing exactly what each customer is thinking. We integrate these "AI Agents" into your website. It could be a smart chatbot that doesn\'t just answer "where\'s my order?" but can also suggest outfit combinations based on what the customer just viewed. It\'s also a personalization engine that automatically changes the homepage content for each visitor, making them feel like the website was designed just for them.',
        imageDescription:
            'A chat interface between a customer and an AI with two chat bubbles: customer asks about a product, AI responds and makes a suggestion. A robot or lightbulb icon is nearby.',
        layout: 'image-left' as const,
    },
    {
        number: '06',
        icon: BarChart3,
        title: 'Sales Data Analysis',
        slogan: "Turning 'meaningless' numbers into 'valuable' decisions.",
        content:
            'Your website collects a mountain of data every day, but are you using it? We help you decipher those numbers. We build intuitive dashboards that show you clearly: Which product lines are "hot"? At what step are customers abandoning their carts? Which ad campaigns are truly profitable? Because of this, you no longer have to "guess." Every decision about inventory, marketing, or website optimization is based on real data, helping you stay one step ahead of the competition.',
        imageDescription:
            'A dashboard screen with pie charts, bar graphs, and line charts. Highlighted numbers like "30% conversion increase", "15% cart abandonment decrease". Arrows point to specific parts of the dashboard.',
        layout: 'image-right' as const,
    },
    {
        number: '07',
        icon: BookOpen,
        title: "Technical Documentation & 'Knowledge Warranty'",
        slogan: "You don't just get the code; you get the 'know-how' to run it.",
        content:
            'Many development agencies hand you a website and... that\'s it. We\'re different. We give you a detailed, easy-to-understand operations manual. You\'ll know how to update products yourself, change ad content, or process orders without calling us every day. This documentation is also "insurance" for the future, making it easy for you to work with any other developer if you decide to expand your team later. We hand over complete control to you.',
        imageDescription:
            'An image of a large open book with pages flipping up, showing text like "Product update guide", "Order processing workflow". Icons of a pen, papers, and keys are around it.',
        layout: 'image-left' as const,
    },
];

/* ─── Image Placeholder Component ─── */
function ImagePlaceholder({
    icon: Icon,
    description,
    className = '',
}: {
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    className?: string;
}) {
    return (
        <div
            className={`relative rounded-xl bg-[#1a1a1c] border border-border overflow-hidden flex flex-col items-center justify-center min-h-[320px] lg:min-h-[400px] ${className}`}
        >
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 grid-pattern opacity-40" />

            {/* Glowing circle behind icon */}
            <div className="relative mb-6">
                <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-20"
                    style={{ background: 'var(--accent-primary)' }}
                />
                <div className="relative w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white/40" />
                </div>
            </div>

            {/* Image description */}
            <p className="text-white/30 text-xs text-center max-w-[260px] leading-relaxed px-4">
                Image: {description}
            </p>
        </div>
    );
}

/* ─── Service Section Component ─── */
function ServiceSection({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    const isImageLeft = service.layout === 'image-left';

    const imageBlock = (
        <ScrollReveal animation="fadeUp" delay={0.1}>
            <ImagePlaceholder
                icon={service.icon}
                description={service.imageDescription}
            />
        </ScrollReveal>
    );

    const contentBlock = (
        <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="flex flex-col justify-center h-full">
                {/* Service number */}
                <span className="text-sm font-mono text-primary/60 mb-3 tracking-widest">
                    {service.number}
                </span>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                    {service.title}
                </h2>

                {/* Slogan */}
                <p className="text-sm italic text-primary/80 mb-6">
                    {service.slogan}
                </p>

                {/* Content */}
                <p className="text-white/50 leading-relaxed text-[15px]">
                    {service.content}
                </p>
            </div>
        </ScrollReveal>
    );

    return (
        <section
            className="relative px-6 lg:px-8"
            id={`service-${index + 1}`}
        >
            {/* Alternating subtle background glow */}
            {index % 3 === 0 && (
                <div className="absolute inset-0 glow-bg-red opacity-30 pointer-events-none" />
            )}
            {index % 3 === 1 && (
                <div className="absolute inset-0 glow-bg-purple opacity-20 pointer-events-none" />
            )}

            <div className="max-w-6xl mx-auto">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isImageLeft ? 'lg:[direction:rtl]' : ''
                        }`}
                >
                    {/* On mobile: image always on top. On desktop: follows layout */}
                    <div className={!isImageLeft ? 'lg:[direction:ltr]' : ''}>
                        {isImageLeft ? imageBlock : contentBlock}
                    </div>
                    <div className={!isImageLeft ? 'lg:[direction:ltr]' : ''}>
                        {isImageLeft ? contentBlock : imageBlock}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Partner Logo Placeholder ─── */
function LogoPlaceholder({ index }: { index: number }) {
    return (
        <div className="w-24 h-12 rounded-lg bg-[#1a1a1c] border border-border flex items-center justify-center">
            <Award className="w-5 h-5 text-white/20" />
        </div>
    );
}

/* ─── Main Page ─── */
export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 glow-bg-red" />
            <div className="absolute inset-0 grid-pattern" />

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative px-6 lg:px-8 mb-24 lg:mb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Text */}
                        <div>
                            <ScrollReveal animation="fadeUp">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                                    <GradientText>
                                        Complete E-commerce Development Services
                                    </GradientText>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal animation="fadeUp" delay={0.1}>
                                <p className="text-lg md:text-xl text-white/50 leading-relaxed">
                                    Technology solutions that help you sell
                                    better — from design and operations to
                                    optimization.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Right: Image Placeholder */}
                        <ScrollReveal animation="fadeUp" delay={0.2}>
                            <ImagePlaceholder
                                icon={Monitor}
                                description="A modern website mockup displayed on desktop, tablet, and mobile devices, showcasing responsiveness."
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES SECTIONS ═══ */}
            <div className="space-y-24 lg:space-y-32 mb-24 lg:mb-32">
                {services.map((service, index) => (
                    <ServiceSection
                        key={service.number}
                        service={service}
                        index={index}
                    />
                ))}
            </div>

            {/* ═══ Divider ═══ */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24 lg:mb-32">
                <div className="line-glow" />
            </div>

            {/* ═══ CTA SECTION ═══ */}
            <section className="relative px-6 lg:px-8">
                <div className="absolute inset-0 glow-bg-mixed opacity-40 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative">
                    <ScrollReveal animation="scale">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
                            Ready to build the most powerful{' '}
                            <GradientText>online store</GradientText>?
                        </h2>

                        <Link to="/contact">
                            <GlowButton
                                size="lg"
                                rounded="md"
                                className="inline-flex items-center gap-2 mx-auto"
                            >
                                Get a Free Consultation
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </GlowButton>
                        </Link>

                        {/* Partner / Certification Logos */}
                        <div className="mt-16">
                            <p className="text-xs text-white/25 uppercase tracking-widest mb-6">
                                Trusted Partners & Certifications
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <LogoPlaceholder key={i} index={i} />
                                ))}
                            </div>
                            <p className="text-white/20 text-xs mt-4">
                                Image: A row of small placeholder boxes
                                representing partner or certification logos.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
