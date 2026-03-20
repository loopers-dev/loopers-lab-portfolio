/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./context/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Colors - Inspired by Mokn.io
                'primary': 'var(--accent-primary)',
                'primary-foreground': '#ffffff',
                'secondary': 'var(--accent-secondary)',
                'secondary-foreground': '#ffffff',
                'accent': 'var(--accent-tertiary)',
                'accent-foreground': '#ffffff',

                // Dark Mode First - Black Background
                'background': '#0B0B0C',
                'foreground': '#fafafa',
                'muted': '#1a1a1a',
                'muted-foreground': '#888888',

                // Surface & Cards
                'card': '#111111',
                'card-foreground': '#fafafa',
                'border': '#2a2a2a',

                // Legacy support
                'dark-base': '#0B0B0C',
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
