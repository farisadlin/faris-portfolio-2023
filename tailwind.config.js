/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'change-text-color': 'change-text-color 2s ease-in-out',
        'fade-out': 'fade-out 0.1s ease-in-out',
        'intro-logo-dash': 'intro-logo-dash 2s linear infinite',
        'left-to-right': 'left-to-right 2s ease-in-out',
        'right-to-left': 'right-to-left 2s ease-in-out',
        'top-to-bottom': 'top-to-bottom 2s ease-in-out',
      },
      boxShadow: {
        'btn-resume': '3px 3px 0 0 #D926AA',
        'logo-resume': '3px 3px 0 0 #D926AA',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'font-mono': ['Font Mono', 'monospace'],
      },
      height: {
        'half-screen': '50vh',
      },
      keyframes: {
        'intro-logo-dash': {
          '0%': { 'stroke-dashoffset': 1 },
          '100%': { 'stroke-dashoffset': 0 },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'left-to-right': {
          '0%': { left: '-25%' },
          '100%': { left: '50%' },
        },
        'right-to-left': {
          '0%': { left: '125%' },
          '100%': { left: '50%' },
        },
        'top-to-bottom': {
          '0%': { top: '0' },
          '100%': { top: '50%' },
        },
        'change-text-color': {
          '0%': { color: '#A6ADBB' },
        },
      },
      strokeDasharray: {
        1: 1,
      },
      strokeDashoffset: {
        1: 1,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
