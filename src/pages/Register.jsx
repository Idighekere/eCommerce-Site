import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div>
      <NavBar />
      <h1 className="flex justify-center font-semibold text-3xl">SIGN UP</h1>
      <div>
        <form action="submit" className="flex flex-col p-4 items-center ">
          <input
            type="firstname"
            placeholder="First Name"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400"
          />
          <input
            type="lastname"
            placeholder="Last Name"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400 my-4"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 my-3 outline-gray-400"
          />
          {/* <a href="">Forgot Password?</a> */}
          <button
            type="submit"
            className="bg-gray-800 text-white p-1 rounded-sm w-3/4 sm:w-1/2 py-2"
          >
            REGISTER
          </button>
        </form>
        <p className="text-center">
          Already registered?{" "}
          <a href="/login" className="underline">
            Sign In
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
