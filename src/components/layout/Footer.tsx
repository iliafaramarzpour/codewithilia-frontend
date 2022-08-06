import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { InstagramIcon, TwitterIcon } from "@/components/common/icons";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <a href="#" className="text-white text-5xl">
          IF.
        </a>
        <div className="flex flex-row justify-center mb-4 -ml-4 -mr-4">
          <a
            href="https://twitter.com/ifaramarzpour"
            target="_blank"
            className="p-4"
            rel="noreferrer"
          >
            <TwitterIcon className="text-indigo-700 hover:text-indigo-400" />
          </a>
          <a
            href="https://www.instagram.com/iliafaramarzpour.official/"
            className="p-4"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="text-indigo-700 hover:text-indigo-400" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between mb-8 text-center sm:flex-row">
        <p className="flex items-center order-last mb-4 text-sm text-gray-500 sm:order-first">
          Made with
          <HeartIcon className="w-6 text-red-600 mx-2" />
          by Ilia
        </p>
        {/* <ul className="flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm">
          <li>
            <a href="#" className="px-4 text-gray-500 hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="px-4 text-gray-500 hover:text-white">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="px-4 text-gray-500 hover:text-white">
              FAQ's
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Footer;
