import * as React from 'react'
import 
  { mount
  , style
  , makeComponent
  } from './baseStyle'

const className = style
  ( { $debugName: `App`
    , textAlign: "center"
    }
  )

const Red = makeComponent('h1', { color: 'red' })

export const App = () =>
  (<div className={className}>
    <Red>Start editing to see some magic happen {"\u2728"}</Red>
    <p>In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.</p>
  </div>
  );

mount(App, 'root', 'style')