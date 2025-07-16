import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({ childeren }) => {
  return (
    <>
      <Navbar />
      <div className="content">{childeren}</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
