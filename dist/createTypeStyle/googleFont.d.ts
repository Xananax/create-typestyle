/**
 * adds an @import rule for a specified google font
 *
 * ```js
 * const { cssRaw } = createStyle();
 * googleFont( cssRaw )('Montserrat:600|Lora:400');
 * ```
 *
 */
export declare const googleFont: (cssRaw: (mustBeValidCSS: string) => void) => (font: string) => boolean;
