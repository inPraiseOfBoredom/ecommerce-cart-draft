import React from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";

import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cart from "../assets/icon-cart.svg";

const Page = ({ quantity, setQuantity }) => {
  //handling the quantity
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="slider-container">
        <Slider />
      </div>
      <span className="company-info">Sneaker Company</span>
      <h1 className="headline-main">Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <span className="price-current"> $125.00</span>
        <span className="discount">50%</span>
        <span className="price-previous">$250.00</span>
      </div>
      <div className="quantity-container">
        <button className="quantity-change-button minus" onClick={handleMinus}>
          <img className="icon-minus" src={minus}></img>
        </button>
        <div type="text" className="quantity">
          {quantity}
        </div>
        <button className="quantity-change-button plus" onClick={handlePlus}>
          <img className="icon-plus" src={plus}></img>
        </button>
      </div>
      <div className="button-container">
        <button className="submit-button">
          <img className="cart" src={cart} />

          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Page;
