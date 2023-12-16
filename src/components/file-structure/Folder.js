import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { collapseOrExpand, contextSelectedItem, selectedItem, contextClick, clipboard, setSelected, } from "../../state/features/structure/structureSlice";
import { useTypedDispatch, useTypedSelector } from "../../state/hooks";
import { setActiveTabAsync } from "../../state/features/tabs/tabsSlice";
import CollapseBtn from "./widgets/CollapseBtn";
import ThreeDots from "./widgets/ThreeDots";
import ItemTitle from "./widgets/ItemTitle";
const Folder = ({ data, showBlue, setShowBlue, showGray, setShowGray, collapseBtnClassname, collapseBtnStyle, threeDotPrimaryClass, threeDotSecondaryClass, clickableAreaClassName, selectedClickableAreaClassName, contextSelectedClickableAreaClassName, itemTitleClassName, onItemSelected = () => { }, onItemContextSelected = () => { }, }) => {
    const dispatch = useTypedDispatch();
    const selected = useTypedSelector(selectedItem);
    const contextSelected = useTypedSelector(contextSelectedItem);
    const cutItem = useTypedSelector(clipboard);
    const children = useTypedSelector((state) => {
        const allData = data.map(({ id: itemId, type }) => {
            return state.structure.normalized[`${type}s`].byId[itemId];
        });
        return allData;
    });
    return (_jsx("div", { className: `${children.length > 0 && "w-full"}`, children: children.map((item) => {
            return (_jsxs("div", { className: "flex flex-col select-none mr-1 w-full", children: [_jsxs("div", { id: item.id, "typeof-item": item.type, className: `border border-transparent mr-1 transition-colors flex flex-row hover:cursor-pointer rounded-r-sm clickable hover:bg-slate-300 justify-between text-black ${clickableAreaClassName} ${selected === item.id && showBlue
                            ? `bg-vscode-overlay hover:bg-vscode-blue ${selectedClickableAreaClassName}`
                            : contextSelected === item.id && showGray
                                ? `bg-slate-700 hover:bg-slate-600 text-white ${contextSelectedClickableAreaClassName}`
                                : ""}  ${cutItem?.isCut && cutItem.id === item.id ? "opacity-50" : ""} }`, children: [_jsx(ItemTitle, { item: item, onClickE: (e) => {
                                    e.stopPropagation();
                                    dispatch(setSelected({ id: item.id, type: item.type }));
                                    setShowBlue(true);
                                    setShowGray(false);
                                    if (item.type === "file") {
                                        dispatch(setActiveTabAsync(item.id));
                                    }
                                    else {
                                        dispatch(collapseOrExpand({
                                            item: { id: item.id, type: item.type },
                                            collapse: true,
                                        }));
                                    }
                                    onItemSelected({ id: item.id, type: item.type });
                                }, className: itemTitleClassName }), _jsx(ThreeDots, { item: item, selected: selected, primaryClass: threeDotPrimaryClass, secondaryClass: threeDotSecondaryClass, showBlue: showBlue, onClickE: (e) => {
                                    e.stopPropagation();
                                    setShowBlue(false);
                                    setShowGray(true);
                                    dispatch(contextClick({
                                        id: item.id,
                                        type: item.type,
                                        threeDot: { x: e.clientY, y: e.clientX },
                                    }));
                                    onItemContextSelected({ id: item.id, type: item.type });
                                } })] }), _jsxs(_Fragment, { children: [_jsx("div", { id: `ghost-input-${item.id}` }), item.type === "folder" && !item.collapsed && (_jsxs("div", { className: "flex flex-row sub-folder", children: [_jsx(CollapseBtn, { item: item, className: collapseBtnClassname, style: collapseBtnStyle, onClickE: (e) => {
                                            e.stopPropagation();
                                            setShowBlue(true);
                                            setShowGray(false);
                                            dispatch(setSelected({ id: item.id, type: item.type }));
                                            dispatch(collapseOrExpand({
                                                item: { id: item.id, type: item.type },
                                                collapse: true,
                                            }));
                                        } }), _jsx(Folder, { data: (() => {
                                            const childFolder = data.find((newItem) => {
                                                return newItem.id === item.id;
                                            });
                                            return childFolder?.subFoldersAndFiles;
                                        })(), showBlue: showBlue, setShowBlue: setShowBlue, showGray: showGray, setShowGray: setShowGray, collapseBtnClassname: collapseBtnClassname, collapseBtnStyle: collapseBtnStyle, threeDotPrimaryClass: threeDotPrimaryClass, threeDotSecondaryClass: threeDotSecondaryClass, clickableAreaClassName: clickableAreaClassName, selectedClickableAreaClassName: selectedClickableAreaClassName, contextSelectedClickableAreaClassName: contextSelectedClickableAreaClassName, itemTitleClassName: itemTitleClassName, onItemSelected: onItemSelected, onItemContextSelected: onItemContextSelected })] }))] })] }, item.id));
        }) }));
};
export default Folder;
