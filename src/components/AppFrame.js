import React, { useState } from "react";
import { ComponentFrame } from "./ComponentFrame";
import { AddComponentBar } from "./AddComponentBar";
import { InputBar } from "./InputBar";

export const AppFrame = (props) => {

  const [index, setIndex] = useState(null);

  const AppFrameHandler = (props) => {
    setIndex(index + 1)
    console.log(index)
  }

  return (
    <>
      <AddComponentBar AddComponentToAppFrame={AppFrameHandler} />
      <InputBar />
      <ComponentFrame cssComponentAmount={index} />
    </>
  )
}