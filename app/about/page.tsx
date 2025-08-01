import { FiRefreshCw, FiCloud, FiServer, FiSearch, FiSettings, FiPhone, FiGlobe, FiWifi, FiBarChart, FiCpu, FiUpload, FiMonitor } from 'react-icons/fi'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Hakkımızda',
  description: 'Biri İleri Teknoloji A.Ş. hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve değerlerimiz.',
}

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hakkımızda icon in top-right corner */}
      {/* <div className="absolute top-20 right-20 w-32 h-32 opacity-80">
        <Image 
          src="/Hakkimizda_Icon-removebg-preview.png" 
          alt="Hakkımızda Icon" 
          width={128} 
          height={128} 
          className="w-full h-full object-contain"
        />
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column - Text Content (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6 text-secondary-800 leading-relaxed">
            <p className="text-lg">
            <strong>Biri İleri Teknoloji A.Ş.</strong>, dijital dönüşümün hızla ilerlediği
            günümüzde, sektör odaklı çözümler geliştirmek üzere yola çıkan
            yenilikçi bir teknoloji girişimidir. Ar-Ge çalışmalarına 2024 yılı
            başında başlayan şirketimiz 
            <Image src="/logo__siyah_-removebg-preview.png" 
            alt="Biri" 
            width={35} 
            height={20} 
            style={{ marginLeft: '5px', marginBottom: '5px'}} 
            className="inline-block align-middle"
            />


            
            , 2025 yılının Temmuz ayında şirketleşme
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

        {/* Right Column - Hakkımızda Görsel (1/3 width) */}
        <div className="lg:col-span-1 relative">
          <Image 
            src="/Hakkimizda_Icon-removebg-preview.png" 
            alt="Hakkımızda Görsel" 
            width={300} 
            height={400} 
            className="w-full h-auto"
          />
        </div>
      </div>
    </PageLayout>
  )
} 