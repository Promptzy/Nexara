import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Features from '../components/Features'
import FeatureCard from '../components/FeatureCard'
import { Workflow } from 'lucide-react'

// Mock custom animation hooks
vi.mock('@/hooks/useScrollAnimation', () => ({
  useSlideIn: vi.fn(() => ({
    ref: { current: null },
    className: 'opacity-100 translate-x-0 translate-y-0',
    isVisible: true
  })),
  useScaleFadeIn: vi.fn(() => ({
    ref: { current: null },
    className: 'opacity-100 scale-100',
    isVisible: true
  }))
}))

describe('Features Component', () => {
  it('renders the main heading correctly', () => {
    render(<Features />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Powerful Features for Modern Teams')
  })

  it('renders the description text', () => {
    render(<Features />)
    
    const description = screen.getByText(/Transform your Jira workflow/)
    expect(description).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<Features />)
    
    // Check for specific feature titles
    expect(screen.getByText('Automation Designer')).toBeInTheDocument()
    expect(screen.getByText('AI Sprint Planner')).toBeInTheDocument()
    expect(screen.getByText('Smart Ticket Summaries')).toBeInTheDocument()
    expect(screen.getByText('ChatOps Bot')).toBeInTheDocument()
    expect(screen.getByText('Developer Load Balancer')).toBeInTheDocument()
    expect(screen.getByText('Semantic Search')).toBeInTheDocument()
    expect(screen.getByText('AI Test Case Generator')).toBeInTheDocument()
    expect(screen.getByText('Retrospective Insights')).toBeInTheDocument()
    expect(screen.getByText('Gantt and Calendar Views')).toBeInTheDocument()
    expect(screen.getByText('Cross-Project Heatmap')).toBeInTheDocument()
    expect(screen.getByText('Auto Release Notes')).toBeInTheDocument()
    expect(screen.getByText('Advanced Analytics')).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<Features />)
    
    const ctaButton = screen.getByRole('button', { name: /get started with zenjira today/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveTextContent('Get Started Today')
  })

  it('has proper accessibility attributes', () => {
    render(<Features />)
    
    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('aria-labelledby', 'features-heading')
    
    const featuresList = screen.getByRole('list', { name: 'Product features' })
    expect(featuresList).toBeInTheDocument()
  })

  it('applies responsive grid classes', () => {
    render(<Features />)
    
    const grid = screen.getByRole('list', { name: 'Product features' })
    expect(grid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4')
  })
})

describe('FeatureCard Component', () => {
  const mockProps = {
    icon: Workflow,
    title: 'Test Feature',
    description: 'This is a test feature description',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  }

  it('renders feature card with correct content', () => {
    render(<FeatureCard {...mockProps} />)
    
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
  })

  it('applies gradient classes correctly', () => {
    render(<FeatureCard {...mockProps} />)
    
    const iconContainer = screen.getByText('Test Feature').previousElementSibling
    expect(iconContainer).toHaveClass('bg-gradient-to-r', 'from-blue-500', 'to-cyan-500')
  })

  it('renders the icon component', () => {
    render(<FeatureCard {...mockProps} />)
    
    // Check if SVG icon is rendered (Lucide icons render as SVG)
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    render(<FeatureCard {...mockProps} className="custom-class" />)
    
    const card = screen.getByText('Test Feature').closest('.custom-class')
    expect(card).toBeInTheDocument()
  })
})