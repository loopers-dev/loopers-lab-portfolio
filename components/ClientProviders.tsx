'use client';

import { LoadingProvider } from '@/context/LoadingContext';
import { ThemeProvider } from '@/context/ThemeContext';
import SplitReveal from '@/components/SplitReveal';
import TopGlowOverlay from '@/components/TopGlowOverlay';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <LoadingProvider>
            <ThemeProvider>
                <SplitReveal>
                    <TopGlowOverlay />
                    {children}
                </SplitReveal>
            </ThemeProvider>
        </LoadingProvider>
    );
}
