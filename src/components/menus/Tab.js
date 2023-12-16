import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import cross from "../../assets/cross.svg";
import { getLogo } from "../file-structure/utils";
const Tab = ({ id, name, type, selected, onSelect, onClose, className, selectedTabClassName }) => {
    const fileType = name.substring(name.lastIndexOf(".") + 1);
    const [logo, setLogo] = React.useState(getLogo(fileType));
    useEffect(() => {
        setLogo(getLogo(type));
    }, [type]);
    return (_jsxs("div", { onClick: () => {
            if (!selected)
                onSelect(id);
        }, className: `hover-show hover:bg-slate-700 hover:text-white border-t-dark-bg border-t transition-colors py-2 pl-3 pr-2 flex flex-row flex-shrink-0 cursor-pointer select-none items-center rounded-sm mx-[1px] ${className} ${selected
            ? `bg-dark-hover text-white border-t-slate-200 ${selectedTabClassName}`
            : ""}`, children: [_jsx("span", { className: `span-logo w-4 h-4 ${logo}`, children: "\u00A0" }), _jsx("span", { className: "text-lg mx-2", children: name }), _jsx("span", { className: "self-start", children: _jsx("button", { type: "button", className: "show-on-hover transition-opacity", onClick: e => {
                        e.stopPropagation();
                        onClose(id);
                    }, children: _jsx("img", { 
                        // data-tooltip-id="close-tab"
                        // data-tooltip-content={"Close tab"}
                        src: cross, alt: "close", className: "transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline" }) }) })] }));
};
export default Tab;
