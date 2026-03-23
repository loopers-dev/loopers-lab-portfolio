'use client'

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
};

const roundedStyles = {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
};

export function GlowButton({
    children,
    className,
    onClick,
    href,
    size = 'md',
    rounded = 'md',
}: GlowButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const hoverLight = e.currentTarget.querySelector('.button_hover_light') as HTMLElement;
        if (hoverLight) {
            hoverLight.style.left = `${x}px`;
            hoverLight.style.top = `${y}px`;
        }
    };

    const borderRadius = roundedStyles[rounded];
    const innerBorderRadius = `calc(${borderRadius} - 1px)`;

    const content = (
        <div
            ref={containerRef}
            className={cn(
                "button-cta group relative flex justify-center items-center overflow-hidden transition-all duration-300",
                className
            )}
            style={{
                padding: '1px',
                borderRadius: borderRadius,
                backgroundColor: 'transparent',
            }}
            onMouseMove={handleMouseMove}
        >
            {/* Border-gradient - Spinning gradient border */}
            <div
                className="border-gradient absolute pointer-events-none"
                style={{
                    width: '110%',
                    aspectRatio: '1',
                    top: '50%',
                    left: '50%',
                    marginTop: '-55%',
                    marginLeft: '-55%',
                    background: 'conic-gradient(from 0deg at 50% 50%, var(--color-background) 100deg, var(--accent-primary) 180deg, var(--color-background) 260deg)',
                    animation: 'spin 3s linear infinite',
                    opacity: 1,
                    zIndex: 0,
                }}
            />

            {/* Button-cta-bg - Inner background */}
            <div
                className={cn(
                    "button-cta-bg relative flex justify-center items-center overflow-hidden transition-all duration-500",
                    sizeStyles[size]
                )}
                style={{
                    borderRadius: innerBorderRadius,
                    backgroundColor: 'var(--color-background)',
                    zIndex: 1,
                }}
            >
                {/* Hover light effect */}
                <div
                    className="button_hover_light absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        width: '90%',
                        height: '200%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'var(--accent-primary)',
                        filter: 'blur(1.5rem)',
                        borderRadius: '99rem',
                        zIndex: 0,
                    }}
                />

                {/* Text content */}
                <span
                    className="relative text-foreground font-semibold"
                    style={{ zIndex: 1 }}
                >
                    {children}
                </span>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick}>
            {content}
        </button>
    );
}

export default GlowButton;


