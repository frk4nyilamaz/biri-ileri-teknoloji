import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      
      
      {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 style={{fontSize: '2.5rem'}} className="text-2xl md:text-4xl lg:text-5xl font-medium text-secondary-900 leading-tight">
                Teknolojinin kalbinde;
                <br />
                <span style={{marginTop: '10px', marginLeft: '20px'}} className="inline-flex items-center gap-2">
                  Artık
                  <Image
                    src="/logo__siyah_-removebg-preview.png"
                    alt="Biri"
                    width={130}
                    height={40}
                    
                    // className="inline-block align-middle"
                  />
                  var!
                </span>
              </h1>

              <p style={{fontSize: '20px'}} className="text-xl md:text-2xl text-secondary-600 leading-relaxed max-w-2xl">
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

          {/* Right Side - Ana Sayfa Görsel */}
          <div className="absolute bottom-7 right-0 z-10">
            <Image 
              src="/kadin_eli_son.png" 
              alt="Ana Sayfa Görsel" 
              width={850}   
              height={350} 
              className="mix-blend-screen filter brightness-120 contrast-120 saturate-150"
            />
          </div>
        </div>
      </PageLayout>
  )
} 