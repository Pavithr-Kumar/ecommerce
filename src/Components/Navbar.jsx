import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const cartProducts = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div id="navbar" className="sticky top-0 z-30">
      <nav className="flex text-lg justify-center px-4 py-4 mx-auto bg-zinc-100  shadow-md">
        <div className=" w-1/5 ">
          <h1
            onClick={() => navigate("/")}
            className="text-3xl text-emerald-500 font-bold ml-7 cursor-pointer"
          >
            ShopMe
          </h1>
        </div>
        <div className=" w-3/5 text-slate-600 flex justify-center gap-10 font-medium items-center mx-auto">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink className="relative" to={"/cart"}>
            {cartProducts.length === 0 ? (
              "Cart"
            ) : (
              <>
                {" "}
                Cart
                <span className="absolute bottom-3 px-[6px]   bg-slate-400 text-white text-sm rounded-full">
                  {cartProducts.length}
                </span>
              </>
            )}
          </NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <div className="text-base font-medium ml-auto flex items-center gap-5  w-1/5">
          <button className="px-4 py-1 rounded  bg-slate-300 hover:bg-slate-400">
            Login
          </button>
          <button className="px-4 py-1 bg-emerald-400 hover:bg-emerald-600 text-white rounded">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
