import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'earthGreen': {
          100: '#C8E6C9',
          200: '#ADDAAF',
          300: '#87C98A',
          400: '#70BF73',
          500: '#4CAF50',
          600: '#459F49',
          700: '#367C39',
          800: '#2A602C',
          900: '#204A22',
        },
        'forestGreen': {
          100: '#BED1C3',
          200: '#9EBBA7',
          300: '#729C7E',
          400: '#568965',
          500: '#2C6B3F',
          600: '#286139',
          700: '#1F4C2D',
          800: '#183B23',
          900: '#122D1A',
        },
      },
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'serif'],
    },
  },
  plugins: [],
} satisfies Config;
