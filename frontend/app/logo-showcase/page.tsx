'use client'

import React from 'react'
import Logo from '@/components/Logo'

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Zenjira Logo Showcase
        </h1>

        {/* Logo Variants Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            Logo Variants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Icon Only */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
                Icon Only
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Logo variant="icon" size="lg" />
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Perfect for favicons, small spaces, and mobile apps
                </p>
              </div>
            </div>

            {/* Horizontal */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
                Horizontal
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Logo variant="horizontal" size="lg" />
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Ideal for navigation bars and main branding
                </p>
              </div>
            </div>

            {/* Vertical */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
                Vertical
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Logo variant="vertical" size="lg" />
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Great for sidebars and centered layouts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Size Variants Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            Size Variants
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-6 text-gray-700 dark:text-gray-300">
              Horizontal Logo Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-center">
                <Logo variant="horizontal" size="sm" />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Small
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Logo variant="horizontal" size="md" />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Medium
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Logo variant="horizontal" size="lg" />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Large
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Logo variant="horizontal" size="xl" />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Extra Large
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Support Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            Theme Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Theme */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Light Theme
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Logo variant="horizontal" size="md" />
                <Logo variant="icon" size="md" />
              </div>
            </div>

            {/* Dark Theme */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4 text-white">
                Dark Theme
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Logo variant="horizontal" size="md" />
                <Logo variant="icon" size="md" />
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            Usage Examples
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-6 text-gray-700 dark:text-gray-300">
              Navigation Bar Example
            </h3>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <Logo variant="horizontal" size="md" />
                <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Home</span>
                  <span>About</span>
                  <span>Features</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            Code Examples
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
              React Component Usage
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
              {`import Logo from '@/components/Logo'

// Basic usage
<Logo />

// With custom props
<Logo 
  variant="horizontal" 
  size="lg" 
  className="my-custom-class" 
/>

// Icon only for small spaces
<Logo variant="icon" size="sm" />

// Vertical layout for sidebars
<Logo variant="vertical" size="md" />`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}
