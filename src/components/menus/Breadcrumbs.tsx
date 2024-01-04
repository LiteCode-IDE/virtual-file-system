import React, { useState, useRef } from "react";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import {
  collapseMiniStructure,
  getBreadcrumbs,
  selectMiniStructure,
  setMiniStructureAsync,
} from "../../state/features/structure/miniStructureSlice";
import MiniFolder from "../file-structure/MiniFolder";
import { createPortal } from "react-dom";
import { setSelected } from "../../state/features/structure/structureSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { setActiveTabAsync } from "../../state/features/tabs/tabsSlice";
import { getLogo } from "../file-structure/utils";

export interface BreadcrumbsProps {
  containerClassName?: string;
  textClassName?: string;
  miniFolderCollapseBtnClassName?: string;
  miniFolderCollapseBtnStyle?: React.CSSProperties;
  miniFolderContainerClassName?: string;
  itemTitleClassName?: string;
  onBreadcrumbFileClick?: (id: string ) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  containerClassName,
  textClassName,
  miniFolderCollapseBtnClassName,
  miniFolderCollapseBtnStyle,
  miniFolderContainerClassName,
  itemTitleClassName,
  onBreadcrumbFileClick = () => {},
}) => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [showMiniStructure, setShowMiniStructure] = useState(false);
  const miniStructure = useTypedSelector(selectMiniStructure);
  const breadcrumbsRef = useRef<HTMLDivElement>(null);
  const miniStructurePortalRef = useRef<HTMLDivElement>(null);
  const editorObj = useTypedSelector(getBreadcrumbs);

  const dispatch = useTypedDispatch();

  useOutsideAlerter(miniStructurePortalRef, setShowMiniStructure);

  return (
    <>
      {editorObj !== null && (
        <>
          <div
            id={"breadcrumbs"}
            ref={breadcrumbsRef}
            className="select-none w-full"
          >
            <div className="breadcrumbs-container flex items-center justify-start m-2">
              {editorObj.path.map((path, i) => (
                <div
                  id={`${editorObj.path
                    .map((path) => path.replace(/[.[\]|\s]+/g, "-"))
                    .join("")}-${i}`}
                  key={`${editorObj.path
                    .map((path) => path.replace(/[.[\]|\s]+/g, "-"))
                    .join("")}-${i}`}
                >
                  <div
                    className={`text-base text-black flex flex-row ${containerClassName}`}
                  >
                    {i === editorObj.path.length - 1 && (
                      <span
                        className={`span-logo self-center w-4 h-4 ml-1 mr-[0.375rem] ${getLogo(
                          path.split(".").reverse()[0]
                        )}`}
                      ></span>
                    )}
                    <span
                      onClick={() => {
                        setClickedIndex(i);
                        setShowMiniStructure(true);
                        dispatch(
                          setMiniStructureAsync(editorObj.unmappedPath[i])
                        );
                      }}
                      className={`cursor-pointer hover:underline hover:text-blue-400 ${textClassName}`}
                    >
                      {path}
                    </span>
                    {i < editorObj.path.length - 1 && (
                      <span className="text-base text-black mx-2">
                        {"/"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {breadcrumbsRef.current && showMiniStructure && (
            <>
              {(() => {
                const id = `${editorObj.path
                  .map((path) => path.replace(/[.[\]|\s]+/g, "-"))
                  .join("")}-${clickedIndex}`;

                const element = breadcrumbsRef.current.querySelector(
                  `#${id}`
                ) as HTMLElement;
                if (element) {
                  return createPortal(
                    <div
                      ref={miniStructurePortalRef}
                      className="rounded-lg bg-dark-bg-2 border border-slate-600 absolute w-52 z-10 mt-2 max-h-60 overflow-y-auto custom-scrollbar-3"
                    >
                      <MiniFolder
                        init={true}
                        data={miniStructure}
                        onClickItem={(item) => {
                          if (item.type === "folder") {
                            dispatch(collapseMiniStructure(item.id));
                          } else {
                            dispatch(setSelected({ id, type: "file" }));
                            dispatch(setActiveTabAsync(item.id));
                            setShowMiniStructure(false);
                            onBreadcrumbFileClick(item.id);
                          }
                        }}
                        onCollapseMiniStructure={(id) => {
                          dispatch(collapseMiniStructure(id));
                        }}
                        collapseBtnClassName={miniFolderCollapseBtnClassName}
                        collapseBtnStyle={miniFolderCollapseBtnStyle}
                        containerClassName={miniFolderContainerClassName}
                        titleClassName={itemTitleClassName}
                      />
                    </div>,
                    element
                  );
                }
              })()}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Breadcrumbs;
