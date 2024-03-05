import React, { useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
const Carousel = ({ featuredProducts }) => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((pslide) =>
      pslide === 0 ? featuredProducts.length - 1 : pslide - 1
    );
  };
  const nextSlide = () => {
    setSlide((pslide) =>
      pslide === featuredProducts.length - 1 ? 0 : pslide + 1
    );
  };
  return (
    <div className="flex w-[350px]  relative h-[400px]  items-center bg-white rounded-md shadow-lg p-10 justify-center ">
      <IoArrowBackCircle
        className="absolute left-3 text-white text-2xl cursor-pointer drop-shadow-[0_0_10px_#555] z-30 bg-black rounded-full p-0 "
        onClick={prevSlide}
      />
      {featuredProducts.map((item, idx) => {
        return (
          <img
            src={item.image}
            alt={item.title}
            key={idx}
            className=" w-[300px] h-full aspect-auto absolute justify-center flex p-6 transition-transform ease-out duration-500 overflow-hidden"
            style={{
              visibility: slide === idx ? "visible" : "hidden",
              transform: `translateX(${slide}%)`,
            }}
          />
        );
      })}
      <IoArrowForwardCircle
        className="absolute right-3 text-white text-2xl cursor-pointer drop-shadow-[0_0_10px_#555] bg-black rounded-full p-0"
        onClick={nextSlide}
      />
      <span className="gap-2 flex absolute bottom-3 justify-center right-0 left-0 w-full">
        {featuredProducts.map((_, idx) => {
          return (
            <button
              className="h-2 w-2 bg-white abolute bottm-3 gap-3 rounded-full drop-shadow-[0_0_5px_#000] transition-all self-center"
              key={idx}
              onClick={() => setSlide(idx)}
              style={{
                backgroundColor: slide === idx ? "white" : "black",
                padding: slide === idx && "5px",
              }}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
