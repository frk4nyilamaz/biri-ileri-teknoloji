import { ReactNode } from 'react'
import GradientBackground from './GradientBackground'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  gradientVariant?: 'default' | 'aurora' | 'ocean' | 'sunset' | 'forest' | 'cosmic' | 'mesh'
  gradientIntensity?: 'subtle' | 'medium' | 'intense'
}

const PageLayout = ({ 
  children, 
  className = '', 
  gradientVariant = 'default',
  gradientIntensity = 'medium'
}: PageLayoutProps) => {
  return (
    <GradientBackground 
      className={className}
      variant={gradientVariant}
      intensity={gradientIntensity}
    >
      {/* Enhanced wavy pattern with animation */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-20 floating-element">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M20,50 Q50,20 80,50 T140,50 T200,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-blue-400 animate-pulse"
          />
          <path
            d="M20,80 Q50,50 80,80 T140,80 T200,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-purple-400 animate-pulse animation-delay-2000"
          />
          <path
            d="M20,110 Q50,80 80,110 T140,110 T200,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-pink-400 animate-pulse animation-delay-4000"
          />
        </svg>
      </div>

      {/* Main Content with glass effect */}
      <div className="container-custom pt-32 md:pt-40 pb-20">
        <div className="glass-card p-8 rounded-3xl">
          {children}
        </div>
      </div>
    </GradientBackground>
  )
}

export default PageLayout 