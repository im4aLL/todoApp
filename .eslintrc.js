module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'jsdoc'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:jsdoc/recommended-typescript',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'jsdoc/require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true,
                },
            },
        ],
        // '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-nested-ternary': 'error',
        'max-lines-per-function': ['error', { max: 20 }],
        'max-nested-callbacks': ['error', { max: 2 }],
        complexity: ['error', 8],
        'dot-notation': 'error',
        'max-params': ['error', 5],
        'max-depth': ['error', 3],
        'object-shorthand': [
            'error',
            'always',
            { avoidExplicitReturnArrows: true },
        ],
        'prefer-spread': 'error',
        'prefer-arrow-callback': 'error',
        eqeqeq: 'error',

        'no-extra-boolean-cast': 'error',
        'no-unsafe-negation': 'error',
        'id-length': [
            'error',
            {
                properties: 'never',
                exceptions: ['x', 'i', 'j', 'k', '_', 'a', 'b'],
            },
        ],
        'prefer-const': 'error',
        'no-var': 'error',
        'no-new-object': 'error',
        'no-array-constructor': 'error',
        'prefer-destructuring': 'error',
        'no-new-func': 'error',
        'no-undef': 'error',
        'no-underscore-dangle': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
            {
                selector: ['variable'],
                types: ['boolean'],
                format: [],
                prefix: ['is', 'has'],
            },
            {
                selector: ['function', 'variable', 'method'],
                modifiers: ['private', 'protected'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'signature',
                    'decorated-field',
                    'field',
                    'constructor',
                    'method',
                ],
            },
        ],
        '@typescript-eslint/ban-types': 'error',
        'no-alert': 'error',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
    },
};
