import { ReactNode } from 'react'

interface GradientBackgroundProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'aurora' | 'ocean' | 'sunset' | 'forest' | 'cosmic' | 'mesh'
  intensity?: 'subtle' | 'medium' | 'intense'
}

const GradientBackground = ({ 
  children, 
  className = '', 
  variant = 'default',
  intensity = 'medium' 
}: GradientBackgroundProps) => {
  const getGradientClasses = () => {
    const baseClasses = 'absolute inset-0 transition-all duration-1000'
    
    switch (variant) {
      case 'aurora':
        return `${baseClasses} gradient-aurora-bg`
      case 'ocean':
        return `${baseClasses} gradient-ocean-bg`
      case 'sunset':
        return `${baseClasses} gradient-sunset-bg`
      case 'forest':
        return `${baseClasses} gradient-forest-bg`
      case 'cosmic':
        return `${baseClasses} gradient-cosmic-bg`
      case 'mesh':
        return `${baseClasses} gradient-mesh-bg`
      default:
        return `${baseClasses} bg-gradient-to-br from-[#cdffd7] via-[#c8f9db] via-[#c0efe0] via-[#b6e2e7] via-[#b1dceb] via-[#aad4ef] via-[#9ec6f7] to-[#93b8ff] animate-gradient-flow bg-[length:400%_400%]`
    }
  }

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'subtle':
        return 'opacity-30'
      case 'intense':
        return 'opacity-80'
      default:
        return 'opacity-50'
    }
  }

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Main gradient background */}
      <div className={getGradientClasses()}></div>
      
      {/* Animated floating elements */}
      <div className={`absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl ${getIntensityClasses()} animate-blob floating-element`}></div>
      <div className={`absolute top-40 right-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl ${getIntensityClasses()} animate-blob animation-delay-2000 floating-element`}></div>
      <div className={`absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl ${getIntensityClasses()} animate-blob animation-delay-4000 floating-element`}></div>
      
      {/* Morphing blob elements */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-lg ${getIntensityClasses()} morphing-blob`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-lg ${getIntensityClasses()} morphing-blob animation-delay-2000`}></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-blue-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
        <div className="w-full h-full border-2 border-purple-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default GradientBackground 