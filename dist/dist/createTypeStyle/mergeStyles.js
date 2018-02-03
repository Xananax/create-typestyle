"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Merges two styles together
 *
 * ```js
 * const { style } = createStyle();
 * const className = mergeStyles(style)({color:'black'},{background:'orange'});
 * ```
 */
exports.mergeStyles = function (style) {
    return function (original, additional) {
        ;
        if (!original && !additional) {
            return null;
        }
        ;
        var styles = (Array.isArray(original) ? original : [original]).concat((Array.isArray(additional) ? additional : [additional]));
        return style.apply(void 0, styles);
    };
};
//# sourceMappingURL=mergeStyles.js.map