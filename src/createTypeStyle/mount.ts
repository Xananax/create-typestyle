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
  ( render:Renderer ) =>
  ( App: ValidRootElement
  , root_id: string
  , style_id: string
  ) => 
  {
  ; const appRoot = document.getElementById(root_id)
  ; const styleRoot = document.getElementById(style_id)
  ; if (!appRoot) 
    { throw new Error(`root element ${root_id} not found`)
    }
  ; if (!styleRoot)
    { throw new Error(`style element ${style_id} not found`)
    }
  ; render(createElement(App), appRoot)
  ; setStylesTarget(styleRoot)
  ; return true
  }