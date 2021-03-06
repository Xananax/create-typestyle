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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
exports.isDev = (typeof process !== 'undefined') && process.env && process.env.NODE_ENV !== 'production';
exports.snakeToCamel = function (s) {
    return (s.replace(/(\-\w)/g, function (m) { return m[1].toUpperCase(); }));
};
exports.upperCase = function (s) {
    return (s[0].toUpperCase() + s.slice(1));
};
exports.snakeToReactName = function (s) {
    return (exports.upperCase(exports.snakeToCamel(s)));
};
var cache = {};
/**
 * Very simple styled component kinda thing.
 *
 * ```js
 * const {style} = createTypeStyle()
 * const make = makeComponent(React.createElement,style)
 * const Div = make('div')
 * const Red = Div({color:'red'})
 * // use it:
 * <Red>some text</Red>
 * ```
 */
exports.makeComponent = function (createElement, style) {
    return function (tagName) {
        ;
        if (!cache[tagName]) {
            cache[tagName] =
                function (mainStyle) {
                    var styles = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        styles[_i - 1] = arguments[_i];
                    }
                    ;
                    var $debugName = mainStyle.$debugName, css = __rest(mainStyle, ["$debugName"]);
                    var _className = exports.isDev ? style.apply(void 0, [{ $debugName: $debugName }, css].concat(styles)) : style.apply(void 0, [css].concat(styles));
                    var StyledElement = function (props) {
                        if (props === void 0) { props = {}; }
                        var potentialChildren = props.children, additionalClassName = props.className, restProps = __rest(props, ["children", "className"]);
                        var className = additionalClassName ? typestyle_1.classes(_className, additionalClassName) : _className;
                        var finalProps = __assign({}, restProps, { className: className });
                        var children = potentialChildren ? potentialChildren.length ? potentialChildren : [potentialChildren] : [];
                        return createElement.apply(void 0, [tagName, finalProps].concat(children));
                    };
                    if (exports.isDev && $debugName) {
                        return Object.assign(StyledElement, { displayName: exports.snakeToReactName($debugName) });
                    }
                    ;
                    return StyledElement;
                };
        }
        ;
        return cache[tagName];
    };
};
//# sourceMappingURL=makeComponent.js.map