import React from "react";



export const AddComponentBar = (props) => {

  const onClickHandler = () => {
    props.AddComponentToAppFrame(props.value)
  }
  return (
    <div className="card calculator">
      <p><button href="#" onClick={(e) => onClickHandler()}>Add Another Child Component</button></p>
      <div id="children-pane">
      </div>
    </div>
  )
}