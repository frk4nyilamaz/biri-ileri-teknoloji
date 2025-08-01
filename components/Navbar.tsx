'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Bize Ulaşın', href: '/contact' },
    { name: 'Yönetim', href: '/management' },
    { name: 'Haberler', href: '/news' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-effect shadow-2xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo with gradient */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-2xl md:text-3xl font-bold text-gradient-animated bg-[length:200%_200%] animate-gradient-flow transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
              biri
            </span>
            <span className="text-xs md:text-sm font-medium text-secondary-700 uppercase tracking-wide transition-all duration-300 group-hover:text-primary-600">
              İLERİ TEKNOLOJİ A.Ş.
            </span>
          </Link>

          {/* Desktop Navigation - Centered with enhanced effects */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover-lift ${
                  isActive(item.href)
                    ? 'text-gradient-animated bg-[length:200%_200%] animate-gradient-flow'
                    : 'text-secondary-600 hover:text-primary-600'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-secondary-600 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation with glass effect */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20 rounded-b-2xl shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-all duration-300 hover-lift p-3 rounded-xl ${
                    isActive(item.href)
                      ? 'text-gradient-animated bg-[length:200%_200%] animate-gradient-flow bg-gradient-to-r from-primary-50 to-purple-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 