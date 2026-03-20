'use client';

import dynamic from 'next/dynamic';
import HomeHeroSection from '@/components/sections/HomeHeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import CTASection from '@/components/sections/CTASection';
import Layout from '@/components/Layout';

const USE_ENDLESS_SCROLL = false;
const EndlessScroll = USE_ENDLESS_SCROLL
    ? dynamic(() => import('@/components/EndlessScroll'), {
          ssr: false,
      })
    : null;

export function HomePageClient() {
    return (
        <Layout>
            {USE_ENDLESS_SCROLL && EndlessScroll ? <EndlessScroll /> : <HomeHeroSection />}
            <ServicesSection />
            <ProcessSection />
            <PhilosophySection />
            <CTASection />
        </Layout>
    );
}
