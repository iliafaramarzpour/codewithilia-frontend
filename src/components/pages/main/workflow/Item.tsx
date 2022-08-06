import React from "react";
import {
  FastForwardIcon,
  RefreshIcon,
  CubeIcon,
} from "@heroicons/react/outline";

interface WorkflowItemProps {
  icon?: JSX.Element;
  title: string;
  description: string;
}

const WorkflowItem = ({ icon, title, description }: WorkflowItemProps) => {
  return (
    <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
      <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
        {/* <FastForwardIcon className="w-8" /> */}
        {icon}
      </span>
      <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
      <p className="max-w-xs mx-auto text-lg text-gray-500">{description}</p>
    </li>
  );
};

export default WorkflowItem;
