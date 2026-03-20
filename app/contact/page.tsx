import type { Metadata } from 'next';
import ContactPageClient from '@/components/pages/ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Us - Start Your Project',
    description:
        "Get in touch with Loopers Lab. Have a project in mind? We respond within 2 business days. Let's discuss your website, software stack, automation plan, or long-term support needs.",
    keywords: [
        'contact loopers lab',
        'hire web developers',
        'start project',
        'software consultation',
        'web development inquiry',
    ],
    alternates: { canonical: 'https://looperslab.com/contact' },
    openGraph: {
        url: 'https://looperslab.com/contact',
        title: 'Contact Us - Start Your Project | Loopers Lab',
        description: 'Have a project in mind? We respond within 2 business days.',
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
