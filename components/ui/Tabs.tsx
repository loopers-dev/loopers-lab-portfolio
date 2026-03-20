'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface TabsContextType {
    activeTab: string
    setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined)

interface TabsProps {
    defaultValue: string
    children: React.ReactNode
    className?: string
    onValueChange?: (value: string) => void
}

function Tabs({ defaultValue, children, className, onValueChange }: TabsProps) {
    const [activeTab, setActiveTab] = React.useState(defaultValue)

    const handleTabChange = (value: string) => {
        setActiveTab(value)
        onValueChange?.(value)
    }

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
            <div className={cn('w-full', className)}>{children}</div>
        </TabsContext.Provider>
    )
}

function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={cn(
                'inline-flex items-center justify-center rounded-lg bg-zinc-900 p-1 text-gray-400',
                className
            )}
        >
            {children}
        </div>
    )
}

interface TabsTriggerProps {
    value: string
    children: React.ReactNode
    className?: string
}

function TabsTrigger({ value, children, className }: TabsTriggerProps) {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error('TabsTrigger must be used within Tabs')

    const isActive = context.activeTab === value

    return (
        <button
            onClick={() => context.setActiveTab(value)}
            className={cn(
                'relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                'disabled:pointer-events-none disabled:opacity-50',
                isActive ? 'text-white' : 'hover:text-white/80',
                className
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-zinc-800 rounded-md shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </button>
    )
}

interface TabsContentProps {
    value: string
    children: React.ReactNode
    className?: string
}

function TabsContent({ value, children, className }: TabsContentProps) {
    const context = React.useContext(TabsContext)
    if (!context) throw new Error('TabsContent must be used within Tabs')

    if (context.activeTab !== value) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn('mt-4', className)}
        >
            {children}
        </motion.div>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

