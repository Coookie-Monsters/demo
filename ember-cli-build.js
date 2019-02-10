'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require('node-sass');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    sassOptions: {
      implementation: nodeSass,
      includePaths: [
        'node_modules'
      ]
    }
  });

  return app.toTree();
};
