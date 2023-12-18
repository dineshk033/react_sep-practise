import React, { useState } from "react";
import CardDesign from "../card/card-design";
import SearchProductList from "./search-product-list";
import Cart from "../cart";

export default function SearchPage() {
  const [cart, setCart] = useState([]);
  function handleCart(arg) {
    const found = cart.findIndex((item) => item.id === arg.id);
    if (found !== -1) {
      const tmp = cart.map((item, idx) => {
        if (idx === found) {
          item["qty"] += 1;
        }
        return item;
      });
      setCart(tmp);
    } else {
      const newitem = { ...arg };
      newitem["qty"] = 1;
      // cart.push(newitem)
      console.log(newitem);
      setCart([...cart, newitem]);
    }
  }
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card p-3">
          <Cart cart={cart} />
        </div>
      </div>
      <div className="col-md-9">
        <SearchProductList handleCart={handleCart} />
      </div>
    </div>
  );
}
