/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: "'Josefin Sans', sans-serif",
        kalam: "'Kalam', cursive"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

