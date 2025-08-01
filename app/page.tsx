import { FiArrowRight } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'
import GradientButton from '@/components/GradientButton'

export default function Home() {
  return (
    <PageLayout>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-secondary-900">Teknolojinin kalbinde;</span>
              <br />
              <span className="text-secondary-900">Artık </span>
              <span className="text-gradient-animated bg-[length:200%_200%] animate-gradient-flow">biri</span>
              <span className="text-secondary-900"> var!</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 leading-relaxed max-w-2xl animate-fade-in">
              Geleceğin teknolojileri, hayatınızı bugün kolaylaştırsın!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <GradientButton 
              href="/about" 
              variant="gradient"
              size="lg"
              animation="glow"
              className="inline-flex items-center"
            >
              Hakkımızda
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </GradientButton>
          </div>
        </div>

        {/* Right Side - Enhanced Smartphone Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative floating-element">
            {/* Enhanced smartphone with gradient border */}
            <div className="relative z-10">
              <div className="gradient-border p-1 rounded-3xl shadow-2xl">
                <div className="w-64 h-96 bg-gradient-to-br from-rose-gold via-copper to-amber-600 rounded-3xl relative overflow-hidden">
                  {/* Screen with animated gradient */}
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden">
                    {/* Animated circuit patterns */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-gradient-shift bg-[length:200%_200%]">
                      {/* Enhanced circuit lines with glow */}
                      <div className="absolute top-4 left-4 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50"></div>
                      <div className="absolute top-4 left-4 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50"></div>
                      <div className="absolute top-4 right-4 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/50"></div>
                      <div className="absolute top-4 right-4 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-pink-400 shadow-lg shadow-purple-400/50"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg shadow-green-400/50"></div>
                      <div className="absolute bottom-4 left-4 w-0.5 h-16 bg-gradient-to-b from-green-400 to-emerald-400 shadow-lg shadow-green-400/50"></div>
                      <div className="absolute bottom-4 right-4 w-16 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 shadow-lg shadow-red-400/50"></div>
                      <div className="absolute bottom-4 right-4 w-0.5 h-16 bg-gradient-to-b from-red-400 to-orange-400 shadow-lg shadow-red-400/50"></div>
                      
                      {/* Enhanced central radar/data interface */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 border-2 border-blue-400 rounded-full animate-pulse glow-effect"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-300 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full glow-effect"></div>
                      </div>
                      
                      {/* Animated circuit elements */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full animate-pulse animation-delay-2000"></div>
                      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-pulse animation-delay-4000"></div>
                      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-red-300 to-orange-300 rounded-full animate-pulse animation-delay-6000"></div>
                      
                      {/* Floating data particles */}
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping animation-delay-2000"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping animation-delay-4000"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced home button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Enhanced hands with gradient */}
              <div className="absolute -bottom-4 -left-4 w-20 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full opacity-80 transform rotate-12 shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full opacity-80 transform -rotate-12 shadow-lg"></div>
            </div>
            
            {/* Enhanced shadow with gradient */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gradient-to-r from-black/30 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 