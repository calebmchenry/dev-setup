# Javascript

## ES Lint

1. `npm i -D eslint eslint-config-airbnb-base`
2. `npx install-peerdeps --dev eslint-config-airbnb-base`
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
