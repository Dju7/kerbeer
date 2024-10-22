/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'fond': "url('assets/beer1.jpg')",
      'fond2': "url('assets/beer2.jpg')",
      'fond3': "url('assets/beer3.jpg')"
    }
  },
};
export const plugins = [];
