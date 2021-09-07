// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const defaultTheme = require('tailwindcss/defaultTheme')

// const fontFamily = defaultTheme.fontFamily;
// fontFamily['sans'] = [
//   'Roboto', // <-- Roboto is a default sans font now
//   'system-ui',
//   // <-- you may provide more font fallbacks here
// ];


module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
     './src/**/*.tsx',
     './src/*.html',
     './src/*.tsx',
    ]
    
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop899': '1024px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktopv2': '1181px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    transitionProperty: {
      'maxHeight': 'max-height',
      
     },
     fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['ui-serif'],
      'mono': ['ui-monospace'],
      'display': ['Roboto', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
  },

    },
   
  },
  variants: {
    extend: {backgroundColor: ['active'],},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
