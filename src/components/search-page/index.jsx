import React from "react";
import CardDesign from "../card/card-design";
import SearchProductList from "./search-product-list";

export default function SearchPage() {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card p-3">Filter</div>
      </div>
      <div className="col-md-9">
        <SearchProductList />
      </div>
    </div>
  );
}
