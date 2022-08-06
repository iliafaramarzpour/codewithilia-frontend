import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="absolute inset-0 bg-top bg-no-repeat bg-illustration-01"></div>
      <div className="absolute inset-0 bg-center bg-no-repeat bg-illustration-02"></div>
      <div className="container relative">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
