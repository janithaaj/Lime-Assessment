import type { Config } from 'tailwindcss';

const config: Config = {
  // In Tailwind v4, content paths are auto-detected by @tailwindcss/vite
  // You can still specify them explicitly if needed
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
};

export default config;
