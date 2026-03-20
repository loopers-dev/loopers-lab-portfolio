import type { Metadata } from 'next';
import ProcessPageClient from '@/components/pages/ProcessPageClient';

export const metadata: Metadata = {
    title: 'Our Process — SaaS Development Blueprint',
    description:
        'Battle-tested 3-phase SaaS development methodology: Architecture, Development, DevOps & Scale. See exactly how we transform your vision into a production-ready platform.',
    keywords: [
        'SaaS development process',
        'software development methodology',
        'architecture',
        'DevOps',
        'CI/CD',
        'scalable platform',
    ],
    alternates: { canonical: 'https://looperslab.com/process' },
    openGraph: {
        url: 'https://looperslab.com/process',
        title: 'Our Process — SaaS Development Blueprint | Loopers Lab',
        description: '3-phase methodology: Architecture → Development → DevOps & Scale.',
    },
};

export default function ProcessPage() {
    return <ProcessPageClient />;
}
