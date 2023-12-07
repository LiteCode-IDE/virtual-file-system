import React, { useEffect, useRef, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../state/hooks";
import {
  getSearchTerm,
  searchFocus,
  setSearchFocused,
} from "../../../state/features/structure/structureSlice";

interface SearchInputProps {
  searchFiles: (searchTerm: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchFiles,
  className,
  style,
}) => {
  const search = useTypedSelector(getSearchTerm);
  const [searchTerm, setSearchTerm] = useState(search);

  const searchInputRef = useRef<any>(null);
  const dispatch = useTypedDispatch();
  const shouldSearchFocus = useTypedSelector(searchFocus);

  useEffect(() => {
    if (!searchInputRef.current) return;
    if (shouldSearchFocus) {
      searchInputRef.current.focus();
      dispatch(setSearchFocused(false));
    }
  }, []);

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
