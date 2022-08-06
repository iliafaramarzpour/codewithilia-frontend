import React from "react";

const GetInTouch = (): JSX.Element => {
  return (
    <>
      <div
        className="flex flex-col items-center px-4 py-8 mb-16 bg-indigo-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12"
        style={{ backgroundImage: 'url("/images/cta-illustration.svg")' }}
      >
        <h2 className="max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12">
          For previewing layouts and visual?
        </h2>
        <div className="flex flex-grow w-full sm:w-2/3 md:w-1/2 lg:w-5/12">
          <form
            className="flex items-center w-full p-4 bg-white rounded-sm space-between"
            action="#"
          >
            <input
              className="flex-grow text-gray-900 placeholder-gray-500 bg-white appearance-none"
              type="text"
              placeholder="Your best email"
            />
            <svg
              className="text-indigo-700 fill-current"
              width={16}
              height={12}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                fill="#376DF9"
              />
            </svg>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
