import React from "react";
import Image from "next/image";
import FeatureSplit1 from "./../../../../../public/images/features-split-image-01.png";
import FeatureSplit2 from "./../../../../../public/images/features-split-image-02.png";

interface ProjectItemProps {
  arrangement: number;
  image: string;
  title: string;
  description: string;
  hint: string;
}

function ProjectItem({
  arrangement,
  image,
  title,
  description,
  hint,
}: ProjectItemProps) {
  return (
    <>
      {arrangement % 2 == 0 ? (
        <div className="flex flex-col mb-8 sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <div className="rounded-sm overflow-hidden">
              <Image src={FeatureSplit1} alt="features-split-image" />
            </div>
          </div>
          <div className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16">
            <p className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left">
              {hint}
            </p>
            <h3 className="title title-small sm:text-left md:text-4xl">
              {title}
            </h3>
            <p className="text md:text-left">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mb-8 sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <div className="rounded-sm overflow-hidden">
              <Image src={FeatureSplit2} alt="features-split-image" />
            </div>
          </div>
          <div className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16">
            <p className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left">
              {hint}
            </p>
            <h3 className="title title-small sm:text-left md:text-4xl">
              {title}
            </h3>
            <p className="text md:text-left">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectItem;
