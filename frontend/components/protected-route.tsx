'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authManager } from '@/lib/auth'
import { LoadingOverlay } from '@/components/ui/loading-overlay'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const authState = authManager.getAuthState()

      if (!authState.isAuthenticated) {
        router.push('/login')
        return
      }

      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <LoadingOverlay isLoading={true} message="Checking authentication..." />
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
