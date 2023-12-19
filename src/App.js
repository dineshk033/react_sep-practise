import Header from "./components/header";
import ListIterate from "./components/list-iterate/list-iterate";
import Login from "./components/login";
import ProductItem from "./components/product-item";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>React Practise</h1>
        <Login />
        <ListIterate />
        <ProductItem />
      </div>
    </>
  );
}
