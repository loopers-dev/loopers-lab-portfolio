import type { Metadata } from 'next';
import SketchHeroSection from '@/components/sections/SketchHeroSection';

export const metadata: Metadata = {
    title: 'Our Story | Loopers Lab',
    description: 'A hand-drawn origin story — two devs and a PM.',
};

export default function SketchPage() {
    return <SketchHeroSection />;
}
