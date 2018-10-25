import { types } from 'typestyle';
export { types };
import * as React from 'react';
declare const style: {
    (...objects: (types.NestedCSSProperties | undefined)[]): string;
    (...objects: (false | types.NestedCSSProperties | null | undefined)[]): string;
}, makeComponent: (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props?: any) => React.ReactElement<any>;
export { style, makeComponent };
export declare const mount: (App: import("../createTypeStyle/types").ValidRootElement, rootId: string, styleId: string) => boolean;
export declare const appClassName: string;
export declare const appLogoSpinClassName: string;
export declare const appLogoClassName: string;
export declare const appHeaderClassName: string;
export declare const appTitleClassName: string;
export declare const appIntroClassName: string;
