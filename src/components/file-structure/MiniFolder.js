import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ItemTitle from "./widgets/ItemTitle";
import CollapseBtn from "./widgets/CollapseBtn";
const MiniFolder = ({ init, data, onClickItem, onCollapseMiniStructure, collapseBtnClassName, collapseBtnStyle, containerClassName, titleClassName, }) => {
    const children = data.subFoldersAndFiles;
    return (_jsx("div", { className: "w-full h-fit", children: children.map((item, i) => {
            return (_jsxs("div", { className: "flex flex-col select-none", children: [_jsx("div", { className: `transition-colors flex flex-row hover:cursor-pointer hover:bg-dark-hover justify-between text-white ${init &&
                            (i === 0
                                ? "rounded-t-lg"
                                : i === children.length - 1
                                    ? "rounded-b-lg"
                                    : "")} ${containerClassName}`, children: _jsx(ItemTitle, { item: item, onClickE: () => {
                                onClickItem({ id: item.id, type: item.type });
                            }, className: titleClassName }) }), _jsx(_Fragment, { children: item.type === "folder" && !item.collapsed && (_jsxs("div", { className: "flex flex-row sub-folder", children: [_jsx(CollapseBtn, { item: item, className: collapseBtnClassName, style: collapseBtnStyle, onClickE: () => {
                                        onCollapseMiniStructure(item.id);
                                    } }), _jsx(MiniFolder, { init: false, data: item, onClickItem: onClickItem, onCollapseMiniStructure: onCollapseMiniStructure, collapseBtnClassName: collapseBtnClassName, collapseBtnStyle: collapseBtnStyle, titleClassName: titleClassName })] })) })] }, `key-${item.id}`));
        }) }));
};
export default MiniFolder;
