import React, { useContext, useEffect, useState } from "react";
import { MOCKDATA } from "../../data";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/user-context";

const ListItem = ({ item, index, handleCart }) => {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  function handleAdd(e, arg) {
    e.stopPropagation();
    handleCart(arg);
    // alert(arg);
  }

  function handleCard() {
    // alert("card....");
    navigate(`/products/${item.id}`);
  }
  return (
    <>
      <div onClick={handleCard} className="m-3 p-2 card flex-row">
        {index + 1 + ". " + item.title}
        <span className="px-3 text-danger">{item.category}</span>
        <span className="mx-3">USerID:{context.username}</span>
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
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("shoe");
  //only one time invoke when its mounting phase
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/search", {
        params: {
          q: search,
        },
      })
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((error) => console.error(error));
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

  function handleSearch() {
    axios
      .get("https://dummyjson.com/products/search", {
        params: {
          q: search,
        },
      })
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((error) => console.error(error));
  }
  return (
    <>
      <div>cart item is {cart?.length}</div>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button onClick={handleSearch} className="btn btn-outline-primary">
            Search
          </button>
        </div>
      </div>
      {data?.map((el, index) => (
        <ListItem key={el.id} item={el} index={index} handleCart={handleCart} />
      ))}
    </>
  );
}
