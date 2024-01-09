import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ListIterate from "../components/list-iterate/list-iterate";
import Login from "../components/login";
import Timer from "../components/timer";
import PageNotFound from "../components/pagenotfound";
import Dashboar from "../components/layout/dashboar";
import ProductDetail from "../components/product-detail";
import TodoComponent from "../components/todo";
import Counter from "../components/counter";

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/products" replace />} />

      <Route path="/products" element=<Dashboar />>
        <Route index element=<ListIterate /> />
        <Route path=":productID" element=<ProductDetail /> />
        <Route path="timer" element=<Timer /> />
      </Route>

      <Route path="/utility" element=<Dashboar />>
        <Route path="timer" element=<Counter /> />
      </Route>
      <Route path="/todo" element=<Dashboar />>
        <Route index element=<TodoComponent /> />
      </Route>
      <Route path="login" element=<Login /> />
      <Route path="*" element=<PageNotFound /> />
    </Routes>
  );
}
