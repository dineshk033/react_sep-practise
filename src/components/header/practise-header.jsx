import React from "react";
import { Link } from "react-router-dom";

export default function PractiseHeader() {
  return (
    <div className="row">
      <div className="col">
        <Link to="/home">Home</Link>
      </div>
      <div className="col">
        <Link to="/page1">Page 1</Link>
      </div>
      <div className="col">
        <Link to="/page2">Page 2</Link>
      </div>
    </div>
  );
}
