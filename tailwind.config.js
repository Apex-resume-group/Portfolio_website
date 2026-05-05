/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
  "./index.html",
  "./src/**/*.{ts,tsx,js,jsx}",
  "./*.{ts,tsx,js,jsx}",
  "./Components/**/*.{ts,tsx,js,jsx}",
],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
         crimson: '#2980B9',
    'crimson-dark': '#1A6A9A',
    black: '#1E2D3D',
    gold: '#5DADE2',
    'gold-light': '#AED6F1',
    white: '#FFFFFF',
    offwhite: '#ECF5FB', 
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  safelist: [
    'bg-brand-crimson','bg-brand-black','bg-brand-gold','bg-brand-offwhite',
    'text-brand-crimson','text-brand-black','text-brand-gold','text-brand-white',
    'border-brand-crimson','border-brand-gold','border-brand-black',
    'from-brand-crimson','to-brand-black',
  ],
  plugins: [require("tailwindcss-animate")],
};