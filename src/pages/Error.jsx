import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Error = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <div className="flex justify-center flex-col items-center">
        <h1 className=" font-semibold text-3xl">404 PAGE</h1>
        <p className="text-2xl p-5 text-center">
          Otillor!! you don go click page where no exist😂😎
        </p>
        <p>I fit help show you where homepage de </p>
        <a href="/home">
          <button className="bg-gray-800 px-3 py-1 text-white mt-4">
            GO HOME
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
