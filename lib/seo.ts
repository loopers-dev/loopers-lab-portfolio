import type { Metadata } from 'next';

export const siteConfig = {
    name: 'Loopers Lab',
    shortName: 'Loopers Lab',
    url: 'https://looperslab.com',
    locale: 'en_US',
    description:
        'Loopers Lab designs, builds, hosts, automates, and maintains websites, web apps, data workflows, and AI-assisted operations.',
    ogImagePath: '/opengraph-image',
    twitterImagePath: '/twitter-image',
    email: 'hello@looperslab.com',
    defaultKeywords: [
        'web development',
        'software systems',
        'system architecture',
        'workflow automation',
        'AI agent integration',
        'hosting and devops',
        'technical seo',
        'software maintenance',
    ],
    navigation: [
        { path: '/', label: 'Home', priority: 1, changeFrequency: 'weekly' as const },
        { path: '/services', label: 'Services', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/work', label: 'Work', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/process', label: 'Process', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/about', label: 'About', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/contact', label: 'Contact', priority: 0.8, changeFrequency: 'monthly' as const },
    ],
} as const;

type PageMetadataInput = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
};

type BreadcrumbItem = {
    name: string;
    path: string;
};

export function absoluteUrl(path = '/') {
    return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
    title,
    description,
    path,
    keywords = [],
}: PageMetadataInput): Metadata {
    const canonical = absoluteUrl(path);
    const pageKeywords = Array.from(new Set([...siteConfig.defaultKeywords, ...keywords]));
    const socialTitle = `${title} | ${siteConfig.name}`;

    return {
        title,
        description,
        keywords: pageKeywords,
        alternates: {
            canonical,
        },
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            url: canonical,
            siteName: siteConfig.name,
            title: socialTitle,
            description,
            images: [
                {
                    url: absoluteUrl(siteConfig.ogImagePath),
                    width: 1200,
                    height: 630,
                    alt: `${siteConfig.name} social preview`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description,
            images: [absoluteUrl(siteConfig.twitterImagePath)],
        },
    };
}

export function createOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': absoluteUrl('/#organization'),
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl('/favicon.svg'),
        description: siteConfig.description,
        email: siteConfig.email,
        serviceArea: {
            '@type': 'Place',
            name: 'Worldwide',
        },
    };
}

export function createWebsiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            '@id': absoluteUrl('/#organization'),
        },
    };
}

export function createWebPageJsonLd({
    title,
    description,
    path,
    type = 'WebPage',
}: {
    title: string;
    description: string;
    path: string;
    type?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': type,
        '@id': absoluteUrl(`${path}#webpage`),
        name: title,
        url: absoluteUrl(path),
        description,
        isPartOf: {
            '@id': absoluteUrl('/#website'),
        },
        about: {
            '@id': absoluteUrl('/#organization'),
        },
    };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}
