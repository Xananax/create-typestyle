import { types } from 'typestyle';
export declare type VendorCSSProperties = {
    '-ms-text-size-adjust'?: string | number | types.TLength[];
    '-webkit-text-size-adjust'?: string | number | types.TLength[];
    '-webkit-textDecoration-skip'?: string;
};
export declare type ExtendedNestedCSSProperties = types.NestedCSSProperties & VendorCSSProperties;
/**
 * Adds the rules from the [normalize](https://github.com/necolas/normalize.css) stylesheet
 * Optionally, you may include a prefix to namespace
 * all the adjustments
 *
 * ```js
 * const { cssRule } = createTypeStyle();
 * normalize(cssRule)('.homepage')
 * ```
 */
export declare const normalize: (cssRule: (selector: string, ...objects: ExtendedNestedCSSProperties[]) => void) => (prefix?: string) => boolean;
