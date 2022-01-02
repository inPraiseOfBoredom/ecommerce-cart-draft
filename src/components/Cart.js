import React from "react";
import remove from "../assets/icon-delete.svg";

import { useCart } from "react-use-cart";

const Cart = ({ showCart }) => {
  const { isEmpty, items, cartTotal, removeItem, totalUniqueItems } = useCart();

  const cartClassName = showCart ? "cart display" : "display-none";

  if (isEmpty)
    return (
      <div className={cartClassName}>
        <div className="cart-container">
          <h2> Cart </h2>
          <p>Cart is empty</p>
        </div>
      </div>
    );

  return (
    <div className={cartClassName}>
      <div className="cart-container">
        <h1 className="cart-headline">Cart </h1>

        {items.map((item) => (
          <div className="cart-content">
            <div className="thumbnail-container">
              <img src={item.image} className="thumbnail"></img>
            </div>
            <div className="info-container">
              <div className="info-item">{item.name}</div>
              <div className="info-item">
                ${item.price.toFixed(2)} x {item.quantity}
                <span className="total">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="remove-button-container">
              <button
                className="remove-button"
                onClick={() => removeItem(item.id)}
              >
                <img src={remove} />
              </button>
            </div>
          </div>
        ))}

        <button className="submit-button checkout">Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
