import type { Metadata } from 'next';
import { HomePageClient } from '@/components/pages/HomePageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    absoluteUrl,
    createBreadcrumbJsonLd,
    createPageMetadata,
    createWebPageJsonLd,
    siteConfig,
} from '@/lib/seo';

const title = 'Software Systems, Automation, and Web Development';
const description =
    'Loopers Lab helps teams design, build, host, automate, and maintain websites, web apps, data workflows, and AI-assisted operations.';

export const metadata: Metadata = createPageMetadata({
    title,
    description,
    path: '/',
    keywords: [
        'web development studio',
        'website engineering',
        'system architecture',
        'workflow automation',
        'hosting and devops',
    ],
});

const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#professional-service'),
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImagePath),
    description,
    email: siteConfig.email,
    areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
    },
    serviceType: [
        'Web Design',
        'Web Development',
        'System Architecture',
        'Workflow Automation',
        'Hosting and DevOps',
        'Technical SEO',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Support Services',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design and UX Systems' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Building and System Architecture' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hosting, DevOps, and Infrastructure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance, Performance, and Scalability' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agents and Workflow Automation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Analysis and Reporting' } },
        ],
    },
};

const homePageJsonLd = createWebPageJsonLd({
    title,
    description,
    path: '/',
});

const homeBreadcrumbJsonLd = createBreadcrumbJsonLd([{ name: 'Home', path: '/' }]);

export default function HomePage() {
    return (
        <>
            <JsonLd data={[professionalServiceJsonLd, homePageJsonLd, homeBreadcrumbJsonLd]} />
            <HomePageClient />
        </>
    );
}
