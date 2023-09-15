module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    'selector-class-pattern': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ]
  }
}
