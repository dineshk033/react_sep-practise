import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

export default function Dashboar() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>React Practise</h1>
        <Outlet />
        <footer>footer</footer>
      </div>
    </>
  );
}
