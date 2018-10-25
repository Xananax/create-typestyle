import { types } from 'typestyle'
import { normalize } from './normalize'
import { setupPage } from './setupPage'

/**
 * Normalizes the page *and* sets basic page options
 * @param rootSelector The main wrapper for the whole page
 * @param additionalStyle any additional global style you want to apply (e.g, fonts)
 * 
 * ```js
 * var { cssRule } = createTypeStyle();
 * prepare(cssRule)('root',{fontSize:'10px'})
 * ```
 */
export const prepare =
  ( cssRule: (selector: string, ...objects: types.NestedCSSProperties[]) => void ) =>
  ( rootSelector: string
  , additionalStyle?: types.NestedCSSProperties
  ) =>
  ( normalize(cssRule)() && setupPage(cssRule)(rootSelector, additionalStyle)
  )