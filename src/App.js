import Header from "./components/header";
import ListIterate from "./components/list-iterate/list-iterate";
import ProductItem from "./components/product-item";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>React Practise</h1>
        <ListIterate />
        <ProductItem />
      </div>
    </>
  );
}
