import { FiMail, FiLinkedin } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Yönetim',
  description: 'Biri İleri Teknoloji A.Ş. yönetim ekibi. Kurucu ortaklarımız ve yönetim kadromuz.',
}

export default function ManagementPage() {
  return (
    <PageLayout>
        {/* Management Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Ali Ozan Kazbaş Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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

        {/* Teamwork Illustration */}
        <div className="relative flex justify-center items-center py-20">
          <div className="relative w-full max-w-4xl">
            {/* Puzzle Pieces */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              {/* Left Puzzle Piece */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg transform rotate-12 relative">
                  {/* Puzzle tab */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Right Puzzle Piece */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg transform -rotate-12 relative">
                  {/* Puzzle slot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* People Silhouettes */}
            <div className="flex justify-between items-center px-8">
              {/* Left Group - 3 people pushing left piece */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-16 bg-black rounded-full opacity-60"></div>
                <div className="w-8 h-16 bg-black rounded-full opacity-60"></div>
                <div className="w-8 h-16 bg-black rounded-full opacity-60"></div>
              </div>
              
              {/* Right Group - 3 people pushing right piece */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-16 bg-black rounded-full opacity-60"></div>
                <div className="w-8 h-16 bg-black rounded-full opacity-60"></div>
                <div className="w-8 h-16 bg-black rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </PageLayout>
  )
} 