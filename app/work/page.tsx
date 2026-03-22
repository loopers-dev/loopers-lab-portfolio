import type { Metadata } from 'next';
import WorkPageClient from '@/components/pages/WorkPageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    absoluteUrl,
    createBreadcrumbJsonLd,
    createPageMetadata,
    createWebPageJsonLd,
} from '@/lib/seo';

const title = 'Case Studies and Selected Work';
const description =
    'Explore Loopers Lab case studies across EdTech, FinTech, e-commerce, and infrastructure systems. Real projects, real architecture, and real delivery outcomes.';

export const metadata: Metadata = createPageMetadata({
    title,
    description,
    path: '/work',
    keywords: [
        'software portfolio',
        'case studies',
        'saas development portfolio',
        'edtech projects',
        'fintech projects',
        'infrastructure case studies',
    ],
});

const workCollectionJsonLd = createWebPageJsonLd({
    title,
    description,
    path: '/work',
    type: 'CollectionPage',
});

const workItemsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': absoluteUrl('/work#projects'),
    name: 'Loopers Lab case studies',
    itemListElement: [
        { name: 'Academix', path: '/work#academix', category: 'EdTech' },
        { name: 'EcoFit', path: '/work#ecofit', category: 'E-commerce' },
        { name: 'FinFlow', path: '/work#finflow', category: 'FinTech' },
        { name: 'SecureStack', path: '/work#securestack', category: 'Infrastructure' },
    ].map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(project.path),
        name: `${project.name} ${project.category} case study`,
    })),
};

const workBreadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
]);

export default function WorkPage() {
    return (
        <>
            <JsonLd data={[workCollectionJsonLd, workItemsJsonLd, workBreadcrumbJsonLd]} />
            <WorkPageClient />
        </>
    );
}
