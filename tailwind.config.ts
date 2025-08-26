// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0a',
          dark: '#121212',
          red: '#E3262E'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Inter', 'Roboto', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
