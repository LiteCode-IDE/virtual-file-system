import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ItemTitle from "../widgets/ItemTitle";
import downArrowLogo from "../../../assets/left-arrow.svg";
import HighlightedText from "./HighlightedText";
import { getSearchTerm, } from "../../../state/features/structure/structureSlice";
import { useTypedSelector } from "../../../state/hooks";
const SearchResults = ({ matchingFile, fileAtLineClick, headerClassName, headerStyle, titleClassName, highlightClass }) => {
    const [showResults, setShowResults] = useState(true);
    const searchTerm = useTypedSelector(getSearchTerm);
    return (_jsxs("div", { className: "flex flex-col w-full", children: [_jsxs("div", { onClick: () => {
                    setShowResults(!showResults);
                }, style: headerStyle, className: `flex items-center w-full cursor-pointer hover:bg-dark-hover ${headerClassName}`, children: [_jsx("img", { src: downArrowLogo, className: `${showResults ? "rotate-[270deg]" : "rotate-180"} transition-transform w-3 h-3 ml-2 self-center`, alt: "Right Arrow" }), _jsx(ItemTitle, { item: {
                            ...matchingFile,
                            type: "file"
                        }, onClickE: () => { }, className: titleClassName })] }), showResults && (_jsx("div", { className: "overflow-x-hidden", children: matchingFile.matches.map(({ line, content }, i) => (_jsx(HighlightedText, { hightlight: searchTerm, lineOfText: content, lineNum: line, openAtLine: (l) => {
                        fileAtLineClick(matchingFile.id, l);
                    }, highlightClass: highlightClass }, `${matchingFile.id}-${line}-${i}`))) }))] }));
};
export default SearchResults;
