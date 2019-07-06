module.exports = {
    extends: ["airbnb-typescript", "eslint-config-prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
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
