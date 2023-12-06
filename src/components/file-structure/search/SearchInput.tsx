import React, { useEffect, useRef, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../state/hooks';
import { getSearchTerm, searchFocus, setSearchFocused } from '../../../state/features/structure/structureSlice';

interface SearchInputProps {
  searchFiles: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchFiles }) => {
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
    <div className="mb-2 w-full px-2">
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
          className="w-full self-center rounded-lg bg-dark-bg-2 p-2 hover:bg-dark-hover focus:bg-dark-hover focus:outline-none active:outline-none"
        />
      </form>
    </div>
  );
};

export default SearchInput;
