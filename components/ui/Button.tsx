'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-white hover:bg-primary/90 btn-glow',
                secondary:
                    'bg-secondary text-white hover:bg-secondary/90',
                accent:
                    'bg-accent text-white hover:bg-accent/90',
                outline:
                    'border border-border bg-transparent hover:bg-white/5 hover:border-primary/50',
                ghost:
                    'hover:bg-white/5 hover:text-foreground',
                link:
                    'text-primary underline-offset-4 hover:underline',
                gradient:
                    'bg-gradient-to-r from-primary via-primary/80 to-secondary text-white btn-glow hover:opacity-90',
                glow:
                    'border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 glow-red',
            },
            size: {
                sm: 'h-9 px-4 text-xs',
                md: 'h-11 px-6 text-sm',
                lg: 'h-14 px-8 text-base',
                xl: 'h-16 px-10 text-lg',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
)

export interface ButtonProps
    extends VariantProps<typeof buttonVariants> {
    className?: string
    children?: React.ReactNode
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, loading, children, disabled, type = 'button', onClick }, ref) => {
        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || loading}
                type={type}
                onClick={onClick}
            >
                {loading && (
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {children}
            </motion.button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

