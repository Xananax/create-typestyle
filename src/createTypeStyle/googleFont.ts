/**
 * adds an @import rule for a specified google font
 * 
 * ```js
 * const { cssRaw } = createTypeStyle();
 * googleFont( cssRaw )('Montserrat:600|Lora:400');
 * ```
 * 
 */
export const googleFont =
  ( cssRaw: (mustBeValidCSS: string) => void ) =>
  ( font: string) => 
  {
  ; cssRaw(`@import url('https://fonts.googleapis.com/css?family=${font}');`)
  ; return true
  }