import Header from "./components/header";
import ListIterate from "./components/list-iterate/list-iterate";
import ProductItem from "./components/product-item";
import SearchPage from "./components/search-page";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>React Practise</h1>
        <SearchPage />
        {/* <ListIterate />
        <ProductItem /> */}
      </div>
    </>
  );
}
