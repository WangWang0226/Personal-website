/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fbbf24',
        secondary: '#3965a2'
      },
      backgroundImage: {
        'profile00': "url('/images/profile00.jpeg')",
        'profile01': "url('/images/profile01.jpeg')",
        'profile02': "url('/images/profile02.jpg')",
      }
    },
  },

};
