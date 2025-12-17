/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // --- CRITICAL LINE ---
    // This tells Tailwind to look inside all files ending in .js, .ts, .jsx, and .tsx
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#6366f1',
        'brand-blue': '#3b82f6',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #6366f1, #3b82f6)', 
      },
    },
  },
  plugins: [],
}