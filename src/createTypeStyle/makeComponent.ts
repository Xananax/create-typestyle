import { types, classes } from 'typestyle'
import { ElementCreator } from './types'

const is_dev = (typeof process !== 'undefined') && process.env && process.env.NODE_ENV !== 'production'

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
export const makeComponent = 
  ( style: (...objects: (types.NestedCSSProperties | undefined | null | false)[]) => string ) =>
  ( createElement:ElementCreator) =>
  ( tagName: string ) => 
  ( mainStyle:types.NestedCSSProperties, ...styles: types.NestedCSSProperties[] ) =>
  { 
  ; const {$debugName, ...css1} = mainStyle
  ; const _className = is_dev ? style({$debugName},css1,...styles) : style(css1,...styles)
  ; const el  = (props:any = {}) => 
    { const { children:potentialChildren, className:additionalClassName,...restProps } = props
    ; const className = additionalClassName ? classes(_className,additionalClassName) : _className
    ; const finalProps = { ...restProps, className }
    ; const children = potentialChildren || null
    ; return createElement( tagName, finalProps, ...children )
    }
  ; return el
  } 