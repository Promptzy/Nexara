import { useToast } from '@/components/ui/toast'

export function useToastMessage() {
  const { addToast } = useToast()

  const showToast = {
    success: (title: string, message?: string) => {
      addToast({
        type: 'success',
        title,
        message,
        duration: 4000,
      })
    },

    error: (title: string, message?: string) => {
      addToast({
        type: 'error',
        title,
        message,
        duration: 6000, // Errors stay longer
      })
    },

    warning: (title: string, message?: string) => {
      addToast({
        type: 'warning',
        title,
        message,
        duration: 5000,
      })
    },

    info: (title: string, message?: string) => {
      addToast({
        type: 'info',
        title,
        message,
        duration: 4000,
      })
    },

    // Custom toast with more options
    custom: (
      type: 'success' | 'error' | 'warning' | 'info',
      title: string,
      message?: string,
      duration?: number
    ) => {
      addToast({
        type,
        title,
        message,
        duration: duration || 5000,
      })
    },

    // Toast with action button
    withAction: (
      type: 'success' | 'error' | 'warning' | 'info',
      title: string,
      message: string,
      actionLabel: string,
      actionHandler: () => void
    ) => {
      addToast({
        type,
        title,
        message,
        duration: Infinity, // Stay until user takes action
        action: {
          label: actionLabel,
          onClick: actionHandler,
        },
      })
    },
  }

  return showToast
}
