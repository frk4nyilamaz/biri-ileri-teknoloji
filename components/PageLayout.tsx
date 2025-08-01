import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#cdffd7] via-[#c8f9db] via-[#c0efe0] via-[#b6e2e7] via-[#b1dceb] via-[#aad4ef] via-[#9ec6f7] to-[#93b8ff] relative overflow-hidden ${className}`}>
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      
      {/* Wavy pattern in top-right corner */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M20,50 Q50,20 80,50 T140,50 T200,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-300"
          />
          <path
            d="M20,80 Q50,50 80,80 T140,80 T200,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-300"
          />
          <path
            d="M20,110 Q50,80 80,110 T140,110 T200,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-300"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container-custom pt-32 md:pt-40 pb-20">
        {children}
      </div>
    </div>
  )
}

export default PageLayout 