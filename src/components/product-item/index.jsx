import { useContext } from "react";
import ProductImage from "./product-image";
import ProductTitle from "./product-title";
import { UserContext } from "../../context/user-context";

export default function ProductItem() {
  const context = useContext(UserContext);
  return (
    <div className="row border p-3">
      <div className="col-md-3">
        <ProductImage
          image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"
          imageAlt="logo"
        />
      </div>
      <div className="col-md-6">
        <ProductTitle />
      </div>
      <div className="col-md-3">User Id:{context}</div>
    </div>
  );
}
