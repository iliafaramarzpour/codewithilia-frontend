import React from "react";
import { workflow } from "@/mock/workflow";
import WorkflowItem from "./Item";

const Workflow = (): JSX.Element => {
  return (
    <>
      <div>
        <ul className="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row">
          {workflow.map((item, index) => (
            <WorkflowItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Workflow;
