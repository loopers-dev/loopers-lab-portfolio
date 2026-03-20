'use client'

import { ScrollReveal, StaggerList, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';

export default function PhilosophySection() {
    return (
        <section className="py-32 px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 glow-bg-mixed" />

            <div className="relative max-w-4xl mx-auto">
                {/* Header */}
                <ScrollReveal animation="fadeUp" className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                        Built for <GradientText>Time</GradientText>
                    </h2>
                </ScrollReveal>

                {/* Philosophy Content */}
                <StaggerList className="space-y-8" staggerDelay={0.15} animation="fadeUp">
                    <div className="relative pl-8">
                        <PulsingDot className="absolute left-0 top-2" size="sm" />
                        <p className="text-lg text-white/70 leading-relaxed">
                            Most web projects are built to launch. Ours are built to last.
                            We approach every system with longevity in mind — designing
                            structures that adapt to change, not collapse under it.
                        </p>
                    </div>

                    <div className="relative pl-8">
                        <PulsingDot className="absolute left-0 top-2" size="sm" />
                        <p className="text-lg text-white/70 leading-relaxed">
                            A website is not a brochure. It's infrastructure. We treat design
                            decisions as architectural ones — every component, every convention
                            must survive updates, scale with content, and remain stable under maintenance.
                        </p>
                    </div>

                    <div className="relative pl-8">
                        <PulsingDot className="absolute left-0 top-2" size="sm" />
                        <p className="text-lg text-white/70 leading-relaxed">
                            We don't chase trends. We build systems that stay coherent over
                            years — not weeks. The goal isn't novelty. It's durability.
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

