import { types } from 'typestyle'
import { percent } from 'csx'


/**
 * Recommended Page setup
 * - Sets up the body to be full size
 * - Sets up box sizing to be border box
 * @param rootSelector The main wrapper for the whole page
 * @param additionalStyle any additional global style you want to apply (e.g, fonts)
 * 
 * ```js
 * var { cssRule } = createStyle();
 * setupPage(cssRule)('root',{fontSize:'10px'})
 * ```
 */
export const setupPage =
  ( cssRule: (selector: string, ...objects: types.NestedCSSProperties[] ) => void) =>
  ( rootSelector: string
  , additionalStyle?: types.NestedCSSProperties
  ) => 
  { /** Use full window size for application */
  ; cssRule
    ( 'html, body'
    , { height: percent(100)
      , width: percent(100)
      , padding: 0
      , margin: 0
      , ...additionalStyle
      }
    )
      /** Use border box */
  ; cssRule
    ( 'html'
    , { '-moz-box-sizing': 'border-box'
      , '-webkit-box-sizing': 'border-box'
      , boxSizing: 'border-box'
      }
    )
  ; cssRule
    ( '*,*:before,*:after'
    , { boxSizing: 'inherit'
      }
    )
    /** Also root should fill parent */
  ; if (rootSelector) 
    { cssRule
      ( rootSelector
      , { width: percent(100)
        , height: percent(100)
        }
      )
    }
  ; return true
  }