
// import tailwindcss from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const tailwindcss = require("tailwindcss");
// export const plugins = [
//   'postcss-preset-env',
//   tailwindcss("./tailwind.config.js"), require("autoprefixer")
// ];
// }; 


// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }

// module.exports = {
//   plugins: [
//     require('tailwindcss')
//   ],
// };

// module.exports = {
//   plugins: [
//     tailwindcss,
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// }

// module.exports = {
//   plugins: {
//     tailwindcss: { config: './tailwind-config.js' },
//     tailwindcss: require('tailwindcss'),
//     autoprefixer: require('autoprefixer'),
//   },
// }
module.exports = {
  plugins: [
    //require('postcss-import'),
    //require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
// export const plugins = [

//   require('tailwindcss'),
//   require('autoprefixer'),
// ];