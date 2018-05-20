'use strict';

let electronParams = {};
if(process.env.DISABLE_GPU){
  /* if you are having issues with your GPU such as https://github.com/wallabyjs/public/issues/1076
   * then simply defined an environment variable in the trouble environment DISABLE_GPU=true and electron will use
   * chrome environment with the GPU disabled
   */
 // electronParams.runner = '--disable-gpu';
}

module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      'src/**/*.scss',
      '!src/**/*.spec.js',
      {pattern: 'src/**/*.js*', load: true},
      {pattern: 'config.json', load: true},
      {pattern: 'test-fixtures/**/*.js*', load: true}
    ],

    tests: [
      {pattern: 'src/**/*.spec.js', load: true}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'jest',

    env: {
      type: 'node',
      kind: 'electron',
      params: electronParams
    },

    setup: function () {
      let jsdom = require("jsdom").jsdom;
      let exposedProperties = ["window", "navigator", "document"];

      global.document = jsdom("");
      global.window = document.defaultView;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === "undefined") {
          exposedProperties.push(property);
          global[property] = document.defaultView[property];
        }
      });

      global.navigator = {
        userAgent: "node.js"
      };

      documentRef = document; //eslint-disable-line no-undef
    }
  };
};
