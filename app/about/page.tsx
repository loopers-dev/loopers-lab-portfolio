import type { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';

export const metadata: Metadata = {
    title: 'About Us — Strategy, Systems & Product',
    description:
        'Meet the Loopers Lab team: a remote-first group of engineers, architects, and designers united by a passion for building exceptional software. Strategy, Systems, and Product — firing on all cylinders.',
    keywords: [
        'about loopers lab',
        'software team',
        'remote developers',
        'strategy systems product',
        'digital studio team',
    ],
    alternates: { canonical: 'https://looperslab.com/about' },
    openGraph: {
        url: 'https://looperslab.com/about',
        title: 'About Us — Strategy, Systems & Product | Loopers Lab',
        description: 'Remote-first team of engineers, architects, and designers building exceptional software.',
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
