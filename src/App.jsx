import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";

import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
// import Cart from "./components/Cart";
const App = () => {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/login" element={<LogIn />} />

          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
