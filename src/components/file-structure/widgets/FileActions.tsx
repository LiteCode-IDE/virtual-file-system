import React from "react";
import downArrowLogo from "../../../assets/left-arrow.svg";
import newFileIcon from "../../../assets/new-file.svg";
import newFolderIcon from "../../../assets/new-folder.svg";
import downloadIcon from "../../../assets/download.svg";

import { Tooltip } from "react-tooltip";

interface FileActionProps {
  newFile: () => void;
  newFolder: () => void;
  download: () => void;
  collapseArea: () => void;
  collapsed: boolean;
  projectName?: string;
  btnClassName?: string;
  disableTooltip?: true;
  disableCollapse?: true;
  disableDownload?: true;
}

const FileActions: React.FC<FileActionProps> = ({
  newFile,
  newFolder,
  download,
  collapseArea,
  collapsed,
  btnClassName,
  projectName,
  disableCollapse,
  disableTooltip,
  disableDownload,
}) => {
  return (
    <div
      onClick={() => {
        if (!disableCollapse) {
          collapseArea();
        }
      }}
      className={`flex w-full select-none flex-row items-center ${
        !disableCollapse ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <img
        src={downArrowLogo}
        className={`${
          !collapsed ? "rotate-[270deg]" : "rotate-180"
        } mr-2 mb-1 h-3 w-3 self-center transition-transform`}
        alt="Down Arrow"
      />
      <span className="flex w-full flex-row justify-between">
        <span className="text-black text-center overflow-x-clip">
          {projectName ? projectName : "Files"}
        </span>
        <span className="flex items-center">
          <span className="text-black">
            {!disableTooltip && (
              <Tooltip
                className="z-50"
                id="new-file"
                style={{ backgroundColor: "rgb(60 60 60)" }}
              />
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                newFile();
              }}
              className={`cursor-pointer rounded-sm hover:bg-dark-hover p-[2px] mr-[2px] ${btnClassName}`}
            >
              <img
                data-tooltip-id="new-file"
                data-tooltip-content={"New File"}
                src={newFileIcon}
                className="h-5 w-5"
                alt="New File"
              />
            </button>
          </span>
          <span className="text-black">
            {!disableTooltip && (
              <Tooltip
                className="z-50"
                id="new-folder"
                style={{ backgroundColor: "rgb(60 60 60)" }}
              />
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                newFolder();
              }}
              className={`cursor-pointer rounded-sm hover:bg-dark-hover p-[2px] mx-[2px] ${btnClassName}`}
            >
              <img
                data-tooltip-id="new-folder"
                data-tooltip-content={"New Folder"}
                src={newFolderIcon}
                className="h-5 w-5"
                alt="New Folder"
              />
            </button>
          </span>
          {!disableDownload && (
            <span className="text-black">
              {!disableTooltip && (
                <Tooltip
                  className="z-50"
                  id="download-project"
                  style={{ backgroundColor: "rgb(60 60 60)" }}
                />
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  download();
                }}
                className={`cursor-pointer rounded-sm hover:bg-dark-hover p-[2px] ml-[2px] ${btnClassName}`}
              >
                <img
                  data-tooltip-id="download-project"
                  data-tooltip-content={"Download Project"}
                  src={downloadIcon}
                  className="h-5 w-5"
                  alt="Download Project"
                />
              </button>
            </span>
          )}
        </span>
      </span>
    </div>
  );
};

export default FileActions;
