import React, { useState } from "react";
import { ComponentFrame } from "./ComponentFrame";
import { AddComponentBar } from "./AddComponentBar";
import { InputBar } from "./InputBar";

export const AppFrame = () => {

  const [index, setIndex] = useState(1);

  const AddCompHandler = () => {
    setIndex(index + 1)
  }
  const RemoveCompHandler = () => {
    setIndex(index - 1)
  }
  return (
    <>
      <AddComponentBar
        addComponentToAppFrame={AddCompHandler}
        removeComponentToAppFrame={RemoveCompHandler} />
      <InputBar />
      <ComponentFrame cssComponentAmount={index} />
    </>
  )
}