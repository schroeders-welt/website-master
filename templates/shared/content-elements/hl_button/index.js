require('./styles.scss');

const contentElement = require('@bsi-cx/design-standard-library-web/content-elements/base/button/prototype');
const {cx, ICON} = require('@bsi-cx/design-build');

module.exports = contentElement(
  require('./template.twig'),
  'button-45gtfb',
  'HL Button'
).withStyleConfigs();
