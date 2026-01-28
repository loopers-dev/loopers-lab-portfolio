import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors',
    {
        variants: {
            variant: {
                default:
                    'bg-primary/10 text-primary border border-primary/20',
                secondary:
                    'bg-secondary/10 text-secondary border border-secondary/20',
                accent:
                    'bg-accent/10 text-accent border border-accent/20',
                outline:
                    'border border-border text-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
