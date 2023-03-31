/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          //shimmer keyframe: move x to right all the way
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        //repaet shimmer key frame every 1.5s forever
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
