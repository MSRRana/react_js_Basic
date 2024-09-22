import React, { useEffect, useRef, useState } from "react";

const UseRef2 = () => {
  const inputRef = useRef(null);

  const [userInput, setUserInput] = useState("");

  //2. use case ===> dom re-rendering

  useEffect(() => {
    inputRef.current.focus();
  }, []); //focus

  const handleFocus = () => {
    inputRef.current.style.backgroundColor = "Yellow";
  };
  const handleBlur = () => {
    inputRef.current.style.backgroundColor = "Red";
  };
  return (
    <div>
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        // value={userInput}
        // onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
};

export default UseRef2;
