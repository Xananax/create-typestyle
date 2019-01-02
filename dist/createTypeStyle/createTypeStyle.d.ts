/// <reference types="react" />
import { ElementCreator } from './types';
import { types } from 'typestyle';
export { types };
export * from 'csx';
export * from 'typestyle';
export declare const createTypeStyleInstance: () => {
    cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void;
    cssRaw: (mustBeValidCSS: string) => void;
    style: {
        (...objects: (types.NestedCSSProperties | undefined)[]): string;
        (...objects: (false | types.NestedCSSProperties | null | undefined)[]): string;
    };
    keyframes: (frames: types.KeyFrames) => string;
    getStyles: () => string;
    setStylesTarget: (tag: import("typestyle/lib/internal/typestyle").StylesTarget) => void;
    setupPage: (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
    normalize: (prefix?: string) => boolean;
    prepare: (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
    mergeStyles: (original: types.NestedCSSProperties | types.NestedCSSProperties[], additional: types.NestedCSSProperties | types.NestedCSSProperties[]) => string | null;
    googleFont: (font: string) => boolean;
};
declare type TypeStyleHelpers = ReturnType<typeof createTypeStyleInstance>;
export declare const createTypeStyleInstanceWithDomHelpers: (createElement: ElementCreator) => {
    setupMount: (render: import("react-dom").Renderer) => (App: import("./types").ValidRootElement, rootId: string, styleId: string) => boolean;
    makeComponent: (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props?: any) => import("react").ReactElement<any>;
    cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void;
    cssRaw: (mustBeValidCSS: string) => void;
    style: {
        (...objects: (types.NestedCSSProperties | undefined)[]): string;
        (...objects: (false | types.NestedCSSProperties | null | undefined)[]): string;
    };
    keyframes: (frames: types.KeyFrames) => string;
    getStyles: () => string;
    setStylesTarget: (tag: import("typestyle/lib/internal/typestyle").StylesTarget) => void;
    setupPage: (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
    normalize: (prefix?: string) => boolean;
    prepare: (rootSelector: string, additionalStyle?: types.NestedCSSProperties | undefined) => boolean;
    mergeStyles: (original: types.NestedCSSProperties | types.NestedCSSProperties[], additional: types.NestedCSSProperties | types.NestedCSSProperties[]) => string | null;
    googleFont: (font: string) => boolean;
};
declare type TypeStyleExtraHelpers = ReturnType<typeof createTypeStyleInstanceWithDomHelpers>;
/**
 * Creates a typestyle instance
 * as well as a few utility functions
 */
export declare function createTypeStyle(): TypeStyleHelpers;
export declare function createTypeStyle(createElement: ElementCreator): TypeStyleExtraHelpers;
export default createTypeStyle;
