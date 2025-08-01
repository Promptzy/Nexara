import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-20 right-4 z-50 p-3 rounded-full transition-all duration-300 
        backdrop-blur-md border shadow-lg hover:scale-110
        sm:top-6 sm:right-6
        ${
          isDarkMode
            ? 'bg-black/20 border-white/20 text-white hover:bg-black/30'
            : 'bg-white/20 border-purple-300/30 text-purple-200 hover:bg-white/30'
        }
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon for light mode */}
        <svg
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isDarkMode
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>

        {/* Moon icon for dark mode */}
        <svg
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isDarkMode
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  )
}

export default ThemeToggle
