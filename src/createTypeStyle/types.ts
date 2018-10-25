export type ValidRootElement = 
  | string 
  | React.StatelessComponent<React.DOMAttributes<never>>
  | React.ComponentClass<React.DOMAttributes<never>>

export interface ElementCreator
  /*tslint:disable:no-any*/
  { (el: ValidRootElement, props?: any, ...children: any[] ): React.ReactElement<any>
  }