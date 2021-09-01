module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
     './src/**/*.tsx',
     './src/*.html',
     './src/*.tsx',
    ]
    // content: ['./src/**/*.{js,jsx,ts,tsx}', 
    // './src/**/*.html',
    // './src/index.html',
    //  './build/index.html', 
    //  './build/**/*.{js,jsx,ts,tsx}',
    //   './build/*.{js,jsx,ts,tsx}',
    //   '/src/**/*.{js,jsx,ts,tsx}', 
    // '/src/index.html',
    //  '/build/index.html', 
    //  '/build/**/*.{js,jsx,ts,tsx}',
    //   '/build/*.{js,jsx,ts,tsx}',
    //   'src/**/*.{js,jsx,ts,tsx}', 
    // 'src/index.html',
    //  'build/index.html', 
    //  'build/**/*.{js,jsx,ts,tsx}',
    //   'build/*.{js,jsx,ts,tsx}'

    // ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    transitionProperty: {
      'maxHeight': 'max-height',
      
     }

    },
  },
  variants: {
    extend: {backgroundColor: ['active'],},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
