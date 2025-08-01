'use client'

import { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
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
    
    // Form will be submitted to Formsubmit.co
    // The actual submission is handled by the form action
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

      <form
        action="https://formsubmit.co/furkan.yilmaz2003@hotmail.com"
        method="POST"
        onSubmit={handleSubmit}
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

export default ContactForm 