import { Renderer } from 'react-dom';
import { ElementCreator, ValidRootElement } from './types'

/**
 * Mounts a react app and their styles
 * 
 * ```js
 * const { setStylesTarget } = createStyle()
 * mount(React.createElement,setStyleTarget)(ReactDOM.render)(App,'root','styles')
 * ```
 */
export const mount = 
  ( createElement: ElementCreator
  , setStylesTarget: ( tag: { textContent: string | null } ) => void
  ) =>
  ( render: Renderer ) =>
  ( App: ValidRootElement
  , rootId: string
  , styleId: string
  ) => 
  {
  ; const appRoot = document.getElementById(rootId)
  ; const styleRoot = document.getElementById(styleId)
  ; if (!appRoot) 
    { throw new Error(`root element ${rootId} not found`)
    }
  ; if (!styleRoot)
    { throw new Error(`style element ${styleId} not found`)
    }
  ; render(createElement(App), appRoot)
  ; setStylesTarget(styleRoot)
  ; return true
  }