import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0D12',
          800: '#121622',
          700: '#1A2032'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
