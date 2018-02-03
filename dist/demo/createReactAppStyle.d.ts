/// <reference types="react" />
import { types } from 'typestyle';
export { types };
import * as React from 'react';
export { style };
export declare const mount: (App: string | React.StatelessComponent<React.DOMAttributes<never>> | React.ComponentClass<React.DOMAttributes<never>>, root_id: string, style_id: string) => boolean;
export declare const makeComponent: (tagName: string) => (mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[]) => (props: any) => React.ReactElement<any>;
export declare const appClassName: string;
export declare const appLogoSpinClassName: string;
export declare const appLogoClassName: string;
export declare const appHeaderClassName: string;
export declare const appTitleClassName: string;
export declare const appIntroClassName: string;
