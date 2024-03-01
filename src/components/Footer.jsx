import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";

// import {
//   Footer,
//   FooterCopyright,
//   FooterIcon,
//   FooterLink,
//   FooterLinkGroup,
//   FooterTitle,
// } from "flowbite-react";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-gray-800 text-white py-12 w-full mt-4 p-5 lg:min-h-[550px] lg:justify-end lg:flex lg:flex-col">
          <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-8">
            <div className="">
              {/* Footer Title */}
              <h1 className="uppercase text-lg font-bold">Company</h1>{" "}
              <div className="grid">
                <a href="about">About</a>
                <a href="about">About</a>
                <a href="about">About</a>
                <a href="about">About</a>
              </div>
            </div>
            <div>
              {/* Footer Title */}
              <h1 className="uppercase text-lg font-bold">Shopping</h1>{" "}
              <div className="grid">
                <a href="Product">Products</a>
                <a href="about">FAQ</a>
                <a href="about">Shipping</a>
                <a href="about">Shipping</a>
              </div>
            </div>
            <div>
              {/* Footer Title */}
              <h1 className="uppercase text-lg font-bold">Customers</h1>{" "}
              <div className="grid">
                <a href="/login">Login</a>
                <a href="/cart">View Cart</a>
                <a href="contact">Contact Us</a>
              </div>
            </div>
            <div>
              {/* Footer Title */}
              <h1 className="uppercase text-lg font-bold">
                Stay in touch
              </h1>{" "}
              <div className="grid relative items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" border-0 px-3 py-1 placeholder:text-black text-black rounded-sm"
                />
                <a
                  href="mailto:idighekereudo@gmail.com"
                  className="text-3xl absolute text-black right-1"
                >
                  <IoMail />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-3 md:mt-6">
            <h2>All Rights Reserved</h2>
            <div className="flex text-3xl md:text-4xl gap-2">
              <IoLogoFacebook />
              <IoLogoGithub />
              <IoLogoInstagram />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
