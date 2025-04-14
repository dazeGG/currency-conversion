module.exports = {
	root: true,
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	globals: {
		NodeJS: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		curly: ['error', 'all'],
		quotes: ['error', 'single', { 'avoidEscape': true }],
		'comma-dangle': ['error', 'always-multiline'],
		semi: ['error', 'never'],
		'indent': ['error', 'tab'],
		'brace-style': 'error',
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'space-before-blocks': ['error', 'always'],
		'template-curly-spacing': 'error',
		'object-curly-spacing': ['error', 'always', { 'arraysInObjects': true, 'objectsInObjects': true }],
		'array-bracket-spacing': ['error', 'never'],
		'multiline-ternary': ['error', 'always-multiline'],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
		'linebreak-style': ['error', 'unix'],
		camelcase: ['error', { properties: 'never' }],
		'no-trailing-spaces': 'error',
		'object-curly-newline': ['error', {
			'ObjectExpression': { 'consistent': true, 'multiline': true },
			'ObjectPattern': { 'multiline': true },
			'ImportDeclaration': { 'multiline': true },
			'ExportDeclaration': 'always',
		}],
		'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
		'max-statements-per-line': ['error', { 'max': 1 }],
		'space-before-function-paren': 'error',

		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always',
				'normal': 'never',
				'component': 'always',
			},
			'svg': 'always',
			'math': 'always',
		}],
		'vue/html-closing-bracket-spacing': ['error', {
			'startTag': 'never',
			'endTag': 'never',
			'selfClosingTag': 'always',
		}],
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': [],
		}],
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			'registeredComponentsOnly': true,
			'ignores': [],
		}],
		'vue/attributes-order': ['error', {
			'order': [
				'DEFINITION',
				'CONDITIONALS',
				'LIST_RENDERING',
				'RENDER_MODIFIERS',
				'GLOBAL',
				['UNIQUE', 'SLOT'],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
			],
			'alphabetical': false,
		}],
		'vue/attribute-hyphenation': ['error', 'always', {
			'ignore': [],
		}],
		'vue/max-attributes-per-line': ['error', {
			'singleline': {
				'max': 5,
			},
			'multiline': {
				'max': 1,
			},
		}],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never',
				'multiline': 'always',
				'selfClosingTag': {
					'singleline': 'never',
					'multiline': 'always',
				},
			},
		],
		'vue/first-attribute-linebreak': ['error', {
			'singleline': 'ignore',
			'multiline': 'below',
		}],
		'vue/multiline-html-element-content-newline': 'error',
	},
}
