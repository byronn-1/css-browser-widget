import React from "react";

export const AddComponentBar = (props) => {

  const onAddClickHandler = () => {
    props.addComponentToAppFrame()
  }
  const onRemoveClickHandler = () => {
    props.removeComponentToAppFrame()
  }
  return (
    <div className="card calculator">
      <p>
        <button
          href="#"
          onClick={() => onAddClickHandler()}
        >Add Another Child Component</button>
      </p>
      <br /> <br />
      <p>
        <button
          href="#"
          onClick={() => onRemoveClickHandler()}
        >Remove A Child Component</button>
      </p>
    </div>
  )
}