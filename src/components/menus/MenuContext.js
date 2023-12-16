import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
const MenuContext = ({ top, left, setShowContext, actions, className, clickableAreaClassName, hrColor, }) => {
    const contextRef = useRef(null);
    useOutsideAlerter(contextRef, setShowContext);
    return (_jsx("div", { ref: contextRef, className: `absolute bg-monaco-color rounded-md px-1 py-2 w-48 box-border text-sm z-50 ${className}`, style: { top: `${top}px`, left: `${left}px` }, children: _jsx("ul", { className: "w-full", children: actions.map((action, index) => {
                if (action.type === "hr") {
                    return (_jsx("hr", { style: { borderTopColor: hrColor }, className: `my-2 border-t border-t-zinc-600` }, index));
                }
                else {
                    return (_jsx("li", { onClick: () => {
                            if (!action.disabled) {
                                action.handler();
                                setShowContext(false);
                            }
                        }, className: `rounded-md px-7 py-1 ${!action.disabled
                            ? `hover:bg-hover-blue cursor-pointer text-white ${clickableAreaClassName}`
                            : "text-zinc-500"} `, children: _jsx("span", { className: "select-none", children: action.title }) }, index));
                }
            }) }) }));
};
export default MenuContext;
