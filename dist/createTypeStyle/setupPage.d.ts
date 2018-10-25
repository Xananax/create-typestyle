import { types } from 'typestyle';
/**
 * Recommended Page setup
 * - Sets up the body to be full size
 * - Sets up box sizing to be border box
 * @param rootSelector The main wrapper for the whole page
 * @param additionalStyle any additional global style you want to apply (e.g, fonts)
 *
 * ```js
 * var { cssRule } = createTypeStyle();
 * setupPage(cssRule)('root',{fontSize:'10px'})
 * ```
 */
export declare const setupPage: (cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void) => (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
