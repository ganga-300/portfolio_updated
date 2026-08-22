/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: '#F6F5F0',
          card: '#EFECE6',
          'card-hover': '#E9E5DD',
          border: '#DFDCD5',
          dark: '#141414',
          muted: '#646464',
          green: '#2A4D43',
          'green-light': '#E2EBE7',
          'green-dark': '#1C352E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
