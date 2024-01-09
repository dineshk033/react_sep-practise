import React from "react";

export default function Button({ addcount }) {
  return (
    <button className="btn btn-primary" onClick={addcount}>
      Increment
    </button>
  );
}
