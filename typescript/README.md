# Typescript

## Setup linting and formatting

```
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier typescript
```

## VS Code Integration

```json
// settings.json
"files.autoSave": "off",
"editor.formatOnSave": false,
"prettier.disableLanguages": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
],
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
],
"eslint.autoFixOnSave": true
```
