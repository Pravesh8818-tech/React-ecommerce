import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="w64 md:mx-0 mx-auto text-center md:text-left mb-5">
          <h3 className="font-bold text-2xl">
            Mech<span>Shop</span>
          </h3>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Menu
            </h2>
            <ul className="list-none mb-10">
              <li>Features</li>
              <li className="mt-1">Info Center</li>
              <li className="mt-1">News Blogs</li>
              <li className="mt-1">Login</li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Company
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1">About Us</li>
              <li className="mt-1">Privacy Policy</li>
              <li className="mt-1">Terms & Conditions</li>
              <li className="mt-1">Login</li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Contact
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1">Contact Sale</li>
              <li className="mt-1">+9315533529</li>
              <li className="mt-1">Blog Sale</li>
              <li className="mt-1">+1232344343</li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Tech Support
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1">Contact Support</li>
              <li className="mt-1">Info Center</li>
              <li className="mt-1">Activate</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-500 text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left ">
              © 2022 MechShop --<span>@CopyRight</span>
            </p>
            <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <span className="inline-flex items-center justify-center ml-3 text-white gap-5">
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
