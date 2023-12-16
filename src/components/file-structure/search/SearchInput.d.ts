import React from "react";
import { SearchResults } from "../../../state/features/structure/structureSlice";
export interface SearchInputProps {
    className?: string;
    style?: React.CSSProperties;
    onSearchFiles?: (searchTerm: string, searchResults: SearchResults) => void;
}
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
