import React, { useReducer, useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{ height: 40, width: 50 }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        style={{ height: 40, width: 50, marginLeft: 10 }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default UseState;
