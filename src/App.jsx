import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart";
import Layout from "./component/Layout/Layout.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import AllProduct from "./component/AllProduct/AllProduct.jsx";
import Login from "./pages/Login/Login.jsx";
import routes from "./Routes/Path.js";
import Register from "./pages/Register/Register.jsx";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "./Firebase/FirebaseAuth.js";
import SingleProduct from "./component/SingleProduct/SingleProduct.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
function App() {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoStatus, setPromoStatus] = useState(0);
  const [username, setUsername] = useState("");

  const addToCart = (product) => {
    const checkExistItem = cart.find((item) => item.id === product.id);

    if (checkExistItem) {
      const updateItemsQuantity = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateItemsQuantity);
      toast.success("Product added to cart successfully");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added to cart successfully");
    }
  };

  const handleInc = (product) => {
    console.log(product);
    const IncreaseQuantity = cart.map((cartItem) =>
      cartItem.id === product.id &&
      product.quantity < product.minimumOrderQuantity
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(IncreaseQuantity);
  };
  const handleDec = (product) => {
    const DecreaseQuantity = cart.map((cartItems) =>
      cartItems.id === product.id && cartItems.quantity > 1
        ? { ...cartItems, quantity: cartItems.quantity - 1 }
        : cartItems
    );
    setCart(DecreaseQuantity);
  };

  /**
   * Removes an item from the cart.
   * @param {Object} item - the item to be removed from the cart
   */
  const handleRemove = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
  };

  const totalPrice =
    cart.reduce((total, item) => total + item.price * item.quantity, 0) -
    discount;

  /**
   * Handle promo code application.
   * If the promo code is "DISCOUNT10", apply 10% discount to the total price.
   * Otherwise, do nothing.
   */
  const handleApplyPromoCode = () => {
    console.log(promoCode);

    const status = promoCode == "DISCOUNT10" ? 200 : 500;
    setPromoStatus(status);
    if (status === 200) {
      const discountPrice = totalPrice * 0.1; // 10% discount
      setDiscount(discountPrice);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("");
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} username={username} />
        <Toaster />
        <Routes>
          {/* <Route path="/" element={<Layout childeren={<Home />} />} />
          <Route path="/cart" element={<Layout childeren={<Cart />} />} />
          <Route path="/products" element={<AllProduct />} /> */}
          <Route path={routes.home} element={<Home />} />
          <Route
            path={routes.cart}
            element={
              <Cart
                cart={cart}
                handleInc={handleInc}
                handleDec={handleDec}
                handleRemove={handleRemove}
                totalPrice={totalPrice}
                setPromoCode={setPromoCode}
                promoCode={promoCode}
                handleApplyPromoCode={handleApplyPromoCode}
                promoStatus={promoStatus}
                discount={discount}
              />
            }
          />
          <Route
            path={routes.products}
            element={<AllProduct AddToCart={addToCart} />}
          />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route
            path="/product/:id"
            element={<SingleProduct AddToCart={addToCart} />}
          />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
