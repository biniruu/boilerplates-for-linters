module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended', // 웹 접근성 관련 jsx 규칙
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json', // parser: @typescript-eslint/parser를 활성화 하기 위해 꼭 필요
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': 'allow-with-description',
          },
        ], // 설명을 추가하는 조건으로 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check 주석을 허용
        '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'error', // any 타입 사용 시 알림을 띄움
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
      },
    },
    {
      extends: ['plugin:jest/recommended'],
      files: ['*.spec.js', '*.spec.ts', '*.test.js', '*.test.ts'],
      plugins: ['jest'],
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: { jsx: true }, // JSX 파싱을 위해 필요
    ecmaVersion: 'latest',
    requireConfigFile: false, // "no babel config file detected for ..." 에러 해결을 위해 필요
    sourceType: 'module', // 모듈 시스템 사용 시 필요
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  root: true, // 해당 설정 파일이 root 임을 명시하는 옵션. true라면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['Input'],
        depth: 1,
      },
    ], // 기본 html 태그가 아닌 custom component에서 웹 접근성 관련 에러 발생 방지
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'warn', // nested block에서 변수 또는 함수 선언 금지
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    'no-nested-ternary': 'warn', // 중첩 삼항 연산자 금지
    'no-new-object': 'error',
    'no-undef': 'off', // 전역 변수는 /* global ... */ 주석에 명시해야 사용 가능
    'no-underscore-dangle': 'off', // 변수명 앞에 언더바를 붙일 수 있도록 허용 (e.g. _foo)
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto', // delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
        parser: 'flow',
      },
      // {
      //   usePrettierrc: false, // vscode-prettier 익스텐션이 .prettierrc를 읽기 때문에 이 옵션을 true로 설정해도 소용없음
      // },
    ],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': 'off', // allow debugger during development
  },
}