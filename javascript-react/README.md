# Javascript

## ES Lint

1. `npm i -D eslint eslint-config-airbnb`
2. `npm install-peerdeps -D eslint-config-airbnb`
3. `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

## VS Code Integration

```json
// settings.json
"files.autoSave": "off",
"editor.formatOnSave": false,
"eslint.validate": [
    "javascript",
    "javascriptreact"
],
"eslint.autoFixOnSave": true
```