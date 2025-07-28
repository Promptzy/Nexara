import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Features from '../components/Features'
import FeatureCard from '../components/FeatureCard'
import { Bot } from 'lucide-react'

describe('Features Component', () => {
  it('renders the main heading correctly', () => {
    render(<Features />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Everything you need to supercharge your workflow')
  })

  it('renders the features badge', () => {
    render(<Features />)
    
    expect(screen.getByText('✨')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders core features section', () => {
    render(<Features />)
    
    expect(screen.getByText('Core Features')).toBeInTheDocument()
    expect(screen.getByText('Automation Designer')).toBeInTheDocument()
    expect(screen.getByText('AI Sprint Planner')).toBeInTheDocument()
    expect(screen.getByText('Smart Ticket Summaries')).toBeInTheDocument()
    expect(screen.getByText('ChatOps Bot')).toBeInTheDocument()
    expect(screen.getByText('Developer Load Balancer')).toBeInTheDocument()
  })

  it('renders advanced features section', () => {
    render(<Features />)
    
    expect(screen.getByText('Advanced Features')).toBeInTheDocument()
    expect(screen.getByText('Semantic Search')).toBeInTheDocument()
    expect(screen.getByText('AI Test Case Generator')).toBeInTheDocument()
    expect(screen.getByText('Retrospective Insights')).toBeInTheDocument()
    expect(screen.getByText('Gantt and Calendar Views')).toBeInTheDocument()
    expect(screen.getByText('Cross-Project Heatmap')).toBeInTheDocument()
    expect(screen.getByText('Auto Release Notes')).toBeInTheDocument()
  })

  it('renders all 11 feature cards', () => {
    render(<Features />)
    
    // Should have 5 core + 6 advanced = 11 total features
    const featureCards = document.querySelectorAll('[class*="bg-slate-800"]')
    expect(featureCards.length).toBe(11)
  })

  it('applies correct background gradient', () => {
    render(<Features />)
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section')
    expect(section).toHaveClass('bg-gradient-to-br', 'from-slate-900', 'via-slate-800', 'to-slate-900')
  })

  it('has responsive grid layout classes', () => {
    render(<Features />)
    
    // Check for grid containers
    const gridContainers = document.querySelectorAll('.grid')
    expect(gridContainers.length).toBeGreaterThan(0)
    
    // Check for responsive classes
    const topRowGrid = document.querySelector('.grid-cols-1.lg\\:grid-cols-2')
    expect(topRowGrid).toBeInTheDocument()
  })
})

describe('FeatureCard Component', () => {
  const mockProps = {
    icon: Bot,
    title: 'Test Feature',
    description: 'This is a test feature description for testing purposes',
    action: 'Test action'
  }

  it('renders feature card with correct content', () => {
    render(<FeatureCard {...mockProps} />)
    
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description for testing purposes')).toBeInTheDocument()
    expect(screen.getByText('Test action')).toBeInTheDocument()
  })

  it('renders the icon component', () => {
    render(<FeatureCard {...mockProps} />)
    
    // Check if SVG icon is rendered (Lucide icons render as SVG)
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('applies gradient background to icon container', () => {
    render(<FeatureCard {...mockProps} />)
    
    const iconContainer = document.querySelector('.bg-gradient-to-br')
    expect(iconContainer).toHaveClass('from-blue-500', 'via-purple-500', 'to-pink-500')
  })

  it('renders action button with arrow icon', () => {
    render(<FeatureCard {...mockProps} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test action')
    
    // Check for arrow SVG
    const arrowIcon = button.querySelector('svg')
    expect(arrowIcon).toBeInTheDocument()
  })

  it('shows code preview when hasCodePreview is true', () => {
    render(<FeatureCard {...mockProps} hasCodePreview={true} />)
    
    expect(screen.getByText('test-generator.js')).toBeInTheDocument()
    expect(screen.getByText('// AI Test Case Generation')).toBeInTheDocument()
    expect(screen.getByText('generateTest')).toBeInTheDocument()
    expect(screen.getByText('bugReport')).toBeInTheDocument()
  })

  it('does not show code preview when hasCodePreview is false', () => {
    render(<FeatureCard {...mockProps} hasCodePreview={false} />)
    
    expect(screen.queryByText('test-generator.js')).not.toBeInTheDocument()
    expect(screen.queryByText('// AI Test Case Generation')).not.toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    render(<FeatureCard {...mockProps} className="custom-test-class" />)
    
    const card = screen.getByText('Test Feature').closest('.custom-test-class')
    expect(card).toBeInTheDocument()
  })

  it('has proper hover and group classes', () => {
    render(<FeatureCard {...mockProps} />)
    
    const card = screen.getByText('Test Feature').closest('div')
    expect(card).toHaveClass('group', 'hover:border-slate-600/50', 'hover:bg-slate-800/80')
  })

  it('renders terminal-style dots in code preview', () => {
    render(<FeatureCard {...mockProps} hasCodePreview={true} />)
    
    const redDot = document.querySelector('.bg-red-400')
    const yellowDot = document.querySelector('.bg-yellow-400')
    const greenDot = document.querySelector('.bg-green-400')
    
    expect(redDot).toBeInTheDocument()
    expect(yellowDot).toBeInTheDocument()
    expect(greenDot).toBeInTheDocument()
  })
})