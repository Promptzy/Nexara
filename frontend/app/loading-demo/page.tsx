'use client'

import { useState } from 'react'
import { Loading, Skeleton, ButtonLoading } from '@/components/ui/loading'
import { PageLoading, ContentLoading } from '@/components/ui/page-loading'
import {
  LoadingOverlay,
  LoadingSpinner,
  LoadingDots,
} from '@/components/ui/loading-overlay'
import {
  LoadingSection,
  LoadingCard,
} from '@/app/landingpage/components/LoadingSection'
import { useLoadingState } from '@/hooks/useLoadingState'
import Threads from '@/app/landingpage/components/Threads'

export default function LoadingDemo() {
  const [showPageLoading, setShowPageLoading] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const { isLoading, withLoading } = useLoadingState()

  const handleDemoLoading = async () => {
    await withLoading(async () => {
      await new Promise(resolve => setTimeout(resolve, 3000))
      return true
    })
  }

  const handlePageLoadingDemo = () => {
    setShowPageLoading(true)
    setTimeout(() => setShowPageLoading(false), 3000)
  }

  const handleOverlayDemo = () => {
    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 3000)
  }

  if (showPageLoading) {
    return <PageLoading message="Loading demo page..." />
  }

  return (
    <main className="bg-black min-h-screen relative">
      <div className="fixed inset-0 w-full h-full z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Loading Components Demo
              </h1>
              <p className="text-white/70 text-lg">
                Explore different loading states and animations
              </p>
            </div>

            {/* Loading Variants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Spinner Loading
                </h3>
                <div className="flex justify-center">
                  <Loading size="lg" variant="spinner" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Dots Loading</h3>
                <div className="flex justify-center">
                  <Loading size="lg" variant="dots" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Pulse Loading</h3>
                <div className="flex justify-center">
                  <Loading size="lg" variant="pulse" />
                </div>
              </div>
            </div>

            {/* Interactive Demos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Button Loading
                </h3>
                <button
                  onClick={handleDemoLoading}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <ButtonLoading
                    loading={isLoading}
                    loadingText="Processing..."
                  >
                    Click to Demo Loading
                  </ButtonLoading>
                </button>
              </div>

              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Page Loading</h3>
                <button
                  onClick={handlePageLoadingDemo}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Show Page Loading
                </button>
              </div>
            </div>

            {/* Loading Overlay Demo */}
            <LoadingOverlay
              isLoading={showOverlay}
              message="Processing overlay..."
            >
              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6 mb-8">
                <h3 className="text-white font-semibold mb-4">
                  Loading Overlay Demo
                </h3>
                <p className="text-white/70 mb-4">
                  This content will be covered by a loading overlay when you
                  click the button below.
                </p>
                <button
                  onClick={handleOverlayDemo}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Show Overlay
                </button>
              </div>
            </LoadingOverlay>

            {/* Skeleton Loading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Content Skeleton
                </h3>
                <ContentLoading lines={4} />
              </div>

              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Loading Cards</h3>
                <div className="space-y-4">
                  <LoadingCard />
                  <LoadingCard />
                </div>
              </div>
            </div>

            {/* Loading Section */}
            <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Loading Section</h3>
              <LoadingSection />
            </div>

            {/* Additional Loading Components */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center">
                <h4 className="text-white font-semibold mb-4">
                  Loading Spinner
                </h4>
                <LoadingSpinner size="lg" />
              </div>

              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center">
                <h4 className="text-white font-semibold mb-4">Loading Dots</h4>
                <LoadingDots />
              </div>

              <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center">
                <h4 className="text-white font-semibold mb-4">Skeleton</h4>
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
