import React from "react";
import { IoCartSharp } from "react-icons/io5";
import ProductDetail from "./ProductDetail";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";

import { CartContext } from "../context/cart";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);

  const { cartItems, addToCart } = useContext(CartContext);
  const openDetail = () => {
    setIsDetailOpen(!isDetailOpen);

    document.body.style.overflow = isDetailOpen ? "auto" : "hidden";
  };

  //   const addItemToCart = (product) => {
  //     console.log("Adding item to cart:", product);
  //     onAddToCart(product);
  //   };
  const closeDetail = () => {
    setIsDetailOpen(false);

    document.body.style.overflow = isDetailOpen === false ? "hidden" : "auto";
  };
  const toastAddToCart = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <main className=" ">
      {/* <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="dark"
transition: Bounce,
/> */}
      <div className="border p-5 shadow-lg rounded-md  h-[430px] bg-white">
        <div
          className="aspect-w-1 aspect-h-1 mb-4 bg-transparent"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-64 rounded-md cursor-pointer transform hover:scale-110 transition-transform duration-300 hover:opacity-70"
            onClick={openDetail}
          />
        </div>{" "}
        <div>
          <h3>{product.title}</h3>{" "}
          <div className="flex justify-between gap-4 items-center mt-2">
            <span className="font-bold text-2xl">${product.price}</span>
            <button
              className="flex items-center rounded-sm hover:bg-gray-700 bg-gray-800 p-2 px-3  text-white"
              onClick={() => {
                addToCart(product);
                toastAddToCart();
              }}
            >
              Add to Cart {/*<IoCartSharp className="text-white" /> */}
            </button>
          </div>
        </div>
      </div>
      {isDetailOpen && (
        <ProductDetail product={product} closeDetail={closeDetail} />
      )}
    </main>
  );
};

export default ProductCard;
