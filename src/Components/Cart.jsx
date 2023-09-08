import React, { useEffect, useState } from "react";
import useQuantity from "../Reducers/quantity";
import { remove } from "../Reducers/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Cart() {
  const [arr, incre, decre, del, calcPrice] = useQuantity();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  if (cartProducts.length === 0)
    return (
      <div className="w-screen grid place-items-center h-96">
        <div>
          <h1 className="text-2xl font-bold">Your Cart is Empty...</h1>
          <h1 className="text-2xl mt-5 font-bold text-emerald-400">
            Add some products
          </h1>
        </div>
      </div>
    );
  return (
    <div className=" font-sans">
      <div id="wrapper" className="flex">
        <div className="w-8/12 ">
          <div className=" font-medium mb-10 pl-32 border shadow-lg bg-emerald-300 py-5 sticky top-14">
            <span>Product Details</span>
            <span className="  ml-72">Quantity</span>
            <span className=" ml-24">Price </span>
            <span className="ml-24">Total </span>
          </div>
          {cartProducts.map((item, i) => (
            <div className="flex  items-center p-6 pl-14 mb-6" key={i}>
              <div
                key={item.id}
                className="w-1/2   px-2 py-1 flex gap-2  items-center"
              >
                <div>
                  <img
                    className=" object-contain h-32 aspect-square"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div>
                  <p className="text-sm font-gray-600">{item.category}</p>
                  <h1 className="font-medium">{item.title}</h1>
                </div>
              </div>
              <div className="w-1/2 flex items-center gap-20">
                <div className="flex gap-5  flex-col">
                  <div>
                    <button
                      onClick={() => {
                        decre(i);
                      }}
                      className="bg-emerald-400  hover:bg-opacity-90 px-2 py-1 font-bold rounded"
                    >
                      -
                    </button>
                    <span className="mx-3">
                      <span>{arr[i]}</span>
                    </span>
                    <button
                      onClick={() => {
                        incre(i);
                      }}
                      className="bg-emerald-400 hover:bg-opacity-90 px-2 py-1 font-medium rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(remove(i));
                      del(i);
                    }}
                    className="bg-emerald-400 hover:bg-opacity-90 px-2 py-1 font-medium rounded"
                  >
                    Remove
                  </button>
                </div>
                <p> ${item.price}</p>
                <p className="font-semibold">
                  {" "}
                  $ {(arr[i] * item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-4/12  font-sans">
          <div className="h-screen w-full fixed bg-slate-200">
            <div className=" w-11/12 mx-auto flex flex-col items-start">
              <h1 className="font-semibold text-lg   py-5 ">Order Summary</h1>
              <p className="font-medium mt-5 mb-2">
                Items
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{" "}
                {cartProducts.length}
              </p>
              <p className="font-medium">
                Price
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                $ {calcPrice()}
              </p>
              <h3 className="font-medium text-sm mt-5 mb-1">PROMO CODE</h3>
              <input
                type="text"
                className="py-1 px-2 mb-1 rounded outline-none"
                placeholder="enter your code"
                name=""
                id=""
              />
              <button className="py-[5px] px-3 font-medium mt-1 rounded bg-emerald-400">
                Apply
              </button>
              <p className="font-medium mt-7">
                GST (+Taxes) : $ {((calcPrice() * 2) / 100).toFixed(2)}
              </p>
              <p className="mt-2 mb-10 text-xl font-semibold">
                Total Cost&nbsp; :&nbsp; ${" "}
                {(
                  parseFloat(calcPrice()) +
                  parseFloat(((calcPrice() * 2) / 100).toFixed(2))
                ).toFixed(2)}
              </p>
              <button className="bg-emerald-400 text-lg px-8 font-semibold rounded py-2">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
