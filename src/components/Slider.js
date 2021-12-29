import React, { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";

const Slider = () => {
  const sliderData = [
    {
      image: product1,
    },
    {
      image: product2,
    },
    {
      image: product3,
    },
    {
      image: product4,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current === sliderData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(sliderData.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <div className="image-container">
      <div className="control-container">
        <img className="control-left" src={previous} onClick={previousSlide} />
      </div>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="product image"
                className="image-product"
              />
            )}
          </div>
        );
      })}

      <img className="control-right" src={next} onClick={nextSlide}></img>
    </div>
  );
};

export default Slider;
