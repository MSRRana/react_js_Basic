import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./CounterSlice";
const CounterFile = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{ height: 40, width: 50 }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        style={{ height: 40, width: 50, marginLeft: 10 }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <br />
      <button
        style={{ marginTop: 10 }}
        onClick={() => dispatch(incrementByAmount(100))}
      >
        Increment By 100
      </button>

      <button
        style={{ marginTop: 10 }}
        onClick={() => dispatch(decrementByAmount(100))}
      >
        Decrement By 100
      </button>
    </div>
  );
};

export default CounterFile;
