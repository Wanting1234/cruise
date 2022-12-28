module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        'setupTests.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'react-hooks',
  ],
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': ['error', { props: false }],
  },
  ignorePatterns: ['node_modules/*', 'dist/*', '*.json'],
};
