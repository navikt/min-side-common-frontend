/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { override, addLessLoader, babelInclude } = require('customize-cra');

module.exports = override(
  babelInclude([
    path.resolve('src'),
    fs.realpathSync('../components/src'),
  ]),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    }
  }),
);
