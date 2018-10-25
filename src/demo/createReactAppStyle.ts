import { types } from 'typestyle'
export { types }
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createTypeStyle, px, deg, em } from '../createTypeStyle'

const { style, keyframes, makeComponent, setupMount } = createTypeStyle(React.createElement)

export { style, makeComponent }

export const mount = setupMount(ReactDOM.render)

export const appClassName = style({
  textAlign: `center`
})

export const appLogoSpinClassName = keyframes({
  'from': { transform: `rotate(${deg(0)})` },
  'to': { transform: `rotate(${deg(360)})`}
})

export const appLogoClassName = style({
  animationName: appLogoSpinClassName,
  animationDuration: `2s`,
  animationIterationCount: `infinite`,
  animationTimingFunction: `linear`,
  height: px(80)
})

export const appHeaderClassName = style({
  backgroundColor: `#222`,
  height: px(150),
  padding: px(20),
  color: `white`,
})

export const appTitleClassName = style({
  fontSize: em(1.5),
})

export const appIntroClassName = style({
  fontSize: `large`,
})