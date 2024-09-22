import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./CounterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReduce,
  },
});
