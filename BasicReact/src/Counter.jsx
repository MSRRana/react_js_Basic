import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type == "incr") {
    return { count: state.count + 1 };
  } else if (action.type == "decr") {
    return { count: state.count - 1 };
  } else {
    return { count: 0 };
  }
};

const Counter = () => {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //==============================useReducer============>
  /*
   reducer(coffee maker)===>it is pure function (line 6)
   reducer ====> [state,action]
  state(coffee powder) and action (water)
  //new state (coffee)

  pure function == 10 +10 =20 //no side effect

*/

  //==============================useReducer============>
  //useState() ====>[current state value ,function for value update]
  return (
    <div>
      <h1>{state?.count}</h1>
      <button
        style={{ height: 40, width: 50 }}
        onClick={() => dispatch({ type: "incr" })}
      >
        +
      </button>
      <button
        style={{ height: 40, width: 50, marginLeft: 10 }}
        onClick={() => dispatch({ type: "decr" })}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
