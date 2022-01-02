import React from "react";
import { useCart } from "react-use-cart";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cart from "../assets/icon-cart.svg";

const Product = (props) => {
  const { addItem } = useCart();

  return (
    <div key={props.id}>
      <h1 className="headline-main">{props.name}</h1>
      <p>{props.description}</p>

      <div className="price-container">
        <span className="price-current"> ${props.price.toFixed(2)}</span>
        <span className="discount">{props.discount}%</span>
        <span className="price-previous">${props.priceOld.toFixed(2)}</span>
      </div>

      <div className="quantity-container">
        <button
          className="quantity-change-button minus"
          onClick={props.handleMinus}
        >
          <img className="icon-minus" src={minus}></img>
        </button>
        <div type="text" className="quantity">
          {props.quantity}
        </div>
        <button
          className="quantity-change-button plus"
          onClick={props.handlePlus}
        >
          <img className="icon-plus" src={plus}></img>
        </button>
      </div>
      <div className="button-container">
        <button
          className="submit-button"
          onClick={() => addItem(props.item, props.quantity)}
        >
          <img className="add-to-cart" src={cart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
