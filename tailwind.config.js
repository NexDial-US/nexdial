/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050816',
          'bg-2': '#080d1f',
          'bg-3': '#0c1330',
          primary: '#1D6EFF',
          accent: '#00B8FF',
          secondary: '#4CC9F0',
          text: '#FFFFFF',
          muted: '#A9B0C7',
          border: 'rgba(255,255,255,0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1D6EFF 0%, #00B8FF 100%)',
        'gradient-brand-v': 'linear-gradient(180deg, #1D6EFF 0%, #4CC9F0 100%)',
        'gradient-dark': 'linear-gradient(180deg, #050816 0%, #080d1f 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(29,110,255,0.15) 0%, transparent 70%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(29,110,255,0.25) 0%, transparent 60%)',
        'gradient-card': 'linear-gradient(135deg, rgba(29,110,255,0.08) 0%, rgba(0,184,255,0.04) 100%)',
      },
      boxShadow: {
        'brand': '0 0 40px rgba(29,110,255,0.3)',
        'brand-sm': '0 0 20px rgba(29,110,255,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(29,110,255,0.15)',
        'glow': '0 0 80px rgba(29,110,255,0.4)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.6s ease-out 0.2s forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
