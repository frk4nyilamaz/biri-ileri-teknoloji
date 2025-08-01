import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-r from-[#cdffd7] to-[#93b8ff] relative overflow-hidden ${className}`}>
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

      {/* Main Content */}
      <div className="container-custom pt-32 md:pt-40 pb-20">
        {children}
      </div>
    </div>
  )
}

export default PageLayout 