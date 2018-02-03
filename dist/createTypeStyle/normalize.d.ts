import { types } from 'typestyle';
/**
 * Adds the rules from the [normalize](https://github.com/necolas/normalize.css) stylesheet
 * Optionally, you may include a prefix to namespace
 * all the adjustements
 *
 * ```js
 * var { cssRule } = createStyle();
 * normalize(cssRule)()
 * ```
 */
export declare const normalize: (cssRule: (selector: string, ...objects: (types.NestedCSSProperties & {
    '-webkit-textDecoration-skip'?: string | undefined;
})[]) => void) => (prefix?: string) => boolean;
