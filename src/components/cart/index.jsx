import React from "react";

const CartCard = ({ title, subtitle }) => {
  return (
    <div className="card p-2">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Qty: {subtitle}</h6>
      </div>
    </div>
  );
};

export default function Cart({ cart = [] }) {
  console.log(cart);
  return (
    <>
      <h5>Cart Item</h5>
      {cart.length ? (
        cart.map((item) => (
          <CartCard
            key={item.id}
            title={item["title"]}
            subtitle={item["qty"]}
          />
        ))
      ) : (
        <div className="text-muted">No items added!!!</div>
      )}
    </>
  );
}
