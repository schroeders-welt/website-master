require('./styles.scss');

const contentElement = require('@bsi-cx/design-standard-library-web/content-elements/base/button/prototype');

module.exports = contentElement(
  require('./template.twig'),
).withStyleConfigs(
  require('../../../shared/configs/styles/btn-size'),
  require('../../../shared/configs/styles/btn-width')
);
