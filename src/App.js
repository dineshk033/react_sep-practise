import { useState } from "react";
import Header from "./components/header";
import ListIterate from "./components/list-iterate/list-iterate";
import Login from "./components/login";
import ProductItem from "./components/product-item";
import Timer from "./components/timer";
import RouterComponent from "./routes";

export default function App() {
  return (
    <>
      <RouterComponent />
    </>
  );
}
