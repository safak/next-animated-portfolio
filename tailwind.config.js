/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          bg: "rgba(var(--bg-accent))",
          text: "rgba(var(--text-accent))",
          hover: "rgba(var(--bg-accent-hover))",
          secondary: {
            bg: "rgba(var(--secondary-bg))",
            hover: "rgba(var(--secondary-bg-hover))",
          },
        },
        gradient: {
          from: "rgba(var(--gradient-from))",
          mid: "rgba(var(--gradient-mid))",
          to: "rgba(var(--gradient-to))",
        },
        primary: {
          text: "rgba(var(--primary-text))",
        },
      },
    },
  },
  plugins: [],
};
