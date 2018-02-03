import { types } from 'typestyle'
export { types }
import 
  { createTypeStyle
  , px
  , em
  , percent
  , rem
  , media
  } from '../createTypeStyle' 

const 
  { cssRule
  , cssRaw
  , style
  , keyframes
  , getStyles
  , setStylesTarget
  , prepare
  , mergeStyles
  , googleFont
  , mount:setupMount
  , makeComponent:setupMakeComponent
  } = createTypeStyle()

import * as React from 'react'
import { render } from 'react-dom'

const mount = setupMount(React.createElement, render)
const makeComponent = setupMakeComponent(React.createElement)

prepare
  ( 'root'
  , { fontSize:px(10)
    }
  )

googleFont
  ('Montserrat:600|Lora:400')

cssRaw
  (`h1{font-size:10px}`);

cssRule
  ('body',{width:`100%`})

cssRule
  ( 'h1,h2,h3,h4,h5,h6'
  , { marginBottom: rem(3)
    , fontFamily: `Montserrat`
    , lineHeight: rem(9)
    , fontWeight: 600
    , fontStyle: `normal`
    , letterSpacing: em(0)
    }
  )

cssRule
  ( 'h1'
  , { fontSize: em(6.103515625)
    , lineHeight: rem(9)
    }
  )

cssRule
  ( 'h2'
  , { fontSize: em(4.8828125)
    , lineHeight: rem(6)
    }
  )

cssRule
  ( 'h3'
  , { fontSize: em(3.90625) 
    , lineHeight: rem(6) 
    }
  )

cssRule
  ( 'h4'
  , { fontSize: em(3.125) 
    , lineHeight: rem(6) 
    }
  )

cssRule
  ( 'h5'
  , { fontSize: em(2.5) 
    , lineHeight: rem(3) 
    }
  )

cssRule
  ( 'h6'
  , { fontSize: em(2) 
    , lineHeight: rem(3) 
    }
  )

cssRule
  ( 'p'
  , { marginBottom: rem(3) 
    , fontFamily: `Lora` 
    , fontSize: em(1.6) 
    , lineHeight: rem(3) 
    , fontWeight: 400 
    , fontStyle: `normal` 
    , letterSpacing: em(0) 
    }
  )

style
  ( media
    ( { minWidth: 0
      , maxWidth: px(720) 
      }
    , {}
    )
  )

export 
  { cssRule
  , cssRaw
  , style
  , getStyles
  , setStylesTarget
  , mergeStyles
  , mount
  , keyframes
  , px
  , rem
  , em
  , media
  , makeComponent
  , percent
  }