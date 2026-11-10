import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        "dark-navy": "var(--dark-navy)",
        "light-navy": "var(--light-navy)",
        "lightest-navy": "var(--lightest-navy)",
        slate: "var(--slate)",
        "light-slate": "var(--light-slate)",
        "lightest-slate": "var(--lightest-slate)",
        white: "var(--white)",
        green: "var(--green)",
        "green-tint": "var(--green-tint)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "var(--content-max)",
      },
    },
  },
  plugins: [],
} satisfies Config;
