import { Loading } from './loading'

interface LoadingOverlayProps {
  isLoading: boolean
  message?: string
  className?: string
  children?: React.ReactNode
}

export function LoadingOverlay({
  isLoading,
  message = 'Loading...',
  className = '',
  children,
}: LoadingOverlayProps) {
  if (!isLoading) {
    return <>{children}</>
  }

  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md border border-white/15 rounded-2xl p-8 flex flex-col items-center gap-4">
          <Loading size="lg" variant="spinner" />
          <p className="text-white/80 text-lg font-medium">{message}</p>
        </div>
      </div>
    </div>
  )
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  className = '',
}: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div
          className={`animate-spin rounded-full border-2 border-white/20 border-t-white ${
            size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'
          }`}
        />
      </div>
    </div>
  )
}

interface LoadingDotsProps {
  className?: string
}

export function LoadingDots({ className = '' }: LoadingDotsProps) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  )
}
