import { Renderer } from 'react-dom';
import { ElementCreator, ValidRootElement } from './types';
/**
 * Mounts a react app and their styles
 *
 * ```js
 * const { setStylesTarget } = createStyle()
 * mount(React.createElement,setStyleTarget)(ReactDOM.render)(App,'root','styles')
 * ```
 */
export declare const mount: (createElement: ElementCreator, setStylesTarget: (tag: {
    textContent: string | null;
}) => void) => (render: Renderer) => (App: ValidRootElement, rootId: string, styleId: string) => boolean;
