const ghPages = require('gh-pages');

module.exports = function deploy() {
  return ghPages.publish('build', function(err){});
};
