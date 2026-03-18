import { usePageMeta } from '../lib/usePageMeta';
import EndlessScroll from '../components/EndlessScroll';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
    usePageMeta({
        title: 'E-commerce Web Development & Digital Studio',
        description:
            'Loopers Lab builds high-performance e-commerce platforms, AI-powered integrations, and scalable web systems. UI/UX design, cloud hosting, and long-term technical maintenance — all in one studio.',
        canonical: '/',
        keywords: 'e-commerce development, web development, UI UX design, SaaS development, AI integration, digital studio',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Loopers Lab',
            url: 'https://loopers.studio',
            description: 'E-commerce web development, UI/UX design, AI integration, and cloud infrastructure.',
            serviceType: 'Web Development',
            areaServed: 'Worldwide',
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Web Development Services',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Hosting' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Integration' } },
                ],
            },
        },
    });

    return (
        <>
            {/* Hero Section - Scrollytelling */}
            <EndlessScroll />

            {/* Below the Hero */}
            <ServicesSection />
            <ProcessSection />
            <PhilosophySection />
            <CTASection />
        </>
    );
}
