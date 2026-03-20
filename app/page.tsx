import type { Metadata } from 'next';
import { HomePageClient } from '@/components/pages/HomePageClient';

export const metadata: Metadata = {
    title: 'Software Systems, Automation & Web Development',
    description:
        'Loopers Lab helps teams design, build, host, automate, and maintain websites, web apps, data workflows, and AI-assisted operations.',
    keywords: [
        'web development',
        'system architecture',
        'database design',
        'workflow automation',
        'AI agent integration',
        'hosting and devops',
    ],
    alternates: { canonical: 'https://looperslab.com' },
    openGraph: {
        url: 'https://looperslab.com',
        title: 'Loopers Lab - Software Systems, Automation & Web Development',
        description: 'Web development, architecture, hosting, automation, AI integrations, and long-term support.',
    },
    other: {
        'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Loopers Lab',
            url: 'https://looperslab.com',
            description: 'Web development, UX design, system architecture, hosting, automation, AI integration, and software maintenance.',
            serviceType: 'Software Development Services',
            areaServed: 'Worldwide',
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Software Support Services',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & UX' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Building & System Architecture' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hosting & CI/CD' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance & Scalability' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agents & Workflow Automation' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Analysis & Reporting' } },
                ],
            },
        }),
    },
};

export default function HomePage() {
    return <HomePageClient />;
}
