'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal, SplitText } from '@/components/animations';

export default function CTASection() {
    return (
        <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            <div className="absolute inset-0 hex-pattern" />

            <div className="relative max-w-4xl mx-auto text-center">
                <ScrollReveal animation="scale">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8">
                        <SplitText animation="fadeUp" splitBy="words">
                            Let&apos;s Build Something That Lasts
                        </SplitText>
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl mx-auto mb-12">
                        If you&apos;re ready to invest in structure over shortcuts, we should talk.
                    </p>
                    <Link href="/contact">
                        <GlowButton size="lg" rounded="md" className="inline-flex items-center gap-2">
                            Start a Conversation
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </GlowButton>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}
