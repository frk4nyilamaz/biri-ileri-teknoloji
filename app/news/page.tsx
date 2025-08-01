import { FiVolume2 } from 'react-icons/fi'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Haberler',
  description: 'Biri İleri Teknoloji A.Ş. haberleri ve duyuruları. Faaliyet duyurularımız yakında burada olacak.',
}

export default function NewsPage() {
  return (
    <PageLayout>
      {/* Dalga icon in top-right corner */}
      {/* <div className="absolute top-20 right-20 w-32 h-32 opacity-80">
        <Image 
          src="/sag╠å u╠êstte bulunan dalga icon.jpg" 
          alt="News Icon" 
          width={128} 
          height={128} 
          className="w-full h-full object-contain"
        />
      </div> */}

      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        {/* Megaphone Icon */}
        <div className="mb-8 transform rotate-12">
          <FiVolume2 className="text-secondary-700 text-8xl md:text-9xl" />
        </div>
        
        {/* Coming Soon Message */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-4">
          Faaliyet duyuruları yakında!
        </h1>
        
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl">
          Şirketimizin en son haberleri, duyuruları ve gelişmeleri 
          yakında burada paylaşılacak.
        </p>
      </div>
    </PageLayout>
  )
} 