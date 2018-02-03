"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createTypeStyle_1 = require("../createTypeStyle");
exports.px = createTypeStyle_1.px;
exports.em = createTypeStyle_1.em;
exports.percent = createTypeStyle_1.percent;
exports.rem = createTypeStyle_1.rem;
exports.media = createTypeStyle_1.media;
var _a = createTypeStyle_1.createTypeStyle(), cssRule = _a.cssRule, cssRaw = _a.cssRaw, style = _a.style, keyframes = _a.keyframes, getStyles = _a.getStyles, setStylesTarget = _a.setStylesTarget, prepare = _a.prepare, mergeStyles = _a.mergeStyles, googleFont = _a.googleFont, setupMount = _a.mount, setupMakeComponent = _a.makeComponent;
exports.cssRule = cssRule;
exports.cssRaw = cssRaw;
exports.style = style;
exports.keyframes = keyframes;
exports.getStyles = getStyles;
exports.setStylesTarget = setStylesTarget;
exports.mergeStyles = mergeStyles;
var React = require("react");
var react_dom_1 = require("react-dom");
var mount = setupMount(React.createElement, react_dom_1.render);
exports.mount = mount;
var makeComponent = setupMakeComponent(React.createElement);
exports.makeComponent = makeComponent;
prepare('root', { fontSize: createTypeStyle_1.px(10)
});
googleFont('Montserrat:600|Lora:400');
cssRaw("h1{font-size:10px}");
cssRule('body', { width: "100%" });
cssRule('h1,h2,h3,h4,h5,h6', { marginBottom: createTypeStyle_1.rem(3),
    fontFamily: "Montserrat",
    lineHeight: createTypeStyle_1.rem(9),
    fontWeight: 600,
    fontStyle: "normal",
    letterSpacing: createTypeStyle_1.em(0)
});
cssRule('h1', { fontSize: createTypeStyle_1.em(6.103515625),
    lineHeight: createTypeStyle_1.rem(9)
});
cssRule('h2', { fontSize: createTypeStyle_1.em(4.8828125),
    lineHeight: createTypeStyle_1.rem(6)
});
cssRule('h3', { fontSize: createTypeStyle_1.em(3.90625),
    lineHeight: createTypeStyle_1.rem(6)
});
cssRule('h4', { fontSize: createTypeStyle_1.em(3.125),
    lineHeight: createTypeStyle_1.rem(6)
});
cssRule('h5', { fontSize: createTypeStyle_1.em(2.5),
    lineHeight: createTypeStyle_1.rem(3)
});
cssRule('h6', { fontSize: createTypeStyle_1.em(2),
    lineHeight: createTypeStyle_1.rem(3)
});
cssRule('p', { marginBottom: createTypeStyle_1.rem(3),
    fontFamily: "Lora",
    fontSize: createTypeStyle_1.em(1.6),
    lineHeight: createTypeStyle_1.rem(3),
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: createTypeStyle_1.em(0)
});
style(createTypeStyle_1.media({ minWidth: 0,
    maxWidth: createTypeStyle_1.px(720)
}, {}));
//# sourceMappingURL=baseStyle.js.map