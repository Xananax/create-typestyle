"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var csx_1 = require("csx");
/**
 * Recommended Page setup
 * - Sets up the body to be full size
 * - Sets up box sizing to be border box
 * @param rootSelector The main wrapper for the whole page
 * @param additionalStyle any additional global style you want to apply (e.g, fonts)
 *
 * ```js
 * var { cssRule } = createTypeStyle();
 * setupPage(cssRule)('root',{fontSize:'10px'})
 * ```
 */
exports.setupPage = function (cssRule) {
    return function (rootSelector, additionalStyle) {
        ;
        cssRule('html, body', __assign({ height: csx_1.percent(100), width: csx_1.percent(100), padding: 0, margin: 0 }, additionalStyle));
        cssRule('html', { '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            boxSizing: 'border-box'
        });
        cssRule('*,*:before,*:after', { boxSizing: 'inherit'
        });
        if (rootSelector) {
            cssRule(rootSelector, { width: csx_1.percent(100),
                height: csx_1.percent(100)
            });
        }
        ;
        return true;
    };
};
//# sourceMappingURL=setupPage.js.map