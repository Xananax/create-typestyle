import { ElementCreator } from './types'
export { ElementCreator }
import { types } from 'typestyle'
export { types }
import { createTypeStyle as _createTypeStyle } from 'typestyle'
import { setupPage as _setupPage } from './setupPage'
import { normalize as _normalize } from './normalize'
import { prepare as _prepare } from './prepare'
import { googleFont as _googleFont } from './googleFont'
import { mergeStyles as _mergeStyles } from './mergeStyles'
import { mount as _mount } from './mount'
import { makeComponent as _makeComponent } from './makeComponent'

export * from 'csx'
export * from 'typestyle'

export const createTypeStyleInstanceWithDomHelpers =
  ( createElement:ElementCreator ) => 
  { const props = createTypeStyleInstance()
  ; const { setStylesTarget, style } = props
  ; const setupMount = _mount(createElement, setStylesTarget)
  ; const makeComponent = _makeComponent(createElement, style)
  ; const ret =  
    { ...props
    , setupMount
    , makeComponent
    }
  ; return ret
  }

type TypeStyleExtraHelpers = ReturnType<typeof createTypeStyleInstanceWithDomHelpers>

export const createTypeStyleInstance = 
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
    , mergeStyles
    , googleFont
    }
  ; return ret
  }

type TypeStyleHelpers = ReturnType<typeof createTypeStyleInstance>

/**
 * Creates a typestyle instance
 * as well as a few utility functions
 */
export function createTypeStyle():TypeStyleHelpers
export function createTypeStyle(createElement:ElementCreator):TypeStyleExtraHelpers
export function createTypeStyle(createElement?:ElementCreator):TypeStyleExtraHelpers|TypeStyleHelpers{
  if(createElement){ return createTypeStyleInstanceWithDomHelpers(createElement) }
  return createTypeStyleInstance()
}

export default createTypeStyle