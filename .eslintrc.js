/* eslint-disable @typescript-eslint/naming-convention */
const ERROR = 2;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WARN = 1;
const OFF = 0;

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/electron',
    'plugin:import/typescript',
  ],
  rules: {
    // Defaults
    'indent': [ERROR,
      2,
    ],
    'max-len': [ERROR,
      { 'code': 120,
      },
    ],
    'semi': [ERROR, 'always',
    ],
    'quotes': [ERROR, 'single',
    ],
    'no-multiple-empty-lines': ERROR,
    'eol-last': [ERROR, 'always',
    ],
    'function-paren-newline': [ERROR, 'multiline',
    ],
    'arrow-parens': [ERROR, 'always',
    ],
    'no-confusing-arrow': ERROR,
    'comma-dangle': [ERROR, 'always-multiline',
    ],
    'array-callback-return': ERROR,
    'for-direction': ERROR,
    'no-async-promise-executor': ERROR,
    'no-class-assign': ERROR,
    // Spacing settings
    'object-curly-spacing': [ERROR, 'always',
    ],
    'array-bracket-spacing': [ERROR, 'never',
    ],
    'no-trailing-spaces': [ERROR,
      { ignoreComments: true,
      },
    ],
    'semi-spacing': [ERROR,
      { before: false, after: true,
      },
    ],
    'space-before-function-paren': [ERROR,
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'keyword-spacing': [ERROR,
      { before: true, after: true,
      },
    ],
    'no-mixed-spaces-and-tabs': ERROR,
    'sort-imports': [ERROR,
      {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
        'allowSeparatedGroups': true,
      },
    ],
    'padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    // Typescript Rules
    'no-shadow': OFF,
    'no-use-before-define': OFF,
    'no-unused-vars': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/no-use-before-define': [ERROR, { 'variables': false }],
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/member-delimiter-style': ERROR,
    // Import Rules
    'import/no-cycle': [
      0,
      { maxDepth: 10,
      },
    ],
    'import/prefer-default-export': OFF,
    'import/extensions': [ERROR, 'ignorePackages',
      {
        ts: 'never',
        js: 'never',
        mjs: 'never',
        tsx: 'never',
        jsx: 'never',
      },
    ],
    'import/order': [
      ERROR,
    ],
    // React Rules
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'react-hooks/exhaustive-deps': OFF,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx',
        ],
      },
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        exceptions: ['input', 'textarea', 'Lpd8Pad', 'Lpd8Knob',
        ],
      },
    ],
    'react/require-default-props': OFF,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'utils'],
      },
      typescript: {
        alwaysTryTypes: true,
        paths: './tsconfig.json',
      },
    },
  },

};
