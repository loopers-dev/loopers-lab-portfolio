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

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [colorTheme, setColorTheme] = useState(() => {
        // Check localStorage for saved color theme
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('colorTheme')
            return saved || 'red'
        }
        return 'red'
    })

    useEffect(() => {
        // Apply color theme to document
        document.documentElement.setAttribute('data-color-theme', colorTheme)
        localStorage.setItem('colorTheme', colorTheme)
    }, [colorTheme])

    // Cycle through color themes
    const cycleColorTheme = () => {
        setColorTheme(prev => {
            const currentIndex = COLOR_THEMES.findIndex(t => t.name === prev)
            const nextIndex = (currentIndex + 1) % COLOR_THEMES.length
            return COLOR_THEMES[nextIndex].name
        })
    }

    // Get current theme info
    const getCurrentColorTheme = () => {
        return COLOR_THEMES.find(t => t.name === colorTheme) || COLOR_THEMES[0]
    }

    return (
        <ThemeContext.Provider value={{
            colorTheme,
            cycleColorTheme,
            getCurrentColorTheme,
            colorThemes: COLOR_THEMES
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
