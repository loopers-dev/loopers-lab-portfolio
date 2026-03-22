import type { Metadata } from 'next';
import ProcessPageClient from '@/components/pages/ProcessPageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    absoluteUrl,
    createBreadcrumbJsonLd,
    createPageMetadata,
    createWebPageJsonLd,
} from '@/lib/seo';

const title = 'Our Delivery Process';
const description =
    'See how Loopers Lab scopes, designs, builds, and supports websites, platforms, and automation systems from architecture through operations.';

export const metadata: Metadata = createPageMetadata({
    title,
    description,
    path: '/process',
    keywords: [
        'software delivery process',
        'web development process',
        'system architecture workflow',
        'devops delivery',
        'software support process',
    ],
});

const processStepsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': absoluteUrl('/process#steps'),
    name: 'Loopers Lab delivery process',
    itemListElement: [
        'Audit and Scope',
        'Design the System',
        'Build and Integrate',
        'Support and Improve',
    ].map((step, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: step,
    })),
};

const processPageJsonLd = createWebPageJsonLd({
    title,
    description,
    path: '/process',
});

const processBreadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
]);

export default function ProcessPage() {
    return (
        <>
            <JsonLd data={[processPageJsonLd, processStepsJsonLd, processBreadcrumbJsonLd]} />
            <ProcessPageClient />
        </>
    );
}
