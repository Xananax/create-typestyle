import * as React from 'react';
import { types } from 'typestyle';
export { types };
import { px, em, percent, rem, media } from '../createTypeStyle';
declare const cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void, cssRaw: (mustBeValidCSS: string) => void, style: {
    (...objects: (types.NestedCSSProperties | undefined)[]): string;
    (...objects: (false | types.NestedCSSProperties | null | undefined)[]): string;
}, keyframes: (frames: types.KeyFrames) => string, getStyles: () => string, setStylesTarget: (tag: import("typestyle/lib/internal/typestyle").StylesTarget) => void, mergeStyles: (original: types.NestedCSSProperties | types.NestedCSSProperties[], additional: types.NestedCSSProperties | types.NestedCSSProperties[]) => string | null, makeComponent: (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props?: any) => React.ReactElement<any>;
declare const mount: (App: import("../createTypeStyle/types").ValidRootElement, rootId: string, styleId: string) => boolean;
export { cssRule, cssRaw, style, getStyles, setStylesTarget, mergeStyles, mount, keyframes, px, rem, em, media, makeComponent, percent, React };
