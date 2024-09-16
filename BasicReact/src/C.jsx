import React, { useContext } from "react";
import { GreetContext } from "./A";

export default function C() {
  const useCon = useContext(GreetContext);
  //   const useCon2 = useContext(GreetContext2);
  console.log(useCon);
  return (
    <>
      <h1>Greet : {useCon.greet}</h1>
      <h1>Greet : {useCon.greet2}</h1>
      {/* <GreetContext.Consumer>
        {(val) => {
          return (
            <GreetContext2.Consumer>
              {(val2) => {
                return (
                  <div>
                    <h1>{val}</h1>
                    <h1>{val2}</h1>
                  </div>
                );
              }}
            </GreetContext2.Consumer>
          );
        }}
      </GreetContext.Consumer> */}
    </>
  );
}
