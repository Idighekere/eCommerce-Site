import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LogIn = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <h1 className="flex justify-center font-semibold text-3xl">SIGN IN</h1>
        <div>
          <form action="submit" className="flex flex-col p-4 items-center ">
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 my-4 outline-gray-400"
            />
            <a href="">Forgot Password?</a>
            <button
              type="submit"
              className="bg-gray-800 text-white p-1 rounded-sm sm:w-1/2 w-3/4 py-2"
              onSubmit={(e) => {
                e.target.preventDefault;
              }}
            >
              LOGIN
            </button>
          </form>
          <p className="text-center">
            Not registered?{" "}
            <a href="/register" className="underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
