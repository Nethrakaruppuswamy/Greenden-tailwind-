/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // adjust to your files
  theme: {
    extend: {
      boxShadow: {
        '3d': '6px 6px 0px #000000',   // 3D-like shadow
        'down': '0 8px 0px #000000',   // only downward shadow
      },
    },
  },
  plugins: [],
}