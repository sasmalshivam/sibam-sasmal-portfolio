/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E50914',
          crimson: '#D80027',
          darkRed: '#990011',
          coral: '#FF6B81',
          coralLight: '#FFA8B6',
          bgDark: '#080305',
          bgDarkMid: '#120508',
          bgDarkDeep: '#18070d',
          bgLight: '#FFF6F7',
          bgLightMid: '#FEECEF',
          bgLightAlt: '#FDE4E8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 4.5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.45' },
          '50%': { transform: 'scale(1.04)', opacity: '0.85' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(229, 9, 20, 0.45)',
        'glow-red-lg': '0 0 45px rgba(229, 9, 20, 0.6)',
        'glow-coral': '0 0 25px rgba(255, 107, 129, 0.4)',
        'nav-bar': '0 10px 30px -5px rgba(229, 9, 20, 0.5), 0 0 15px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
