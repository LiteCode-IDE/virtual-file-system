import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import { getLogo, validate } from "../utils";
const newFileIcon = "new-file-logo";
const errorIcon = "error-logo";
const addFolderIcon = "closed-folder";
const renameIcon = "rename-logo";
const CustomInput = ({ closeCallback, submit, padding, show, item, container, validExtensions, existingItems, className, style, }) => {
    const [value, setValue] = useState(item.rename?.wholeName ? item.rename.wholeName : "");
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const errorRef = useRef(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // const [extension, setExtension] = useState("");
    const originalLogo = item.rename
        ? renameIcon
        : item.type === "file"
            ? newFileIcon
            : addFolderIcon;
    const [logo, setLogo] = useState(originalLogo);
    const [position, setPosition] = useState("bottom");
    const direction = (container) => {
        if (!container)
            return "";
        if (!containerRef.current)
            return "";
        const containerTop = container.offsetTop;
        const containerScrollTop = container.scrollTop;
        const elementTop = containerRef.current.offsetTop;
        const elementRelativeTop = elementTop - containerTop;
        if (!(elementRelativeTop - containerScrollTop < 393 &&
            containerScrollTop < elementRelativeTop)) {
            return "";
        }
        else if (elementRelativeTop - containerScrollTop < 196) {
            return "bottom";
        }
        else if (containerScrollTop - 196 < elementRelativeTop) {
            return "top";
        }
        else {
            return "";
        }
    };
    const setValidationResult = (res) => {
        if (res.error) {
            if (res.errorMessage !== "") {
                setError(true);
                setLogo(errorIcon);
                setErrorMessage(res.errorMessage);
            }
            else {
                setError(true);
                setLogo(originalLogo);
                setErrorMessage("");
            }
        }
        else {
            setError(false);
            if (item.type === "file") {
                setLogo(getLogo(res.ext));
            }
            else {
                setLogo(originalLogo);
            }
            setErrorMessage("");
        }
    };
    useEffect(() => {
        if (!errorRef.current || !error || errorMessage === "" || !container) {
            return;
        }
        const changeDirection = direction(container);
        if (changeDirection !== "" && changeDirection !== position) {
            setPosition(changeDirection);
        }
    }, [error, errorMessage, container, position]);
    useOutsideAlerter(containerRef, () => {
        if (!error && value.length > 0) {
            submit(value);
        }
        closeCallback(false);
    });
    useEffect(() => {
        if (!inputRef.current)
            return;
        setTimeout(() => {
            inputRef.current?.focus();
            if (item.rename) {
                const idx = item.rename.wholeName?.lastIndexOf(".");
                inputRef.current?.select();
                if (idx !== undefined && idx !== -1) {
                    inputRef.current?.setSelectionRange(0, idx);
                }
            }
        }, 0);
    }, [show, item.rename]);
    useEffect(() => {
        const res = validate(undefined, item, value, existingItems, validExtensions);
        setValidationResult(res);
    }, [value]);
    return (_jsx("div", { className: `py-[0.32rem] ${show ? "block" : "hidden"} ${padding === 0 ? "mx-1 pr-1 pl-[0.3rem]" : "pl-[1.3rem]"}`, ref: containerRef, style: { wordWrap: "break-word" }, children: _jsxs("div", { className: "flex flex-row", children: [_jsx("span", { className: `span-logo ml-[3px] ${logo} w-[14px] mr-[6px]`, children: "\u00A0" }), _jsxs("div", { className: "flex mx-1 relative flex-col w-[80%] max-w-[10rem]", children: [_jsx("input", { className: `rounded-none border text-white border-monaco-color outline-0 w-full bg-monaco-color text-black ${error && errorMessage !== ""
                                ? "focus:border-red-500"
                                : "focus:border-cyan-500"} ${className}`, style: style, value: value, autoFocus: true, onChange: (e) => {
                                setValue(e.target.value);
                            }, onKeyDown: (e) => {
                                if (e.key === "Enter") {
                                    if (!error && value.trim().length > 0) {
                                        submit(value);
                                    }
                                    else if (value.trim().length === 0) {
                                        setError(true);
                                        setLogo(errorIcon);
                                        setErrorMessage(`The ${item.type} name cannot be empty. Please enter a valid name.`);
                                    }
                                    else {
                                        const res = validate(true, item, value, existingItems, validExtensions);
                                        setValidationResult(res);
                                    }
                                }
                                else if (e.key === "Escape") {
                                    submit(false);
                                }
                            }, ref: inputRef }), error && errorMessage !== "" && (_jsx("div", { ref: errorRef, className: `w-fit z-10 select-none absolute flex items-start p-1 border border-red-500 bg-red-900 text-sm text-white ${position !== "top" ? "top-7" : "bottom-7"}`, children: errorMessage }))] })] }) }));
};
export default CustomInput;
