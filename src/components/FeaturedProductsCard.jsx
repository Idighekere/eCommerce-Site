import React from "react";
import Spinner from "../assets/Spinner-1s-200px.svg";
import { useContext } from "react";
import { CartContext } from "../context/cart";
const FeaturedProductsCard = ({ fprod, loading }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <img src={Spinner} alt="spinner" className="w-20" />
        </div>
      ) : (
        <main className="">
          <div className="w-[350px] bg-white rounded-md shadow p-6 h-[440px]">
            <div
              className="aspect-w-1 aspect-h-1 mb-4 bg-transparent"
              key={fprod.id}
            >
              <img
                src={fprod.image}
                alt=""
                className="object-contain w-full h-64 rounded-md cursor-pointer transform hover:scale-110 transition-transform duration-300 hover:opacity-70"
              />
            </div>
            <div>
              <h3>{fprod.title}</h3>
              <div className="flex justify-between gap-4 items-center mt-2">
                <span className="font-bold text-2xl">${fprod.price}</span>
                <a href="/product">
                  <button
                    className="flex items-center rounded-sm hover:bg-gray-700 bg-gray-800 p-2 px-3  text-white"
                    onClick={(featuredProducts) =>
                      addItemToCart(featuredProducts)
                    }
                  >
                    Add to Cart
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default FeaturedProductsCard;
