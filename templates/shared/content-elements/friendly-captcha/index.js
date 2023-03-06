const {cx, Icon} = require('@bsi-cx/design-build');

module.exports = cx.contentElement
  .withElementId('friendlycaptcha-frc7Z65R')
  .withLabel('FriendlyCaptcha')
  .withDescription('Description')
  .withFile(require('./template.twig'))
  .withIcon(Icon.FORMFIELD)
  .withStyleConfigs()
