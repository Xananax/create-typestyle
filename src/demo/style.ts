import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createTypeStyle,
  px,
  deg,
  em,
  percent,
  classes
} from "../createTypeStyle";

export const {
  style,
  keyframes,
  prepare,
  makeComponent,
  setupMount
} = createTypeStyle(React.createElement);

export { px, deg, em, percent, React, classes };

export const mount = setupMount(ReactDOM.render);

prepare("root", {
  background: `repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px)`
});
