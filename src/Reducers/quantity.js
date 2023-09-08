import { useState } from "react";
import { useSelector } from "react-redux";

function useQuantity() {
  const cartProcucts = useSelector((state) => state.cart);
  const countArr = cartProcucts.map((item) => 1);
  const [arr, setArr] = useState([...countArr]);
  const [price, setPrice] = useState(0);
  const src = "https://i.ibb.co/k6TGdFr/womenshop.png";

  function incre(i) {
    setArr(
      arr.map((value, index) => {
        if (index === i) return value + 1;
        else return value;
      })
    );
  }
  function decre(i) {
    setArr(
      arr.map((value, index) => {
        if (value !== 0) {
          if (index === i) return value - 1;
          else return value;
        } else return 0;
      })
    );
  }

  function del(i) {
    setArr(arr.filter((_, index) => index !== i));
  }
  function calcPrice() {
    const totalPrice = cartProcucts.reduce((acc, item, i) => {
      return acc + arr[i] * item.price;
    }, 0);
    return totalPrice.toFixed(2);
  }

  return [arr, incre, decre, del, calcPrice];
}

export default useQuantity;
