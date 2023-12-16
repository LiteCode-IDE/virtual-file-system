import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import downArrowLogo from "../../../assets/left-arrow.svg";
import newFileIcon from "../../../assets/new-file.svg";
import newFolderIcon from "../../../assets/new-folder.svg";
import downloadIcon from "../../../assets/download.svg";
import { Tooltip } from "react-tooltip";
const FileActions = ({ newFile, newFolder, download, collapseArea, collapsed, btnClassName, projectName, disableCollapse, disableTooltip, disableDownload, }) => {
    return (_jsxs("div", { onClick: () => {
            if (!disableCollapse) {
                collapseArea();
            }
        }, className: `flex w-full select-none flex-row items-center ${!disableCollapse ? "cursor-pointer" : "cursor-default"}`, children: [_jsx("img", { src: downArrowLogo, className: `${!collapsed ? "rotate-[270deg]" : "rotate-180"} mr-2 mb-1 h-3 w-3 self-center transition-transform`, alt: "Down Arrow" }), _jsxs("span", { className: "flex w-full flex-row justify-between", children: [_jsx("span", { className: "text-black text-center overflow-x-clip mr-2", children: projectName ? projectName : "Files" }), _jsxs("span", { className: "flex items-center", children: [_jsxs("span", { className: "text-black", children: [!disableTooltip && (_jsx(Tooltip, { className: "z-50", id: "new-file", style: { backgroundColor: "rgb(60 60 60)" } })), _jsx("button", { type: "button", onClick: (e) => {
                                            e.stopPropagation();
                                            newFile();
                                        }, className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] mr-[2px] ${btnClassName}`, children: _jsx("img", { "data-tooltip-id": "new-file", "data-tooltip-content": "New File", src: newFileIcon, className: "h-5 w-5", alt: "New File" }) })] }), _jsxs("span", { className: "text-black", children: [!disableTooltip && (_jsx(Tooltip, { className: "z-50", id: "new-folder", style: { backgroundColor: "rgb(60 60 60)" } })), _jsx("button", { type: "button", onClick: (e) => {
                                            e.stopPropagation();
                                            newFolder();
                                        }, className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] mx-[2px] ${btnClassName}`, children: _jsx("img", { "data-tooltip-id": "new-folder", "data-tooltip-content": "New Folder", src: newFolderIcon, className: "h-5 w-5", alt: "New Folder" }) })] }), !disableDownload && (_jsxs("span", { className: "text-black", children: [!disableTooltip && (_jsx(Tooltip, { className: "z-50", id: "download-project", style: { backgroundColor: "rgb(60 60 60)" } })), _jsx("button", { type: "button", onClick: (e) => {
                                            e.stopPropagation();
                                            download();
                                        }, className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] ml-[2px] ${btnClassName}`, children: _jsx("img", { "data-tooltip-id": "download-project", "data-tooltip-content": "Download Project", src: downloadIcon, className: "h-5 w-5", alt: "Download Project" }) })] }))] })] })] }));
};
export default FileActions;
