'use client'

import { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi'

const ContactFormNetlify = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Bizimle İletişime Geçin
        </h2>
        <p className="text-secondary-600 text-lg">
          Projeleriniz için en uygun çözümü birlikte bulalım
        </p>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="font-medium">Mesajınız başarıyla gönderildi!</p>
          <p className="text-sm">Teşekkür sayfasına yönlendiriliyorsunuz...</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="font-medium">Hata oluştu!</p>
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
            Ad Soyad *
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="input-field pl-10"
              placeholder="Adınız ve soyadınız"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
            E-posta Adresi *
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="input-field pl-10"
              placeholder="ornek@email.com"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
            Telefon Numarası *
          </label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="input-field pl-10"
              placeholder="+90 (5XX) XXX XX XX"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
            Mesajınız *
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-secondary-400" size={20} />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="input-field pl-10 resize-none"
              placeholder="Projeniz hakkında detayları paylaşın..."
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Gönderiliyor...</span>
            </>
          ) : (
            <>
              <FiSend size={20} />
              <span>Mesaj Gönder</span>
            </>
          )}
        </button>

        <p className="text-xs text-secondary-500 text-center">
          * İşaretli alanlar zorunludur. Bilgileriniz güvenle korunmaktadır.
        </p>
      </form>
    </div>
  )
}

export default ContactFormNetlify 