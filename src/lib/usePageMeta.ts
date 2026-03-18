import { useEffect } from 'react';

interface PageMetaOptions {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    keywords?: string;
    structuredData?: object;
}

const SITE_NAME = 'Loopers Lab';
const BASE_URL = 'https://looperslab.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export function usePageMeta({
    title,
    description,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    keywords,
    structuredData,
}: PageMetaOptions) {
    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

        // --- Title ---
        document.title = fullTitle;

        // --- Helper ---
        const setMeta = (selector: string, content: string, attr: string = 'content') => {
            let el = document.querySelector<HTMLMetaElement>(selector);
            if (!el) {
                el = document.createElement('meta');
                // Extract the attribute key/value from the selector to set on the new element
                const match = selector.match(/\[([^\]]+)="([^"]+)"\]/);
                if (match) el.setAttribute(match[1], match[2]);
                document.head.appendChild(el);
            }
            el.setAttribute(attr, content);
        };

        const setLink = (rel: string, href: string) => {
            let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement('link');
                el.rel = rel;
                document.head.appendChild(el);
            }
            el.href = href;
        };

        // --- Primary Meta ---
        setMeta('meta[name="title"]', fullTitle);
        setMeta('meta[name="description"]', description);
        if (keywords) setMeta('meta[name="keywords"]', keywords);

        // --- Canonical ---
        setLink('canonical', canonicalUrl);

        // --- Open Graph ---
        setMeta('meta[property="og:title"]', fullTitle);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[property="og:url"]', canonicalUrl);
        setMeta('meta[property="og:image"]', ogImage);

        // --- Twitter ---
        setMeta('meta[name="twitter:title"]', fullTitle);
        setMeta('meta[name="twitter:description"]', description);
        setMeta('meta[name="twitter:url"]', canonicalUrl);
        setMeta('meta[name="twitter:image"]', ogImage);

        // --- Structured Data ---
        if (structuredData) {
            const id = 'page-structured-data';
            let script = document.getElementById(id) as HTMLScriptElement | null;
            if (!script) {
                script = document.createElement('script');
                script.id = id;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(structuredData);
        }

        return () => {
            // Clean up page-specific structured data on unmount
            const script = document.getElementById('page-structured-data');
            if (script) script.remove();
        };
    }, [title, description, canonical, ogImage, keywords, structuredData]);
}
