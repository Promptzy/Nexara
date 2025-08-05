import { Skeleton } from '@/components/ui/loading'

interface LoadingSectionProps {
  className?: string
}

export function LoadingSection({ className }: LoadingSectionProps) {
  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Skeleton */}
          <div className="mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          {/* Content Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex flex-col items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" lines={3} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface LoadingCardProps {
  className?: string
}

export function LoadingCard({ className }: LoadingCardProps) {
  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" lines={2} />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  )
}
