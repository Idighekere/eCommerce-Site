import React from "react";
import ProductCard from "./ProductCard";
import Spinner from "../assets/Spinner-1s-200px.svg";

const ProductList = ({ loading, products }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <img src={Spinner} alt="spinner" className="w-20" />
        </div>
      ) : (
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
          {products.map((product) => (
            <div>
              <ProductCard product={product} />
            </div>
          ))}{" "}
        </div>
      )}
    </>
  );
};

export default ProductList;
