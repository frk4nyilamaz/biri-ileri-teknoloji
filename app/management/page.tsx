import { FiMail, FiLinkedin } from 'react-icons/fi'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Yönetim',
  description: 'Biri İleri Teknoloji A.Ş. yönetim ekibi. Kurucu ortaklarımız ve yönetim kadromuz.',
}

export default function ManagementPage() {
  return (
    <PageLayout>
      {/* Yönetim icon in top-right corner */}
      {/* <div className="absolute top-20 right-20 w-32 h-32 opacity-80">
        <Image 
          src="/Yönetim Icon.jpg" 
          alt="Yönetim Icon" 
          width={128} 
          height={128} 
          className="w-full h-full object-contain"
        />
      </div> */}

      {/* Management Team Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 px-4 lg:px-8">
        {/* Ali Ozan Kazbaş Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 uppercase tracking-wide">
              ALİ OZAN KAZBAŞ
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Kurucu Ortak & Proje Direktörü
            </p>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FiMail className="text-primary-600" size={20} />
                <a 
                  href="mailto:ozankazbas@biri.com" 
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  ozankazbas@biri.com
                </a>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FiLinkedin className="text-primary-600" size={20} />
                <a 
                  href="https://www.linkedin.com/in/aliozankazbaş" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  www.linkedin.com/in/aliozankazbaş
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mehmet Ali Bilen Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 z-0">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 uppercase tracking-wide">
              MEHMET ALİ BİLEN
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Kurucu Ortak & Proje Operasyonlar Direktörü
            </p>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FiMail className="text-primary-600" size={20} />
                <a 
                  href="mailto:alibilen@biri.com" 
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  alibilen@biri.com
                </a>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FiLinkedin className="text-primary-600" size={20} />
                <a 
                  href="https://www.linkedin.com/in/mehmetalibilen" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  www.linkedin.com/in/mehmetalibilen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Görsel - En Alta Fixlenmiş */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
        <Image 
          src="/management.png" 
          alt="Management" 
          width={1500} 
          height={750} 
        />
      </div>

      {/* Yönetim Görsel */}
      {/* <div className="relative flex justify-center items-center py-20">
        <Image 
          src="/Yönetim Icon.jpg" 
          alt="Yönetim Görsel" 
          width={500} 
          height={300} 
          className="w-auto h-auto max-w-2xl"
        />
      </div> */}
    </PageLayout>
  )
} 