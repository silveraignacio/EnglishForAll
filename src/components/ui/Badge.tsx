import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BadgeProps {
  variant?: 'brand' | 'success' | 'error' | 'warning' | 'muted'
  className?: string
  children: ReactNode
}

export function Badge({ variant = 'muted', className, children }: BadgeProps) {
  const variantClass = {
    brand: 'badge-brand',
    success: 'badge-success',
    error: 'badge-error',
    warning: 'badge-warning',
    muted: 'badge-muted',
  }[variant]
  return <span className={cn(variantClass, className)}>{children}</span>
}

export default Badge