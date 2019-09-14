module.exports = {
    extends: ["airbnb", "eslint-config-prettier"],
    env: {
		browser: true,
		jest: true,
	},
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                "tabWidth": 4,
                "trailingComma": "es5",
                "semi": true,
                "singleQuote": true
            }
        ],
	"import/prefer-default-export": 0,
        "react/jsx-indent": [2, 4, {indentLogicalExpressions: false}],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-curly-newline": 0,
        "react/jsx-one-expression-per-line": 0
    }
}
