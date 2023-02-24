module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 권장규칙모음 일종의 패키지
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // 규칙을 끄는대신에 확장하는 규칙의 집합을 설정한다.
    // 여러 규칙 모음
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  // 개별규칙 (사용자 정의)
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-has-content": [
      "warn",
      {
        components: ["Link"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
      },
    ],
  },
};
