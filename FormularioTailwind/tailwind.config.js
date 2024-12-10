/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "setup-image": "url('../assets/setup.jpg')",
      },
      fontFamily:{
        "poppins": "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}

