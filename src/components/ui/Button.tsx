import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const variantClass = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      error: 'btn-error',
      ghost: 'btn-ghost',
    }[variant]
    const sizeClass = {
      sm: 'text-sm px-3.5 py-1.5',
      md: 'text-base',
      lg: 'text-lg px-6 py-3.5',
    }[size]
    return (
      <button
        ref={ref}
        className={cn(variantClass, sizeClass, className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button