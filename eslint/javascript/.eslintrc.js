module.exports = {
    extends: ["airbnb", "eslint-config-prettier"],
    env: {
      browser: true,
      jest: true,
      node: true
    },
    plugins: ["prettier"],
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
      "import/prefer-default-export": 0,
    }
  };
  