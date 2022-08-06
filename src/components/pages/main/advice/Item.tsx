import React from "react";

interface AdviceItemProps {
  description: string;
  name: string;
  app_name: string;
  url: string;
}

const AdviceItem = ({
  description,
  name,
  app_name,
  url,
}: AdviceItemProps): JSX.Element => {
  return (
    <div className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3">
      <div className="p-8 bg-gray-800">
        <div className="mb-8 text-indigo-600">
          <svg
            className="fill-current"
            width={24}
            height={18}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
              fillRule="nonzero"
              fill="currentColor"
            />
          </svg>
        </div>
        <blockquote className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700">
          — {description}
        </blockquote>
        <p className="font-semibold">
          <span className="text-white">{name}</span>
          <span className="text-gray-700">/</span>
          <a href={url} className="text-green-400 hover:text-green-300">
            {app_name}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdviceItem;
