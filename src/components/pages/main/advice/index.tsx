import React from "react";
import AdviceItem from "./Item";
import { advice } from "@/mock/advice";

const Advice = (): JSX.Element => {
  return (
    <>
      <div className="mb-16">
        <h2 className="title sm:text-4xl md:text-5xl">People&apos;s Advice</h2>
        <p className="intro mx-auto sm:max-w-xl">
          In this section, some of the recommendations of people about me to
          others.
        </p>
        <div className="flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap">
          {advice.map((item, index) => (
            <AdviceItem
              key={index}
              description={item.description}
              name={item.name}
              app_name={item.app_name}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Advice;
