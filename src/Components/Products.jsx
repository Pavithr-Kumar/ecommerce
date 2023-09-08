import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Reducers/cartSlice";

function Products() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.maindata);
  const [products, setProducts] = useState(data);

  useEffect(() => {}, [products]);
  function handleClick() {
    setProducts(
      data.filter((item) => {
        return item.title.toLowerCase().includes(input.toLowerCase());
      })
    );
  }

  if (status == "loading")
    return (
      <div className="h-screen w-screen grid place-items-center">
        <div>
          <img
            className=" mix-blend-color-burn w-28 animate-spin"
            src="https://i.ibb.co/r3WNN6S/load-icon-png-8.png"
            alt=""
          />
          <p className="text-3xl ">loading...</p>
        </div>
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-12 mt-8">Products</h1>
      <div className="w-3/5 flex my-8 mx-auto gap-10 justify-center">
        <button
          onClick={() => {
            setProducts(data);
          }}
          className="bg-emerald-400 hover:bg-opacity-90 px-2 py-1 font-medium rounded"
        >
          Clear filters
        </button>
        <div className=" ">
          <select
            onChange={(e) => {
              if (e.target.value !== "all") {
                setProducts(data);
                setProducts(
                  data.filter((item) => item.category === e.target.value)
                );
              } else {
                setProducts(data);
              }
              console.log(e.target.value);
            }}
            className="border border-gray-300 px-2 py-1 outline-none"
            name="category"
            id="category"
          >
            <option value="all">All</option>
            <option value="men's clothing">Mens clothing</option>
            <option value="women's clothing">Womens clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div className=" ">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="border outline-none border-gray-300 px-2 py-1"
          />
        </div>
        <button
          value={input}
          onClick={handleClick}
          className="bg-emerald-400 px-2 py-1 font-medium rounded hover:bg-opacity-90"
        >
          Search
        </button>
      </div>
      <div className="  flex justify-evenly flex-wrap gap-y-16 my-16 mx-auto items-end">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-[30%] px-2 py-1 flex gap-2 flex-col items-center"
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
    </div>
  );
}

export default Products;
