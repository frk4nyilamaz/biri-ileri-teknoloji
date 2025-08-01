import { ReactNode } from 'react'

interface GradientCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient-border' | 'shimmer'
  hoverEffect?: boolean
  animation?: 'none' | 'float' | 'pulse' | 'glow'
}

const GradientCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = true,
  animation = 'none'
}: GradientCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'glass-card'
      case 'gradient-border':
        return 'gradient-border'
      case 'shimmer':
        return 'relative overflow-hidden bg-white rounded-2xl shadow-xl'
      default:
        return 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20'
    }
  }

  const getAnimationClasses = () => {
    switch (animation) {
      case 'float':
        return 'floating-element'
      case 'pulse':
        return 'animate-gradient-pulse'
      case 'glow':
        return 'glow-effect'
      default:
        return ''
    }
  }

  const getHoverClasses = () => {
    if (!hoverEffect) return ''
    return 'hover-lift smooth-transition'
  }

  return (
    <div className={`${getVariantClasses()} ${getAnimationClasses()} ${getHoverClasses()} ${className}`}>
      {variant === 'shimmer' && (
        <div className="absolute inset-0 shimmer-effect"></div>
      )}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  )
}

export default GradientCard 