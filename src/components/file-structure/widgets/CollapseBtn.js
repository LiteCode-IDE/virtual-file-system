import { jsx as _jsx } from "react/jsx-runtime";
const CollapseBtn = ({ item, onClickE, className, style, }) => {
    return (_jsx("button", { type: "button", "parent-id": item.id, "typeof-item": item.type, onClick: (e) => {
            onClickE(e);
        }, style: style, className: `transition-colors w-[14px] border-r hover:border-vscode-blue border-monaco-color ${className}` }));
};
export default CollapseBtn;
