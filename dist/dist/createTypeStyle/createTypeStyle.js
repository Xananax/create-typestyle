"use strict";
function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
var setupPage_1 = require("./setupPage");
var normalize_1 = require("./normalize");
var prepare_1 = require("./prepare");
var googleFont_1 = require("./googleFont");
var mergeStyles_1 = require("./mergeStyles");
var mount_1 = require("./mount");
var makeComponent_1 = require("./makeComponent");
__export(require("csx"));
__export(require("typestyle"));
/**
 * Creates a typestyle instance
 * as well as a few utility functions
 */
exports.createTypeStyle = function () {
    ;
    var _a = typestyle_1.createTypeStyle(), cssRule = _a.cssRule, cssRaw = _a.cssRaw, style = _a.style, keyframes = _a.keyframes, getStyles = _a.getStyles, setStylesTarget = _a.setStylesTarget;
    var setupPage = setupPage_1.setupPage(cssRule);
    var normalize = normalize_1.normalize(cssRule);
    var prepare = prepare_1.prepare(cssRule);
    var mergeStyles = mergeStyles_1.mergeStyles(style);
    var googleFont = googleFont_1.googleFont(cssRaw);
    var mount = mount_1.mount(setStylesTarget);
    var makeComponent = makeComponent_1.makeComponent(style);
    var ret = { cssRule: cssRule,
        cssRaw: cssRaw,
        style: style,
        keyframes: keyframes,
        getStyles: getStyles,
        setStylesTarget: setStylesTarget,
        setupPage: setupPage,
        normalize: normalize,
        prepare: prepare,
        mount: mount,
        mergeStyles: mergeStyles,
        makeComponent: makeComponent,
        googleFont: googleFont
    };
    return ret;
};
exports.default = exports.createTypeStyle;
//# sourceMappingURL=createTypeStyle.js.map