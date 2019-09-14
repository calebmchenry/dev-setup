module.exports = {
    extends: ["airbnb", "eslint-config-prettier"],
    env: {
		browser: true,
		jest: true,
		node: true,
	},
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
        ],
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": [2, { "extensions": [".jsx", ".tsx"] }],
        "react/jsx-indent": [2, 4, {indentLogicalExpressions: false}],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-curly-newline": 0,
        "react/jsx-one-expression-per-line": 0
    },
    settings: {
        'import/extensions': [".js",".jsx",".ts",".tsx"],
        'import/parsers': {
            '@typescript-eslint/parser': [".ts",".tsx"]
        },
        'import/resolver': {
            'node': {
                'extensions': [".js",".jsx",".ts",".tsx"]
            }
        }
    }
}
