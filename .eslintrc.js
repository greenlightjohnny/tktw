module.exports = {
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
    },
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  settings: {
    react: {
      "pragma": "React",
      "version": "detect"
    }
  }
}