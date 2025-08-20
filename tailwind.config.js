// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Di sini kita menambahkan palet warna retro kita
      colors: {
        'retro-yellow': '#FFC567',
        'retro-pink': '#FB7DA8',
        'retro-red-orange': '#FD5A46',
        'retro-purple': '#552CB7',
        'retro-green': '#00995E',
        'retro-blue': '#058CD7',
        'retro-bg': '#f0e6d2',      // Warna latar belakang krem
        'retro-text': '#2c2c2c',   // Warna teks gelap
      },
      // Di sini kita menambahkan font retro kita
      fontFamily: {
        'retro': ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
};