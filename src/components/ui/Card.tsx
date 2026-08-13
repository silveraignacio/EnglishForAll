import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean
  hoverable?: boolean
}

export function Card({ padded = true, hoverable = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('card', padded && 'p-5', hoverable && 'transition-shadow hover:shadow-md', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card