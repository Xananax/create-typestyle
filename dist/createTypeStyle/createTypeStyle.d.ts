/// <reference types="react" />
import { ElementCreator } from './types';
export { ElementCreator };
import { types } from 'typestyle';
export { types };
export * from 'csx';
export * from 'typestyle';
/**
 * Creates a typestyle instance
 * as well as a few utility functions
 */
export declare const createTypeStyle: () => {
    cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void;
    cssRaw: (mustBeValidCSS: string) => void;
    style: (...objects: (false | types.NestedCSSProperties | null | undefined)[]) => string;
    keyframes: (frames: types.KeyFrames) => string;
    getStyles: () => string;
    setStylesTarget: (tag: {
        textContent: string | null;
    }) => void;
    setupPage: (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
    normalize: (prefix?: string) => boolean;
    prepare: (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
    mount: (createElement: ElementCreator, render: ReactDOM.Renderer) => (App: string | React.StatelessComponent<React.DOMAttributes<never>> | React.ComponentClass<React.DOMAttributes<never>>, root_id: string, style_id: string) => boolean;
    mergeStyles: (original: types.NestedCSSProperties | types.NestedCSSProperties[], additional: types.NestedCSSProperties | types.NestedCSSProperties[]) => string | null;
    makeComponent: (createElement: ElementCreator) => (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props: any) => React.ReactElement<any>;
    googleFont: (font: string) => boolean;
};
export default createTypeStyle;
