import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <h1 className="flex justify-center font-semibold text-3xl">
          CONTACT US
        </h1>
        <div>
          <form action="submit" className="flex flex-col p-4 items-center ">
            <input
              type="name"
              placeholder="Full Name"
              className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 my-4 outline-gray-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 my-4 outline-gray-400"
            />
            <textarea
              type="password"
              placeholder="Enter your message"
              className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 my-4 outline-gray-400 h-36"
            />
            <p>
              <input type="checkbox" />
              Do you agree to be added to our subscription list?
            </p>{" "}
            <button
              type="submit"
              className="bg-gray-800 text-white p-1 rounded-sm sm:w-1/2 w-3/4 py-2"
              onSubmit={(e) => {
                e.target.preventDefault;
              }}
            >
              SEND
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

export default Contact;
