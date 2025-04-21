/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FF7F',
          dim: '#00cc66',
        },
        secondary: {
          DEFAULT: '#FFBF00',
          dim: '#cc9900',
        },
        background: {
          DEFAULT: '#000000',
          alt: '#1C1C1C',
        },
        text: {
          DEFAULT: '#C0C0C0',
          bright: '#FFFFFF',
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'matrix-fall': 'matrix-fall 20s linear infinite',
        'neon-pulse': 'neon-pulse 2s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-pulse': {
          '0%': { opacity: 0.6, boxShadow: '0 0 5px var(--color-primary)' },
          '100%': { opacity: 1, boxShadow: '0 0 20px var(--color-primary)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};