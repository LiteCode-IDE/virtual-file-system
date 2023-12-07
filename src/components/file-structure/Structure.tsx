import React, { useRef, useEffect, useState } from "react";

import {
  type ItemType,
  getInitialSet,
  setContextSelectedForFileAction,
  setSelected,
} from "../../state/features/structure/structureSlice";
import Folder from "./Folder";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

import MenuContext from "../menus/MenuContext";
import CustomInput from "./widgets/CustomInput";
import { createPortal } from "react-dom";

import Dialog from "../menus/Dialog";
import {
  addNode,
  collapseOrExpand,
  contextClick,
  contextSelectedEvent,
  contextSelectedItem,
  removeNode,
  renameNode,
  getItem,
  setToCopy,
  copyNode,
  contextSelectedItemType,
  contextSelectedObj,
  clipboard,
  folderIds,
  fileIds,
  selectedItem,
  setParentItemId,
  getCurrentItems,
  search,
} from "../../state/features/structure/structureSlice";
import { usePrependPortal } from "../../hooks/usePrependPortal";
import FileActions from "./widgets/FileActions";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import { removeTabAsync } from "../../state/features/tabs/tabsSlice";
import downloadZip from "../../state/features/structure/utils/downloadZip";
import SearchInput from "./search/SearchInput";

interface StructureProps {
  deleteConfirmationClassName?: string;
  fileInputClassName?: string;
  fileInputStyle?: React.CSSProperties;
  contextMenuClassName?: string;
  contextMenuHrColor?: string;
  contextMenuClickableAreaClassName?: string;
  searchInputClassName?: string;
  searchInputStyle?: React.CSSProperties;
  fileActionsBtnClassName?: string;
  projectName?: string;
  fileActionsDisableCollapse?: true;
  fileActionsDisableTooltip?: true;
  fileActionsDisableDownload?: true;
  folderCollapseBtnClassname?: string;
  folderCollapseBtnStyle?: React.CSSProperties;
  folderThreeDotPrimaryClass?: string;
  folderThreeDotSecondaryClass?: string;
  folderClickableAreaClassName?: string;
  folderSelectedClickableAreaClassName?: string;
  folderContextSelectedClickableAreaClassName?: string;
  itemTitleClassName?: string;
  structureContainerClassName?: string;
  containerHeight?: string;
}

const Structure: React.FC<StructureProps> = ({
  deleteConfirmationClassName,
  fileInputClassName,
  fileInputStyle,
  contextMenuClassName,
  contextMenuHrColor,
  contextMenuClickableAreaClassName,
  searchInputClassName,
  searchInputStyle,
  fileActionsBtnClassName,
  projectName,
  fileActionsDisableCollapse,
  fileActionsDisableTooltip,
  fileActionsDisableDownload,
  folderCollapseBtnClassname,
  folderCollapseBtnStyle,
  folderThreeDotPrimaryClass,
  folderThreeDotSecondaryClass,
  folderClickableAreaClassName,
  folderSelectedClickableAreaClassName,
  folderContextSelectedClickableAreaClassName,
  itemTitleClassName,
  structureContainerClassName,
  containerHeight,
}) => {
  const fileSysRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  const clickedRef = useRef<HTMLElement>();
  const [structureCollapsed, setStructureCollapsed] = useState(false);

  const dispatch = useTypedDispatch();
  const structureData = useTypedSelector(getInitialSet);
  const contextSelectedE = useTypedSelector(contextSelectedEvent);
  const contextSelectedItemProps = useTypedSelector(contextSelectedObj);
  const contextSelectedId = useTypedSelector(contextSelectedItem);
  const contextSelectedType = useTypedSelector(contextSelectedItemType);
  const selectedI = useTypedSelector(selectedItem);
  const thisItem = useTypedSelector(getItem);
  const clipboardExists = useTypedSelector(clipboard);
  const allFileIds = useTypedSelector(fileIds);
  const allFolderIds = useTypedSelector(folderIds);
  const currentItems = useTypedSelector(getCurrentItems);

  const [showBlue, setShowBlue] = useState(true);
  const [showGray, setShowGray] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [selectedType, setSelectedType] = useState<
    "file" | "folder" | "head" | ""
  >("");

  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });

  const appendTo = useRef<HTMLElement | null>(null);

  const [showInput, setShowInput] = useState(false);
  const [inputPadding, setInputPadding] = useState(0);

  const [inputType, setInputType] = useState<"file" | "folder" | "">("");
  const [isRename, setIsRename] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const actions = [
    {
      title: "New File",
      handler: () => {
        setInputType("file");
        createFileInput();
      },
      disabled: selectedType === "file",
    },
    {
      title: "New Folder",
      handler: () => {
        setInputType("folder");
        createFileInput();
      },
      disabled: selectedType === "file",
    },
    {
      type: "hr",
      handler: () => {},
    },
    {
      title: "Cut",
      handler: () => {
        dispatch(
          setToCopy({
            id: contextSelectedId,
            type: contextSelectedType as ItemType,
            isCut: true,
          })
        );
      },
      disabled: selectedType === "head",
    },
    {
      title: "Copy",
      handler: () => {
        dispatch(
          setToCopy({
            id: contextSelectedId,
            type: contextSelectedType as ItemType,
            isCut: false,
          })
        );
      },
      disabled: selectedType === "head",
    },
    {
      title: "Paste",
      handler: async () => {
        dispatch(copyNode());
        if (clipboardExists !== null && clipboardExists.isCut) {
          await dispatch(removeTabAsync());
          // await dispatch(setActiveEditorAsync({ id: '', line: 0 }));
        }
      },
      disabled: selectedType === "file" || clipboardExists === null,
    },
    {
      type: "hr",
      handler: () => {},
    },
    {
      title: "Rename",
      handler: () => {
        setInputType(
          clickedRef.current?.getAttribute("typeof-item") as
            | "file"
            | "folder"
            | ""
        );
        createFileInputForRename();
        setIsRename(true);
      },
      disabled: selectedType === "head",
    },
    {
      title: "Delete",
      handler: () => {
        setShowDialog(true);
      },
      disabled: selectedType === "head",
    },
  ];

  const setClickedCurrent = () => {
    let elem = fileSysRef.current?.querySelector(`#${selectedI}`);
    if (!elem) {
      elem = fileSysRef.current;
    }
    clickedRef.current = elem as HTMLElement;
  };

  const searchFiles = (searchTermNew: string) => {
    if (searchTermNew !== searchTerm) {
      setSearchTerm(searchTermNew);
    } else if (!isSearching && searchTerm.length > 0) {
      dispatch(search(searchTerm));
      setIsSearching(true);
    }
  };

  const fileActions = {
    newFile: () => {
      setInputType("file");
      dispatch(setContextSelectedForFileAction());
      setClickedCurrent();
      createFileInput();
    },

    newFolder: () => {
      setInputType("folder");
      dispatch(setContextSelectedForFileAction());
      setClickedCurrent();
      createFileInput();
    },

    download: () => {
      downloadZip();
    },
    collapseArea: () => {
      if (!fileSysRef.current) return;
      if (structureCollapsed) {
        fileSysRef.current.classList.remove("no-height");
      } else {
        fileSysRef.current.classList.add("no-height");
      }
      setStructureCollapsed(!structureCollapsed);
    },
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      const timer = setTimeout(() => {
        dispatch(search(searchTerm));
        setIsSearching(true);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    } else {
      if (isSearching) {
        setIsSearching(false);
        dispatch(search(""));
      }
    }
  }, [searchTerm]);

  const prependForPortal = (isRename: boolean) => {
    if (!clickedRef.current) {
      setClickedCurrent();
    }
    if (!clickedRef.current) {
      return;
    }
    if (clickedRef.current === fileSysRef.current) {
      appendTo.current = fileSysRef.current as HTMLElement;

      setInputPadding(0);
    } else {
      if (!isRename) {
        dispatch(
          collapseOrExpand({
            item: { id: clickedRef.current.id, type: "folder" },
            collapse: false,
          })
        );
      }

      if (isRename) {
        appendTo.current = clickedRef.current.parentElement as HTMLElement;
        clickedRef.current.classList.add("hide-input");
        setInputPadding(0);
      } else {
        appendTo.current = structureRef.current?.querySelector(
          "#ghost-input-" + clickedRef.current.id
        ) as HTMLElement;
        setInputPadding(1);
      }
    }
  };

  const showInputHandler = (v: boolean) => {
    if (v === showInput) return;
    setShowInput(v);
    if (allFileIds.length === 0 && allFolderIds.length === 1) {
      const welcome = document.getElementById("welcome") as HTMLElement;
      if (v && !welcome.classList.contains("display-none-c")) {
        welcome.classList.add("display-none-c");
      } else if (!v && welcome.classList.contains("display-none-c")) {
        welcome.classList.remove("display-none-c");
      }
    }
  };

  const createFileInput = () => {
    if (!fileSysRef.current) return;
    if (structureCollapsed) {
      fileSysRef.current.classList.remove("no-height");
      setStructureCollapsed(false);
    }
    dispatch(setParentItemId(contextSelectedId));
    prependForPortal(false);
    showInputHandler(true);
  };

  const createFileInputForRename = () => {
    dispatch(setParentItemId(""));
    prependForPortal(true);
    showInputHandler(true);
  };

  const inputSubmit = (value: string | false) => {
    if (!clickedRef.current) return;
    if (isRename || value === false) {
      showInputHandler(false);
      clickedRef.current?.classList.remove("hide-input");
      if (isRename && value !== false) {
        dispatch(renameNode({ value }));
      }
      setIsRename(false);
      return;
    } else {
      dispatch(addNode({ value, inputType: inputType as ItemType }));
    }

    showInputHandler(false);
  };

  useEffect(() => {
    if (isRename && !showInput) {
      clickedRef.current?.classList.remove("hide-input");
      setIsRename(false);
    }
  }, [isRename, showInput]);

  const handleContext = (
    e: { clientY: number; clientX: number },
    elem: HTMLElement
  ) => {
    if (!fileSysRef.current || !elem) return;
    const type = elem.getAttribute("typeof-item") as "file" | "folder" | "";
    const parentId = elem.getAttribute("parent-id") as string;
    if (type === null || parentId === null) {
      if (
        !elem.classList.contains("welcome") &&
        !elem.classList.contains("clickable-padding")
      ) {
        return;
      } else if (elem.classList.contains("file-sys-ref")) {
        clickedRef.current = elem;
      }
    }

    let item: HTMLElement | null = null;

    if (!elem.classList.contains("file-sys-container")) {
      item = fileSysRef.current.querySelector(`#${parentId}`);
    } else {
      item = fileSysRef.current;
    }

    clickedRef.current = item as HTMLElement;
    let x = e.clientY,
      y = e.clientX;

    if (e.clientY > window.innerHeight / 2) {
      x = e.clientY - 245;
    }
    if (e.clientX > window.innerWidth / 2) {
      y = e.clientX - 192;
    }

    setPoints({
      x,
      y,
    });

    setSelectedType(parentId === "head" ? "head" : type);
    setShowContext(true);
  };
  const contextHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (!fileSysRef.current) return;
    const elem = e.target as HTMLElement;
    handleContext({ clientY: e.clientY, clientX: e.clientX }, elem);
    const parentId = elem.getAttribute("parent-id") as string;
    const type = elem.getAttribute("typeof-item") as "file" | "folder" | "";

    dispatch(contextClick({ id: parentId, type, threeDot: false }));
  };

  useEffect(() => {
    if (!contextSelectedE) return;
    let elem: HTMLElement;
    if (contextSelectedId === "head") {
      elem = document.querySelector(".main-nav") as HTMLElement;
    } else {
      elem = fileSysRef.current?.querySelector(`#${contextSelectedId}`)
        ?.childNodes[0] as HTMLElement;
    }
    handleContext(
      { clientY: contextSelectedE.x, clientX: contextSelectedE.y },
      elem
    );
  }, [contextSelectedE]);

  useOutsideAlerter(structureRef, () => {
    if (selectedI !== "head") {
      setShowBlue(false);
      setShowGray(false);
    }
  });

  useEffect(() => {
    setShowBlue(true);
  }, [selectedI]);

  return (
    <>
      <div id="file-system" className="pr-2">
        <SearchInput
          style={searchInputStyle}
          searchFiles={searchFiles}
          className={searchInputClassName}
        />

        <div
          style={{ height: containerHeight }}
          className="bg-red-300 flex w-full flex-col justify-start"
        >
          <div className="my-2 flex flex-col items-start pl-2">
            <FileActions
              {...fileActions}
              collapsed={structureCollapsed}
              btnClassName={fileActionsBtnClassName}
              projectName={projectName}
              disableCollapse={fileActionsDisableCollapse}
              disableTooltip={fileActionsDisableTooltip}
              disableDownload={fileActionsDisableDownload}
            />
          </div>
          <div
            id="structure-container"
            parent-id={"head"}
            typeof-item={"folder"}
            className={`file-sys-container flex flex-col custom-scrollbar-2 pl-1 transition-[height] duration-300 ease-out ${
              structureCollapsed ? "no-height" : ""
            } ${structureContainerClassName}`}
            ref={fileSysRef}
            onClick={() => {
              dispatch(setSelected({ id: "head", type: "folder" }));
            }}
            onContextMenu={(e) => {
              contextHandler(e);
            }}
            // onClick={(e) => fileStructureClickHandler(e, fileSysRef)}
          >
            <div
              parent-id={"head"}
              typeof-item={"folder"}
              ref={structureRef}
              className="content flex items-center"
            >
              <Folder
                data={structureData}
                showBlue={showBlue}
                setShowBlue={setShowBlue}
                showGray={showGray}
                setShowGray={setShowGray}
                collapseBtnClassname={folderCollapseBtnClassname}
                collapseBtnStyle={folderCollapseBtnStyle}
                threeDotPrimaryClass={folderThreeDotPrimaryClass}
                threeDotSecondaryClass={folderThreeDotSecondaryClass}
                clickableAreaClassName={folderClickableAreaClassName}
                selectedClickableAreaClassName={
                  folderSelectedClickableAreaClassName
                }
                contextSelectedClickableAreaClassName={
                  folderContextSelectedClickableAreaClassName
                }
                itemTitleClassName={itemTitleClassName}
              />

              {allFileIds.length === 0 && allFolderIds.length === 1 && (
                <div
                  id="welcome"
                  parent-id={"head"}
                  typeof-item={"folder"}
                  className="mx-auto flex h-[40vh] items-center px-4"
                >
                  <span
                    parent-id={"head"}
                    typeof-item={"folder"}
                    className="select-none break-words rounded-lg border p-3 text-center text-base"
                  >
                    Create a File or Folder...
                  </span>
                </div>
              )}
            </div>
            <div
              parent-id={"head"}
              typeof-item={"folder"}
              className="min-h-[8rem] clickable-padding bg-blue-900"
            >
              &nbsp;
            </div>
          </div>
        </div>
        {showDialog &&
          createPortal(
            <Dialog
              title={`Delete the ${selectedType} ${contextSelectedItemProps.wholeName}?`}
              content={`Are you sure you want to delete the ${selectedType} /${contextSelectedItemProps.actualPath}? This action cannot be
            undone.`}
              className={deleteConfirmationClassName}
              actionText={`Yes, delete ${selectedType}`}
              close={setShowDialog}
              action={async () => {
                dispatch(removeNode({ id: null, type: null }));
                await dispatch(removeTabAsync());
                // await dispatch(setActiveEditorAsync({ id: '', line: 0 }));
                setShowDialog(false);
              }}
            />,
            document.getElementById("root") as HTMLElement
          )}

        {showContext &&
          createPortal(
            <MenuContext
              top={points.x}
              left={points.y}
              showContext={showContext}
              setShowContext={setShowContext}
              actions={actions}
              className={contextMenuClassName}
              clickableAreaClassName={contextMenuClickableAreaClassName}
              hrColor={contextMenuHrColor}
            />,
            document.getElementById("root") as HTMLElement
          )}
      </div>

      {usePrependPortal(
        <CustomInput
          className={fileInputClassName}
          style={fileInputStyle}
          closeCallback={() => {
            showInputHandler(false);
          }}
          submit={(value) => {
            inputSubmit(value);
          }}
          padding={inputPadding}
          show={clickedRef.current && showInput}
          item={{
            type: inputType,
            rename: isRename
              ? {
                  wholeName:
                    thisItem.type === "file"
                      ? `${thisItem.name}.${thisItem.extension}`
                      : thisItem.name,
                }
              : undefined,
          }}
          container={fileSysRef.current}
          existingItems={(() => {
            const items = currentItems.map((item) => {
              return {
                id: item.id,
                type: item.type,
                wholeName:
                  item.type === "file"
                    ? `${item.name}.${item.extension}`
                    : item.name,
              };
            });
            if (isRename) {
              return items.filter(({ id }) => id !== thisItem?.id);
            } else {
              return items;
            }
          })()}
        />,
        appendTo.current as HTMLElement
      )}
    </>
  );
};

export default Structure;
