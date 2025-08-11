'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

type Contributor = {
  rank: number
  name: string
  points: number
  contributions: number
}

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<'gssoc' | 'regular'>('gssoc')
  const [gssocData, setGssocData] = useState<Contributor[]>([])
  const [regularData, setRegularData] = useState<Contributor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        // Replace with your real backend API endpoints
        const [gssocRes, regularRes] = await Promise.all([
          fetch('/api/leaderboard/gssoc'),
          fetch('/api/leaderboard/regular'),
        ])

        if (!gssocRes.ok || !regularRes.ok) {
          throw new Error('Failed to fetch leaderboard data')
        }

        const gssocJson = await gssocRes.json()
        const regularJson = await regularRes.json()

        setGssocData(gssocJson)
        setRegularData(regularJson)
      } catch (err: any) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div
      className={cn(
        'flex flex-col gap-6 min-h-screen justify-center items-center bg-gradient-to-br from-black via-purple-950 to-black'
      )}
    >
      <div className="w-full max-w-3xl">
        <div className="bg-black/70 border border-white/15 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.01] transition-all duration-700 ease-out">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Leaderboard
            </h1>
            <p className="text-white/70 text-base">
              Recognizing top contributors of GSSoC 2025 and regular developers.
            </p>
          </header>

          {/* Tabs */}
          <div className="flex justify-center gap-6 border-b border-white/20 mb-6">
            <button
              className={cn(
                'pb-2 text-lg font-medium transition duration-200 border-b-2',
                activeTab === 'gssoc'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/50 hover:text-white hover:border-white/30'
              )}
              onClick={() => setActiveTab('gssoc')}
            >
              GSSoC 2025
            </button>
            <button
              className={cn(
                'pb-2 text-lg font-medium transition duration-200 border-b-2',
                activeTab === 'regular'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/50 hover:text-white hover:border-white/30'
              )}
              onClick={() => setActiveTab('regular')}
            >
              Regular Contributors
            </button>
          </div>

          {/* Loading & Error States */}
          {loading && (
            <p className="text-center text-white/70">Loading data...</p>
          )}
          {error && <p className="text-center text-red-400">{error}</p>}

          {/* Content */}
          {!loading && !error && (
            <>
              {activeTab === 'gssoc' ? (
                <div className="overflow-x-auto rounded-lg">
                  <table className="min-w-full text-left text-white">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-3 text-sm font-medium">Rank</th>
                        <th className="px-6 py-3 text-sm font-medium">Name</th>
                        <th className="px-6 py-3 text-sm font-medium">
                          Points
                        </th>
                        <th className="px-6 py-3 text-sm font-medium">
                          Contributions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {gssocData.map(contributor => (
                        <tr
                          key={contributor.rank}
                          className="hover:bg-white/10 transition"
                        >
                          <td className="px-6 py-4">{contributor.rank}</td>
                          <td className="px-6 py-4">{contributor.name}</td>
                          <td className="px-6 py-4">{contributor.points}</td>
                          <td className="px-6 py-4">
                            {contributor.contributions}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                  {regularData.map(contributor => (
                    <div
                      key={contributor.rank}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition transform hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        #{contributor.rank} - {contributor.name}
                      </h3>
                      <p className="text-white/80">
                        Points: {contributor.points}
                      </p>
                      <p className="text-white/80">
                        Contributions: {contributor.contributions}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="text-white/50 text-center text-xs mt-8">
          By viewing, you agree to our{' '}
          <a
            href="#"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 underline underline-offset-4"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="#"
            className="text-white/70 hover:text-purple-400 transition-colors duration-300 underline underline-offset-4"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  )
}
