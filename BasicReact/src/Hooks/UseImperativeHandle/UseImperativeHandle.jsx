import React, { useRef } from "react";

import Child from "../Child";
const UseImperativeHandle = () => {
  const childRef = useRef(null);
  //child to parent ===>UseImperativeHandle

  //parent to child ====>props

  const handleOpenModel = (val) => {
    childRef.current.openModal(val);
  };
  return (
    <div>
      <p>THis is a parent component</p>
      <Child ref={childRef} setOpenModal={false} />
      <button onClick={() => handleOpenModel(true)}>Open Modal</button>
    </div>
  );
};

export default UseImperativeHandle;
