/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'mainBlue': '#0090FF',
      'darkBlue': '#243B88',
      'mdBlue': '#72A4E5',
      'lwBlue': '#7FE7FF',
      'white':'#FFFFFF',
      'nearBlack': '#121212',
      'lwBlack': '#1E1E1E',
      'green': '#95E6A1',
      'gray':'#fB2B2B2',
      'lwGray':'#D9D9D9',
      'nav':'#FFFFFF',
      'button':'#00D7B4',
      'head':'#514F5D',
      'labelText' : '#514F5D',
      'table' : '#F1F2F4',
      'buttonT' : '#00816C',
    }
  },
  plugins: [],
}
