/// <reference types="react" />
export declare type ValidRootElement = string | React.StatelessComponent<React.DOMAttributes<never>> | React.ComponentClass<React.DOMAttributes<never>>;
export interface ElementCreator {
    (el: ValidRootElement, props?: any, ...children: any[]): React.ReactElement<any>;
}
