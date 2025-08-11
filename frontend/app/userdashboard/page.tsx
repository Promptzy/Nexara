'use client'

import { useState, useEffect } from 'react'
import { PageLoading } from '@/components/ui/page-loading'
import Threads from '@/app/landingpage/components/Threads'

// Types
interface Project {
  id: number
  name: string
  status: 'active' | 'completed' | 'pending'
}

interface UserData {
  name: string
  email: string
  projects: Project[]
}

export default function UserDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API delay
        setUserData({
          name: 'John Doe',
          email: 'john@example.com',
          projects: [
            { id: 1, name: 'Project Alpha', status: 'active' },
            { id: 2, name: 'Project Beta', status: 'completed' },
            { id: 3, name: 'Project Gamma', status: 'pending' },
          ],
        })
      } catch (error) {
        console.error('Error loading user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  if (isLoading) {
    return <PageLoading message="Loading your dashboard..." />
  }

  const activeCount = userData?.projects.filter(p => p.status === 'active').length || 0
  const completedCount = userData?.projects.filter(p => p.status === 'completed').length || 0
  const inProgressCount = userData?.projects.filter(p => p.status === 'pending').length || 0

  return (
    <main className="bg-black min-h-screen relative">
      <div className="fixed inset-0 w-full h-full z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, {userData?.name}
              </h1>
              <p className="text-white/70">
                Here&apos;s what&apos;s happening with your projects
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Active Projects */}
              <StatCard
                title="Active Projects"
                count={activeCount}
                gradientFrom="purple-500"
                gradientTo="blue-500"
                iconPath="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />

              {/* Completed */}
              <StatCard
                title="Completed"
                count={completedCount}
                gradientFrom="green-500"
                gradientTo="emerald-500"
                iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />

              {/* In Progress */}
              <StatCard
                title="In Progress"
                count={inProgressCount}
                gradientFrom="orange-500"
                gradientTo="red-500"
                iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </div>

            {/* Projects Section */}
            <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Your Projects</h2>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  + New Project
                </button>
              </div>

              <div className="space-y-4">
                {userData?.projects.map(project => (
                  <div
                    key={project.id}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">{project.name}</h3>
                        <p className="text-white/60 text-sm">Last updated 2 hours ago</p> {/* Placeholder */}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'active'
                              ? 'bg-green-500/20 text-green-400'
                              : project.status === 'completed'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-orange-500/20 text-orange-400'
                          }`}
                        >
                          {project.status}
                        </span>
                        <button className="text-white/60 hover:text-white transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

// 📦 Reusable StatCard Component
function StatCard({
  title,
  count,
  gradientFrom,
  gradientTo,
  iconPath,
}: {
  title: string
  count: number
  gradientFrom: string
  gradientTo: string
  iconPath: string
}) {
  return (
    <div className={`bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 backdrop-blur-md border border-white/15 rounded-2xl p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm">{title}</p>
          <p className="text-3xl font-bold text-white">{count}</p>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-xl flex items-center justify-center`}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
      </div>
    </div>
  )
}
