const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-size-pKDVBL')
  /*.withLabel('Button size')*/
  .withLabel('Button Grösse')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Condensed')*/
      .withLabel('Condensed')
      .withCssClass('hl-btn-size-cn'),
    cx.cssClass
      /*.withLabel('Small')*/
      .withLabel('Klein')
      .withCssClass('hl-btn-size-sm'),
    cx.cssClass
      /*.withLabel('Medium')*/
      .withLabel('Medium')
      .withCssClass('hl-btn-size-md'),
    cx.cssClass
      /*.withLabel('Large')*/
      .withLabel('Gross')
      .withCssClass('hl-btn-size-lg'));