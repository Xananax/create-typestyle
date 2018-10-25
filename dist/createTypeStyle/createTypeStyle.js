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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
exports.types = typestyle_1.types;
var typestyle_2 = require("typestyle");
var setupPage_1 = require("./setupPage");
var normalize_1 = require("./normalize");
var prepare_1 = require("./prepare");
var googleFont_1 = require("./googleFont");
var mergeStyles_1 = require("./mergeStyles");
var mount_1 = require("./mount");
var makeComponent_1 = require("./makeComponent");
__export(require("csx"));
__export(require("typestyle"));
exports.createTypeStyleInstance = function () {
    ;
    var _a = typestyle_2.createTypeStyle(), cssRule = _a.cssRule, cssRaw = _a.cssRaw, style = _a.style, keyframes = _a.keyframes, getStyles = _a.getStyles, setStylesTarget = _a.setStylesTarget;
    var setupPage = setupPage_1.setupPage(cssRule);
    var normalize = normalize_1.normalize(cssRule);
    var prepare = prepare_1.prepare(cssRule);
    var mergeStyles = mergeStyles_1.mergeStyles(style);
    var googleFont = googleFont_1.googleFont(cssRaw);
    var ret = { cssRule: cssRule,
        cssRaw: cssRaw,
        style: style,
        keyframes: keyframes,
        getStyles: getStyles,
        setStylesTarget: setStylesTarget,
        setupPage: setupPage,
        normalize: normalize,
        prepare: prepare,
        mergeStyles: mergeStyles,
        googleFont: googleFont
    };
    return ret;
};
exports.createTypeStyleInstanceWithDomHelpers = function (createElement) {
    var props = exports.createTypeStyleInstance();
    var setStylesTarget = props.setStylesTarget, style = props.style;
    var setupMount = mount_1.mount(createElement, setStylesTarget);
    var makeComponent = makeComponent_1.makeComponent(createElement, style);
    var ret = __assign({}, props, { setupMount: setupMount,
        makeComponent: makeComponent });
    return ret;
};
function createTypeStyle(createElement) {
    ;
    if (createElement) {
        return exports.createTypeStyleInstanceWithDomHelpers(createElement);
    }
    ;
    return exports.createTypeStyleInstance();
}
exports.createTypeStyle = createTypeStyle;
exports.default = createTypeStyle;
//# sourceMappingURL=createTypeStyle.js.map