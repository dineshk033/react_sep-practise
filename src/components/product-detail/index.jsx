import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productID } = useParams();

  return <div>ProducDetail is {productID}</div>;
}
