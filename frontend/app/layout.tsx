'use client'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LoadingProvider } from '@/components/providers/LoadingProvider'
import BackToTopInlineButton from '@/components/BackToTopInlineButton'
import Leaderboard from '@/components/Leaderboard'
import { usePathname } from 'next/navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nexara - AI-Powered Project Management Platform',
  description:
    'Intelligent automation and AI-driven insights for modern development teams.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          {/* Show leaderboard only on /leaderboard */}
          {pathname === '/leaderboard' ? <Leaderboard /> : children}
          <BackToTopInlineButton />
        </LoadingProvider>
      </body>
    </html>
  )
}
