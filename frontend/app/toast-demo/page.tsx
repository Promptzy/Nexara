'use client'
import { useToastMessage } from '@/hooks/useToastMessage'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ToastDemoPage() {
  const showToast = useToastMessage()

  const handleSuccessToast = () => {
    showToast.success('Success!', 'Operation completed successfully')
  }

  const handleErrorToast = () => {
    showToast.error('Error occurred', 'Something went wrong. Please try again.')
  }

  const handleWarningToast = () => {
    showToast.warning('Warning', 'Please review your input before proceeding')
  }

  const handleInfoToast = () => {
    showToast.info('Information', 'Here is some helpful information for you')
  }

  const handleCustomDuration = () => {
    showToast.custom(
      'success',
      'Custom Duration',
      'This toast will stay for 10 seconds',
      10000
    )
  }

  const handleActionToast = () => {
    showToast.withAction(
      'warning',
      'Action Required',
      'Please confirm this action to continue',
      'Confirm',
      () => {
        showToast.success('Action confirmed!', 'You can now proceed')
      }
    )
  }

  const handleMultipleToasts = () => {
    showToast.success('First toast', 'This is the first notification')
    setTimeout(
      () => showToast.info('Second toast', 'This is the second notification'),
      500
    )
    setTimeout(
      () => showToast.warning('Third toast', 'This is the third notification'),
      1000
    )
    setTimeout(
      () => showToast.error('Fourth toast', 'This is the fourth notification'),
      1500
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Toast Notification Demo
          </h1>
          <p className="text-white/70 text-lg">
            Explore different types of toast notifications and their features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Success Toast */}
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-green-400">Success Toast</CardTitle>
              <CardDescription className="text-white/70">
                Shows successful operations with green theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleSuccessToast}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Show Success Toast
              </Button>
            </CardContent>
          </Card>

          {/* Error Toast */}
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-red-400">Error Toast</CardTitle>
              <CardDescription className="text-white/70">
                Displays errors with red theme and longer duration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleErrorToast}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Show Error Toast
              </Button>
            </CardContent>
          </Card>

          {/* Warning Toast */}
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-yellow-400">Warning Toast</CardTitle>
              <CardDescription className="text-white/70">
                Alerts users with yellow theme for warnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleWarningToast}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                Show Warning Toast
              </Button>
            </CardContent>
          </Card>

          {/* Info Toast */}
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-blue-400">Info Toast</CardTitle>
              <CardDescription className="text-white/70">
                Provides information with blue theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleInfoToast}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Show Info Toast
              </Button>
            </CardContent>
          </Card>

          {/* Custom Duration */}
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-purple-400">Custom Duration</CardTitle>
              <CardDescription className="text-white/70">
                Toast with custom display duration (10 seconds)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleCustomDuration}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Show Custom Duration
              </Button>
            </CardContent>
          </Card>

          {/* Action Toast */}
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-orange-400">Action Toast</CardTitle>
              <CardDescription className="text-white/70">
                Toast with action button that stays until clicked
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleActionToast}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                Show Action Toast
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Multiple Toasts */}
        <div className="mt-12">
          <Card className="bg-white/5 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-white">Multiple Toasts</CardTitle>
              <CardDescription className="text-white/70">
                Trigger multiple toasts in sequence to see how they stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleMultipleToasts}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="lg"
              >
                Show Multiple Toasts
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-white/70">
              <li>• 4 different toast types (success, error, warning, info)</li>
              <li>• Customizable duration for each toast</li>
              <li>• Action buttons for interactive toasts</li>
              <li>• Smooth animations and transitions</li>
              <li>• Progress bar showing time remaining</li>
              <li>• Hover effects and scaling</li>
              <li>• Backdrop blur and modern design</li>
              <li>• Responsive layout</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Usage</h3>
            <div className="bg-black/20 rounded-lg p-4">
              <code className="text-green-400 text-sm">
                {`import { useToastMessage } from '@/hooks/useToastMessage'

const showToast = useToastMessage()

// Basic usage
showToast.success('Success!', 'Operation completed')
showToast.error('Error', 'Something went wrong')
showToast.warning('Warning', 'Please review input')
showToast.info('Info', 'Helpful information')

// Advanced usage
showToast.custom('success', 'Title', 'Message', 10000)
showToast.withAction('warning', 'Title', 'Message', 'Action', handler)`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
