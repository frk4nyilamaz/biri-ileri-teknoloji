import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Biri İleri Teknoloji A.Ş. - İnovatif Teknoloji Çözümleri',
    template: '%s | Biri İleri Teknoloji A.Ş.'
  },
  description: 'Biri İleri Teknoloji A.Ş., modern teknoloji çözümleri ile işletmenizi geleceğe taşıyor. Yazılım geliştirme, dijital dönüşüm ve inovasyon odaklı hizmetlerimizle tanışın.',
  keywords: ['teknoloji', 'yazılım', 'dijital dönüşüm', 'inovasyon', 'startup', 'Türkiye'],
  authors: [{ name: 'Biri İleri Teknoloji A.Ş.' }],
  creator: 'Biri İleri Teknoloji A.Ş.',
  publisher: 'Biri İleri Teknoloji A.Ş.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://biri.com.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://biri.com.tr',
    title: 'Biri İleri Teknoloji A.Ş. - İnovatif Teknoloji Çözümleri',
    description: 'Modern teknoloji çözümleri ile işletmenizi geleceğe taşıyoruz.',
    siteName: 'Biri İleri Teknoloji A.Ş.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Biri İleri Teknoloji A.Ş.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biri İleri Teknoloji A.Ş. - İnovatif Teknoloji Çözümleri',
    description: 'Modern teknoloji çözümleri ile işletmenizi geleceğe taşıyoruz.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
                            <Navbar />
                  <main className="flex-grow">
                    {children}
                  </main>
        </div>
      </body>
    </html>
  )
} 