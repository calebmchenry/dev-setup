module.exports = {
    extends: ["eslint-config-airbnb", "eslint-config-prettier"],    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                "tabWidth": 4,
                "trailingComma": "es5",
                "semi": true,
                "singleQuote": true
            }
        ]
    }
}