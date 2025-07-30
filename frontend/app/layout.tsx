import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zenjira - AI-Powered Jira Management Platform',
  description:
    'Intelligent automation and AI-driven insights for modern development teams. Transform your Jira workflow with powerful features.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="sticky top-0 z-3">
          <NavBar />
        </div> */}
        {children}
      </body>
    </html>
  )
}
