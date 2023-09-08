import React from "react";
import Homeproducts from "./Homeproducts";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Reducers/maindataSlice";
import Footer from "./Footer";

function Hero() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div className=" p-10">
        <div
          id="wrapper"
          className="grid gap-10 grid-cols-2 place-items-center"
        >
          <div id="h-content" className="  pl-28  justify-self-end">
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-emerald-500">ShopMe</span>
            </h1>
            <h3 className="text-lg font-medium text-gray-600 my-4">
              Explore our latest fashion collection. Enjoy a 25% discount on all
              items. Shop now for trendy styles, and elevate your wardrobe
              today!
            </h3>
            <p className="text-emerald-400 mb-7 font-medium">
              Shop Now and Enjoy a 23% Discount on All Deals
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-emerald-400  hover:bg-opacity-90 font-medium rounded py-1 px-2"
            >
              Shop Now
            </button>
          </div>
          <div className=" justify-self-start">
            <img
              id="image"
              className=" pl-16 "
              src="https://i.ibb.co/86qyj9Z/herowomen.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Homeproducts />
      <Footer />
    </>
  );
}

export default Hero;
