// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["react", "prettier", "@typescript-eslint", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "no-unused-vars": "off",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
