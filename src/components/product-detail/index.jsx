import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOCKDATA } from "../../data";

export default function ProductDetail() {
  const { productID } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(MOCKDATA.products.find((item) => item.id == productID));
  }, [productID]);

  if (!data) {
    return <div className="fs-4 text-danger">Invalid id</div>;
  }
  return (
    <div className="card p-3">
      <div className="card-body">
        <div className="card-title">{data.title}</div>
        <span className="px-3 text-danger">{data.category}</span>
      </div>
    </div>
  );
}
