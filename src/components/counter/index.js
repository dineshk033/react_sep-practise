import React from "react";

export default function Counter({ count }) {
  return (
    <div
      className="fw-bold text-danger text-center"
      style={{ fontSize: "10rem" }}
    >
      {count}
    </div>
  );
}
