import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getLogo } from "../utils";
const ItemTitle = ({ item, onClickE, className }) => {
    const findLogo = (item) => {
        if (item.type === "folder") {
            return item.collapsed ? "closed-folder" : "opened-folder";
        }
        else if (item.type === "file" && item.extension) {
            return getLogo(item.extension);
        }
    };
    return (_jsxs("div", { onClick: (e) => {
            onClickE(e);
        }, "parent-id": item.id, "typeof-item": item.type, className: `w-full py-[0.32rem] pl-3 flex flex-row justify-start items-center collapsable ${className}`, children: [_jsx("span", { "typeof-item": item.type, "parent-id": item.id, className: `span-logo span-logo-width ${findLogo(item)}`, children: "\u00A0" }), _jsx("span", { "typeof-item": item.type, "parent-id": item.id, className: "px-1 mx-1 ", children: (() => {
                    let newName = "";
                    if (item.type === "file") {
                        const fullName = `${item.name}.${item.extension}`;
                        newName = fullName;
                    }
                    else if (item.type === "folder") {
                        newName = item.name;
                    }
                    return newName;
                })() })] }));
};
export default ItemTitle;
