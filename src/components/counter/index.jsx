import React, { useState } from "react";
import Button from "./button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const addcount = () => {
    console.log("count");
    setCount((count) => count + 1);
  };
  return (
    <div className="card m-3 p-4">
      <div className="card-body">
        <h1>{count}</h1>
        <Button addcount={addcount} />
      </div>
    </div>
  );
}
