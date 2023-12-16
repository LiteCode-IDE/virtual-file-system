import { jsx as _jsx } from "react/jsx-runtime";
const ThreeDots = ({ item, selected, showBlue, onClickE, primaryClass, secondaryClass, }) => {
    return (_jsx("button", { type: "button", "typeof-item": item.type, "parent-id": item.id, onClick: (e) => {
            onClickE(e);
        }, className: `px-2 rounded-r-sm ${selected === item.id && showBlue
            ? `hover:bg-blue-400 ${primaryClass}`
            : `hover:bg-slate-500 ${secondaryClass}`}`, children: _jsx("span", { className: "three-dots transition-opacity", children: "\u00A0" }) }));
};
export default ThreeDots;
