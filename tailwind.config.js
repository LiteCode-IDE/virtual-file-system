/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary-green': '#50FF6C',
        "dark-bg": "#0E1525",
        "dark-bg-2": "#1C2333",
        "dark-hover": "#2B3245",
        "monaco-color": "#3C3C3C",
        "hover-blue": "#04395E",
        "vscode-blue": "#4078CE",
        "git-orange": "#F05033",
        "editor-bg": "#212733",
        "monaco-vs": "#1E1E1E",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

