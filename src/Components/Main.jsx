import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

function Main() {
  return (
    <div className="  ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
