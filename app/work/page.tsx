import type { Metadata } from 'next';
import WorkPageClient from '@/components/pages/WorkPageClient';

export const metadata: Metadata = {
    title: 'Our Work — Case Studies & Portfolio',
    description:
        'Explore Loopers Lab case studies: from Academix LMS (10k+ users) to FinFlow real-time payments and SecureStack enterprise identity. Real projects, real impact.',
    keywords: [
        'portfolio',
        'case studies',
        'SaaS development',
        'LMS',
        'fintech',
        'e-commerce projects',
        'infrastructure',
    ],
    alternates: { canonical: 'https://looperslab.com/work' },
    openGraph: {
        url: 'https://looperslab.com/work',
        title: 'Our Work — Case Studies & Portfolio | Loopers Lab',
        description: 'Real SaaS projects: Academix LMS, FinFlow payments, EcoFit e-commerce, SecureStack IAM.',
    },
};

export default function WorkPage() {
    return <WorkPageClient />;
}
