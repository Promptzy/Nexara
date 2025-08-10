'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

// Toast types and their configurations
export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastConfig {
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  borderColor: string
  textColor: string
  iconColor: string
}

const toastConfigs: Record<ToastType, ToastConfig> = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-gradient-to-br from-black/80 via-black/70 to-black/80',
    borderColor: 'border-white/15',
    textColor: 'text-white/80',
    iconColor: 'text-green-400',
  },
  error: {
    icon: AlertCircle,
    bgColor: 'bg-gradient-to-br from-black/80 via-black/70 to-black/80',
    borderColor: 'border-white/15',
    textColor: 'text-white/80',
    iconColor: 'text-red-400',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-gradient-to-br from-black/80 via-black/70 to-black/80',
    borderColor: 'border-white/15',
    textColor: 'text-white/80',
    iconColor: 'text-yellow-400',
  },
  info: {
    icon: Info,
    bgColor: 'bg-gradient-to-br from-black/80 via-black/70 to-black/80',
    borderColor: 'border-white/15',
    textColor: 'text-white/80',
    iconColor: 'text-blue-400',
  },
}

// Toast interface
export interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// Toast context
interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  clearToasts: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

// Toast provider component
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = {
      id,
      duration: 5000, // Default 5 seconds
      ...toast,
    }

    setToasts(prev => [...prev, newToast])

    // Auto-remove toast after duration
    if (newToast.duration !== Infinity) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const clearToasts = () => {
    setToasts([])
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, clearToasts }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Individual toast component
function ToastItem({
  toast,
  onRemove,
}: {
  toast: Toast
  onRemove: (id: string) => void
}) {
  const config = toastConfigs[toast.type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'relative flex items-start gap-4 p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 transform',
        'animate-in slide-in-from-right-full',
        config.bgColor,
        config.borderColor,
        'hover:scale-105 hover:shadow-lg'
      )}
    >
      {/* Icon */}
      <div className={cn('flex-shrink-0 mt-0.5', config.iconColor)}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className={cn('font-medium text-lg mb-2', config.textColor)}>
          {toast.title}
        </h4>
        {toast.message && (
          <p
            className={cn(
              'text-sm opacity-80 leading-relaxed',
              config.textColor
            )}
          >
            {toast.message}
          </p>
        )}
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className={cn(
              'mt-3 text-sm font-medium underline underline-offset-2 hover:opacity-80 transition-opacity',
              config.textColor
            )}
          >
            {toast.action.label}
          </button>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={() => onRemove(toast.id)}
        className={cn(
          'flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors',
          config.textColor
        )}
      >
        <X className="w-4 h-4" />
      </button>

      {/* Progress bar */}
      {toast.duration !== Infinity && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden">
          <div
            className={cn(
              'h-full transition-all duration-300 ease-linear',
              config.borderColor.replace('/15', '/40')
            )}
            style={{
              animation: `shrink ${toast.duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  )
}

// Toast container
function ToastContainer() {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  )
}

// Convenience hook for different toast types
export function useToastHelpers() {
  const { addToast } = useToast()

  return {
    success: (title: string, message?: string, options?: Partial<Toast>) => {
      addToast({ type: 'success', title, message, ...options })
    },
    error: (title: string, message?: string, options?: Partial<Toast>) => {
      addToast({ type: 'error', title, message, ...options })
    },
    warning: (title: string, message?: string, options?: Partial<Toast>) => {
      addToast({ type: 'warning', title, message, ...options })
    },
    info: (title: string, message?: string, options?: Partial<Toast>) => {
      addToast({ type: 'info', title, message, ...options })
    },
  }
}

// Add CSS animations
const style = document.createElement('style')
style.textContent = `
  @keyframes shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
  
  @keyframes slide-in-from-right-full {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .animate-in {
    animation-fill-mode: both;
  }
  
  .slide-in-from-right-full {
    animation-name: slide-in-from-right-full;
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
`

if (typeof document !== 'undefined') {
  document.head.appendChild(style)
}
