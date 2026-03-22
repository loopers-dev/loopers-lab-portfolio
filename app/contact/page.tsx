import type { Metadata } from 'next';
import ContactPageClient from '@/components/pages/ContactPageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
    createBreadcrumbJsonLd,
    createPageMetadata,
    createWebPageJsonLd,
} from '@/lib/seo';

const title = 'Contact and Project Inquiries';
const description =
    "Get in touch with Loopers Lab. We respond within 2 business days to discuss your website, software stack, automation plan, or long-term support needs.";

export const metadata: Metadata = createPageMetadata({
    title,
    description,
    path: '/contact',
    keywords: [
        'contact loopers lab',
        'hire web developers',
        'software consultation',
        'project inquiry',
        'technical seo support contact',
    ],
});

const contactPageJsonLd = createWebPageJsonLd({
    title,
    description,
    path: '/contact',
    type: 'ContactPage',
});

const contactBreadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
]);

export default function ContactPage() {
    return (
        <>
            <JsonLd data={[contactPageJsonLd, contactBreadcrumbJsonLd]} />
            <ContactPageClient />
        </>
    );
}
