module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
      'import/resolver': {
          'webpack': {
              config:'./build/webpack.config.js'
          }
      }
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
