/** @      colors: {
        // De Globe Café brand colors
        'primary': '#3B2F2F',
        'secondary': '#C49E78',
        'bg-light': '#F5F0E6',
        'bg-beige': '#E8D9C5',
        'text-dark': '#3B2F2F',
        'text-light': '#FFFFFF',
        'caramel-hover': '#B38E6A',
        
        // Additional color variationst('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // De Globe Café Brand Palette
        'primary': '#3B2F2F',          // Dark espresso brown - headers/footers, buttons, key accents
        'secondary': '#C49E78',        // Rich caramel - hover states, highlights, secondary CTAs
        'bg-light': '#F5F0E6',         // Soft cream - body background
        'bg-beige': '#E8D9C5',         // Warm beige - section dividers
        'text-dark': '#3B2F2F',        // High contrast text on light backgrounds
        'text-light': '#FFFFFF',       // White text on dark backgrounds
        'caramel-hover': '#B38E6A',    // Darkened caramel for hover states
        
        // Legacy support (mapped to new palette)
        'espresso': {
          50: '#F5F0E6',
          100: '#E8D9C5', 
          700: '#C49E78',
          800: '#B38E6A',
          900: '#3B2F2F',
        },
        'caramel': {
          600: '#B38E6A',
          700: '#C49E78',
        },
        'cream': {
          200: '#E8D9C5',
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};