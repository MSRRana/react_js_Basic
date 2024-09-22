import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(0);
  //useRef object Mutations referral object
  const [userInput, setUserInput] = useState("");
  //   const [render, setRender] = useState(0);
  //1. use case ===> dom re-rendering

  //   useEffect(() => {
  //     setRender(render + 1);
  //   }, []);//limit less re-rendering

  useEffect(() => {
    inputRef.current = inputRef.current + 1;
  }, [userInput]); //limit less re-rendering
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>The Component rendered {inputRef.current}</p>
    </div>
  );
};

export default UseRef;
