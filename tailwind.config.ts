import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5f5', // Hlavní barva pozadí
        foreground: '#3D4248', // Barva textu
        button: '#6daab3', // Barva tlačítek
        text: '#050316', // Tmavší barva textu
        lightBackground: '#6C757D', // Světlejší barva pozadí
        borderLine: '#ebebeb',
        primary: '#94c8d1',
        secondary: '94c8d1',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        // Přidání nových fontů
        heading: ['"Roboto Condensed"', 'sans-serif'], // Pro nadpisy a tlačítka
        body: ['Poppins', 'sans-serif'], // Pro ostatní texty
      },
      gridTemplateColumns: {
        '330': 'repeat(4, 330px)',
      },
      screens: {
        wide: { raw: '(min-aspect-ratio: 16/9)' },
        tall: { raw: '(max-aspect-ratio: 16/9)' },
        short: { raw: '(max-height: 800px)' },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
