import React from "react";
import { MOCKDATA } from "../../data";

const ListItem = ({ item, index }) => {
  return (
    <>
      <div className="m-3 p-2 card flex-row">
        {index + 1 + ". " + item.title}
        <span className="px-3 text-danger">{item.category}</span>
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
