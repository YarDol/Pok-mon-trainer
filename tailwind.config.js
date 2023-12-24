/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Oxygen', 'sans-serif']
      },
      screens: {
        sm: '475px',
        md: '1272px',
        lg: '1444px',
      }
    },
  },
  plugins: [],
}

