import React from "react";

export default function CardDesign({
  thumbnail,
  title,
  brand,
  price,
  discountPercentage,
  handleCart,
  prod,
}) {
  //   const actualPrice =  price * discountPercentage/100;
  return (
    <div className="card border-0">
      <img src={thumbnail} className="card-img-top" alt={title} height={125} />
      <div className="card-body text-center">
        <h6 class="card-subtitle mb-2 text-body-secondary text-center">
          {brand}
        </h6>
        <h5 className="card-title text-center">{title}</h5>
        <h4 className="card-title text-success">
          ${price}{" "}
          <span className="fs-6 text-dark text-decoration-line-through">
            ${discountPercentage}{" "}
          </span>
        </h4>
        <button
          className="btn  btn-outline-warning"
          onClick={() => handleCart(prod)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

CardDesign.defaultProps = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
