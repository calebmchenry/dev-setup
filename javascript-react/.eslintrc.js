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
        ]
    }
}