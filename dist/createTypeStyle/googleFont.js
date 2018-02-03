"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * adds an @import rule for a specified google font
 *
 * ```js
 * const { cssRaw } = createStyle();
 * googleFont( cssRaw )('Montserrat:600|Lora:400');
 * ```
 *
 */
exports.googleFont = function (cssRaw) {
    return function (font) {
        ;
        cssRaw("@import url('https://fonts.googleapis.com/css?family=" + font + "');");
        return true;
    };
};
//# sourceMappingURL=googleFont.js.map