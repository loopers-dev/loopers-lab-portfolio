import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://looperslab.com'),
    title: {
        default: 'Loopers Lab - Software Systems, Automation & Web Development',
        template: '%s | Loopers Lab',
    },
    description:
        'Loopers Lab designs, builds, hosts, automates, and maintains websites, web apps, data workflows, and AI-assisted operations.',
    keywords: [
        'web development',
        'system architecture',
        'database design',
        'workflow automation',
        'AI agent integration',
        'hosting and ci cd',
        'maintenance and scalability',
        'content operations',
    ],
    authors: [{ name: 'Loopers Lab', url: 'https://looperslab.com' }],
    creator: 'Loopers Lab',
    publisher: 'Loopers Lab',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://looperslab.com',
        siteName: 'Loopers Lab',
        title: 'Loopers Lab - Software Systems, Automation & Web Development',
        description:
            'Web development, system architecture, hosting, automation, analytics, and long-term software support.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Loopers Lab - Software Systems Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Loopers Lab - Software Systems, Automation & Web Development',
        description:
            'Web development, system architecture, hosting, automation, analytics, and long-term software support.',
        images: ['/og-image.png'],
    },
    alternates: {
        canonical: 'https://looperslab.com',
    },
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Loopers Lab',
    url: 'https://looperslab.com',
    logo: 'https://looperslab.com/favicon.svg',
    description:
        'Loopers Lab is a software systems studio specializing in web development, UX, architecture, hosting, automation, AI integration, and maintenance.',
    email: 'hello@looperslab.com',
    sameAs: [],
    serviceArea: { '@type': 'Place', name: 'Worldwide' },
};

const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Loopers Lab',
    url: 'https://looperslab.com',
    description: 'Web development, automation, infrastructure, and software support studio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} relative`}
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
            </head>
            <body
                className="relative min-h-screen bg-[#0B0B0C] text-white antialiased"
                suppressHydrationWarning
            >
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
