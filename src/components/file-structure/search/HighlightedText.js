import { jsx as _jsx } from "react/jsx-runtime";
const HighlightedText = ({ hightlight, lineOfText, lineNum, openAtLine, highlightClass }) => {
    const parts = lineOfText.split(new RegExp(`(${hightlight})`, "gi"));
    return (_jsx("div", { onClick: () => {
            openAtLine(lineNum);
        }, className: "whitespace-nowrap my-1 ml-3 pl-1 cursor-pointer hover:bg-dark-hover", children: parts.map((part) => (() => {
            if (part === hightlight) {
                return _jsx("span", { className: `bg-orange-400 text-black ${highlightClass}`, children: part });
            }
            return part;
        })()) }));
};
export default HighlightedText;
