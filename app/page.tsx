import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      
      
      {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[85vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h1 style={{fontSize: '3rem'}} className="text-3xl md:text-5xl lg:text-6xl font-medium text-secondary-900 leading-tight">
                Teknolojinin kalbinde;
                <br />
                <span style={{marginTop: '22px', marginLeft: '25px', fontSize: '3.80rem'}} className="inline-flex items-center gap-3">
                  Artık
                  <Image
                    src="/logo__siyah_-removebg-preview.png"
                    alt="Biri"
                    width={125}
                    height={45}
                    style={{marginBottom: '10px'}}
                    // className="inline-block align-middle"
                  />
                  var!
                </span>
              </h1>

              <p style={{fontSize: '24px'}}>
                Geleceğin teknolojileri, hayatınızı bugün kolaylaştırsın!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/about" 
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-5 px-10 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{fontSize: '24px', marginLeft: '100px'}}
              >
                Hakkımızda
                <FiArrowRight className="ml-3" size={24} />
              </Link>
            </div>
          </div>

          {/* Right Side - Ana Sayfa Görsel */}
          <div className="absolute bottom-0 right-0 z-10">
            <Image 
              src="/kadin_eli_son.png" 
              alt="Ana Sayfa Görsel" 
              width={950}   
              height={400} 
              className="mix-blend-screen filter brightness-120 contrast-120 saturate-150"
            />
          </div>
        </div>
      </PageLayout>
  )
} 