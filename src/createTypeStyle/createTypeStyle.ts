import { createTypeStyle as _createTypeStyle } from 'typestyle'
import { setupPage as _setupPage } from './setupPage'
import { normalize as _normalize } from './normalize'
import { prepare as _prepare } from './prepare'
import { googleFont as _googleFont } from './googleFont'
import { mergeStyles as _mergeStyles } from './mergeStyles'
import { mount as _mount } from './mount'

export * from 'csx'
export * from 'typestyle'

/**
 * Creates a typestyle instance
 * as well as a few utility functions
 */
export const createTypeStyle = 
  () => 
  { 
  ; const 
    { cssRule
    , cssRaw
    , style
    , keyframes
    , getStyles
    , setStylesTarget
    } = _createTypeStyle()
  ; const setupPage = _setupPage(cssRule)
  ; const normalize = _normalize(cssRule)
  ; const prepare = _prepare(cssRule)
  ; const mergeStyles = _mergeStyles(style)
  ; const googleFont = _googleFont(cssRaw)
  ; const mount = _mount(setStylesTarget)
  ; const ret = 
    { cssRule
    , cssRaw
    , style
    , keyframes
    , getStyles
    , setStylesTarget
    , setupPage
    , normalize
    , prepare
    , mount
    , mergeStyles
    , googleFont
    }
  ; return ret
  }

export default createTypeStyle