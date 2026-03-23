'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ColorTheme {
    name: string
    label: string
    emoji: string
}

interface ThemeContextType {
    colorTheme: string
    cycleColorTheme: () => void
    getCurrentColorTheme: () => ColorTheme
    colorThemes: ColorTheme[]
    mode: 'light' | 'dark'
    toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Available color themes
const COLOR_THEMES: ColorTheme[] = [
    { name: 'red', label: 'Ruby Red', emoji: '🔴' },
    { name: 'cyan', label: 'Cyan Blue', emoji: '💎' },
    { name: 'purple', label: 'Royal Purple', emoji: '💜' },
    { name: 'green', label: 'Emerald Green', emoji: '💚' },
    { name: 'gold', label: 'Golden Yellow', emoji: '🌟' },
]

const DEFAULT_COLOR_THEME = COLOR_THEMES[0].name

const getInitialColorTheme = () => {
    if (typeof window === 'undefined') {
        return DEFAULT_COLOR_THEME
    }

    const savedTheme = window.localStorage.getItem('colorTheme')
    const isValidTheme = COLOR_THEMES.some(theme => theme.name === savedTheme)

    return isValidTheme && savedTheme ? savedTheme : DEFAULT_COLOR_THEME
}

const getInitialMode = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'dark';
    const savedMode = window.localStorage.getItem('themeMode');
    return savedMode === 'light' ? 'light' : 'dark';
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [colorTheme, setColorTheme] = useState(getInitialColorTheme);
    const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);

    useEffect(() => {
        // Apply color theme to document
        document.documentElement.setAttribute('data-color-theme', colorTheme);
        localStorage.setItem('colorTheme', colorTheme);
    }, [colorTheme]);

    useEffect(() => {
        // Apply light/dark mode to document
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    // Cycle through color themes
    const cycleColorTheme = () => {
        setColorTheme(prev => {
            const currentIndex = COLOR_THEMES.findIndex(t => t.name === prev)
            const nextIndex = (currentIndex + 1) % COLOR_THEMES.length
            return COLOR_THEMES[nextIndex].name
        })
    }

    const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light');

    // Get current theme info
    const getCurrentColorTheme = () => {
        return COLOR_THEMES.find(t => t.name === colorTheme) || COLOR_THEMES[0]
    }

    return (
        <ThemeContext.Provider value={{
            colorTheme,
            cycleColorTheme,
            getCurrentColorTheme,
            colorThemes: COLOR_THEMES,
            mode,
            toggleMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext

