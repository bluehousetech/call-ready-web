import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#044FE7',  // Main electric blue
          600: '#033EB9',
          700: '#022D8A',
          800: '#021C5C',
          900: '#010B2E',
        },
        teal: {
          50: '#E6F9F8',
          100: '#CCF3F1',
          200: '#99E7E3',
          300: '#66DBD5',
          400: '#33CFC7',
          500: '#00B6AF',  // Main teal
          600: '#00928C',
          700: '#006D69',
          800: '#004946',
          900: '#002423',
        },
        purple: {
          50: '#F2F0FF',
          100: '#E5E1FF',
          200: '#CBC3FF',
          300: '#B1A5FF',
          400: '#9783FF',
          500: '#7761FF',  // Main purple
          600: '#5F4ECC',
          700: '#473A99',
          800: '#2F2766',
          900: '#181333',
        },
        dark: {
          50: '#E8E8E9',
          100: '#D1D1D3',
          200: '#A3A3A7',
          300: '#75757B',
          400: '#47474F',
          500: '#17191F',  // Main dark text
          600: '#121419',
          700: '#0E0F13',
          800: '#090A0C',
          900: '#050506',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'natural': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'deep': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'sharp': '0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
