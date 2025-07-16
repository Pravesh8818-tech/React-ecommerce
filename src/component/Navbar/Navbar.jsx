import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import routes from "../../Routes/Path";
import { HashNavigation } from "swiper/modules";
import { auth } from "../../Firebase/FirebaseAuth";
import toast from "react-hot-toast";
function Navbar({ cart, username }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    isMobileMenuOpen === false
      ? setIsMobileMenuOpen(true)
      : setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="container  mx-auto flex justify-between p-5 items-center">
        {/* Logo */}
        <Link to={routes.home} className="text-2xl font-bold">
          Mech<span className="text-red-500">Shop</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center text-lg justify-center font-semibold">
            <li>
              <Link
                to={routes.home}
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={routes.products}
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                All Product
              </Link>
            </li>
            <li>
              <Link
                to={routes.about}
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                About US
              </Link>
            </li>
            <li>
              <Link
                to={routes.contact}
                className="mr-5 hover:text-gray-900 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {username ? (
            <Link>
              <button
                className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-base "
                onClick={handleLogout}
              >
                Logout
              </button>
              <span className="px-4">{username.toUpperCase()}</span>
            </Link>
          ) : (
            <Link to={routes.login}>
              <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-base">
                Login
              </button>
            </Link>
          )}

          <Link to={routes.cart} className="text-black">
            <button>
              <span className="absolute top-2 right-55 text-xs bg-red-500 text-white rounded-full px-2 py-[2px]">
                {cart.length}
              </span>
              <FaShoppingCart size={25} />
            </button>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden focus:outline-none"
          >
            <GiHamburgerMenu size={25} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-red-500 z-50 flex flex-col items-center justify-center text-white text-2xl font-semibold gap-10">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <ImCross size={25} />
          </button>
          <Link to={routes.home} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to={routes.products} onClick={() => setIsMobileMenuOpen(false)}>
            All Product
          </Link>
          <Link to={routes.mens} onClick={() => setIsMobileMenuOpen(false)}>
            Mens
          </Link>
          <Link to={routes.kids} onClick={() => setIsMobileMenuOpen(false)}>
            Kids
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
