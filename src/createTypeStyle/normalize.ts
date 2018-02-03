import { types } from 'typestyle'
import 
  { px
  , em
  , percent
  } from 'csx'


/**
 * Adds the rules from the [normalize](https://github.com/necolas/normalize.css) stylesheet
 * Optionally, you may include a prefix to namespace
 * all the adjustements
 * 
 * ```js
 * var { cssRule } = createStyle();
 * normalize(cssRule)()
 * ```
 */
export const normalize =
  ( cssRule: (selector: string, ...objects: (types.NestedCSSProperties & {'-webkit-textDecoration-skip'?:string})[])=>void) =>
  ( prefix: string = '' ) => 
  {
  ; const p = prefix ? prefix.trim() + ' ' : '';
  ; cssRule
    ( `${p}button,${p}hr,${p}input`
    , { overflow: `visible` }
    )
  ; cssRule
    ( `${p}audio,${p}canvas,${p}progress,${p}video`
    , { display: `inline-block` }
    )
  ; cssRule
    ( `${p}progress,${p}sub,${p}sup`
    , { verticalAlign: `baseline` }
    )
  ; cssRule
    ( `${p}html`
    , { fontFamily: `sans-serif`
      , lineHeight: 1.15
      , '-ms-text-size-adjust': percent(100)
      , '-webkit-text-size-adjust': percent(100) 
      }
    )
  ; cssRule
    ( `${p}body`
    , { margin: 0 }
    )
  ; cssRule
    ( `${p}menu,${p}article,${p}aside,${p}details,${p}footer,${p}header,${p}nav,${p}section`
    , { display: `block` }
    )
  ; cssRule
    ( `${p}h1`
    , { fontSize: em(2), margin: `${em(.67)} 0` }
    )
  ; cssRule
    ( `${p}figcaption,${p}figure,${p}main`
    , { display: `block` }
    )
  ; cssRule
    ( `${p}figure`
    , { margin: `${em(1)} ${px(40)}` }
    )
  ; cssRule
    ( `${p}hr`
    , { boxSizing: `content-box`
      , height: 0 
      }
    )
  ; cssRule
    ( `${p}code,${p}kbd,${p}pre,${p}samp`
    , { fontFamily: `monospace,monospace`
      , fontSize: em(1) 
      }
    )
  ; cssRule
    ( `${p}a`
    , { backgroundColor: `transparent`
      , '-webkit-textDecoration-skip': `objects` 
      }
    )
  ; cssRule
    ( `${p}a:active,${p}a:hover`
    , { outlineWidth: 0 }
    )
  ; cssRule
    ( `${p}abbr[title]`
    , { borderBottom: `none`
      , textDecoration: `underline dotted` 
      }
    )
  ; cssRule
    ( `${p}b,${p}strong`
    , { fontWeight: `bolder` }
    )
  ; cssRule
    ( `${p}dfn`
    , { fontStyle: `italic` }
    )
  ; cssRule
    ( `${p}mark`
    , { backgroundColor: `#ff0`
      , color: `#000` 
      }
    )
  ; cssRule
    ( `${p}small`
    , { fontSize: percent(80) }
    )
  ; cssRule
    ( `${p}sub,${p}sup`
    , { fontSize: percent(75), lineHeight: 0, position: `relative` }
    )
  ; cssRule
    ( `${p}sub`
    , { bottom: -em(.25) }
    )
  ; cssRule
    ( `${p}sup`
    , { top: -em(.5) }
    )
  ; cssRule
    ( `${p}audio:not([controls])`
    , { display: `none`
      , height: 0 
      }
    )
  ; cssRule
    ( `${p}img`
    , { borderStyle: `none` }
    )
  ; cssRule
    ( `${p}svg:not(:root)`
    , { overflow: `hidden` }
    )
  ; cssRule
    ( `${p}button,${p}input,${p}optgroup,${p}select,${p}textarea`
    , { fontFamily: `sans-serif`
      , fontSize: percent(100)
      , lineHeight: 1.15
      , margin: 0 
      }
    )
  ; cssRule
    ( `${p}button,${p}input`
    , {}
    )
  ; cssRule
    ( `${p}button,${p}select`
    , { textTransform: `none` }
    )
  ; cssRule
    ( `${p}[type=submit],${p}[type=reset],${p}button,${p}html[type=button]`
    , { '-webkit-appearance': `button` }
    )
  ; cssRule
    ( `${p}[type=button]::-moz-focus-inner,${p}[type=reset]::-moz-focus-inner,${p}[type=submit]::-moz-focus-inner,${p}button::-moz-focus-inner`
    , { borderStyle: `none`
      , padding: 0
      }
    )
  ; cssRule
    ( `${p}[type=button]:-moz-focusring,${p}[type=reset]:-moz-focusring,${p}[type=submit]:-moz-focusring,${p}button:-moz-focusring`
    , { outline: `ButtonText dotted ${px(1)}` }
    )
  ; cssRule
    ( `${p}fieldset`
    , { border: `${px(1)} solid silver`
      , margin: `0 ${px(2)}`
      , padding: `${em(.35)} ${em(.625)} ${em(.75)}`
      }
    )
  ; cssRule
    ( `${p}legend`
    , { boxSizing: `border-box`
      , color: `inherit`
      , display: `table`
      , maxWidth: percent(100)
      , padding: 0
      , whiteSpace: `normal` 
      }
    )
  ; cssRule
    ( `${p}progress`
    , {}
    )
  ; cssRule
    ( `${p}textarea`
    , { overflow: `auto` }
    )
  ; cssRule
    ( `${p}[type=checkbox],${p}[type=radio]`
    , { boxSizing: `border-box`
      , padding: 0 
      }
    )
  ; cssRule
    ( `${p}[type=number]::-webkit-inner-spin-button,${p}[type=number]::-webkit-outer-spin-button`
    , { height: `auto` }
    )
  ; cssRule
    ( `${p}[type=search]`
    , { '-webkit-appearance': `textfield`
      , outlineOffset: -px(2) 
      }
    )
  ; cssRule
    ( `${p}[type=search]::-webkit-search-cancel-button,${p}[type=search]::-webkit-search-decoration`
    , { '-webkit-appearance': `none` }
    )
  ; cssRule
    ( `${p}::-webkit-file-upload-button`
    , { '-webkit-appearance': `button`
      , font: `inherit`
      }
    )
  ; cssRule
    ( `${p}summary`
    , { display: `list-item` }
    )
  ; cssRule
    ( `${p}[hidden],${p}template`
    , { display: `none` }
    )
  ; return true
  }