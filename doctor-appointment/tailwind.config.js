/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "390px",
      },
    },
    colors: {
      darkblue: "#222B45",
      Steelblue: "#6B779A",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
  },
};
