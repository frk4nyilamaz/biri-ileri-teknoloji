# Biri İleri Teknoloji A.Ş. - Kurumsal Web Sitesi

Modern teknoloji çözümleri sunan Biri İleri Teknoloji A.Ş. için geliştirilmiş kurumsal web sitesi. Next.js, Tailwind CSS ve modern web teknolojileri kullanılarak oluşturulmuştur.

## 🚀 Özellikler

- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **SEO Optimizasyonu**: Meta etiketleri, sitemap ve robots.txt
- **Hızlı Performans**: Next.js ile server-side rendering
- **İletişim Formu**: Formsubmit.co entegrasyonu
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- **Erişilebilirlik**: WCAG standartlarına uygun
- **PWA Desteği**: Web app manifest ve offline desteği

## 📁 Proje Yapısı

```
biri-ileri-teknoloji/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── about/             # Hakkımızda sayfası
│   ├── team/              # Ekip sayfası
│   ├── news/              # Haberler sayfası
│   ├── contact/           # İletişim sayfası
│   └── thank-you/         # Teşekkür sayfası
├── components/            # Yeniden kullanılabilir bileşenler
│   ├── Navbar.tsx         # Navigasyon çubuğu
│   ├── Footer.tsx         # Alt bilgi
│   └── ContactForm.tsx    # İletişim formu
├── public/                # Statik dosyalar
│   ├── robots.txt         # SEO için robots.txt
│   ├── sitemap.xml        # Site haritası
│   └── site.webmanifest   # PWA manifest
├── package.json           # Proje bağımlılıkları
├── tailwind.config.js     # Tailwind CSS yapılandırması
├── next.config.js         # Next.js yapılandırması
└── README.md              # Proje dokümantasyonu
```

## 🛠️ Teknolojiler

- **Next.js 14**: React framework
- **TypeScript**: Tip güvenliği
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: İkon kütüphanesi
- **Formsubmit.co**: Form işleme servisi

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/frk4nyilamaz/biri-ileri-teknoloji.git
   cd biri-ileri-teknoloji
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 🔧 Yapılandırma

### İletişim Formu

Formsubmit.co kullanarak e-posta gönderimi yapılmaktadır. Formu aktif hale getirmek için:

1. `components/ContactForm.tsx` dosyasında e-posta adresini güncelleyin:
   ```tsx
   action="https://formsubmit.co/your-email@example.com"
   ```

2. İlk form gönderiminden sonra e-posta adresinize gelen onay linkine tıklayın.

### SEO Ayarları

1. `app/layout.tsx` dosyasında meta etiketlerini güncelleyin:
   - Site URL'si
   - Google Analytics kodu
   - Sosyal medya linkleri

2. `public/sitemap.xml` dosyasında URL'leri güncelleyin.

### Favicon ve Logolar

`public/` klasörüne aşağıdaki dosyaları ekleyin:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `og-image.jpg` (1200x630px)

## 🚀 Deployment

### Vercel ile Deployment

1. **GitHub'a yükleyin**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Vercel'e bağlayın**
   - [Vercel](https://vercel.com) hesabı oluşturun
   - GitHub repository'nizi bağlayın
   - Otomatik deployment başlayacak

3. **Özel domain ekleyin**
   - Vercel dashboard'da domain ayarlarına gidin
   - `biri.com.tr` domain'ini ekleyin
   - DNS ayarlarını yapılandırın

### Environment Variables

Vercel'de aşağıdaki environment variable'ları ayarlayın:
```
NEXT_PUBLIC_SITE_URL=https://biri.com.tr
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📱 Responsive Tasarım

Site aşağıdaki breakpoint'lerde optimize edilmiştir:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Özelleştirme

### Renkler

`tailwind.config.js` dosyasında renk paletini özelleştirebilirsiniz:

```js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
  secondary: {
    // ...
  }
}
```

### Fontlar

Google Fonts'tan Inter fontu kullanılmaktadır. Değiştirmek için:
1. `app/globals.css` dosyasında font import'unu güncelleyin
2. `tailwind.config.js` dosyasında font family'yi değiştirin

## 🔍 SEO Optimizasyonu

- Meta etiketleri her sayfa için optimize edilmiştir
- Open Graph ve Twitter Card desteği
- Sitemap.xml ve robots.txt
- Semantic HTML yapısı
- Alt etiketleri ve erişilebilirlik

## 📊 Analytics

Google Analytics eklemek için:

1. `app/layout.tsx` dosyasına Google Analytics script'ini ekleyin
2. Environment variable olarak `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` tanımlayın

## 🔒 Güvenlik

- Form validation
- CSRF koruması (Formsubmit.co ile)
- HTTPS zorunluluğu
- Content Security Policy

## 🧪 Test

```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 📞 Destek

Herhangi bir sorun veya öneri için:
- **E-posta**: info@biri.com.tr
- **Telefon**: +90 (212) 123 45 67

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

---

**Biri İleri Teknoloji A.Ş.** - Modern teknoloji çözümleri ile geleceği şekillendiriyoruz. 