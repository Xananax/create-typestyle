import { Renderer } from 'react-dom';


export type ValidRootElement = 
  | string 
  | React.StatelessComponent<React.DOMAttributes<never>>
  | React.ComponentClass<React.DOMAttributes<never>>

interface ElementCreator
  { (el: ValidRootElement): React.ReactElement<any>
  }

/**
 * Mounts a react app and their styles
 * 
 * ```js
 * const { setStylesTarget } = createStyle()
 * mount(setStylesTarget)(React.createElement,ReactDOM.render)(App,'root','styles')
 * ```
 */
export const mount = 
  ( setStylesTarget: (tag: { textContent: string | null }) => void ) =>
  ( createElement: ElementCreator
  , render:Renderer
  ) =>
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
  }