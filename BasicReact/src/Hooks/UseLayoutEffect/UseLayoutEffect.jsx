import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  //UseLayoutEffect and useEffect both are produce side useEffect

  /* 1 useEffect
  but useEffect is asynconus ====>not wait
  this runs asynchronouly after rendered elements are printed on the screen
 1.component-->( rendering is started due to stage change)
 2.component rendered -->
 3.rendered component is printed in screen---->
 4.then useEffect runs
   */

  /* 2 uselayoutEffect
but uselayoutEffect is synconus  ==>wait
  this runs synchronouly after render but before elements are
   printed on the screen

  1.component-->( rendering is started due to stage change)
 2.component rendered -->
 3.then uselayoutEffect runs
 4.rendered component is printed in screen---->
   */

  useEffect(() => {
    console.log("useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div>UseLayoutEffect</div>;
};

export default UseLayoutEffect;
