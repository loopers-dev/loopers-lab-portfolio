/** @type {import('tailwindcss').Config} */

// Helper: Tailwind v3 resolves var() at build time into static values.
// This function returns a color function that keeps the CSS variable reference
// at runtime, enabling dynamic theme switching via data-theme attributes.
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./context/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Colors
                'primary': 'var(--accent-primary)',
                'primary-foreground': '#ffffff',
                'secondary': 'var(--accent-secondary)',
                'secondary-foreground': '#ffffff',
                'accent': 'var(--accent-tertiary)',
                'accent-foreground': '#ffffff',

                // Dynamic Theme Variables — use function syntax so Tailwind
                // keeps the var() reference at runtime instead of resolving to static RGB.
                'background': withOpacity('--color-background-rgb'),
                'foreground': withOpacity('--color-foreground-rgb'),
                'muted': 'var(--color-muted)',
                'muted-foreground': 'var(--color-muted-foreground)',

                // Surface & Cards
                'card': 'var(--color-card)',
                'card-foreground': 'var(--color-card-foreground)',
                'border': 'var(--color-border)',

                // Legacy support
                'dark-base': 'var(--color-background)',
            },
            fontFamily: {
                sans: ['Inter', 'SF Pro', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                'tight': '-0.02em',
            },
            borderRadius: {
                'sm': '0.25rem',
                'md': '0.5rem',
                'lg': '0.75rem',
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-down': {
                    from: { opacity: '0', transform: 'translateY(-20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}

export default config
