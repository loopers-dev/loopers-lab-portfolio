'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from './translations';

interface LanguageContextType {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Locale>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Locale;
        if (savedLang === 'en' || savedLang === 'vi') {
            setLanguageState(savedLang);
        } else {
            const browserLang = navigator.language.slice(0, 2);
            if (browserLang === 'vi') {
                setLanguageState('vi');
            }
        }
    }, []);

    const setLanguage = (lang: Locale) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (keyPath: string): string => {
        const keys = keyPath.split('.');
        let current: any = translations[language];

        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                // Fallback to English if translation is missing in the current language
                let englishFallback: any = translations['en'];
                for (const fallbackKey of keys) {
                    if (englishFallback && typeof englishFallback === 'object' && fallbackKey in englishFallback) {
                        englishFallback = englishFallback[fallbackKey];
                    } else {
                        return keyPath; // Return key path as final fallback
                    }
                }
                return typeof englishFallback === 'string' ? englishFallback : keyPath;
            }
        }

        return typeof current === 'string' ? current : keyPath;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
