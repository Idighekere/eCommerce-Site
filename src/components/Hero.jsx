import React from "react";
import OnlineShopping from "../assets/OnlineShopping.jpg";
import cartOnLapop from "../assets/a Cart on A Laptop.jpg";
const Hero = () => {
  return (
    <div className=" block sm:gap-4 relative ">
      <div className="flex justify-center">
        <img
          src={cartOnLapop}
          alt=""
          className="min-w-2/3 max-w-2/3 rounded-md  w-full md:h-screen "
        />
        <div className="absolute inset-0 bg-black opacity-50 hidden sm:block rounded-md"></div>
      </div>
      <div className="sm:absolute md:top-0  md:text-4xl  sm:text-center sm:bottom-0 lg:pr-10 lg:pt-24 text-gray-700 sm:text-white md:pr-2 md:pt-6 pb-2 sm:px-3">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl md:my-4 ">
            Make Commerce better for every one
          </h1>
          <p className="sm:text-lg lg:text-3xl text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id neque
            voluptates ipsa a vitae dicta est harum soluta optio omnis. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Qui, incidunt
            temporibus. Excepturi, reiciendis tempora! Assumenda totam, officiis
            quibusdam deleniti obcaecati modi! Placeat possimus, tempore vero
            ducimus soluta impedit blanditiis dolore autem, dolorum magni maxime
            quam facilis ipsa provident earum harum dicta iusto consectetur!
            Ipsam facilis quaerat, porro doloribus excepturi corrupti.
          </p>
          <a href="/product">
            {" "}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-md sm:bg-transparent sm:border sm:border-white mt-3 text-lg">
              Start Shopping
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
