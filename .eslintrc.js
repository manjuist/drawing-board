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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
  },
 "settings": {
    "parser": "typescript-eslint-parser",
    "plugins": [
      "import"
    ],
    "rules": {
      // turn on errors for missing imports
      "import/no-unresolved": "error"
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {},
 
      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "/"
      }
    }
  }
};
