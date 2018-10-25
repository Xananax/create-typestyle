/// <reference types="react" />
import { types } from 'typestyle';
import { ElementCreator } from './types';
/**
 * Very simple styled component kinda thing.
 *
 * ```js
 * const {style} = createTypeStyle()
 * const make = makeComponent(React.createElement,style)
 * const Div = make('div')
 * const Red = Div({color:'red'})
 * // use it:
 * <Red>some text</Red>
 * ```
 */
export declare const makeComponent: (createElement: ElementCreator, style: (...objects: (false | types.NestedCSSProperties | null | undefined)[]) => string) => (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props?: any) => import("react").ReactElement<any>;
