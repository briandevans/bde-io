/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        void: 'oklch(0.12 0.005 250)',
        surface: 'oklch(0.16 0.008 250)',
        paper: 'oklch(0.96 0.004 250)',
        ink: 'oklch(0.98 0.002 250)',
        'ink-muted': 'oklch(0.68 0.01 250)',
        'ink-faint': 'oklch(0.48 0.01 250)',
        rule: 'oklch(0.28 0.01 250)',
        signal: 'oklch(0.58 0.19 260)',
        'deep-black': 'oklch(0.12 0.005 250)',
        'warm-parchment': 'oklch(0.96 0.004 250)',
        bronze: 'oklch(0.58 0.19 260)',
        terracotta: 'oklch(0.58 0.19 260)',
        faded: 'oklch(0.55 0.01 250)',
        'muted-ink': 'oklch(0.42 0.01 250)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', '"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl: "0",
        lg: "0",
        md: "0",
        sm: "0",
        xs: "0",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
