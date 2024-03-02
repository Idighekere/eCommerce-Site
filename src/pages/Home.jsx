import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FeaturedProductsCard from "../components/FeaturedProductsCard";
import Hero from "../components/Hero";
// import { Carousel } from "flowbite-react";
import { IoRocket, IoKeySharp, IoCashOutline } from "react-icons/io5";
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
      <div className="px-7 mt-10">
        {" "}
        <Hero />
      </div>{" "}
      <section className="bg-gray-800 text-white mt-3 p-10">
        <div>
          <SectionOne />
        </div>
      </section>
      <h1 className="text-2xl font-bold text-center my-4">FEATURED PRODUCTS</h1>
      <div className="flex gap-3 overflow-y-scroll px-10">
        {featuredProducts.map((product) => {
          return (
            <>
              <FeaturedProductsCard product={product} loading={isLoading} />
              {/* <ProductCard product={product} /> */}
            </>
          );
        })}
      </div>
      {/* <Component /> */}
      <Footer />
    </div>
  );
};
const SectionOne = () => {
  const cardData = [
    {
      id: 1,
      title: "Fast Delivery",
      icon: <IoRocket />,
    },
    {
      id: 2,
      title: "Free Shipping",
      icon: <IoCashOutline />,
    },
    {
      id: 3,
      title: "Secured Payment",
      icon: <IoKeySharp />,
    },
  ];
  return (
    <>
      <div className="flex gap-5 md:flex-row flex-col">
        {cardData.map((data) => {
          return (
            <div
              key={data.id}
              className="shadow-lg bg-gray-700 rounded-lg p-5 text-center"
            >
              <div>
                <p className="text-4xl flex justify-center p-4 ">{data.icon}</p>

                <h1 className="text-2xl font-bold ">{data.title} </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  harum magnam ducimus error deleniti temporibus, nisi eligendi
                  ipsa pariatur earum eos delectus cupiditate consequuntur vel
                  libero quisquam corrupti numquam at voluptatibus
                  exercitationem facilis iure. Eos obcaecati quam molestias
                  magni!
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
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
