"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var baseStyle_1 = require("./baseStyle");
var className = baseStyle_1.style({ $debugName: "App",
    textAlign: "center"
});
var Red = baseStyle_1.makeComponent('h1', { color: 'red' });
exports.App = function () {
    return (React.createElement("div", { className: className },
        React.createElement(Red, null,
            "Start editing to see some magic happen ",
            "\u2728"),
        React.createElement("p", null, "In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.")));
};
baseStyle_1.mount(exports.App, 'root', 'style');
//# sourceMappingURL=demo.js.map