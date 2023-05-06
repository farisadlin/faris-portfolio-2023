/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn-resume': '3px 3px 0 0 #D926AA',
        'logo-resume': '3px 3px 0 0 #D926AA'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
