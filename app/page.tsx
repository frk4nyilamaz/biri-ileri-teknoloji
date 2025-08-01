import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      {/* Additional background element for homepage */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 leading-tight">
                Teknolojinin kalbinde;
                <br />
                Artık <span className="text-primary-600">biri</span> var!
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 leading-relaxed max-w-2xl">
                Geleceğin teknolojileri, hayatınızı bugün kolaylaştırsın!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about" 
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Hakkımızda
                <FiArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

          {/* Right Side - Smartphone Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Hands holding smartphone */}
              <div className="relative z-10">
                {/* Smartphone */}
                <div className="w-64 h-96 bg-gradient-to-br from-rose-gold to-copper rounded-3xl shadow-2xl relative overflow-hidden">
                  {/* Screen */}
                  <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                    {/* Digital circuit patterns */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
                      {/* Circuit lines */}
                      <div className="absolute top-4 left-4 w-16 h-0.5 bg-blue-400"></div>
                      <div className="absolute top-4 left-4 w-0.5 h-16 bg-blue-400"></div>
                      <div className="absolute top-4 right-4 w-16 h-0.5 bg-blue-400"></div>
                      <div className="absolute top-4 right-4 w-0.5 h-16 bg-blue-400"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-0.5 bg-blue-400"></div>
                      <div className="absolute bottom-4 left-4 w-0.5 h-16 bg-blue-400"></div>
                      <div className="absolute bottom-4 right-4 w-16 h-0.5 bg-blue-400"></div>
                      <div className="absolute bottom-4 right-4 w-0.5 h-16 bg-blue-400"></div>
                      
                      {/* Central radar/data interface */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 border-2 border-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-blue-300 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full"></div>
                      </div>
                      
                      {/* Additional circuit elements */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Home button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Hands (simplified representation) */}
                <div className="absolute -bottom-4 -left-4 w-20 h-12 bg-red-800 rounded-full opacity-80 transform rotate-12"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-12 bg-red-800 rounded-full opacity-80 transform -rotate-12"></div>
              </div>
              
              {/* Subtle shadow */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </PageLayout>
  )
} 