import type { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return siteConfig.navigation.map((item) => ({
        url: absoluteUrl(item.path),
        lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
    }));
}
