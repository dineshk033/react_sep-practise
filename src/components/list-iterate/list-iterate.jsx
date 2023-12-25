import React, { useEffect, useState } from "react";
import { MOCKDATA } from "../../data";

const ListItem = ({ item, index, handleCart }) => {
  function handleAdd(e, arg) {
    e.stopPropagation();
    handleCart(arg);
    // alert(arg);
  }

  function handleCard() {
    alert("card....");
  }
  return (
    <>
      <div onClick={handleCard} className="m-3 p-2 card flex-row">
        {index + 1 + ". " + item.title}
        <span className="px-3 text-danger">{item.category}</span>
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => handleAdd(e, item)}
        >
          + Add to cart
        </button>
      </div>
    </>
  );
};
export default function ListIterate() {
  const [cart, setCart] = useState([]);

  //only one time invoke when its mounting phase
  useEffect(() => {
    console.log("useEffect mounting phase");
  }, []);

  //only change in cart trigger below function
  useEffect(() => {
    console.log("useEffect cart updated");
  }, [cart]);

  function handleCart(arg) {
    setCart((cart) => [...cart, arg]);
    setCart((cart) => [...cart, arg]);
    console.log(cart);
  }
  return (
    <>
      <div>cart item is {cart?.length}</div>
      {MOCKDATA.products.map((el, index) => (
        <ListItem key={el.id} item={el} index={index} handleCart={handleCart} />
      ))}
    </>
  );
}
