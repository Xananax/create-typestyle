"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mounts a react app and their styles
 *
 * ```js
 * const { setStylesTarget } = createStyle()
 * mount(React.createElement,setStyleTarget)(ReactDOM.render)(App,'root','styles')
 * ```
 */
exports.mount = function (createElement, setStylesTarget) {
    return function (render) {
        return function (App, rootId, styleId) {
            ;
            var appRoot = document.getElementById(rootId);
            var styleRoot = document.getElementById(styleId);
            if (!appRoot) {
                throw new Error("root element " + rootId + " not found");
            }
            ;
            if (!styleRoot) {
                throw new Error("style element " + styleId + " not found");
            }
            ;
            render(createElement(App), appRoot);
            setStylesTarget(styleRoot);
            return true;
        };
    };
};
//# sourceMappingURL=mount.js.map