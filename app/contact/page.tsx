import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Bize Ulaşın',
  description: 'Biri İleri Teknoloji A.Ş. ile iletişime geçin. İletişim formu ve alternatif iletişim yöntemleri.',
}

export default function ContactPage() {
  return (
    <PageLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form
              action="https://formsubmit.co/furkan.yilmaz2003@hotmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden fields for Formsubmit.co */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://biri.com.tr/thank-you" />
              <input type="hidden" name="_subject" value="Biri İleri Teknoloji - Yeni İletişim Formu" />
              <input type="hidden" name="_template" value="table" />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Adınız:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Adınızı girin"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Telefon numaranız:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Telefon numaranızı girin"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  e-posta adresiniz:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mesajınız:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg uppercase tracking-wide"
              >
                GÖNDER
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column - Alternative Contact */}
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

            {/* Contact Icons */}
            <div className="flex space-x-8">
              {/* Email Icon */}
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <FiMail className="text-white text-2xl" />
              </div>

              {/* Phone Icon */}
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <FiPhone className="text-white text-2xl" />
              </div>

              {/* Message Icon */}
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <FiMessageCircle className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
  )
} 