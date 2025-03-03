module.exports = {
  extends: [
    'airbnb-base',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  rules: {
    'no-empty': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'linebreak-style': 'off',
    'no-mixed-operators': 'off',
    'max-classes-per-file': 'off',
    'no-async-promise-executor': 'off',
    'no-bitwise': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'prefer-const': 'off',
    'default-case': 'off',
    'no-empty-pattern': 'off',
    'no-shadow': 'off',
    'no-return-assign': 'off',
    'no-continue': 'off',
    camelcase: 'off',
    'no-cond-assign': 'off',
    'no-restricted-globals': 'off',
    'brace-style': 'off',
    'consistent-return': 'off',
    'no-loop-func': 'off',
    'no-use-before-define': 'off',
    'max-len': ['error', 300],
    'object-curly-newline': 'off',
    'padded-blocks': 'off',
    'prefer-destructuring': 'off',
    'no-restricted-syntax': 'off',
    'no-nested-ternary': 'off',
    'no-constant-condition': 'off',
    'no-lonely-if': 'off',
    'no-prototype-builtins': 'off',
    'guard-for-in': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-properties': 'off',
  },
};
