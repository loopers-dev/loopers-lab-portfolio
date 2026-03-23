'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Label } from '@/components/ui/Input';
import { ScrollReveal, StaggerList, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';

export default function ContactPageClient() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 glow-bg-mixed" />
                <div className="absolute inset-0 grid-pattern" />
                <section className="relative px-6 lg:px-8 mb-16">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal animation="fadeUp">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight mb-8">
                                <GradientText>Contact</GradientText>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeUp" delay={0.1}>
                            <p className="text-xl text-foreground/50 leading-relaxed mb-2">Have a project in mind? Or just a question?</p>
                            <p className="text-xl text-foreground/50 leading-relaxed">We&apos;d like to hear from you.</p>
                        </ScrollReveal>
                    </div>
                </section>
                <section className="relative px-6 lg:px-8 mb-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <ScrollReveal animation="fadeRight" delay={0.2}>
                                <div className="mb-12">
                                    <h2 className="text-lg font-bold text-foreground/90 mb-4">Email</h2>
                                    <a href="mailto:hello@looperslab.com" className="text-2xl gradient-text hover:opacity-80 transition-opacity">
                                        hello@looperslab.com
                                    </a>
                                </div>
                                <Card className="p-8" hoverable glow>
                                    <CardContent className="p-0">
                                        <h3 className="text-lg font-bold text-foreground/90 mb-6">What to Expect</h3>
                                        <StaggerList className="space-y-4" staggerDelay={0.1}>
                                            <div className="flex items-start gap-3 text-foreground/50"><PulsingDot className="mt-1.5" size="sm" />We respond within 2 business days.</div>
                                            <div className="flex items-start gap-3 text-foreground/50"><PulsingDot className="mt-1.5" size="sm" />If there&apos;s a fit, we&apos;ll schedule a short discovery call.</div>
                                            <div className="flex items-start gap-3 text-foreground/50"><PulsingDot className="mt-1.5" size="sm" />From there, we&apos;ll determine next steps together.</div>
                                        </StaggerList>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                            <ScrollReveal animation="fadeLeft" delay={0.3}>
                                {isSubmitted ? (
                                    <Card className="h-full flex items-center justify-center p-12" glow>
                                        <CardContent className="p-0 text-center">
                                            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground mb-3">Message sent</h3>
                                            <p className="text-foreground/50">We&apos;ll be in touch within 2 business days.</p>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Label htmlFor="name">Name</Label>
                                            <Input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-2" />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" className="mt-2" />
                                        </div>
                                        <div>
                                            <Label htmlFor="company">Company <span className="text-foreground/30">(optional)</span></Label>
                                            <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="mt-2" />
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className="mt-2" />
                                        </div>
                                        <Button type="submit" variant="gradient" size="lg" loading={isSubmitting} className="w-full">Send Message</Button>
                                    </form>
                                )}
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
