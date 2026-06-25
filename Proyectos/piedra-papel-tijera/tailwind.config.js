/** @type {import('tailwindcss').Config} */
export default {
  // Se agregan estas expresiones regulares para decirle a Tailwind que solamente aplique los
  // estilos sobre los siguientes tipos de archivos y directorios para ahorrar recursos.
  content: [
    "./src/**/*.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

