import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, navbar }) => {
  return (
    <>
      <Navbar navbar={navbar} />
      <main style={{ minHeight: "85vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
