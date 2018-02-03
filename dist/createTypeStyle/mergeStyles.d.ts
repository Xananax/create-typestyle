import { types } from 'typestyle';
/**
 * Merges two styles together
 *
 * ```js
 * const { style } = createStyle();
 * const className = mergeStyles(style)({color:'black'},{background:'orange'});
 * ```
 */
export declare const mergeStyles: (style: (...objects: (false | types.NestedCSSProperties | null | undefined)[]) => string) => (original: types.NestedCSSProperties | types.NestedCSSProperties[], additional: types.NestedCSSProperties | types.NestedCSSProperties[]) => string | null;
