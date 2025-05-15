/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BFFF',
          dark: '#0099CC',
          light: '#66D9FF',
        },
        secondary: {
          DEFAULT: '#39FF14',
          dark: '#2DCF0F',
          light: '#7FFF66',
        },
        accent: {
          DEFAULT: '#9D00FF',
          dark: '#7E00CC',
          light: '#BE66FF',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          light: '#2D2D2D',
        },
        light: {
          DEFAULT: '#FFFFFF',
          darker: '#F2F2F2',
          dark: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 191, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3), 0 0 30px rgba(0, 191, 255, 0.1)',
        'neon-green': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.1)',
        'neon-violet': '0 0 10px rgba(157, 0, 255, 0.5), 0 0 20px rgba(157, 0, 255, 0.3), 0 0 30px rgba(157, 0, 255, 0.1)',
      },
    },
  },
  plugins: [],
};