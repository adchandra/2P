/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0b9dad",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-lg-primary': {
          width: '230px',
          height: '70px',
          backgroundColor: '#fff',
          color: '#0b9dad',
          border: 'none',
          fontSize: '20px',
          fontWeight: '700',
        },
      });
    },
  ],
};

