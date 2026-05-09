/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#050505",
        secondary: "#0b0b0b",
        card: "#111111",
        cardHover: "#1a1a1a",

        accent: "#ffcc00",
        accentHover: "#ffb700",
        accentDeep: "#ff9500",

        textPrimary: "#ffffff",
        textSecondary: "#bdbdbd",
        textMuted: "#888888",

        borderTheme: "rgba(255,255,255,0.08)",
        borderGold: "rgba(255,204,0,0.3)",
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ffcc00 0%, #ff9500 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #ffb700 0%, #ffcc00 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0b0b0b 50%, #111111 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'glow-gold': 'radial-gradient(circle, rgba(255,204,0,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(255,204,0,0.15)',
        'gold-lg': '0 0 60px rgba(255,204,0,0.2)',
        'gold-xl': '0 0 80px rgba(255,204,0,0.25)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.6), 0 0 30px rgba(255,204,0,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-30px) translateX(10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};