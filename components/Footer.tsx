import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold">Biri İleri Teknoloji A.Ş.</span>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Modern teknoloji çözümleri ile işletmenizi geleceğe taşıyoruz. 
                Yazılım geliştirme, dijital dönüşüm ve inovasyon odaklı hizmetlerimizle 
                sürdürülebilir büyüme sağlıyoruz.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/biri-ileri-teknoloji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/biri_teknoloji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href="https://github.com/biri-teknoloji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Ekibimiz
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Haberler
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">İletişim</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-300">
                      Teknoloji Vadisi<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:+902121234567"
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    +90 (212) 123 45 67
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:info@biri.com.tr"
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    info@biri.com.tr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-secondary-400 text-sm">
                © {currentYear} Biri İleri Teknoloji A.Ş. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Gizlilik Politikası
                </Link>
                <Link href="/terms" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Kullanım Şartları
                </Link>
                <Link href="/cookies" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Çerez Politikası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 