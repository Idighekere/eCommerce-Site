import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import {
  IoCartOutline,
  IoMenuSharp,
  IoClose,
  IoLogInOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogOutOutline,
} from "react-icons/io5";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../context/cart";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../config/firebase";
import { useState } from "react";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  // const [user, setUser] = useState(null);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  // const unsubscribe = onAuthStateChanged((auth) => {
  //   if (auth) {
  //     setUser(auth);
  //   } else {
  //     setUser(null);
  //   }
  // });
  // useEffect(() => {
  //   return unsubscribe();
  // });

  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCartIsOpen(false);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
    setIsOpen(false);
    document.body.style.overflow = cartIsOpen ? "auto" : "hidden";
  };
  // Restoring overflow property when the component unmounts or on specific conditions
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function to restore overflow property when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const CartIcon = () => {
    return (
      <div
        className="flex  items-center md:border-2 px-2 py-0 md:border-gray-800 rounded-md cursor-pointer "
        onClick={toggleCart}
      >
        <p className="hidden md:block px-1">CART</p>

        <span className="relative">
          <IoCartOutline className="text-4xl cursor-pointer" />
          <span className="bg-red-600 text-white w-2 h-2 p-3 flex text-center items-center justify-center rounded-full absolute top-0 right-[-5px] ">
            {cartItems.length}
          </span>
        </span>
      </div>
    );
  };

  //   const styles = {};

  return (
    <>
      <nav className="flex items-center shadow-md p-3 justify-between sm:px-32 bg-white sticky top-0 w-full z-50">
        {isOpen ? (
          <IoClose
            className="text-4xl cursor-pointer sm:hidden z-50"
            onClick={toggleMenu}
          />
        ) : (
          <IoMenuSharp
            className="text-4xl sm:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        {isOpen && (
          <>
            <div
              className="bg-gray-800/40  h-screen w-full absolute top-0 z-20"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="md:none flex absolute top-0 left-0 bg-gray-100 w-5/6 h-screen pt-16 items-start p-7 flex-col gap-2 overflow-y-hidden z-40 text-lg uppercase">
              <NavLink to="/" className="">
                HOME
              </NavLink>
              <NavLink to="/product" className="">
                PRODUCT
              </NavLink>
              <a href="/login" className="">
                LOGIN
              </a>
              <a href="/about">About </a>
              <a href="/contact-us">Contact Us </a>
              <a href="/about">Privacy Policy</a>
              {/* <CartIcon /> */}
              <div className="absolute bottom-7 ">
                <div className="border-t mt-3 md:mt-6 capitalize border-gray-800 w-full">
                  <h2 className="text-lg">All Rights Reserved</h2>
                  <div className="flex text-3xl md:text-4xl gap-2">
                    <IoLogoFacebook />
                    <IoLogoGithub />
                    <IoLogoInstagram />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <Logo className="z-50" />
        <div className="hidden md:flex md:mr-auto gap-2">
          <NavLink
            to="/"
            className="text-lg font-[400px] ml-4 active:border-b-2 hover:bg-gray-500"
            // activeClassName="activeStyles"
          >
            HOME
          </NavLink>
          <NavLink to="/product" className="text-lg font-[400px]">
            PRODUCT
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex  items-center md:border-2 px-2 py-0 md:border-gray-800 rounded-md cursor-pointer hidden sm:block relative">
            <a href="/register" className="flex items-center">
              <p className="hidden md:block">LOG IN</p>
              <IoLogInOutline className="text-4xl" />
              {/* <IoPersonOutline className="text-3xl" /> */}
            </a>
            {/* {user === null ? (
              <a href="/register" className="flex items-center">
                <p className="hidden md:block">LOG IN</p>
                <IoLogInOutline className="text-4xl" />
                {/* <IoPersonOutline className="text-3xl" /> */}
            {/* </a>
            ) : (
              <button className="flex items-center" onClick={logOut}>
                <p className="hidden md:block">LOG OUT</p>
                <IoLogOutOutline className="text-4xl" />
                {/* <IoPersonOutline className="text-3xl" /> */}
            {/* </button>
            )} */}{" "}
            {/* */}
          </div>

          {/* <NavLink to="/cart">{<CartIcon />}</NavLink>{" "} */}
          <CartIcon />
          {cartIsOpen && (
            <div>
              <div
                className="md:bg-gray-800/40  md:h-screen md:w-full md:right-0 left-0 absolute top-0 z-10 hidden md:block"
                onClick={() => setCartIsOpen(false)}
              ></div>
              <Cart />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
