// import React from "react";
// import NavBar from "../components/NavBar";
// import { IoArrowForward } from "react-icons/io5";
// import Footer from "../components/Footer";
// import CartItems from "../components/Features/CartItems";
// import { createContext, useState, useEffect } from "react";

// export const CartProvider = ({ children }) => {};

// // );
// const removeFromCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //check if thhe item is already in the cart

//
// }
// const clearCart = () => {
//   setCartItems([]); // set the cart items to an empty array
// };

//

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(0);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //check if thhe item is already in the cart

    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (
            cartItem //if the item is already in the cart increase the quantity of the item
          ) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem // otherwise return the cart item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the  cart, add the item to the cart
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //check if thhe item is already in the cart

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };

  const removeItem = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //check if thhe item is already in the cart

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - cartItem.quantity } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); // calculate the total price of the items in the cart
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        removeFromCart,
        getCartTotal,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
