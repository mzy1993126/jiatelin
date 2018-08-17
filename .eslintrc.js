// http://eslint.org/docs/user-guide/configuring
const OFF = 0;
const WARN = 1;
const ERROR = 2;
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: ['html'],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': OFF,
        // allow async-await
        'generator-star-spacing': OFF,
        // allow debugger during development
        'no-debugger': global.env === 'production' ? ERROR : OFF,
        // 禁止重复定义变量
        'no-redeclare': ERROR,
        semi: [OFF, 'always'],
        'no-tabs': OFF,
        'no-new': OFF,
        quotes: [
            OFF,
            'single',
            { avoidEscape: true, allowTemplateLiterals: true }
        ],
        'no-unused-vars': OFF,
        'one-var': OFF,
        'space-before-function-paren': OFF,
        indent: OFF,
        'no-multiple-empty-lines': [ERROR, { max: 2 }],
        'no-mixed-spaces-and-tabs': OFF,
        'operator-linebreak': OFF,
        'no-trailing-spaces': OFF,
        'comma-spacing': OFF,
        'space-before-blocks': OFF,
        'func-call-spacing': OFF,
        'no-multi-spaces': [
            OFF,
            {
                exceptions: {
                    Property: true,
                    VariableDeclarator: true,
                    ImportDeclaration: true,
                    BinaryExpression: true
                }
            }
        ]
    }
};
