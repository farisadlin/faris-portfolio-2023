/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        'change-text-color': 'change-text-color 2s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'left-to-right': 'left-to-right 2s ease-in-out',
        'right-to-left': 'right-to-left 2s ease-in-out'
      },
      boxShadow: {
        'btn-resume': '3px 3px 0 0 #D926AA',
        'logo-resume': '3px 3px 0 0 #D926AA'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace']
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'left-to-right': {
          '0%': { left: '-25%' },
          '100%': { left: '50%' }
        },
        'right-to-left': {
          '0%': { left: '125%' },
          '100%': { left: '50%' }
        },
        'change-text-color': {
          '0%': { color: '#A6ADBB' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
