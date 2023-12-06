import React, { useRef, useEffect, useState } from "react";

import {
  type ItemType,
  getInitialSet,
  isResizeCollapsed,
  setContextSelectedForFileAction,
  setResizeCollapsed,
  setSearchFocused,
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
import searchIcon from "../../assets/search-icon.svg";
import fileExplorer from "../../assets/file-explorer.svg";
import { Tooltip } from "react-tooltip";
import downloadZip from "../../state/features/structure/utils/downloadZip";
import SearchInput from "./search/SearchInput";
import SearchContainer from "./search/SearchContainer";

const Structure: React.FC = () => {
  const fileSysRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  const clickedRef = useRef<HTMLElement>();
  const [structureCollapsed, setStructureCollapsed] = useState(false);

  const dispatch = useTypedDispatch();
  const isCollapsed = useTypedSelector(isResizeCollapsed);
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
      if (!elem.classList.contains("welcome")) {
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

    if (e.clientY > 335) {
      setPoints({
        x: e.clientY - 310,
        y: e.clientX,
      });
    } else {
      setPoints({
        x: e.clientY - 70,
        y: e.clientX,
      });
    }

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
      {!isCollapsed ? (
        <div id="file-system" className="pr-2">
          <SearchInput
            style={{ height: "50px" }}
            searchFiles={searchFiles}
            className="w-fit self-center rounded-none bg-slate-200 p-2 hover:bg-slate-500 focus:bg-slate-500 focus:outline-none active:outline-none "
          />

          <div className="left-wrapper flex w-full flex-col justify-start">
            <div className="my-2 flex flex-col items-start pl-2">
              {isSearching && allFileIds.length > 0 ? (
                <div className="custom-scrollbar-3 h-[70vh] w-full overflow-y-auto">
                  <SearchContainer />
                </div>
              ) : (
                <FileActions {...fileActions} collapsed={structureCollapsed} />
              )}
            </div>
            {!isSearching && (
              <div
                id="structure-container"
                parent-id={"head"}
                typeof-item={"folder"}
                className={`file-sys-container custom-scrollbar-2 pl-1 transition-[height] duration-300 ease-out ${
                  structureCollapsed ? "no-height" : ""
                }`}
                ref={fileSysRef}
                onClick={(e) => {
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
                        Start developing with LiteCode...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {showDialog &&
            createPortal(
              <Dialog
                title={`Delete the ${selectedType} ${contextSelectedItemProps.wholeName}?`}
                content={`Are you sure you want to delete the ${selectedType} /${contextSelectedItemProps.actualPath}? This action cannot be
            undone.`}
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
                className="bg-blue-900"
                clickableAreaClassName="hover:bg-orange-500 text-white"
                hrColor="green"
              />,
              document.getElementById("file-system") as HTMLElement
            )}
        </div>
      ) : (
        <div className="flex h-full w-20 select-none flex-col items-center justify-start px-2">
          <Tooltip
            place="right-end"
            className="z-50"
            id="search"
            style={{ backgroundColor: "rgb(60 60 60)" }}
          />

          <button
            onClick={() => {
              dispatch(setResizeCollapsed(false));
              dispatch(setSearchFocused(true));
            }}
            type="button"
            className="mb-3"
          >
            <img
              alt="search"
              data-tooltip-id="search"
              data-tooltip-content={"Search"}
              src={searchIcon}
              className="h-14 w-14 rounded-md p-2 hover:bg-dark-hover"
            />
          </button>
          <hr className="w-5/6 border-t border-t-zinc-500" />
          <Tooltip
            place="right-start"
            className="z-50"
            id="file-explorer"
            style={{ backgroundColor: "rgb(60 60 60)" }}
          />

          <button
            onClick={() => {
              dispatch(setResizeCollapsed(false));
              dispatch(setSearchFocused(false));
              // dispatch(search(""));
              setIsSearching(false);
            }}
            type="button"
            className="my-3"
          >
            <img
              alt="file explorer"
              data-tooltip-id="file-explorer"
              data-tooltip-content={"File Explorer"}
              src={fileExplorer}
              className="h-14 w-14 rounded-md p-2 hover:bg-dark-hover"
            />
          </button>
        </div>
      )}
      {usePrependPortal(
        <CustomInput
          className="bg-slate-200 text-black"
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
