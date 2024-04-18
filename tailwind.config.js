/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/bg.jpg')",
      },
      flexGrow: {
        2: "2",
      },
      backgroundColor: {
        metalic: "rgba(17,25,40,0.5)",
        metalic2: "rgba(17,25,40,0.8)",
      },
      borderColor: {
        metalic: "#dddddd35",
      },
    },
  },
  plugins: [],
};
