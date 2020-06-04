module.exports = {
    env: {
      browser: true
    },
    extends: [
      'airbnb',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'prettier/react'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'jsx-a11y',
      'prettier'
    ],
    rules: {
      'newline-after-var': 1,
      'prettier/prettier': [
        'error', {
          'semi': true
        }
      ]
    },
  };