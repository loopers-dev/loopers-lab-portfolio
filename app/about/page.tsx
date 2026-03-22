import type { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    createBreadcrumbJsonLd,
    createPageMetadata,
    createWebPageJsonLd,
} from '@/lib/seo';

const title = 'About the Team and Studio';
const description =
    'Meet the Loopers Lab team: a remote-first group of engineers, architects, and designers building durable websites, systems, and product operations.';

export const metadata: Metadata = createPageMetadata({
    title,
    description,
    path: '/about',
    keywords: [
        'about loopers lab',
        'software team',
        'remote developers',
        'digital studio team',
        'product and systems team',
    ],
});

const aboutPageJsonLd = createWebPageJsonLd({
    title,
    description,
    path: '/about',
    type: 'AboutPage',
});

const aboutBreadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
]);

export default function AboutPage() {
    return (
        <>
            <JsonLd data={[aboutPageJsonLd, aboutBreadcrumbJsonLd]} />
            <AboutPageClient />
        </>
    );
}
