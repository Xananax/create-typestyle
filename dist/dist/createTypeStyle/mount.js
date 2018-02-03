"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mounts a react app and their styles
 *
 * ```js
 * const { setStylesTarget } = createStyle()
 * mount(setStylesTarget)(React.createElement,ReactDOM.render)(App,'root','styles')
 * ```
 */
exports.mount = function (setStylesTarget) {
    return function (createElement, render) {
        return function (App, root_id, style_id) {
            ;
            var appRoot = document.getElementById(root_id);
            var styleRoot = document.getElementById(style_id);
            if (!appRoot) {
                throw new Error("root element " + root_id + " not found");
            }
            ;
            if (!styleRoot) {
                throw new Error("style element " + style_id + " not found");
            }
            ;
            render(createElement(App), appRoot);
            setStylesTarget(styleRoot);
            return true;
        };
    };
};
//# sourceMappingURL=mount.js.map