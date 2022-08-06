import React from "react";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-between py-6">
        <a href="#" className="text-white text-5xl">
          IF.
        </a>
        <a href="#">
          <svg
            className="w-6 h-6 fill-current md:hidden"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </a>
        <div className="flex items-center mb-4 md:block">
          <a
            className="btn border border-white hover:border-indigo-600 hover:bg-indigo-600 mr-8 font-semibold hover:text-white"
            href="tel:+989118613957"
          >
            Call me
          </a>
          <a
            className="bg-indigo-600 btn hover:bg-opacity-0 border border-indigo-600 hover:border-white"
            href="mailto:iliafaramarzpour@gmail.com"
          >
            Hire me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
