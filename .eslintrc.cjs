module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',

    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['error', 'warn'] }]
        : 'off', //The production mode does not allow the use of log
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //The production default does not allow the use of debugger
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    '@typescript-eslint/no-explicit-any': 'off', // allow ts to use any
  },
};
