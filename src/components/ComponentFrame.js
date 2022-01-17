import React from "react";
import { CssBox } from './CssBox'

export const ComponentFrame = ({ cssComponentAmount }) => {
  const ar = Array.from(Array(cssComponentAmount).keys());

  console.log(ar, cssComponentAmount);

  const renderedItems = ar.map((item, index) => <CssBox key={index} />);

  return (
    <div>
      {renderedItems}
    </div>
  )
}
