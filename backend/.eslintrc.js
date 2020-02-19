module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
      'prettier/prettier': 'error',
      'no-param-reassign': "off",
      'class-methods-use-this': 'off',
      'camelcase': 'off',
      'no-unused-vars': ['error', {'allowIgnorePattern': 'next'}]
  },
};
