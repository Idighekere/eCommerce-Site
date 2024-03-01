import React from "react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);

        console.error("Error fetching data:", error.message);
      });
  }, [products]);
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl text-center font-bold mt-3">SHOP</h1>{" "}
      <div className="p-3 px-6 sm:px-20  ">
        <ProductList products={products} loading={loading} />
      </div>
      {/* <>
        {products.map((product) => (
          <div>{product.title}</div>
        ))}
      </> */}
      <Footer />
    </div>
  );
};

export default Product;
