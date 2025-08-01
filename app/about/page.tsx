import { FiRefreshCw, FiCloud, FiServer, FiSearch, FiSettings, FiPhone, FiGlobe, FiWifi, FiBarChart, FiCpu, FiUpload, FiMonitor } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Hakkımızda',
  description: 'Biri İleri Teknoloji A.Ş. hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve değerlerimiz.',
}

export default function AboutPage() {
  return (
    <PageLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Text Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6 text-secondary-800 leading-relaxed">
              <p className="text-lg">
              <strong>Biri İleri Teknoloji A.Ş.</strong>, dijital dönüşümün hızla ilerlediği
              günümüzde, sektör odaklı çözümler geliştirmek üzere yola çıkan
              yenilikçi bir teknoloji girişimidir. Ar-Ge çalışmalarına 2024 yılı
              başında başlayan şirketimiz <i>Biri</i>, 2025 yılının Temmuz ayında şirketleşme
              sürecini tamamlamıştır.
              </p>
              
              <p className="text-lg">
              Mobil uygulamalar öncelikli olmak üzere; iş süreçlerini
                kolaylaştıran, verimliliği artıran ve modern teknolojileri hayatın
                her alanına entegre eden çözümler geliştiriyoruz. Yalnızca mobil
                değil, farklı platformlara da yayılan ürün ve hizmetlerimizle pek
                çok sektörde operasyonel süreçleri dijitalleştiriyor, aynı zamanda
                sadeleştiriyoruz.
              </p>
              
              <p className="text-lg">
              Amacımız; teknolojiyi sadece üretmek değil, aynı zamanda
              anlamlı ve sürdürülebilir biçimde işletmelere ve bireylere entegre
              etmektir. Bu doğrultuda, yalınlık ilkesinden ödün vermeden
              geleceğin teknolojilerine ışık tutan çözümler tasarlıyoruz.
              </p>
            </div>
          </div>

          {/* Right Column - Hexagonal Technology Icons (1/3 width) */}
          <div className="lg:col-span-1 relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Hexagonal Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 transform rotate-12">
                  {/* Row 1 */}
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiRefreshCw className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiCloud className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiServer className="text-white text-xl" />
                  </div>
                  
                  {/* Row 2 */}
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiSearch className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiSettings className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  
                  {/* Row 3 */}
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiGlobe className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiWifi className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiBarChart className="text-white text-xl" />
                  </div>
                  
                  {/* Row 4 */}
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiCpu className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiUpload className="text-white text-xl" />
                  </div>
                  <div className="hexagon bg-blue-200/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
                    <FiMonitor className="text-white text-xl" />
                  </div>
                </div>
              </div>
              
              {/* Additional overlapping hexagons for dynamic effect */}
              <div className="absolute top-1/4 right-0 transform translate-x-1/2">
                <div className="hexagon bg-blue-200/20 backdrop-blur-sm border border-blue-300/30 flex items-center justify-center">
                  <FiServer className="text-white text-lg" />
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2">
                <div className="hexagon bg-blue-200/20 backdrop-blur-sm border border-blue-300/30 flex items-center justify-center">
                  <FiCloud className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
  )
} 