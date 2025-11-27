// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Global ignores
  {
    ignores: ['dist', 'node_modules', '.vite', 'coverage'],
  },
  // Base recommended configs
  js.configs.recommended,
  // TypeScript ESLint configs (these are already in flat config format)
  // Only apply non-type-checked rules globally
  ...tseslint.configs.recommended,
  // React Hooks config (flat config format)
  ...(reactHooks.configs.flat.recommended ? [reactHooks.configs.flat.recommended] : []),
  // Convert old-style configs to flat config format
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
  ),
  // Type-checked configs - only apply to source files
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['src/**/*.{ts,tsx}'],
  })),
  ...tseslint.configs.strictTypeChecked.map((config) => ({
    ...config,
    files: ['src/**/*.{ts,tsx}'],
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: ['src/**/*.{ts,tsx}'],
  })),
  // Main config for TypeScript/TSX files
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'react-dom': reactDom,
      'react-x': reactX,
    },
    rules: {
      // React rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // Import rules
      'import/order': ['error', { 'newlines-between': 'always' }],
      // React X rules
      'react-x/no-class-component': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Prettier config (must be last to override other configs)
  eslintConfigPrettier,
];
