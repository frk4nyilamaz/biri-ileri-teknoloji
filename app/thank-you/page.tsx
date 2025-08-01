import Link from 'next/link'
import { FiCheckCircle, FiArrowLeft, FiMail } from 'react-icons/fi'

export const metadata = {
  title: 'Teşekkürler',
  description: 'Mesajınız başarıyla gönderildi. Biri İleri Teknoloji A.Ş. ekibi en kısa sürede size dönüş yapacak.',
}

export default function ThankYouPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <FiCheckCircle className="text-green-600" size={40} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Teşekkürler!
            </h1>
            
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Mesajınız başarıyla gönderildi. Biri İleri Teknoloji A.Ş. ekibi 
              en kısa sürede size dönüş yapacak ve projeleriniz hakkında 
              detaylı bilgi verecektir.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Sonraki Adımlar
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">E-posta Onayı</h3>
                    <p className="text-secondary-600">Gönderdiğiniz e-posta adresine onay mesajı gönderilecek.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Uzman İncelemesi</h3>
                    <p className="text-secondary-600">Proje detaylarınız uzman ekibimiz tarafından incelenecek.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Hızlı Dönüş</h3>
                    <p className="text-secondary-600">24 saat içinde size detaylı teklif ve önerilerimizi ileteceğiz.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-secondary flex items-center justify-center"
              >
                <FiArrowLeft className="mr-2" size={20} />
                Ana Sayfaya Dön
              </Link>
              <a
                href="mailto:info@biri.com.tr"
                className="btn-primary flex items-center justify-center"
              >
                <FiMail className="mr-2" size={20} />
                Direkt E-posta Gönder
              </a>
            </div>
            
            <div className="mt-12 p-6 bg-secondary-100 rounded-xl">
              <h3 className="font-semibold text-secondary-900 mb-2">
                Acil Durumlar İçin
              </h3>
              <p className="text-secondary-600 mb-4">
                Acil projeleriniz için doğrudan telefon ile iletişime geçebilirsiniz.
              </p>
              <a
                href="tel:+902121234567"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                +90 (212) 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 