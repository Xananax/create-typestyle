import { types, classes } from 'typestyle'
import { ElementCreator } from './types'

export const isDev = (typeof process !== 'undefined') && process.env && process.env.NODE_ENV !== 'production'

export const snakeToCamel = 
  ( s: string ) =>
  ( s.replace
      ( /(\-\w)/g
      , (m) => m[1].toUpperCase()
      )
  )

export const upperCase =
  ( s: string ) =>
  ( s[0].toUpperCase() + s.slice(1)
  )

export const snakeToReactName =
  ( s: string ) =>
  ( upperCase(snakeToCamel(s)) )

const cache: 
  { [ key: string ]: 
    ( mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[] ) =>
    /* tslint:disable:no-any */
    ( props?: any) => React.ReactElement<any>
  } = {}

/**
 * Very simple styled component kinda thing.
 * 
 * ```js 
 * const {style} = createTypeStyle()
 * const make = makeComponent(React.createElement,style)
 * const Div = make('div')
 * const Red = Div({color:'red'})
 * // use it:
 * <Red>some text</Red>
 * ```
 */
export const makeComponent = 
  ( createElement: ElementCreator
  , style: (...objects: (types.NestedCSSProperties | undefined | null | false)[]) => string
  ) =>
  ( tagName: string ) => 
  { 
  ; if ( !cache[tagName] )
    { cache[tagName] =
      ( mainStyle: types.NestedCSSProperties, ...styles: types.NestedCSSProperties[] ) =>
      { 
      ; const { $debugName, ...css } = mainStyle
      ; const _className = isDev ? style({ $debugName }, css, ...styles) : style(css, ...styles)
      /* tslint:disable:no-any */
      ; const StyledElement  = (props: any = {}) => 
        { const 
          { children: potentialChildren
          , className: additionalClassName
          , ...restProps 
          } = props
        ; const className = additionalClassName ? classes( _className, additionalClassName ) : _className
        ; const finalProps = 
          { ...restProps
          , className
          }
        ; const children = potentialChildren || null
        ; return createElement( tagName, finalProps, ...children )
        }
      ; if ( isDev && $debugName )
        { return Object.assign(StyledElement, { displayName: snakeToReactName($debugName) })
        }
      ; return StyledElement
      }
    }
  ; return cache[tagName]
  }