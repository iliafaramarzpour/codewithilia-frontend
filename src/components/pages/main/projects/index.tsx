import React from "react";
import { project } from "@/mock/project";
import ProjectItem from "./Item";

const Projects = (): JSX.Element => {
  return (
    <>
      {" "}
      <div className="mb-16 border-b border-gray-800">
        <h2 className="mb-2 title sm:text-4xl md:text-5xl">
          Workflow that just works
        </h2>
        <p className="mb-20 mx-auto intro sm:max-w-xl">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
        {project.map((item, index) => (
          <ProjectItem
            key={index}
            arrangement={index}
            image={item.image}
            title={item.title}
            description={item.description}
            hint={item.hint}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
