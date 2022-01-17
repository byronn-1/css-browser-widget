import React, { useState } from "react";

export const CssBox = (props) => {
  const [textColor, setTextColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const divStyle = {
    outline: "solid",
    color: textColor,
    backgroundColor: backgroundColor
  }

  return (
    <div style={divStyle}>
      <h3 >CSS Details: </h3>
      <div>
        <p>The background colour is: {divStyle.backgroundColor}</p>
        <p>The Text colour is: {divStyle.color}</p>
      </div>
      <form>
        <label for="colorPicker">
          <p>Choose a colour from the picker to change text colour.</p>
          <input type="color"
            id="colorPicker"
            name="colorPicker"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}></input>
        </label>
        <label for="colorPickerForBG">
          <p>Choose a colour from the picker to change the background colour.</p>
          <input type="color"
            id="colorPickerForBG"
            name="colorPickerForBG"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}></input>
        </label>
      </form>
    </div>
  )
}