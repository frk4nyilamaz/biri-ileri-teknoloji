import { ReactNode } from 'react'
import Image from 'next/image'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className={`h-screen bg-gradient-to-r from-[#cdffd7] to-[#93b8ff] relative overflow-hidden ${className}`}>
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

      {/* Wave Image - Sağ Üst Köşe */}
      <div className="absolute top-0 right-0 z-0">
        <Image 
          src="/wave.png" 
          alt="Wave" 
          width={390}   
          height={250} 
          className="opacity-100"
        />
      </div>

      {/* Main Content */}
      <div className="container-custom pt-20 md:pt-28 pb-16">
        {children}
      </div>
    </div>
  )
}

export default PageLayout 