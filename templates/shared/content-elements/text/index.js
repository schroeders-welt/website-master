require('./styles.scss');

const contentElement = require('@bsi-cx/design-standard-library-web/content-elements/base/text/prototype');

module.exports = contentElement(
  require('./template.twig'),
);
