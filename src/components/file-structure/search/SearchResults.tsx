import React, { useState } from "react";
import ItemTitle from "../widgets/ItemTitle";
import downArrowLogo from "../../../assets/left-arrow.svg";
import HighlightedText from "./HighlightedText";
import {
  type MatchingFile,
  getSearchTerm,
} from "../../../state/features/structure/structureSlice";
import { useTypedSelector } from "../../../state/hooks";

interface SearchResultsProps {
  matchingFile: MatchingFile;
  fileAtLineClick: (id: string, lineNum: number) => void;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  matchingFile,
  fileAtLineClick,
  headerClassName,
  headerStyle,
}) => {
  const [showResults, setShowResults] = useState(true);
  const searchTerm = useTypedSelector(getSearchTerm);
  return (
    <div className="flex flex-col w-full">
      <div
        onClick={() => {
          setShowResults(!showResults);
        }}
        style={headerStyle}
        className={`flex items-center w-full cursor-pointer hover:bg-dark-hover ${headerClassName}`}
      >
        <img
          src={downArrowLogo}
          className={`${
            showResults ? "rotate-[270deg]" : "rotate-180"
          } transition-transform w-3 h-3 ml-2 self-center`}
          alt="Right Arrow"
        />
        <ItemTitle
          item={{
            ...matchingFile,
            type: "file",
            logo: "typescript-logo",
          }}
          onClickE={() => {}}
        />
      </div>
      {showResults && (
        <div className="overflow-x-hidden">
          {matchingFile.matches.map(({ line, content }, i) => (
            <HighlightedText
              key={`${matchingFile.id}-${line}-${i}`}
              hightlight={searchTerm}
              lineOfText={content}
              lineNum={line}
              openAtLine={(l) => {
                fileAtLineClick(matchingFile.id, l);
              }}
              // highlightClass="bg-yellow-200 text-red-700"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
