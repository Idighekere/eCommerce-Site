import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";
// import { Rating, RatingStar } from "flowbite-react";

// function Component() {
//   return (
//     <Rating>
//       <RatingStar />
//       <RatingStar />
//       <RatingStar />
//       <RatingStar />
//       <RatingStar filled={false} />
//     </Rating>
//   );
// }

const ProductDetail = ({ product, closeDetail }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  return (
    <div className=" ">
      <div
        className="bg-black text-white px-2 py-1 cursor-pointer absolute top-10 z-30 right-10"
        onClick={closeDetail}
      >
        CLOSE
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 justify-center flex w-full h-full items-center p-6  z-20 bg-white">
        <div className="md:flex block  justify-center mt-6 w-full gap-3 mx-auto">
          <div className="aspect-w-1 aspect-h-1 mb-4 bg-transparent flex justify-center items-center">
            <img
              src={product.image}
              alt=""
              className="object-contain w-64 h-64 rounded-md cursor-pointer transform hover:scale-110 transition-transform duration-300 hover:opacity-70"
            />
          </div>
          <div>
            <div className="md:w-[400px] w-full ">
              <h1 className="md:text-3xl text-2xl font-semibold">
                {product.title}
              </h1>
              {/* <Component /> */}

              <p>{product.description}</p>
              <p className="text-3xl font-extrabold">${product.price}</p>
              <div className="gap-3 flex mt-5">
                <button className="border-gray-800 border-2 px-2 py-1 rounded-sm hover:bg-gray-50 cursor-pointer ">
                  BUY NOW
                </button>

                <button
                  className="text-white bg-gray-800 px-2 py-1 rounded-sm hover:bg-gray-700 cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
              <input
                contentEditable="true"
                className="mt-7 border-2  border-gray-800 p-1 w-full "
                placeholder="Write a Review"
              />
              <button className="text-white bg-gray-800 px-2 py-1 rounded-sm hover:bg-gray-700 cursor-pointer w-full mt-3">
                Review
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
