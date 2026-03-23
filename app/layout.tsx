import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    absoluteUrl,
    createOrganizationJsonLd,
    createWebsiteJsonLd,
    siteConfig,
} from '@/lib/seo';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
        default: 'Loopers Lab - Software Systems, Automation, and Web Development',
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.defaultKeywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: 'technology',
    manifest: '/manifest.webmanifest',
    formatDetection: {
        address: false,
        email: false,
        telephone: false,
    },
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
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
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: 'Loopers Lab - Software Systems, Automation, and Web Development',
        description: siteConfig.description,
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
        title: 'Loopers Lab - Software Systems, Automation, and Web Development',
        description: siteConfig.description,
        images: [absoluteUrl(siteConfig.twitterImagePath)],
    },
    alternates: {
        canonical: siteConfig.url,
    },
};

const organizationJsonLd = createOrganizationJsonLd();
const websiteJsonLd = createWebsiteJsonLd();

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} relative`}
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <body
                className="relative min-h-screen bg-background text-foreground antialiased"
                suppressHydrationWarning
            >
                <JsonLd data={organizationJsonLd} />
                <JsonLd data={websiteJsonLd} />
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
