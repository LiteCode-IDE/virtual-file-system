import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { getInitialSet, setContextSelectedForFileAction, setSelected, setProjectName, } from "../../state/features/structure/structureSlice";
import Folder from "./Folder";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import MenuContext from "../menus/MenuContext";
import CustomInput from "./widgets/CustomInput";
import { createPortal } from "react-dom";
import Dialog from "../menus/Dialog";
import { addNode, collapseOrExpand, contextClick, contextSelectedEvent, contextSelectedItem, removeNode, renameNode, getItem, setToCopy, copyNode, contextSelectedItemType, contextSelectedObj, clipboard, folderIds, fileIds, selectedItem, setParentItemId, getCurrentItems, } from "../../state/features/structure/structureSlice";
import { usePrependPortal } from "../../hooks/usePrependPortal";
import FileActions from "./widgets/FileActions";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import { removeTabAsync } from "../../state/features/tabs/tabsSlice";
import downloadZip from "../../state/features/structure/utils/downloadZip";
import { findParent } from "../../state/features/structure/utils/traversal";
import { store } from "../../state/store";
const Structure = ({ deleteConfirmationClassName, fileInputClassName, fileInputStyle, contextMenuClassName, contextMenuHrColor, contextMenuClickableAreaClassName, fileActionsBtnClassName, projectName, fileActionsDisableCollapse, fileActionsDisableTooltip, fileActionsDisableDownload, folderCollapseBtnClassname, folderCollapseBtnStyle, folderThreeDotPrimaryClass, folderThreeDotSecondaryClass, folderClickableAreaClassName, folderSelectedClickableAreaClassName, folderContextSelectedClickableAreaClassName, itemTitleClassName, structureContainerClassName, containerHeight, onItemSelected = () => { }, onNewItemClick = () => { }, onAreaCollapsed = () => { }, onItemContextSelected = () => { }, onNodeDeleted = () => { }, onNewItemCreated = () => { }, validExtensions, }) => {
    const fileSysRef = useRef(null);
    const structureRef = useRef(null);
    const clickedRef = useRef();
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
    const [showContext, setShowContext] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [points, setPoints] = useState({
        x: 0,
        y: 0,
    });
    const appendTo = useRef(null);
    const [showInput, setShowInput] = useState(false);
    const [inputPadding, setInputPadding] = useState(0);
    const [inputType, setInputType] = useState("");
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
            handler: () => { },
        },
        {
            title: "Cut",
            handler: () => {
                dispatch(setToCopy({
                    id: contextSelectedId,
                    type: contextSelectedType,
                    isCut: true,
                }));
            },
            disabled: selectedType === "head",
        },
        {
            title: "Copy",
            handler: () => {
                dispatch(setToCopy({
                    id: contextSelectedId,
                    type: contextSelectedType,
                    isCut: false,
                }));
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
            handler: () => { },
        },
        {
            title: "Rename",
            handler: () => {
                setInputType(clickedRef.current?.getAttribute("typeof-item"));
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
    const setClickedCurrent = (selectedItem = selectedI) => {
        let elem = fileSysRef.current?.querySelector(`#${selectedItem}`);
        if (!elem) {
            elem = fileSysRef.current;
        }
        clickedRef.current = elem;
    };
    const fileActions = {
        newFile: () => {
            setInputType("file");
            const parentId = findParent(selectedI, allFileIds, structureData);
            dispatch(setContextSelectedForFileAction(parentId));
            setClickedCurrent(parentId);
            createFileInput(parentId);
            onNewItemClick(parentId, "file");
        },
        newFolder: () => {
            setInputType("folder");
            const parentId = findParent(selectedI, allFileIds, structureData);
            dispatch(setContextSelectedForFileAction(parentId));
            setClickedCurrent(parentId);
            createFileInput(parentId);
            onNewItemClick(parentId, "folder");
        },
        download: () => {
            downloadZip();
        },
        collapseArea: () => {
            if (!fileSysRef.current)
                return;
            if (structureCollapsed) {
                fileSysRef.current.classList.remove("no-height");
            }
            else {
                fileSysRef.current.classList.add("no-height");
            }
            setStructureCollapsed(!structureCollapsed);
            onAreaCollapsed(!structureCollapsed);
        },
    };
    const prependForPortal = (isRename) => {
        if (!clickedRef.current) {
            setClickedCurrent();
        }
        if (!clickedRef.current) {
            return;
        }
        if (clickedRef.current === fileSysRef.current ||
            (clickedRef.current.id.includes("file") && !isRename)) {
            appendTo.current = fileSysRef.current;
            setInputPadding(0);
        }
        else {
            if (!isRename) {
                dispatch(collapseOrExpand({
                    item: { id: clickedRef.current.id, type: "folder" },
                    collapse: false,
                }));
            }
            if (isRename) {
                appendTo.current = clickedRef.current.parentElement;
                clickedRef.current.classList.add("hide-input");
                setInputPadding(0);
            }
            else {
                appendTo.current = structureRef.current?.querySelector("#ghost-input-" + clickedRef.current.id);
                setInputPadding(1);
            }
        }
    };
    const showInputHandler = (v) => {
        if (v === showInput)
            return;
        setShowInput(v);
        if (allFileIds.length === 0 && allFolderIds.length === 1) {
            const welcome = document.getElementById("welcome");
            if (v && !welcome.classList.contains("display-none-c")) {
                welcome.classList.add("display-none-c");
            }
            else if (!v && welcome.classList.contains("display-none-c")) {
                welcome.classList.remove("display-none-c");
            }
        }
    };
    const createFileInput = (parentId = contextSelectedId) => {
        if (!fileSysRef.current)
            return;
        if (structureCollapsed) {
            fileSysRef.current.classList.remove("no-height");
            setStructureCollapsed(false);
        }
        dispatch(setParentItemId(parentId));
        prependForPortal(false);
        showInputHandler(true);
    };
    const createFileInputForRename = () => {
        dispatch(setParentItemId(""));
        prependForPortal(true);
        showInputHandler(true);
    };
    const inputSubmit = (value) => {
        if (!clickedRef.current)
            return;
        if (isRename || value === false) {
            showInputHandler(false);
            clickedRef.current?.classList.remove("hide-input");
            if (isRename && value !== false) {
                dispatch(renameNode({ value }));
            }
            setIsRename(false);
            return;
        }
        else {
            dispatch(addNode({ value, inputType: inputType }));
        }
        showInputHandler(false);
        const allFileIds = store.getState().structure.normalized.files.allIds;
        onNewItemCreated(allFileIds[allFileIds.length - 1]);
    };
    useEffect(() => {
        if (projectName === undefined)
            return;
        dispatch(setProjectName(projectName));
    }, [projectName]);
    useEffect(() => {
        if (isRename && !showInput) {
            clickedRef.current?.classList.remove("hide-input");
            setIsRename(false);
        }
    }, [isRename, showInput]);
    const handleContext = (e, elem) => {
        if (!fileSysRef.current || !elem)
            return;
        const type = elem.getAttribute("typeof-item");
        const parentId = elem.getAttribute("parent-id");
        if (type === null || parentId === null) {
            if (!elem.classList.contains("welcome") &&
                !elem.classList.contains("clickable-padding")) {
                return;
            }
            else if (elem.classList.contains("file-sys-ref")) {
                clickedRef.current = elem;
            }
        }
        let item = null;
        if (!elem.classList.contains("file-sys-container")) {
            item = fileSysRef.current.querySelector(`#${parentId}`);
        }
        else {
            item = fileSysRef.current;
        }
        clickedRef.current = item;
        let x = e.clientY, y = e.clientX;
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
    const contextHandler = (e) => {
        e.preventDefault();
        if (!fileSysRef.current)
            return;
        const elem = e.target;
        handleContext({ clientY: e.clientY, clientX: e.clientX }, elem);
        const parentId = elem.getAttribute("parent-id");
        const type = elem.getAttribute("typeof-item");
        dispatch(contextClick({ id: parentId, type, threeDot: false }));
    };
    useEffect(() => {
        if (!contextSelectedE)
            return;
        let elem;
        if (contextSelectedId === "head") {
            elem = document.querySelector(".main-nav");
        }
        else {
            elem = fileSysRef.current?.querySelector(`#${contextSelectedId}`)
                ?.childNodes[0];
        }
        handleContext({ clientY: contextSelectedE.x, clientX: contextSelectedE.y }, elem);
    }, [contextSelectedE]);
    useOutsideAlerter(structureRef, () => {
        if (selectedI !== "head") {
            setShowBlue(false);
            setShowGray(false);
        }
        fileSysRef.current?.classList.add("border-transparent");
        fileSysRef.current?.classList.remove("border-vscode-blue");
    });
    useEffect(() => {
        setShowBlue(true);
    }, [selectedI]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "file-system", className: "pr-2", children: [_jsxs("div", { style: {
                            height: containerHeight ? containerHeight : "calc(80vh - 4rem)",
                        }, className: "flex w-full flex-col justify-start", children: [_jsx("div", { className: "my-2 flex flex-col items-start pl-2", children: _jsx(FileActions, { ...fileActions, collapsed: structureCollapsed, btnClassName: fileActionsBtnClassName, projectName: projectName, disableCollapse: fileActionsDisableCollapse, disableTooltip: fileActionsDisableTooltip, disableDownload: fileActionsDisableDownload }) }), _jsxs("div", { id: "structure-container", "parent-id": "head", "typeof-item": "folder", className: `border file-sys-container flex flex-col custom-scrollbar-2 pl-1 transition-[height] duration-300 ease-out ${structureCollapsed ? "no-height" : ""} ${structureContainerClassName} ${selectedI === "head" ? "border-vscode-blue" : "border-transparent"}`, ref: fileSysRef, onClick: () => {
                                    dispatch(setSelected({ id: "head", type: "folder" }));
                                    onItemSelected({ id: "head", type: "folder" });
                                }, onContextMenu: (e) => {
                                    contextHandler(e);
                                }, children: [_jsxs("div", { "parent-id": "head", "typeof-item": "folder", ref: structureRef, className: "content flex items-center", children: [_jsx(Folder, { data: structureData.subFoldersAndFiles, showBlue: showBlue, setShowBlue: setShowBlue, showGray: showGray, setShowGray: setShowGray, collapseBtnClassname: folderCollapseBtnClassname, collapseBtnStyle: folderCollapseBtnStyle, threeDotPrimaryClass: folderThreeDotPrimaryClass, threeDotSecondaryClass: folderThreeDotSecondaryClass, clickableAreaClassName: folderClickableAreaClassName, selectedClickableAreaClassName: folderSelectedClickableAreaClassName, contextSelectedClickableAreaClassName: folderContextSelectedClickableAreaClassName, itemTitleClassName: itemTitleClassName, onItemSelected: onItemSelected, onItemContextSelected: onItemContextSelected }), allFileIds.length === 0 && allFolderIds.length === 1 && (_jsx("div", { id: "welcome", "parent-id": "head", "typeof-item": "folder", onClick: (e) => e.stopPropagation(), onContextMenu: (e) => {
                                                    contextHandler(e);
                                                    onItemContextSelected({ id: "head", type: "folder" });
                                                }, className: "mx-auto flex h-[40vh] items-center pl-3 pr-4", children: _jsx("div", { "parent-id": "head", "typeof-item": "folder", className: "select-none break-words rounded-lg border p-3 text-center text-base", children: _jsxs("div", { "parent-id": "head", "typeof-item": "folder", className: "flex flex-col justify-center", children: [_jsx("div", { "parent-id": "head", "typeof-item": "folder", className: "flex items-center", children: "Create a file or folder..." }), _jsxs("div", { "parent-id": "head", "typeof-item": "folder", className: "my-2 flex w-full flex-col items-center justify-between text-sm", children: [_jsx("button", { "parent-id": "head", "typeof-item": "folder", type: "button", onClick: (e) => {
                                                                            e.stopPropagation();
                                                                            fileActions.newFile();
                                                                        }, className: "new-btns bg-vscode-overlay my-1 w-full rounded-lg px-1 py-2 transition-colors hover:bg-vscode-blue", children: _jsx("span", { "parent-id": "head", "typeof-item": "folder", className: "relative text-white", children: "New File" }) }), _jsx("button", { "parent-id": "head", "typeof-item": "folder", type: "button", onClick: (e) => {
                                                                            e.stopPropagation();
                                                                            fileActions.newFolder();
                                                                        }, className: "new-btns bg-vscode-overlay my-1 w-full rounded-lg  px-1 py-2 transition-colors hover:bg-vscode-blue", children: _jsx("span", { "parent-id": "head", "typeof-item": "folder", className: "relative text-white", children: "New Folder" }) })] })] }) }) }))] }), _jsx("div", { "parent-id": "head", "typeof-item": "folder", className: "min-h-[8rem] clickable-padding", children: "\u00A0" })] })] }), showDialog &&
                        createPortal(_jsx(Dialog, { title: `Delete the ${selectedType} ${contextSelectedItemProps.wholeName}?`, content: `Are you sure you want to delete the ${selectedType} /${contextSelectedItemProps.actualPath}? This action cannot be
            undone.`, className: deleteConfirmationClassName, actionText: `Yes, delete ${selectedType}`, close: setShowDialog, action: async () => {
                                onNodeDeleted(contextSelectedItemProps.id);
                                dispatch(removeNode({ id: null, type: null }));
                                await dispatch(removeTabAsync());
                                // await dispatch(setActiveEditorAsync({ id: '', line: 0 }));
                                setShowDialog(false);
                            } }), document.getElementById("root")), showContext &&
                        createPortal(_jsx(MenuContext, { top: points.x, left: points.y, showContext: showContext, setShowContext: setShowContext, actions: actions, className: contextMenuClassName, clickableAreaClassName: contextMenuClickableAreaClassName, hrColor: contextMenuHrColor }), document.getElementById("root"))] }), usePrependPortal(_jsx(CustomInput, { className: fileInputClassName, style: fileInputStyle, closeCallback: () => {
                    showInputHandler(false);
                }, submit: (value) => {
                    inputSubmit(value);
                }, validExtensions: validExtensions, padding: inputPadding, show: clickedRef.current && showInput, item: {
                    type: inputType,
                    rename: isRename
                        ? {
                            wholeName: thisItem.type === "file"
                                ? `${thisItem.name}.${thisItem.extension}`
                                : thisItem.name,
                        }
                        : undefined,
                }, container: fileSysRef.current, existingItems: (() => {
                    const items = currentItems.map((item) => {
                        return {
                            id: item.id,
                            type: item.type,
                            wholeName: item.type === "file"
                                ? `${item.name}.${item.extension}`
                                : item.name,
                        };
                    });
                    if (isRename) {
                        return items.filter(({ id }) => id !== thisItem?.id);
                    }
                    else {
                        return items;
                    }
                })() }), appendTo.current)] }));
};
export default Structure;
