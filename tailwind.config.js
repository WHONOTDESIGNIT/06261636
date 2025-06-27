/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ishine-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0074e0', // Primary button color (0,116,224)
          600: '#0059b3', // Hover color (0,89,179)
          700: '#002b5c', // Footer color (0,43,92)
        },
        'ishine-teal': {
          500: '#1e9d8a', // (30,157,139)
        },
        'ishine-pink': {
          500: '#ec4371', // (236,67,113)
        },
        'ishine-purple': {
          500: '#4f0481', // (79,4,127)
          600: '#7d0063', // (125,0,99)
        },
        'ishine-orange': {
          500: '#de7510', // (222,117,16)
          600: '#c6680e', // (198,104,14)
        },
        'ishine-cyan': {
          500: '#0089c4', // (0,137,196)
        },
        'ishine-light-blue': {
          500: '#b3c8e6', // (179,200,230)
        },
        'ishine-form': {
          500: '#0066a1', // (0,102,161)
          600: '#005688', // (0,86,136)
        },
        'navy-blue': '#1e3a8a', // Navy blue color for hover state
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-down': 'bounce-down 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-5px)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(0px)'
          },
          '100%': { 
            opacity: '0',
            transform: 'translateY(5px)'
          },
        }
      }
    },
  },
  plugins: [],
}