## Prettier

```json
// .prettierrc
{
	"tabWidth": 2,
	"trailingComma": "es5",
	"semi": true,
	"singleQuote": true
}
```

```json
	"editor.formatOnSave": false, // use eslint instead
	"[css]": {
		"editor.formatOnSave": true // enable prettier
	},
	"prettier.disableLanguages": [
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact"
	],
```