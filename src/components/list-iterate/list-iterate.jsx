import React from "react";
import { MOCKDATA } from "../../data";

const ListItem = ({ item, index }) => {
  console.log(item);
  function handleAdd(e, arg) {
    e.stopPropagation();
    alert(arg);
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
          onClick={(e) => handleAdd(e, item.title)}
        >
          + Add to cart
        </button>
      </div>
    </>
  );
};

export default function ListIterate() {
  return (
    <>
      {MOCKDATA.products.map((el, index) => (
        <ListItem key={el.id} item={el} index={index} />
      ))}
    </>
  );
}
