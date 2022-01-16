import React from "react";
import { CssBox } from './CssBox'

export const ComponentFrame = (props) => {


  return (
    <div>
      {props.amountOfComponents}
      <CssBox />
    </div>
  )
}
