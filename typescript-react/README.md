# eslint for Typescript

1. `npm i -D eslint eslint-config-airbnb`
2. `npm install-peerdeps -D eslint-config-airbnb`
3. `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
4. `npm i -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`

## VS Code Integration

```json
// settings.json
"files.autoSave": "off",
"editor.formatOnSave": false,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
],
"eslint.autoFixOnSave": true
```
