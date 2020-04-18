module.exports = {
  extends: ["airbnb", "eslint-config-prettier"],
  env: {
    browser: true,
    jest: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        trailingComma: "es5",
        semi: true,
        singleQuote: true
      }
    ],
    "import/prefer-default-export": 0
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
