// eslint-disable-next-line @typescript-eslint/no-var-requires
export const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};
