import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import deleteLogo from "../../assets/delete.svg";
import cross from "../../assets/cross.svg";
const Dialog = ({ title, content, actionText, close, action, className }) => {
    const dialogRef = useRef(null);
    useOutsideAlerter(dialogRef, () => {
        close(false);
    });
    return (_jsx("div", { className: "backdrop-brightness-50 absolute top-0 z-50 flex w-full h-full justify-center items-start pt-6 select-none", children: _jsxs("div", { ref: dialogRef, className: `bg-dark-hover border border-slate-600 shadow-sm p-4 rounded-lg flex flex-col my-2 h-fit w-96 text-white ${className}`, children: [_jsxs("div", { className: "flex flex-row justify-between", children: [_jsx("span", { className: "text-2xl font-semibold", children: title }), _jsx("span", { className: "self-start", children: _jsx("img", { src: cross, onClick: () => {
                                    close(false);
                                }, alt: "close", className: "transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline" }) })] }), _jsx("div", { className: "text-sm my-4", children: content }), _jsxs("div", { className: "flex justify-between my-2", children: [_jsx("div", { className: "w-32", children: "\u00A0" }), _jsxs("div", { className: "flex justify-between pl-12 w-full", children: [_jsx("button", { type: "button", onClick: () => {
                                        close(false);
                                    }, className: "text-sm px-2 py-1 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors", children: "Cancel" }), _jsxs("button", { type: "button", onClick: () => {
                                        action();
                                    }, className: "text-sm bg-red-700 hover:bg-red-500 px-2 py-1 rounded-lg transition-colors flex flex-row items-center", children: [_jsx("img", { alt: "delete", src: deleteLogo, className: "w-4 h-4 mr-1" }), actionText] })] })] })] }) }));
};
export default Dialog;
