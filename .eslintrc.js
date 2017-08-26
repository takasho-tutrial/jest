'use strict'
module.exports = {
  'extends': ['@takasho/eslint-config-flowtype'],
  'plugins': ['jest'],
  env: {
    node: true,
    'jest/globals': true
  },
}
