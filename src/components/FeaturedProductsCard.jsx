import React from "react";
import Spinner from "../assets/Spinner-1s-200px.svg";
import { useContext } from "react";
import { CartContext } from "../context/cart";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";
const FeaturedProductsCard = ({ product, loading }) => {
  const { addToCart } = useContext(CartContext);
  const toastAddToCart = () => {
    toast.success("Product added to cart", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition="bounce"
        // className="bounce"
      />
      {loading ? (
        <div className="flex justify-center">
          <img src={Spinner} alt="spinner" className="w-20" />
        </div>
      ) : (
        <main className="">
          <div className="w-[250px] bg-white rounded-md shadow p-6 h-[440px]">
            <div
              className="aspect-w-1 aspect-h-1 mb-4 bg-transparent"
              key={product.id}
            >
              <img
                src={product.image}
                alt=""
                className="object-contain w-full h-64 rounded-md cursor-pointer transform hover:scale-110 transition-transform duration-300 hover:opacity-70"
              />
            </div>
            <div>
              <h3>{product.title}</h3>
              <div className="flex justify-between gap-4 items-center mt-2">
                <span className="font-bold text-2xl">${product.price}</span>
                {/* <a href="/product"> */}
                <button
                  className="flex items-center rounded-sm hover:bg-gray-700 bg-gray-800 p-2 px-3  text-white"
                  onClick={() => {
                    addToCart(product);
                    toastAddToCart();
                  }}
                >
                  Add to Cart
                </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default FeaturedProductsCard;
