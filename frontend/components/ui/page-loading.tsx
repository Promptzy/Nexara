import { Loading } from './loading'

interface PageLoadingProps {
  message?: string
  showLogo?: boolean
}

export function PageLoading({
  message = 'Loading Zenjira...',
  showLogo = true,
}: PageLoadingProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {showLogo && (
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl animate-pulse" />
            <div className="absolute inset-2 bg-black rounded-xl" />
            <div className="absolute inset-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg animate-pulse" />
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <Loading size="lg" variant="spinner" />
          <p className="text-white/80 text-lg font-medium animate-pulse">
            {message}
          </p>
        </div>

        <div className="flex space-x-2">
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
      </div>
    </div>
  )
}

interface ContentLoadingProps {
  className?: string
  lines?: number
}

export function ContentLoading({ className, lines = 3 }: ContentLoadingProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-white/10 rounded-md animate-pulse ${
              i === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
