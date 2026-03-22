import type { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    absoluteUrl,
    createBreadcrumbJsonLd,
    createPageMetadata,
    createWebPageJsonLd,
} from '@/lib/seo';

const title = 'Software Services for Web, Infrastructure, and Automation';
const description =
    'Web design, system architecture, hosting, maintenance, workflow automation, AI agents, analytics, and content operations for growing software teams.';

export const metadata: Metadata = createPageMetadata({
    title,
    description,
    path: '/services',
    keywords: [
        'web design services',
        'system architecture services',
        'hosting and ci cd',
        'workflow automation services',
        'AI integration services',
        'technical seo support',
    ],
});

const servicesCatalogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': absoluteUrl('/services#catalog'),
    name: 'Loopers Lab Services',
    itemListElement: [
        'Web Design and UX Systems',
        'Website Building and System Architecture',
        'Hosting, DevOps, and Infrastructure',
        'Maintenance, Performance, and Scalability',
        'AI Agents and Workflow Automation',
        'Data Analysis and Reporting',
        'Content Operations and CMS Support',
    ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
            '@type': 'Service',
            name: service,
        },
    })),
};

const servicesPageJsonLd = createWebPageJsonLd({
    title,
    description,
    path: '/services',
});

const servicesBreadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
]);

export default function ServicesPage() {
    return (
        <>
            <JsonLd data={[servicesPageJsonLd, servicesCatalogJsonLd, servicesBreadcrumbJsonLd]} />
            <ServicesPageClient />
        </>
    );
}
