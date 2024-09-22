import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Route/Home";
import Contact from "./Route/Contact";
import About from "./Route/About";
import NavBar from "./Route/NavBar";
import Error from "./Route/Error";
const MainRoute = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
