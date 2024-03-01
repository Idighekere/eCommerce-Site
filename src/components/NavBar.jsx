import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import {
  IoCartOutline,
  IoCartSharp,
  IoMenuSharp,
  IoClose,
  IoLogInOutline,
} from "react-icons/io5";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCartIsOpen(false);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
    setIsOpen(false);
    // document.body.style.overflow = cartIsOpen ? "auto" : "hidden";
  };

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
      <nav className="flex items-center shadow-md p-3 justify-between sm:px-32 bg-white ">
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
            <div className="md:none flex absolute top-0 left-0 bg-gray-100 w-2/3 h-screen pt-16 items-center flex-col gap-2 overflow-y-hidden z-40 ">
              <NavLink to="/" className="text-2xl">
                HOME
              </NavLink>
              <NavLink to="/product" className="text-2xl">
                PRODUCT
              </NavLink>
              <a href="/login" className="text-2xl">
                LOGIN
              </a>
              {/* <CartIcon /> */}
              <div className="">
                <div className="bottom-1  flex justify-start gap-1 left-2 absolute px-2 flex-wrap">
                  <a href="/about">About | </a>
                  <a href="/about">Contact Us |</a>
                  <a href="/about">Privacy Policy</a>
                </div>
              </div>
            </div>
          </>
        )}
        <Logo />
        <div className="hidden md:flex md:mr-auto gap-2">
          <NavLink to="/" className="text-lg font-[400px] ml-4">
            HOME
          </NavLink>
          <NavLink to="/product" className="text-lg font-[400px]">
            PRODUCT
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex  items-center md:border-2 px-2 py-0 md:border-gray-800 rounded-md cursor-pointer hidden sm:block relative">
            <a href="/login" className="flex items-center">
              {" "}
              <p className="hidden md:block">LOG IN</p>
              <IoLogInOutline className="text-4xl" />
              {/* <IoPersonOutline className="text-3xl" /> */}
            </a>
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
