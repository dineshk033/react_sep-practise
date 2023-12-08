import React from "react";
import { MOCKDATA } from "../../data";
import CardDesign from "../card/card-design";

export default function SearchProductList() {
  return (
    <div className="row">
      {MOCKDATA.products.map((item) => (
        <div className="col-md-3" key={item.id}>
          <CardDesign {...item} />
        </div>
      ))}
    </div>
  );
}
