import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Product from "./Product";

import products from "../data";

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
      <div className="page-internal">
        <div className="slider-container">
          <Slider />
        </div>
        <div className="product-container">
          <span className="company-info">Sneaker Company</span>

          {products.map((item, index) => {
            return (
              <Product
                item={item}
                name={item.name}
                discount={item.discount}
                description={item.description}
                price={item.price}
                priceOld={item.priceOld}
                key={index}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
                quantity={quantity}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
