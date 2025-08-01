/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'rose-gold': '#b76e79',
        'copper': '#b87333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blob': 'blob 7s infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 4s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%'
          },
        },
        gradientPulse: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)'
          },
        },
        gradientFlow: {
          '0%': { 
            backgroundPosition: '0% 0%',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            backgroundPosition: '100% 0%',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            backgroundPosition: '0% 100%',
            filter: 'hue-rotate(270deg)'
          },
          '100%': { 
            backgroundPosition: '0% 0%',
            filter: 'hue-rotate(360deg)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
            filter: 'brightness(1.1)'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'gradient-aurora': 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        'gradient-ocean': 'linear-gradient(45deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-sunset': 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
        'gradient-forest': 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
        'gradient-cosmic': 'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 50px 80px -20px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} 