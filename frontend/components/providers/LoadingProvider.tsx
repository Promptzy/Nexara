'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  loadingMessage: string
  setLoadingMessage: (message: string) => void
  showGlobalLoading: (message?: string) => void
  hideGlobalLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Loading...')

  const showGlobalLoading = (message: string = 'Loading...') => {
    setLoadingMessage(message)
    setIsLoading(true)
  }

  const hideGlobalLoading = () => {
    setIsLoading(false)
    setLoadingMessage('Loading...')
  }

  const value = {
    isLoading,
    setIsLoading,
    loadingMessage,
    setLoadingMessage,
    showGlobalLoading,
    hideGlobalLoading,
  }

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}
