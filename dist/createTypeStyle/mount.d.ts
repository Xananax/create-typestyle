import { Renderer } from 'react-dom';
import { ElementCreator, ValidRootElement } from './types';
/**
 * Mounts a react app and their styles
 *
 * ```js
 * const { setStylesTarget } = createStyle()
 * mount(setStylesTarget)(React.createElement,ReactDOM.render)(App,'root','styles')
 * ```
 */
export declare const mount: (setStylesTarget: (tag: {
    textContent: string | null;
}) => void) => (createElement: ElementCreator, render: Renderer) => (App: ValidRootElement, root_id: string, style_id: string) => boolean;
