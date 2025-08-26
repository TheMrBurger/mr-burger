import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E3262E',
          light: '#f7f7f7'
        }
      },
      fontFamily: {
        sans: ['system-ui','Segoe UI','Inter','Roboto','Arial','sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
