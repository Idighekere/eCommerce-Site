import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FeaturedProductsCard from "../components/FeaturedProductsCard";
import Hero from "../components/Hero";
// import { Carousel } from "flowbite-react";
const Home = () => {
  const [featuredProducts, setFeaturedProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);

        console.error("Error fetching data:", error.message);
      });
  }, [featuredProducts]);

  return (
    <div>
      <NavBar />
      <p>Home</p>
      <div className="px-3">
        {" "}
        <Hero />
      </div>{" "}
      <section
        className="bg-gray-600 text-whi
      te mt-3 p-3"
      >
        <div>dd</div>
      </section>
      <h1 className="text-2xl font-bold text-center mt-4">FEATURED PRODUCTS</h1>
      <div className="flex gap-3 overflow-y-scroll px-10">
        {featuredProducts.map((fprod) => {
          return <FeaturedProductsCard fprod={fprod} loading={isLoading} />;
        })}
      </div>
      {/* <Component /> */}
      <Footer />
    </div>
  );
};

// function Component() {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 z-0">
//       <Carousel className="z-0">
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
//           alt="..."
//         />
//       </Carousel>
//     </div>
//   );
// }

export default Home;
