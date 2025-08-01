# Deployment Guide - Biri İleri Teknoloji A.Ş.

Bu dokümantasyon, Biri İleri Teknoloji A.Ş. web sitesini Vercel veya Netlify üzerinde deploy etmek için detaylı adımları içerir.

## 🚀 Deployment Seçenekleri

### 1. Vercel Deployment (Önerilen)

Vercel, Next.js uygulamaları için optimize edilmiş bir platformdur ve en iyi performansı sağlar.

#### Adım 1: GitHub Repository Hazırlığı

```bash
# Projeyi GitHub'a yükleyin
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/frk4nyilamaz/biri-ileri-teknoloji.git
git push -u origin main
```

#### Adım 2: Vercel Hesabı Oluşturma

1. [Vercel](https://vercel.com) adresine gidin
2. GitHub hesabınızla giriş yapın
3. "New Project" butonuna tıklayın
4. GitHub repository'nizi seçin

#### Adım 3: Proje Yapılandırması

Vercel otomatik olarak Next.js projesini algılayacaktır. Aşağıdaki ayarları kontrol edin:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (varsayılan)
- **Build Command**: `npm run build` (varsayılan)
- **Output Directory**: `.next` (varsayılan)

#### Adım 4: Environment Variables

Vercel dashboard'da "Settings" > "Environment Variables" bölümüne gidin ve şu değişkenleri ekleyin:

```
NEXT_PUBLIC_SITE_URL=https://biri.com.tr
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

#### Adım 5: Domain Yapılandırması

1. Vercel dashboard'da "Settings" > "Domains" bölümüne gidin
2. "Add Domain" butonuna tıklayın
3. `biri.com.tr` domain'ini ekleyin
4. DNS ayarlarını domain sağlayıcınızda yapılandırın:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Adım 6: Deployment

"Deploy" butonuna tıklayın. Vercel otomatik olarak:
- Kodunuzu build edecek
- Production'a deploy edecek
- HTTPS sertifikası sağlayacak
- CDN üzerinden dağıtacak

### 2. Netlify Deployment (Alternatif)

Netlify Functions kullanarak backend işlevselliği eklemek istiyorsanız bu seçeneği kullanın.

#### Adım 1: Netlify Hesabı Oluşturma

1. [Netlify](https://netlify.com) adresine gidin
2. GitHub hesabınızla giriş yapın
3. "New site from Git" butonuna tıklayın

#### Adım 2: Repository Bağlama

1. GitHub repository'nizi seçin
2. Build ayarlarını yapılandırın:

```
Build command: npm run build
Publish directory: .next
```

#### Adım 3: Environment Variables

Netlify dashboard'da "Site settings" > "Environment variables" bölümüne gidin:

```
NEXT_PUBLIC_SITE_URL=https://biri.com.tr
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=info@biri.com.tr
```

#### Adım 4: Netlify Functions Yapılandırması

1. `netlify.toml` dosyası zaten mevcuttur
2. `netlify/functions/contact.js` dosyasını kullanın
3. E-posta servisi için Gmail App Password kullanın

#### Adım 5: Domain Yapılandırması

1. "Domain settings" bölümüne gidin
2. "Add custom domain" butonuna tıklayın
3. `biri.com.tr` domain'ini ekleyin
4. DNS ayarlarını yapılandırın

## 🔧 Form Çözümleri

### Seçenek 1: Formsubmit.co (Vercel için)

1. `components/ContactForm.tsx` dosyasında e-posta adresini güncelleyin:
```tsx
action="https://formsubmit.co/your-email@example.com"
```

2. İlk form gönderiminden sonra e-posta adresinize gelen onay linkine tıklayın.

### Seçenek 2: Netlify Functions (Netlify için)

1. `components/ContactFormNetlify.tsx` dosyasını kullanın
2. `app/contact/page.tsx` dosyasında import'u değiştirin:
```tsx
import ContactFormNetlify from '@/components/ContactFormNetlify'
```

3. Gmail App Password oluşturun:
   - Google Hesabınıza gidin
   - Güvenlik > 2 Adımlı Doğrulama > Uygulama Şifreleri
   - Yeni uygulama şifresi oluşturun

## 📊 Analytics Kurulumu

### Google Analytics

1. [Google Analytics](https://analytics.google.com) hesabı oluşturun
2. Yeni property oluşturun
3. Measurement ID'yi alın
4. Environment variable olarak ekleyin:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Google Search Console

1. [Google Search Console](https://search.google.com/search-console) hesabı oluşturun
2. Domain property ekleyin: `biri.com.tr`
3. DNS doğrulaması yapın
4. Sitemap'i gönderin: `https://biri.com.tr/sitemap.xml`

## 🔒 SSL ve Güvenlik

### Vercel
- Otomatik SSL sertifikası
- HTTPS zorunluluğu
- Security headers otomatik yapılandırma

### Netlify
- Otomatik SSL sertifikası
- `netlify.toml` dosyasında security headers
- Content Security Policy yapılandırması

## 📱 PWA Yapılandırması

1. `public/` klasörüne favicon dosyalarını ekleyin:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

2. `public/og-image.jpg` dosyasını ekleyin (1200x630px)

3. `public/site.webmanifest` dosyası zaten mevcuttur

## 🔍 SEO Optimizasyonu

1. `app/layout.tsx` dosyasında meta etiketlerini güncelleyin
2. `public/sitemap.xml` dosyasında URL'leri güncelleyin
3. `public/robots.txt` dosyası zaten mevcuttur

## 📧 E-posta Yapılandırması

### Gmail SMTP Ayarları

```javascript
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // App Password kullanın
  }
});
```

### Alternatif E-posta Servisleri

- **SendGrid**: Ücretsiz 100 e-posta/gün
- **Mailgun**: Ücretsiz 5,000 e-posta/ay
- **AWS SES**: Çok uygun fiyatlı

## 🚨 Sorun Giderme

### Build Hataları

```bash
# Bağımlılıkları temizleyin
rm -rf node_modules package-lock.json
npm install

# Build test edin
npm run build
```

### Domain Sorunları

1. DNS ayarlarını kontrol edin
2. Propagation süresini bekleyin (24-48 saat)
3. SSL sertifikası otomatik olarak sağlanacaktır

### Form Gönderim Sorunları

1. Environment variables'ları kontrol edin
2. E-posta servisi ayarlarını doğrulayın
3. Spam filtrelerini kontrol edin

## 📞 Destek

Deployment sırasında sorun yaşarsanız:

- **E-posta**: info@biri.com.tr
- **Telefon**: +90 (212) 123 45 67
- **Dokümantasyon**: [README.md](./README.md)

---

**Not**: Bu deployment guide sürekli güncellenmektedir. En güncel bilgiler için proje repository'sini kontrol edin. 