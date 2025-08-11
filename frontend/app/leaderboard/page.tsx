import Leaderboard from '@/components/Leaderboard'
import Threads from '@/app/landingpage/components/Threads'

export default function LeaderboardPage() {
  return (
    <main className="bg-black min-h-screen relative">
      {/* Background animation */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          <div className="bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md border border-white/15 rounded-2xl p-8 shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-black/40 transform hover:scale-[1.01] transition-all duration-700 ease-out">
            <Leaderboard />
          </div>
        </div>
      </div>
    </main>
  )
}
