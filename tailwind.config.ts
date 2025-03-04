import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
		'primary': '#026631',
		'secondary': '#007134',
		'bg': '#F1F1F1',
		'accent': '#F19F02',
		'accent2': '#BF6D02',
	  },
	  backgroundImage: {
		'hero': "url('/images/slots1.jpg')",
	  },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
