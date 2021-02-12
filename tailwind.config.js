module.exports = {
  presets: [
    require('./tailwind-preset.js'),
    require('./tailwind-preset-2.js')
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
        'print': {'raw': 'print'}
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
};
