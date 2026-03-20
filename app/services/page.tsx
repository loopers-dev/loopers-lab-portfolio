import type { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export const metadata: Metadata = {
    title: 'Software Support Services for Web, Infrastructure & Automation',
    description:
        'Web design, system architecture, hosting, maintenance, workflow automation, AI agents, analytics, and content operations for growing software teams.',
    keywords: [
        'web design services',
        'system architecture services',
        'database design',
        'hosting and ci cd',
        'workflow automation',
        'AI agents',
        'data analysis',
    ],
    alternates: { canonical: 'https://looperslab.com/services' },
    openGraph: {
        url: 'https://looperslab.com/services',
        title: 'Software Support Services for Web, Infrastructure & Automation | Loopers Lab',
        description: 'Design, engineering, hosting, automation, analytics, and long-term support for software teams.',
    },
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
