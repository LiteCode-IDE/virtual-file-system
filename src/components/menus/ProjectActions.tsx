import React from "react";
import { Tooltip } from "react-tooltip";
import newProjectIcon from "../../assets/new-project.svg";
import uploadIcon from "../../assets/open-project.svg";

const ProjectActions = () => {
  return (
    <div className="flex items-center justify-end select-none">
      <div className="p-2 mr-8 mb-3 md:mr-6 flex flex-row">
        <div className="mx-1">
          <Tooltip id="start-new-project" className="z-20" />
          <img
            data-tooltip-id="start-new-project"
            data-tooltip-content={"Start new Project"}
            src={newProjectIcon.src}
            alt="new project"
            className="w-5 h-5 object-cover md:w-8 md:h-8 md:p-1 cursor-pointer hover:bg-dark-hover rounded-sm"
          />
        </div>
        <div className="mx-1">
          <Tooltip id="open-existing-project" className="z-20" />
          <img
            data-tooltip-id="open-existing-project"
            data-tooltip-content={"Open existing Project"}
            src={uploadIcon}
            alt="open project"
            className="w-5 h-5 object-cover md:w-8 md:h-8 md:p-1 cursor-pointer hover:bg-dark-hover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectActions;
