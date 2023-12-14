import React, { useEffect, useRef, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../state/hooks";
import {
  SearchResults,
  getSearchResults,
  search,
} from "../../../state/features/structure/structureSlice";

export interface SearchInputProps {
  className?: string;
  style?: React.CSSProperties;
  onSearchFiles?: (searchTerm: string, searchResults: SearchResults) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  style,
  onSearchFiles = () => {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTypedDispatch();
  const searchResults = useTypedSelector(getSearchResults);

  const searchFiles = (searchTermNew: string) => {
    if (searchTermNew.length > 0) {
      const timer = setTimeout(() => {
        dispatch(search(searchTermNew));
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    } else {
      dispatch(search(""));
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      onSearchFiles(searchTerm, searchResults);
    }
  }, [searchResults]);

  return (
    <div className="my-2 w-full px-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchFiles(searchTerm);
        }}
      >
        <input
          ref={searchInputRef}
          onInput={(e) => {
            const searchTerm = e.currentTarget.value;
            setSearchTerm(searchTerm);
            searchFiles(searchTerm);
          }}
          value={searchTerm}
          placeholder="Search"
          style={style}
          className={`w-full self-center rounded-lg p-2 bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none active:outline-none text-black ${className}`}
        />
      </form>
    </div>
  );
};

export default SearchInput;
