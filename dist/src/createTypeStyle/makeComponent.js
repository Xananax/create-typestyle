"use strict";
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
var is_dev = (typeof process !== 'undefined') && process.env && process.env.NODE_ENV !== 'production';
/**
 * Very simple styled component kinda thing.
 *
 * ```js
 * const {makeComponent:setupMakeComponent} = createTypeStyle()
 * const makeComponent = setupMakeComponent(React.createElement)
 * const El = makeComponent('div',{color:'red'})
 * // use it:
 * <El>some text</El>
 * ```
 */
exports.makeComponent = function (style) {
    return function (createElement) {
        return function (tagName, mainStyle) {
            var styles = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                styles[_i - 2] = arguments[_i];
            }
            ;
            var $debugName = mainStyle.$debugName, css1 = __rest(mainStyle, ["$debugName"]);
            var className = is_dev ? style.apply(void 0, [{ $debugName: $debugName }, css1].concat(styles)) : style.apply(void 0, [css1].concat(styles));
            var el = function (props) {
                var children = props && props.children ? props.children : null;
                return createElement.apply(void 0, [tagName, { className: className }].concat(children));
            };
            return el;
        };
    };
};
//# sourceMappingURL=makeComponent.js.map