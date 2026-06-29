'use client'

import { ScrollReveal, StaggerList, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import { useLanguage } from '@/context/LanguageContext';

export default function PhilosophySection() {
    const { t } = useLanguage();

    return (
        <section className="py-32 px-6 lg:px-8 border-t border-border relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 glow-bg-mixed" />

            <div className="relative max-w-4xl mx-auto">
                {/* Header */}
                <ScrollReveal animation="fadeUp" className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
                        {t('philosophy.title')} <GradientText>{t('philosophy.titleGradient')}</GradientText>
                    </h2>
                </ScrollReveal>

                {/* Philosophy Content */}
                <StaggerList className="space-y-8" staggerDelay={0.15} animation="fadeUp">
                    <div className="relative pl-8">
                        <PulsingDot className="absolute left-0 top-2" size="sm" />
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            {t('philosophy.p1')}
                        </p>
                    </div>

                    <div className="relative pl-8">
                        <PulsingDot className="absolute left-0 top-2" size="sm" />
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            {t('philosophy.p2')}
                        </p>
                    </div>

                    <div className="relative pl-8">
                        <PulsingDot className="absolute left-0 top-2" size="sm" />
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            {t('philosophy.p3')}
                        </p>
                    </div>
                </StaggerList>

                {/* Decorative Line */}
                <ScrollReveal animation="scale" delay={0.6} className="mt-16">
                    <div className="line-glow w-full" />
                </ScrollReveal>
            </div>
        </section>
    );
}

