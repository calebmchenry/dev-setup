module.exports = {
    extends: ["airbnb-base", "eslint-config-prettier"],
    env: {
		browser: true,
		jest: true,
		node: true,
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
        ]
    }
}