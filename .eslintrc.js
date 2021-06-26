module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended',
    // 'plugin:vue/strongly-recommended',
    // 'plugin:@typescript-eslint/recommended', // Typescript Lint 규칙 모음
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // 'standard',
  ],
  // globals: {
  //   $nuxt: true,
  // },
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true,
    // },
    ecmaVersion: 6,
    parser: 'babel-eslint',
    // parser: '@typescript-eslint/parser',
    // project: 'tsconfig.json', // @typescript-eslint/parser 를 활성화 하기 위해 꼭 필요
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    // 'vue',
    // '@typescript-eslint',
  ],
  root: true,
  rules: {
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'comma-dangle': 'off',
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: false,
      },
    ], // class 안에서 정의한 멤버의 대괄호 안에 간격 삽입
    'generator-star-spacing': 'off', // allow async-await
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
      },
    ],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': 'off', // allow debugger during development
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    // 'vue/no-unused-components': 'warn',
    // '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
  },
}
