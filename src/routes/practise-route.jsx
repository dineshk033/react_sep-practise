import React from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/pagenotfound";

export default function PractiseRoute() {
  return (
    <Routes>
      {/* Bydefault path we change to home */}
      <Route path="/" exact element=<Navigate to="/home" replace /> />
      <Route
        path="/home"
        element=<div className="fs-1 text-danger">Home Page</div>
      />
      <Route
        path="/page1"
        element=<div className="fs-1 text-success">
          Page One <Outlet />
        </div>
      >
        <Route
          index
          element=<ul>
            <li>
              <Link to="/page1/1">item1</Link>
            </li>
            <li>
              <Link to="2">item2</Link>
            </li>
            <li>item3</li>
          </ul>
        />
        <Route path=":id" element=<div>Detail</div> />
      </Route>
      <Route
        path="/page2"
        element=<div className="fs-1 text-primary">Page Two</div>
      />
      <Route path="*" element=<PageNotFound /> />
    </Routes>
  );
}
