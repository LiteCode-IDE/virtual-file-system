import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import { collapseMiniStructure, getBreadcrumbs, selectMiniStructure, setMiniStructureAsync, } from "../../state/features/structure/miniStructureSlice";
import MiniFolder from "../file-structure/MiniFolder";
import { createPortal } from "react-dom";
import { setSelected } from "../../state/features/structure/structureSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { setActiveTabAsync } from "../../state/features/tabs/tabsSlice";
import { getLogo } from "../file-structure/utils";
const Breadcrumbs = ({ containerClassName, textClassName, miniFolderCollapseBtnClassName, miniFolderCollapseBtnStyle, miniFolderContainerClassName, itemTitleClassName, onBreadcrumbFileClick = () => { }, }) => {
    const [clickedIndex, setClickedIndex] = useState(0);
    const [showMiniStructure, setShowMiniStructure] = useState(false);
    const miniStructure = useTypedSelector(selectMiniStructure);
    const breadcrumbsRef = useRef(null);
    const miniStructurePortalRef = useRef(null);
    const editorObj = useTypedSelector(getBreadcrumbs);
    const dispatch = useTypedDispatch();
    useOutsideAlerter(miniStructurePortalRef, setShowMiniStructure);
    return (_jsx(_Fragment, { children: editorObj !== null && (_jsxs(_Fragment, { children: [_jsx("div", { id: "breadcrumbs", ref: breadcrumbsRef, className: "select-none w-full", children: _jsx("div", { className: "breadcrumbs-container flex items-center justify-start m-2", children: editorObj.path.map((path, i) => (_jsx("div", { id: `${editorObj.path
                                .map((path) => path.replace(/[\.|\s]+/g, "-"))
                                .join("")}-${i}`, children: _jsxs("div", { className: `text-base text-black flex flex-row ${containerClassName}`, children: [i === editorObj.path.length - 1 && (_jsx("span", { className: `span-logo self-center w-4 h-4 ml-1 mr-[0.375rem] ${getLogo(path.split(".").reverse()[0])}` })), _jsx("span", { onClick: () => {
                                            setClickedIndex(i);
                                            setShowMiniStructure(true);
                                            dispatch(setMiniStructureAsync(editorObj.unmappedPath[i]));
                                        }, className: `cursor-pointer hover:underline hover:text-blue-400 ${textClassName}`, children: path }), i < editorObj.path.length - 1 && (_jsx("span", { className: "text-base text-black mx-2", children: "/" }))] }) }, `${editorObj.path
                            .map((path) => path.replace(/[\.|\s]+/g, "-"))
                            .join("")}-${i}`))) }) }), breadcrumbsRef.current && showMiniStructure && (_jsx(_Fragment, { children: (() => {
                        const id = `${editorObj.path
                            .map((path) => path.replace(/[\.|\s]+/g, "-"))
                            .join("")}-${clickedIndex}`;
                        const element = breadcrumbsRef.current.querySelector(`#${id}`);
                        if (element) {
                            return createPortal(_jsx("div", { ref: miniStructurePortalRef, className: "rounded-lg bg-dark-bg-2 border border-slate-600 absolute w-52 z-10 mt-2 max-h-60 overflow-y-auto custom-scrollbar-3", children: _jsx(MiniFolder, { init: true, data: miniStructure, onClickItem: (item) => {
                                        if (item.type === "folder") {
                                            dispatch(collapseMiniStructure(item.id));
                                        }
                                        else {
                                            dispatch(setSelected({ id, type: "file" }));
                                            dispatch(setActiveTabAsync(item.id));
                                            setShowMiniStructure(false);
                                            onBreadcrumbFileClick(id);
                                        }
                                    }, onCollapseMiniStructure: (id) => {
                                        dispatch(collapseMiniStructure(id));
                                    }, collapseBtnClassName: miniFolderCollapseBtnClassName, collapseBtnStyle: miniFolderCollapseBtnStyle, containerClassName: miniFolderContainerClassName, titleClassName: itemTitleClassName }) }), element);
                        }
                    })() }))] })) }));
};
export default Breadcrumbs;
