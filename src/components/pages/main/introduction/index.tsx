import React from "react";
import Image from "next/image";
import IliaPicture from "./../../../../../public/images/ilia.jpg";
import { prefix } from "./../../../../utils/prefix";

const Introduction = (): JSX.Element => {
  return (
    <>
      <div className="mb-16">
        <div className="block w-52 h-52 mx-auto rounded-full overflow-hidden">
          <Image
            src={IliaPicture}
            width={208}
            height={208}
            alt="Picture of the author"
          />
        </div>
      </div>
      <h1 className="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl">
        ILIA FARAMARZPOUR <span className="text-indigo-700">dev</span>
      </h1>
      <p className="max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl">
        Our smallest action make the biggest change in the world.
      </p>
      <div className="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row">
        <a
          className="w-full mb-4 whitespace-no-wrap bg-indigo-600 btn btn-tall md:w-auto hover:bg-indigo-500 sm:mr-2"
          href="https://www.linkedin.com/in/iliafaramarzpour/"
        >
          Linkedin
        </a>
        <a
          className="w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2"
          href="https://github.com/iliafaramarzpour"
        >
          Github
        </a>
      </div>
      <div>
        <h2 className="title sm:text-4xl md:text-5xl">.</h2>
        <p className="mb-16 mx-auto intro sm:max-w-5xl">
          Visionary front end developer with over 7 years’ experience in
          E-Commerce projects. Critical thinker and proficient in analyzing
          codebase issues. Keen to participate in challenging projects that
          require research and learning which provide an opportunity for growth
          and development. Passionate communicator who enjoys collaborating with
          costumers and stakeholders.
        </p>
      </div>
    </>
  );
};

export default Introduction;
