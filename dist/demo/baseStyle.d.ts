/// <reference types="react" />
import { types } from 'typestyle';
export { types };
import { px, em, percent, rem, media } from '../createTypeStyle';
import * as React from 'react';
declare const mount: (App: string | React.StatelessComponent<React.DOMAttributes<never>> | React.ComponentClass<React.DOMAttributes<never>>, root_id: string, style_id: string) => boolean;
declare const makeComponent: (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props?: any) => React.ReactElement<any>;
export { cssRule, cssRaw, style, getStyles, setStylesTarget, mergeStyles, mount, keyframes, px, rem, em, media, makeComponent, percent };
