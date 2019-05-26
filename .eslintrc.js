module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: [
    "@typescript-eslint/parser",
    "@typescript-eslint/eslint-plugin"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  'settings': {
      'import/resolver': {
          'webpack': {
              config:'./build/webpack.prod.config.js'
          }
      }
  }
};
