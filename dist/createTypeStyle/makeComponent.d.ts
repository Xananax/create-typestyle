/// <reference types="react" />
import { types } from 'typestyle';
import { ElementCreator } from './types';
/**
 * Very simple styled component kinda thing.
 *
 * ```js
 * const {makeComponent:setupMakeComponent} = createTypeStyle()
 * const makeComponent = setupMakeComponent(React.createElement)
 * const El = makeComponent('div')({color:'red'})
 * // use it:
 * <El>some text</El>
 * ```
 */
export declare const makeComponent: (style: (...objects: (false | types.NestedCSSProperties | null | undefined)[]) => string) => (createElement: ElementCreator) => (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props: any) => React.ReactElement<any>;
