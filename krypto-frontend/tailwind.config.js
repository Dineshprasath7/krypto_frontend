module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--border)', // Use the CSS variable defined in index.css
      },
    },
  },
  plugins: [],
}
