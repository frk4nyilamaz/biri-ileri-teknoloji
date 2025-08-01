import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Bize Ulaşın',
  description: 'Biri İleri Teknoloji A.Ş. ile iletişime geçin. İletişim formu ve alternatif iletişim yöntemleri.',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start min-h-[80vh]">
        {/* Left Column - Contact Form */}
        <div  >
          <form
            action="https://formsubmit.co/furkan.yilmaz2003@hotmail.com"
            method="POST"
            className="space-y--10"
          >
            {/* Hidden fields for Formsubmit.co */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://biri.com.tr/thank-you" />
            <input type="hidden" name="_subject" value="Biri İleri Teknoloji - Yeni İletişim Formu" />
            <input type="hidden" name="_template" value="table" />

            {/* Name Field */}
            <div className="relative">
              <div  style={{marginBottom: '15px'}}>
                <label htmlFor="name" className="text-sm font-bold text-secondary-700">
                  Adınız:
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white"
                placeholder="Adınızı girin"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <div>
                <label htmlFor="phone" className="text-sm font-bold text-secondary-700">
                  Telefon numaranız:
                </label>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white"
                placeholder="Telefon numaranızı girin"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div>
                <label htmlFor="email" className="text-sm font-bold text-secondary-700">
                  e-posta adresiniz:
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white"
                placeholder="E-posta adresinizi girin"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <div>
                <label htmlFor="message" className="text-sm font-bold text-secondary-700">
                  Mesajınız:
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none bg-white"
                placeholder="Mesajınızı yazın..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg uppercase tracking-wide"
              >
                GÖNDER
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
          <div className="text-center lg:text-left">
            <p className="text-lg text-secondary-800 leading-relaxed">
              Veya{' '}
              <a 
                href="mailto:info@biri.com" 
                className="underline text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                info@biri.com
              </a>{' '}
              e-posta adresinden ulaşabilirsiniz.
            </p>
          </div>

          {/* Resim için yer bırakıldı */}
          <div className="mt-8">
            {/* Buraya resim eklenecek */}
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 