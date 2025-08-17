import { useState, useCallback, useEffect } from 'react'

interface UseLoadingStateOptions {
  timeout?: number
  onTimeout?: () => void
  onError?: (error: Error) => void
}

export function useLoadingState(options: UseLoadingStateOptions = {}) {
  const { timeout = 30000, onTimeout, onError } = options
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const startLoading = useCallback(() => {
    setIsLoading(true)
    setError(null)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const setErrorState = useCallback(
    (err: Error) => {
      setError(err)
      setIsLoading(false)
      onError?.(err)
    },
    [onError]
  )

  const withLoading = useCallback(
    async <T>(asyncFn: () => Promise<T>): Promise<T | null> => {
      startLoading()
      try {
        const result = await asyncFn()
        stopLoading()
        return result
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error('An error occurred')
        setErrorState(error)
        return null
      }
    },
    [startLoading, stopLoading, setErrorState]
  )

  // Auto-timeout
  useEffect(() => {
    if (!isLoading) return

    const timer = setTimeout(() => {
      if (isLoading) {
        stopLoading()
        onTimeout?.()
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [isLoading, timeout, stopLoading, onTimeout])

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setError: setErrorState,
    withLoading,
    clearError: () => setError(null),
  }
}

export function useAsyncLoading<T>(
  asyncFn: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null)
  const loadingState = useLoadingState()

  const execute = useCallback(async () => {
    const result = await loadingState.withLoading(asyncFn)
    if (result !== null) {
      setData(result)
    }
    return result
  }, [asyncFn, loadingState])

  useEffect(() => {
    execute()
  }, [execute])

  return {
    ...loadingState,
    data,
    refetch: execute,
  }
}
