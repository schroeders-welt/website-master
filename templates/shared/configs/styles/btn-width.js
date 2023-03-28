const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('hl-btn-width-wdOcZR')
  /*.withLabel('Button width')*/
  .withLabel('Button Breite')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Default')*/
      .withLabel('Standard')
      .withCssClass('hl-btn-width-default'),
    cx.cssClass
      /*.withLabel('Wide')*/
      .withLabel('Über ganze Breite')
      .withCssClass('hl-btn-width-full'));