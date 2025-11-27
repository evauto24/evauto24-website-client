# ESLint Setup Guide for React + TypeScript

This guide explains the ESLint configuration for React, TypeScript, and code formatting.

## 📦 Installed Packages

### Core ESLint

- `eslint` - ESLint core
- `@eslint/js` - ESLint recommended rules
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier

### TypeScript Support

- `typescript-eslint` - TypeScript ESLint integration
- `@typescript-eslint/parser` - TypeScript parser
- `@typescript-eslint/eslint-plugin` - TypeScript rules

### React Support

- `eslint-plugin-react` - React-specific rules
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-react-dom` - React DOM rules
- `eslint-plugin-react-x` - Modern React rules
- `eslint-plugin-jsx-a11y` - Accessibility rules for JSX

### Import/Export

- `eslint-plugin-import` - Import/export validation and ordering

### Formatting

- `prettier` - Code formatter
- `eslint-config-prettier` - Prevents ESLint/Prettier conflicts

## 🎯 Configuration Structure

### 1. Global Ignores

Files and directories that ESLint will skip:

- `dist/` - Build output
- `node_modules/` - Dependencies
- `.vite/` - Vite cache
- `coverage/` - Test coverage reports

### 2. Base Configurations

- **JavaScript Recommended**: Basic JavaScript best practices
- **TypeScript Recommended**: TypeScript best practices (non-type-checked)
- **React Recommended**: React best practices
- **React Hooks**: React Hooks rules
- **JSX A11y**: Accessibility rules

### 3. Type-Checked Rules (Source Files Only)

Applied only to `src/**/*.{ts,tsx}` files:

- **Recommended Type-Checked**: Type-aware linting rules
- **Strict Type-Checked**: Stricter type-aware rules
- **Stylistic Type-Checked**: Code style rules with type information

### 4. Custom Rules

#### React Rules

- ✅ Enforce JSX best practices
- ✅ Prevent common React mistakes
- ✅ Enforce component naming conventions
- ✅ Prevent unused variables in JSX

#### TypeScript Rules

- ✅ Warn about unused variables (ignore `_` prefix)
- ✅ Warn about `any` types
- ✅ Warn about non-null assertions
- ✅ Enforce type safety best practices

#### Import Rules

- ✅ Enforce import ordering (builtin → external → internal → relative)
- ✅ Prevent duplicate imports
- ✅ Alphabetize imports within groups

#### Accessibility Rules

- ✅ Require alt text for images
- ✅ Validate ARIA attributes
- ✅ Enforce accessible component patterns

## 🚀 Usage

### Run Linter

```bash
npm run lint
```

### Auto-fix Issues

```bash
npm run lint:fix
```

### Format Code (Prettier)

```bash
npx prettier --write .
```

## 📝 Key Rules Explained

### React Rules

#### `react/jsx-uses-react: 'off'`

Not needed with React 17+ (new JSX transform).

#### `react/react-in-jsx-scope: 'off'`

Not needed with React 17+ (new JSX transform).

#### `react-hooks/rules-of-hooks: 'error'`

Enforces the Rules of Hooks:

- Only call hooks at the top level
- Only call hooks from React functions

#### `react-hooks/exhaustive-deps: 'warn'`

Warns about missing dependencies in `useEffect`, `useMemo`, `useCallback`, etc.

### TypeScript Rules

#### `@typescript-eslint/no-unused-vars`

Warns about unused variables. Variables starting with `_` are ignored.

#### `@typescript-eslint/no-non-null-assertion: 'warn'`

Warns about using `!` operator. Prefer proper null checks.

#### `@typescript-eslint/no-explicit-any: 'warn'`

Warns about using `any` type. Prefer specific types.

### Import Rules

#### `import/order`

Enforces import ordering:

1. Built-in modules (Node.js)
2. External packages (npm)
3. Internal modules (path aliases)
4. Parent imports (`../`)
5. Sibling imports (`./`)
6. Index imports (`./index`)

Imports are alphabetized within each group.

## 🔧 Customization

### Adjust Rule Severity

Edit `eslint.config.js` and change rule values:

- `'error'` - Show as error (red)
- `'warn'` - Show as warning (yellow)
- `'off'` - Disable rule

Example:

```js
rules: {
  '@typescript-eslint/no-explicit-any': 'error', // Change from 'warn' to 'error'
}
```

### Add New Rules

Add to the `rules` object in `eslint.config.js`:

```js
rules: {
  'your-plugin/your-rule': 'error',
}
```

### Disable Rules for Specific Files

Add comment at top of file:

```js
/* eslint-disable @typescript-eslint/no-explicit-any */
```

Or for specific lines:

```js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = fetchData();
```

## 🎨 Prettier Integration

Prettier handles code formatting. ESLint handles code quality.

### Prettier Config (`.prettierrc`)

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

### VS Code Setup

Install extensions:

- ESLint
- Prettier

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 📚 Best Practices

1. **Run lint before commits**: Catch issues early
2. **Fix auto-fixable issues**: Use `npm run lint:fix`
3. **Review warnings**: Don't ignore warnings
4. **Use TypeScript types**: Avoid `any` when possible
5. **Follow import order**: Makes code more readable
6. **Write accessible code**: Follow JSX A11y rules

## 🐛 Troubleshooting

### "Cannot find module" errors

- TypeScript handles module resolution
- `import/no-unresolved` is disabled for this reason

### Type-checked rules not working

- Ensure `tsconfig.json` is properly configured
- Check that files are in `src/**/*.{ts,tsx}` pattern

### Prettier conflicts

- `eslint-config-prettier` should be last in config
- Run Prettier after ESLint fixes

### React version warning

- React version is auto-detected from `package.json`
- If warning persists, check `package.json` has React dependency

## 📖 Resources

- [ESLint Documentation](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
- [Prettier Documentation](https://prettier.io/)
