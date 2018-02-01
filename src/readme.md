# createTypeStyle

creates an instance of [typestyle](//github.com/typestyle/typestyle), with some additional goodies. This is useful if you need to create typestyles on the fly, or in different context simultaneously.

createTypeStyle also embeds [csx](//github.com/typestyle/csx/), so there's no need to add it to your dependencies; it also duplicates some of the basic functionality offered by [cssTips](//github.com/typestyle/csstips/)

## Usage

```js
import { createTypeStyle } from '../createtypestyle' 
import * as React from 'react'
import { render } from 'react-dom'

const { 
  cssRule, 
  cssRaw,
  style,
  prepare,
  googleFont, 
  mount:setupMount
} = createTypeStyle()

// creates a function that will serve to 
// mount the react element and the style later
const mount = setupMount(React.createElement, render)

// normalizes and sets best practices for
// the main style, with optional additional css
prepare('root', { fontSize:px(10) })

// adds a google font
googleFont('Montserrat:600|Lora:400')

const className = style({ textAlign: "center" })

export const App = () =>
  <div className={className}>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>

// mounts the app in the element with id 'root'
// and the style in the element with id 'style'
mount(App, 'root', 'style')

```

