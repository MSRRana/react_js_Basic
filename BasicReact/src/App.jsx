import React, { useEffect, useState } from "react";
import Form from "./Form";
import A from "./A";
import Counter from "./Counter";
import UseReducer from "./UseReducer";
import { Route } from "react-router-dom";
import MainRoute from "./MainRoute";
import FormValid from "./FormValidation/FormValid";
import FormReactForm from "./FormValidation/FormReactForm";
import CounterFile from "./Redux/Features/Counter/CounterFile";
import { Provider } from "react-redux";
import { store } from "./CRUD/Services/store";
import File from "./CRUD/Services/File";
import UseState from "./Hooks/UseState";
import UseContext from "./Hooks/UseContext";
import UseImperativeHandle from "./Hooks/UseImperativeHandle/UseImperativeHandle";
import UseRef from "./Hooks/UseRefHook/UseRef";
import UseRef2 from "./Hooks/UseRefHook/UseRef2";
import UseLayoutEffect from "./Hooks/UseLayoutEffect/UseLayoutEffect";
import CustomHook from "./Hooks/CustomHook/CustomHook";
const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <A /> */}
      {/* <UseReducer /> */}
      {/* <MainRoute /> */}
      {/* <FormValid /> */}
      {/* <FormReactForm /> */}
      {/* <Provider store={store}>
        <div>
          <CounterFile />
        </div>
      </Provider> */}
      {/* <Provider store={store}>
        <File />
      </Provider> */}
      {/* <UseState /> */}
      {/* <UseContext /> */}
      {/* <UseImperativeHandle /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <UseLayoutEffect /> */}
      <CustomHook />
    </>
  );
};

export default App;
