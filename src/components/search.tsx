import React, { useState } from 'react';

interface SearchProps {
  onHandleSearch: (text: string | null) => void;
}

const Search: React.FC<SearchProps> = ({ onHandleSearch }) => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) onHandleSearch(null);
  };

  const handleClickSearch = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e as React.KeyboardEvent<HTMLInputElement>).key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      onHandleSearch(search);
    }
  };

  return (
    <div className="flex mb-8">
      <div className="relative flex-grow">
        <input
          className="w-full py-2.5 pr-10 pl-2.5 rounded outline-black border border-black"
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder='Search your pokemon ...'
          onKeyDown={handleClickSearch as React.KeyboardEventHandler<HTMLInputElement>}
          autoFocus
        />
        <button className="absolute inset-y-0 right-0 px-4 rounded-r bg-black text-white font-bold" onClick={handleClickSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
