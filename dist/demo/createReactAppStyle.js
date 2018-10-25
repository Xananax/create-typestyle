"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
exports.types = typestyle_1.types;
var React = require("react");
var ReactDOM = require("react-dom");
var createTypeStyle_1 = require("../createTypeStyle");
var _a = createTypeStyle_1.createTypeStyle(React.createElement), style = _a.style, keyframes = _a.keyframes, makeComponent = _a.makeComponent, setupMount = _a.setupMount;
exports.style = style;
exports.makeComponent = makeComponent;
exports.mount = setupMount(ReactDOM.render);
exports.appClassName = style({
    textAlign: "center"
});
exports.appLogoSpinClassName = keyframes({
    'from': { transform: "rotate(" + createTypeStyle_1.deg(0) + ")" },
    'to': { transform: "rotate(" + createTypeStyle_1.deg(360) + ")" }
});
exports.appLogoClassName = style({
    animationName: exports.appLogoSpinClassName,
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    height: createTypeStyle_1.px(80)
});
exports.appHeaderClassName = style({
    backgroundColor: "#222",
    height: createTypeStyle_1.px(150),
    padding: createTypeStyle_1.px(20),
    color: "white",
});
exports.appTitleClassName = style({
    fontSize: createTypeStyle_1.em(1.5),
});
exports.appIntroClassName = style({
    fontSize: "large",
});
//# sourceMappingURL=createReactAppStyle.js.map