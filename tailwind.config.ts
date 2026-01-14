import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
        },
        secondary: {
          50: '#faf5ff',
        },
        success: {
          50: '#f0fdf4',
        },
        error: {
          50: '#fef2f2',
        },
        warning: {
          50: '#fffbeb',
        },
        info: {
          50: '#ecfeff',
        },
        neutral: {
          50: '#fafafa',
        },
        accent: {
          50: '#fff7ed',
        },
      },
    },
  },
  plugins: [],
};

export default config;
