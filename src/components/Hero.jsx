import React from "react";
import OnlineShopping from "../assets/OnlineShopping.jpg";
const Hero = () => {
  return (
    <div className="sm:flex block sm:gap-4">
      <div className="flex justify-center">
        <img
          src={OnlineShopping}
          alt=""
          className="min-w-2/3 max-w-2/3 rounded-md w-full"
        />
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-bold text-gray-700">
            Make Commerce better for every one
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id neque
            voluptates ipsa a vitae dicta est harum soluta optio omnis.
          </p>
          <a href="/product">
            {" "}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md">
              Start Shopping
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
