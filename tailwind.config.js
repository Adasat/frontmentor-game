/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        attribution: "hsl(228, 45%, 44%)",
        scissors1: "hsl(39, 89%, 49%)",
        scissors2: "hsl(40, 84%, 53%)",
        paper1: "hsl(230, 89%, 62%)",
        paper2: "hsl(230, 89%, 65%)",
        rock1: "hsl(349, 71%, 52%)",
        rock2: "hsl(349, 70%, 56%)",
        lizard1: "hsl(261, 73%, 60%)",
        lizard2: "hsl(261, 72%, 63%)",
        cyan1: "hsl(189, 59%, 53%)",
        cyan2: "hsl(189, 58%, 57%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      fontFamily: {
        "barlow": ["Barlow Semi Condensed", 'sans - serif'],
      },
    },
  },
  plugins: [],
};
