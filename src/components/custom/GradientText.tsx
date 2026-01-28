import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientTextProps {
    children: React.ReactNode
    className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
    return (
        <motion.span
            className={cn(
                'gradient-text',
                className
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.span>
    )
}
