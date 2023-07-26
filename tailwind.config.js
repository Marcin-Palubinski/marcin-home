/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      foreground: 'rgb(var(--foreground) / <alpha-value>)',
      background: 'rgb(var(--background) / <alpha-value>)',
      primary: 'rgb(var(--primary) / <alpha-value>)',
      'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
      secondary: 'rgb(var(--secondary) / <alpha-value>)',
      white: 'rgb(255 255 255 / <alpha-value>)',
      black: 'rgb(0 0 0 / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [],
};
