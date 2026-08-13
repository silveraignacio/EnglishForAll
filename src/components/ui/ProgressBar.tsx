import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  className?: string
  height?: 'sm' | 'md' | 'lg'
  color?: 'brand' | 'success' | 'warning' | 'error'
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  className,
  height = 'md',
  color = 'brand',
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  const heightClass = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' }[height]
  const colorClass = {
    brand: 'bg-brand-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
  }[color]
  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && <span className="text-sm font-medium text-ink-soft">{label}</span>}
          {showValue && <span className="text-sm font-semibold text-ink">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-surface-muted rounded-full overflow-hidden', heightClass)}>
        <div
          className={cn('rounded-full transition-all duration-500 ease-out', colorClass)}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={Math.round(pct)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label || 'progress'}
        />
      </div>
    </div>
  )
}

export default ProgressBar