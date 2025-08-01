import { ReactNode } from 'react'
import Link from 'next/link'

interface GradientButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'gradient' | 'glass' | 'shimmer'
  size?: 'sm' | 'md' | 'lg'
  animation?: 'none' | 'pulse' | 'glow' | 'float'
  disabled?: boolean
}

const GradientButton = ({ 
  children, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  animation = 'none',
  disabled = false
}: GradientButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gradient-to-r from-secondary-100 to-secondary-200 hover:from-secondary-200 hover:to-secondary-300 text-secondary-800'
      case 'gradient':
        return 'bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 hover:from-primary-600 hover:via-purple-600 hover:to-pink-600 text-white'
      case 'glass':
        return 'glass-effect text-secondary-800 hover:bg-white/30'
      case 'shimmer':
        return 'relative overflow-hidden bg-gradient-to-r from-primary-500 to-purple-500 text-white'
      default:
        return 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-4 text-sm'
      case 'lg':
        return 'py-4 px-8 text-lg'
      default:
        return 'py-3 px-6 text-base'
    }
  }

  const getAnimationClasses = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-gradient-pulse'
      case 'glow':
        return 'glow-effect'
      case 'float':
        return 'floating-element'
      default:
        return ''
    }
  }

  const baseClasses = `group relative overflow-hidden font-medium rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl ${getVariantClasses()} ${getSizeClasses()} ${getAnimationClasses()} ${className}`

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : ''

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      {variant === 'shimmer' && (
        <div className="absolute inset-0 shimmer-effect"></div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${disabledClasses}`}>
        {content}
      </Link>
    )
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses}`}
    >
      {content}
    </button>
  )
}

export default GradientButton 