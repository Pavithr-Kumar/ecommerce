import React from "react";
import { add } from "../Reducers/cartSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Homeproducts() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.maindata);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl text-center mb-16 mt-8 font-bold ">
        <span className="text-emerald-500">Popular</span> Products
      </h1>
      <div className="  flex justify-evenly flex-wrap gap-y-16 mx-auto items-end">
        {data.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="w-[30%]   px-2 py-1 flex gap-2 flex-col items-center"
          >
            <div>
              <img
                className=" object-contain h-40 aspect-square"
                src={item.image}
                alt={item.title}
              />
            </div>

            <p className="text-sm text-gray-600">{item.category}</p>
            <h1 className="font-semibold">{item.title}</h1>
            <span className="font-semibold font-sans">$ {item.price}</span>
            <button
              onClick={() => dispatch(add(item))}
              className="bg-emerald-400 px-3 py-1 font-medium rounded hover:bg-opacity-90"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-14">
        <div
          className=" w-full h-36 bg-center bg-cover pt-4"
          style={{ backgroundImage: "url('https://i.ibb.co/7JBSj7K/b2.jpg')" }}
        >
          {" "}
          <h3 className="text-center font-bold text-white">All Latest Deals</h3>
          <h1 className="text-2xl font-bold text-white text-center mt-4">
            Up to <span className="text-emerald-500">70% Off</span> - All
            Accessories and Items
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-center mb-10 mt-20 font-bold ">
          Features
        </h1>
        <div className="w-10/12 mx-auto flex items-center justify-evenly">
          <div className="w-1/3">
            <img
              className="  h-80"
              src="https://i.ibb.co/x1s5qkg/shopping-payment-online-process-computer-smartphone-tablet-24797-1574.jpg"
              alt=""
            />
          </div>
          <div className="w-1/3 mt-5 font-medium text-lg">
            <p className="mb-5">
              <span className="text-emerald-500 mr-3">{"➜"}</span>Superior
              photos and image options
            </p>
            <p className="mb-5">
              <span className="text-emerald-500 mr-3">{"➜"}</span>User-friendly
              Product Search
            </p>
            <p className="mb-5">
              <span className="text-emerald-500 mr-3">{"➜"}</span>Easy Checkout
              Process
            </p>
            <p className="mb-5">
              <span className="text-emerald-500 mr-3">{"➜"}</span>Secure Payment
              Options
            </p>
            <p className="mb-5">
              <span className="text-emerald-500 mr-3">{"➜"}</span>Deals and
              Discounts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeproducts;
