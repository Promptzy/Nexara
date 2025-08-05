import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
}

export function Loading({
  size = 'md',
  variant = 'spinner',
  className,
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  if (variant === 'spinner') {
    return (
      <Loader2
        className={cn('animate-spin text-white', sizeClasses[size], className)}
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={cn(
              'bg-white rounded-full animate-pulse',
              size === 'sm'
                ? 'w-1.5 h-1.5'
                : size === 'md'
                  ? 'w-2 h-2'
                  : 'w-3 h-3'
            )}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.4s',
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div
        className={cn(
          'bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse',
          sizeClasses[size],
          className
        )}
      />
    )
  }

  return null
}

interface SkeletonProps {
  className?: string
  lines?: number
}

export function Skeleton({ className, lines = 1 }: SkeletonProps) {
  if (lines === 1) {
    return (
      <div className={cn('animate-pulse bg-white/10 rounded-md', className)} />
    )
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'animate-pulse bg-white/10 rounded-md',
            i === lines - 1 ? 'w-3/4' : 'w-full',
            className
          )}
        />
      ))}
    </div>
  )
}

interface ButtonLoadingProps {
  children: React.ReactNode
  loading?: boolean
  loadingText?: string
  className?: string
}

export function ButtonLoading({
  children,
  loading = false,
  loadingText = 'Loading...',
  className,
}: ButtonLoadingProps) {
  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {loading && <Loading size="sm" />}
      <span>{loading ? loadingText : children}</span>
    </div>
  )
}
