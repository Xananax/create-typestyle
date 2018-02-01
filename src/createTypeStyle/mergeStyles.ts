import { types } from 'typestyle'

/**
 * Merges two styles together
 * 
 * ```js
 * const { style } = createStyle();
 * const className = mergeStyles(style)({color:'black'},{background:'orange'});
 * ```
 */
export const mergeStyles =
  ( style: (...objects: (types.NestedCSSProperties | undefined | null | false)[]) => string ) =>
  ( original: types.NestedCSSProperties | types.NestedCSSProperties[]
  , additional: types.NestedCSSProperties | types.NestedCSSProperties[]
  ) => 
  {
  ; if (!original && !additional) 
    { return null
    }
  ; const styles =
    [...(Array.isArray(original) ? original : [original])
      , ...(Array.isArray(additional) ? additional : [additional])
    ]
  ; return style(...styles)
  }