'use client';

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface LoadingContextType {
    isContentReady: boolean;
    setContentReady: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [isContentReady, setIsContentReady] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Auto-trigger after 800ms as fallback for pages without EndlessScroll
    // EndlessScroll will call setContentReady() faster when images load
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setIsContentReady(true);
        }, 800);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const setContentReady = () => {
        // Cancel the auto-timeout and set ready immediately
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        setIsContentReady(true);
    };

    return (
        <LoadingContext.Provider value={{ isContentReady, setContentReady }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}
