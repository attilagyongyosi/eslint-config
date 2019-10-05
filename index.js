const INDENTATION = 4;
const MAX_COMPLEXITY = 5;
const MAX_LINE_LENGTH = 140;
const MAX_FUNCTION_PARAMS = 3;
const MAX_FILE_LINES = 200;

module.exports = {
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'indent': [ 'error', INDENTATION ],
        'complexity': [ 'error', MAX_COMPLEXITY ],
        'quotes': [ 'error', 'single' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
        'no-magic-numbers': [ 'error', {
            'ignore': [ 0, 1, -1 ],
            'ignoreArrayIndexes': true,
            'enforceConst': true
        } ],
        'max-len': [ 'error', MAX_LINE_LENGTH ],
        'max-params': [ 'error', MAX_FUNCTION_PARAMS ],
        'max-lines': [ 'error', MAX_FILE_LINES ],
        'no-duplicate-imports': 'error',
        'eol-last': 'error',
        'no-trailing-spaces': 'error'
    }
};
