"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normalize_1 = require("./normalize");
var setupPage_1 = require("./setupPage");
/**
 * Normalizes the page *and* sets basic page options
 * @param rootSelector The main wrapper for the whole page
 * @param additionalStyle any additional global style you want to apply (e.g, fonts)
 *
 * ```js
 * var { cssRule } = createStyle();
 * prepare(cssRule)('root',{fontSize:'10px'})
 * ```
 */
exports.prepare = function (cssRule) {
    return function (rootSelector, additionalStyle) {
        return (normalize_1.normalize(cssRule)() && setupPage_1.setupPage(cssRule)(rootSelector, additionalStyle));
    };
};
//# sourceMappingURL=prepare.js.map