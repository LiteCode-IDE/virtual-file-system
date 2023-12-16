import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import SearchResults from "./SearchResults";
import { useTypedSelector } from "../../../state/hooks";
import { getSearchResults, } from "../../../state/features/structure/structureSlice";
const SearchContainer = ({ highlightedTextClassName, headerClassName, headerStyle, titleClassName, }) => {
    const searchData = useTypedSelector(getSearchResults);
    return (_jsxs("div", { className: "select-none w-full h-fit pr-1", children: [_jsxs("div", { className: "m-2", children: [searchData.numOfLines, " result", searchData.numOfLines !== 1 && "s", " in", " ", searchData.numOfResults, " file", searchData.numOfResults !== 1 && "s"] }), searchData.files.map((file) => (_jsx("div", { className: "w-full z-0", children: _jsx(SearchResults, { matchingFile: file, 
                    // @ts-ignore
                    fileAtLineClick: (id, line) => {
                        // TODO
                        // File Clicked
                    }, highlightClass: highlightedTextClassName, headerClassName: headerClassName, headerStyle: headerStyle, titleClassName: titleClassName }) }, `search-results-${file.id}`)))] }));
};
export default SearchContainer;
