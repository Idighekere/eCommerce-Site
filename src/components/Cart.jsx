import React from "react";
import { IoArrowForward, IoTrashSharp } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import EmptyCart from "../assets/Empty Cart.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    clearCart,
    removeFromCart,
    getCartTotal,
    removeItem,
  } = useContext(CartContext);
  const toastRemoveFromCart = () => {
    toast.success("Product removed from cart", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Slide,
    });
  };
  const toastClearCart = () => {
    toast.success("Cart Cleared", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Slide,
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
        // transition={Slide}
      />
      <div className="absolute bg-gray-100 top-14 right-0 md:rigdht-7 p-4 h-screen z-10 w-full md:w-1/2 shadow-md rounded-md overflow-y-scroll">
        {/* <NavBar /> */}
        <div className="flex flex-col items-center  justify-center  pt-2 gap-4">
          <h1 className="font-semibold text-4xl ">MY CART</h1>
          <div>
            {cartItems.length === "0" ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div className="flex items-center gap-3 border-2 mb-2 bg-white p-2 shadow-lg rounded-md w-full">
                    <div className="items-center flex relative flex-col sm:flex-row justify-center gap-2 w-full">
                      <div className="absolute top-5 right-5  z-50">
                        <IoTrashSharp
                          className="text-gray-500 hover:text-red-600 cursor-pointer text-lg z-50"
                          onClick={() => {
                            removeItem(item);
                            toastRemoveFromCart();
                          }}
                        />
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain w-fujll h-64 rounded-md cursor-pointer transform  hover:opacity-70 max-w-64 p-6"
                      />
                      {/* hover:scale-110 transition-transform duration-300 */}
                      <div className="flex flex-col items-center text-center sm:text-start sm:items-start w-full">
                        <div>
                          <h1 className="text-lg font-semibold">
                            {item.title}
                          </h1>
                          <p className="text-2xl font-bold">${item.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              addToCart(item);
                            }}
                            className="bg-gray-800 text-white px-2 py-0 rounded-sm"
                          >
                            +
                          </button>
                          <p className="p-1">{item.quantity}</p>
                          <button
                            className="bg-gray-800 text-white px-2 py-0 rounded-sm "
                            onClick={() => {
                              removeFromCart(item);
                            }}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col">
              {cartItems.length === 0 ? (
                <div>
                  <img
                    src={EmptyCart}
                    alt=""
                    className="rounded-md shadow-md"
                  />
                  <p className="text-2xl text-center">Your Cart is Empty</p>
                </div>
              ) : (
                <div className="flex flex-col mt-3">
                  <div className="self-end">
                    <button
                      className="bg-red-600 text-white rounded-sm px-2 py-1 items-end"
                      onClick={() => {
                        clearCart();
                        toastClearCart();
                      }}
                    >
                      Clear Cart
                    </button>
                  </div>
                  <div className="flex justify-between w-full mt-5">
                    <p className="text-2xl font-black">Sub Total:</p>
                    <p className="text-2xl font-extrabold">
                      {" "}
                      ${getCartTotal()}
                    </p>
                    <button className="px-2 py-1 rounded-sm border-2 border-gray-800 ">
                      <a href="">Checkout</a>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <a href="/product">
            <button className="flex items-center rounded-sm bg-gray-800 text-white p-2">
              CONTINUE SHOPPPING <IoArrowForward />
            </button>
          </a>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Cart;
