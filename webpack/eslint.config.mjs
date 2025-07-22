import { defineConfig } from "eslint/config";
import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";

const config = [
  jsdoc.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        $: true,
        _: true,
      },

      ecmaVersion: 2015,
      sourceType: "module",
    },
    files: ["**/*.js"],
    plugins: {
      jsdoc,
    },
    rules: {
      "array-bracket-spacing": [2, "never"],
      "block-scoped-var": 2,

      "brace-style": [
        2,
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],

      camelcase: [
        2,
        {
          properties: "always",
        },
      ],

      curly: [2, "all"],

      "dot-notation": [
        2,
        {
          allowKeywords: true,
        },
      ],

      "eol-last": 2,
      eqeqeq: [2, "allow-null"],
      "guard-for-in": 2,

      indent: [
        2,
        2,
        {
          SwitchCase: 1,
        },
      ],

      "key-spacing": [
        2,
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      "keyword-spacing": [2],
      "new-cap": 2,
      "no-bitwise": 2,
      "no-caller": 2,
      "no-cond-assign": [2, "except-parens"],
      "no-debugger": 2,
      "no-empty": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-irregular-whitespace": 2,
      "no-iterator": 2,
      "no-loop-func": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-multi-str": 2,
      "no-multiple-empty-lines": 2,
      "no-new": 2,
      "no-proto": 2,
      "no-script-url": 2,
      "no-sequences": 2,
      "no-shadow": 2,
      "no-spaced-func": 2,
      "no-trailing-spaces": 2,
      "no-undef": 2,

      "no-unused-vars": [
        1,
        {
          args: "none",
        },
      ],

      "no-with": 2,
      "one-var": [2, "never"],
      "operator-linebreak": [2, "after"],
      quotes: [2, "single"],
      semi: [0, "never"],
      "space-before-blocks": [2, "always"],
      "space-before-function-paren": [2, "never"],
      "space-in-parens": [2, "never"],
      "space-infix-ops": 2,

      "space-unary-ops": [
        2,
        {
          nonwords: false,
          overrides: {},
        },
      ],

      strict: 0,
      "valid-typeof": 2,
      "wrap-iife": [2, "inside"],

      "jsdoc/check-access": 1, // Recommended
      "jsdoc/check-alignment": 1, // Recommended
      "jsdoc/check-examples": 1,
      "jsdoc/check-indentation": 1,
      "jsdoc/check-line-alignment": 1,
      "jsdoc/check-param-names": 1, // Recommended
      "jsdoc/check-template-names": 1,
      "jsdoc/check-property-names": 1, // Recommended
      "jsdoc/check-syntax": 1,
      "jsdoc/check-tag-names": 1, // Recommended
      "jsdoc/check-types": 1, // Recommended
      "jsdoc/check-values": 1, // Recommended
      "jsdoc/empty-tags": 1, // Recommended
      "jsdoc/implements-on-classes": 1, // Recommended
      "jsdoc/informative-docs": 1,
      "jsdoc/match-description": 1,
      "jsdoc/multiline-blocks": 1, // Recommended
      "jsdoc/no-bad-blocks": 1,
      "jsdoc/no-blank-block-descriptions": 1,
      "jsdoc/no-defaults": 1,
      "jsdoc/no-missing-syntax": 0,
      "jsdoc/no-multi-asterisks": 1, // Recommended
      "jsdoc/no-restricted-syntax": 1,
      "jsdoc/no-types": 1,
      "jsdoc/no-undefined-types": 1, // Recommended
      "jsdoc/require-asterisk-prefix": 1,
      "jsdoc/require-description": 1,
      "jsdoc/require-description-complete-sentence": 1,
      "jsdoc/require-example": 1,
      "jsdoc/require-file-overview": 0,
      "jsdoc/require-hyphen-before-param-description": 1,
      "jsdoc/require-jsdoc": 1, // Recommended
      "jsdoc/require-param": 1, // Recommended
      "jsdoc/require-param-description": 1, // Recommended
      "jsdoc/require-param-name": 1, // Recommended
      "jsdoc/require-param-type": 1, // Recommended
      "jsdoc/require-property": 1, // Recommended
      "jsdoc/require-property-description": 1, // Recommended
      "jsdoc/require-property-name": 1, // Recommended
      "jsdoc/require-property-type": 1, // Recommended
      "jsdoc/require-returns": 1, // Recommended
      "jsdoc/require-returns-check": 1, // Recommended
      "jsdoc/require-returns-description": 1, // Recommended
      "jsdoc/require-returns-type": 1, // Recommended
      "jsdoc/require-template": 1,
      "jsdoc/require-throws": 1,
      "jsdoc/require-yields": 1, // Recommended
      "jsdoc/require-yields-check": 1, // Recommended
      "jsdoc/sort-tags": 1,
      "jsdoc/tag-lines": 1, // Recommended
      "jsdoc/valid-types": 1, // Recommended
    },
  },
];
export default config;
