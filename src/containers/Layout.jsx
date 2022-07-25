import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
