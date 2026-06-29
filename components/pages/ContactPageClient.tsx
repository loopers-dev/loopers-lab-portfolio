'use client';

import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Label } from '@/components/ui/Input';
import { ScrollReveal, StaggerList, PulsingDot } from '@/components/animations';
import { GradientText } from '@/components/custom/GradientText';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_OPTIONS = [
    { key: 'ux', value: 'Web Design & UX Systems' },
    { key: 'building', value: 'Website Building & System Architecture' },
    { key: 'hosting', value: 'Hosting, DevOps & Infrastructure' },
    { key: 'maintenance', value: 'Maintenance & Performance' },
    { key: 'automation', value: 'AI Agents & Workflow Automation' },
    { key: 'analytics', value: 'Data Analysis & Reporting' },
    { key: 'cms', value: 'Content Operations & CMS' },
    { key: 'other', value: 'Other' },
];

const BUDGET_OPTIONS = [
    { key: 'under_1k', value: '<$1K' },
    { key: '1k_5k', value: '$1K-5K' },
    { key: '5k_10k', value: '$5K-10K' },
    { key: '10k_plus', value: '$10K+' },
    { key: 'tbd', value: 'TBD' },
];

export default function ContactPageClient() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        // Honeypot field - hidden from real users, bots will fill it
        website: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const formStartTime = useRef(Date.now());

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        // Anti-spam: check honeypot field
        if (formData.website) {
            // Bot detected - fake success
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitted(true);
            setIsSubmitting(false);
            return;
        }

        // Anti-spam: check if form was filled too quickly (< 3 seconds)
        const timeSpent = Date.now() - formStartTime.current;
        if (timeSpent < 3000) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitted(true);
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    service: formData.service,
                    budget: formData.budget,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (response.ok && result.success) {
                setIsSubmitted(true);
            } else {
                setSubmitError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            setSubmitError('Failed to send message. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                                <GradientText>{t('contact.title')}</GradientText>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeUp" delay={0.1}>
                            <p className="text-xl text-foreground/50 leading-relaxed mb-2">{t('contact.subtitle1')}</p>
                            <p className="text-xl text-foreground/50 leading-relaxed">{t('contact.subtitle2')}</p>
                        </ScrollReveal>
                    </div>
                </section>
                <section className="relative px-6 lg:px-8 mb-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <ScrollReveal animation="fadeRight" delay={0.2}>
                                <div className="mb-12">
                                    <h2 className="text-lg font-bold text-foreground/90 mb-4">{t('contact.emailHeader')}</h2>
                                    <a href="mailto:hello@looperslab.com" className="text-2xl gradient-text hover:opacity-80 transition-opacity">
                                        hello@looperslab.com
                                    </a>
                                </div>
                                <Card className="p-8" hoverable glow>
                                    <CardContent className="p-0">
                                        <h3 className="text-lg font-bold text-foreground/90 mb-6">{t('contact.expectHeader')}</h3>
                                        <StaggerList className="space-y-4" staggerDelay={0.1}>
                                            <div className="flex items-start gap-3 text-foreground/50"><PulsingDot className="mt-1.5" size="sm" />{t('contact.expect1')}</div>
                                            <div className="flex items-start gap-3 text-foreground/50"><PulsingDot className="mt-1.5" size="sm" />{t('contact.expect2')}</div>
                                            <div className="flex items-start gap-3 text-foreground/50"><PulsingDot className="mt-1.5" size="sm" />{t('contact.expect3')}</div>
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
                                            <h3 className="text-2xl font-bold text-foreground mb-3">{t('contact.messageSent')}</h3>
                                            <p className="text-foreground/50">{t('contact.sentSuccess')}</p>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {submitError && (
                                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                                {submitError}
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label htmlFor="name">{t('contact.form.name')}</Label>
                                                <Input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePlaceholder')} className="mt-2" />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">{t('contact.form.email')}</Label>
                                                <Input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')} className="mt-2" />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="company">{t('contact.form.company')} <span className="text-foreground/30">{t('contact.form.companyOptional')}</span></Label>
                                            <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder={t('contact.form.companyPlaceholder')} className="mt-2" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label htmlFor="service">{t('contact.form.service')}</Label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="mt-2 flex h-11 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
                                                    style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                                        backgroundPosition: 'right 0.5rem center',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: '1.5em 1.5em',
                                                        paddingRight: '2.5rem',
                                                    }}
                                                >
                                                    <option value="" className="bg-background text-muted-foreground">{t('contact.form.serviceSelect')}</option>
                                                    {SERVICE_OPTIONS.map((opt) => (
                                                        <option key={opt.key} value={opt.value} className="bg-background text-foreground">{t(`contact.services.${opt.key}`)}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <Label htmlFor="budget">{t('contact.form.budget')} <span className="text-foreground/30">{t('contact.form.budgetOptional')}</span></Label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className="mt-2 flex h-11 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
                                                    style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                                        backgroundPosition: 'right 0.5rem center',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: '1.5em 1.5em',
                                                        paddingRight: '2.5rem',
                                                    }}
                                                >
                                                    <option value="" className="bg-background text-muted-foreground">{t('contact.form.budgetSelect')}</option>
                                                    {BUDGET_OPTIONS.map((opt) => (
                                                        <option key={opt.key} value={opt.value} className="bg-background text-foreground">{t(`contact.budgetOptions.${opt.key}`)}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="message">{t('contact.form.message')}</Label>
                                            <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder={t('contact.form.messagePlaceholder')} className="mt-2" />
                                        </div>
                                        {/* Honeypot field - hidden from real users */}
                                        <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                                            <label htmlFor="website">Website</label>
                                            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                                        </div>
                                        <Button type="submit" variant="gradient" size="lg" loading={isSubmitting} className="w-full">{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</Button>
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
