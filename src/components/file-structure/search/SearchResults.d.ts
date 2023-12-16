import React from "react";
import { type MatchingFile } from "../../../state/features/structure/structureSlice";
interface SearchResultsProps {
    matchingFile: MatchingFile;
    fileAtLineClick: (id: string, lineNum: number) => void;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    titleClassName?: string;
    highlightClass?: string;
}
declare const SearchResults: React.FC<SearchResultsProps>;
export default SearchResults;
