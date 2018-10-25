# create-typeStyle

creates a boxed, independent instance of [typestyle](//github.com/typestyle/typestyle), with some additional goodies. This is useful if you need to create typestyles on the fly, or in different context simultaneously.

createTypeStyle also embeds [csx](//github.com/typestyle/csx/), so there's no need to add it to your dependencies; it also duplicates some of the basic functionality offered by [cssTips](//github.com/typestyle/csstips/)

It makes creating styles and working with both React and Typestyle a little bit nicer, at the price of some boilerplate written once per project

## Quick Example


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
  setupMount
} = createTypeStyle(React.createElement) // you can pass also Preact, Inferno, etc 

// creates a function that will serve to 
// mount the react element and the style later
const mount = setupMount(render)

// normalizes and sets best practices for
// the main style, with optional additional css
prepare('root', { fontSize:px(10) })

// adds a google font
googleFont('Montserrat:600|Lora:400')

const appClassName = style({ textAlign: "center" })

export const App = () =>
  <div className={appClassName}>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>

// mounts the app in the element with id 'root'
// and the style in the element with id 'style'
mount(App, 'root', 'style')

```

You'll find a demo in the `src/demo` directory

Check a live demo on [codesandbox](https://codesandbox.io/s/jn06wov9vw)

## Usage

```bash
npm install --save create-typestyle
```

then create a boxed typestyle:

```js
import { createTypeStyle } from 'create-typestyle'
const { 
  cssRule,
  cssRaw,
  style,
  keyframes,
  getStyles,
  setStylesTarget,
  setupPage,
  normalize,
  prepare,
  mergeStyles,
  googleFont,
  mount, // only if you pass React.createElement
  makeComponent // only if you pass React.createElement
} = createTypeStyle()
```

Then use those functions exactly as you would when using regular [typestyle](//github.com/typestyle/typestyle).

`create-typestyle` exports everything [typestyle](//github.com/typestyle/typestyle) and [csx](//github.com/typestyle/csx/) export.

Here's the complete list:

```js
import {
  // typestyle exports
  // if you're using create-typestyle, you probably
  // don't want to use those, but they are here
  createTypeStyle,
  media,
  // csx exports
  color,
  hsl,
  hsla,
  rgb,
  rgba,
  spin,
  em,
  percent,
  px,
  rad,
  rem,
  viewHeight,
  viewWidth,
  turn,
  important,
  quote,
  url,
  red, green, blue, white//, ...other colors
} from 'create-typestyle'
```

## API

For regular typestyle functions, check out the [official doc](https://typestyle.github.io/).

All of them are included as methods of the object returned by `createTypeStyle()`.

The complete list of methods:

```js
const {
  // regular typestyle methods:
  cssRule,
  cssRaw,
  style,
  keyframes,
  getStyles,
  setStylesTarget,
  // additional (taken from cssTips):
  setupPage,
  normalize,
  // create-typestyle exclusive:
  prepare,
  mergeStyles,
  googleFont,
  // for usage with React/Preact/Inferno and other React-compatible libraries
  mount,
  makeComponent
} = createTypeStyle()
```


`create-typestyle` specific methods include:

### setupPage

```typescript
(selector: string, style?: {}) => true
```

Recommended Page setup, taken straight from [cssTips](//github.com/typestyle/csstips/)

- Sets up the body to be full size
- Sets up box sizing to be border box

`rootSelector` The main wrapper for the whole page
`additionalStyle` any additional global style you want to apply (e.g, fonts)

```js
const { setupPage } = createStyle();
setupPage('root',{fontSize:'10px'})
```

### normalize

```typescript
(prefix?:string) => true
```

Adds the rules from the [normalize](https://github.com/necolas/normalize.css) stylesheet
Optionally, you may include a prefix to namespace all the adjustments

```js
const { normalize } = createStyle();
normalize('root')
```

### prepare

```typescript
(selector: string, style?: {}) => true
```

Just a shortcut to run both `setupPage` and `normalize`

### googleFont

```typescript
(font:string) => true
```

adds an `@import` rule for a specified google font

```js
const { googleFont } = createStyle();
googleFont('Montserrat:600|Lora:400');
``` 

### mount

```typescript
(render) => (ReactElement,root_id,style_id) => true
```

Mounts a react app and their styles

```js
import React from 'react';
import ReactDOM from  'react-dom';
// provided the App is to be in an element <div id='root'/>
// and the styles in a style element <style id='styles'/>
// You must pass a `React.createElement`-compatible function to `createStyle`
const { mount } = createStyle(React.createElement);
mount(ReactDOM.render)(App,'root','styles');
```

### makeComponent

```typescript
(createElement:Function) => (tagName:string) => (style:object) => Component
```

Very simple styled component kinda thing.

```js 
import React from 'react'
// must pass a React.createElement-compatible function
const {makeComponent} = createTypeStyle(React.createElement)
const Div = makeComponent('div')
const El = Div({color:'red'})
// use it:
<El>some text</El>
```

## License

MIT
