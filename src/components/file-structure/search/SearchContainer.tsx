import React, { useEffect } from "react";
import SearchResults from "./SearchResults";
import { useTypedDispatch, useTypedSelector } from "../../../state/hooks";
import {
  getSearchResults,
  setSelected,
} from "../../../state/features/structure/structureSlice";
import { setActiveTabAsync } from "../../../state/features/tabs/tabsSlice";

interface SearchContainerProps {
  highlightedTextClassName?: string;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  titleClassName?: string;
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  highlightedTextClassName,
  headerClassName,
  headerStyle,
  titleClassName,
}) => {
  const searchData = useTypedSelector(getSearchResults);

  return (
    <div className="select-none w-full h-fit pr-1">
      <div className="m-2">
        {searchData.numOfLines} result{searchData.numOfLines !== 1 && "s"} in{" "}
        {searchData.numOfResults} file{searchData.numOfResults !== 1 && "s"}
      </div>
      {searchData.files.map((file) => (
        <div className="w-full z-0" key={`search-results-${file.id}`}>
          <SearchResults
            matchingFile={file}
            fileAtLineClick={(id, line) => {
              // TODO
              // File Clicked
            }}
            highlightClass={highlightedTextClassName}
            headerClassName={headerClassName}
            headerStyle={headerStyle}
            titleClassName={titleClassName}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchContainer;
