import { types } from 'typestyle';
/**
 * Normalizes the page *and* sets basic page options
 * @param rootSelector The main wrapper for the whole page
 * @param additionalStyle any additional global style you want to apply (e.g, fonts)
 *
 * ```js
 * var { cssRule } = createStyle();
 * prepare(cssRule)('root',{fontSize:'10px'})
 * ```
 */
export declare const prepare: (cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void) => (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;