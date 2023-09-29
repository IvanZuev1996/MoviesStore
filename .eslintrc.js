module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        quotes: [2, 'single'],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx', '.json', '.ts'] }
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
        'linebreak-style': 'off',
        'no-shadow': 'off',
        'react/function-component-definition': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off'
    },
    overrides: [
        {
            files: ['*.json'],
            rules: {
                quotes: [2, 'double'],
                'quote-props': 'off',
                'no-unused-expressions': 'off',
                'eol-last': ['error', 'always'],
                'comma-dangle': ['error', 'never'],
                semi: ['error', 'never']
            }
        }
    ]
};
