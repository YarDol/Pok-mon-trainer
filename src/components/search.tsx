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
    if ((e as React.KeyboardEvent<HTMLInputElement>).keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      onHandleSearch(search);
    }
  };

  return (
    <div className='search'>
      <div className="search__wrapper">
        <input
          className='search__input'
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder='Search your pokemon ... 😏'
          onKeyDown={handleClickSearch as React.KeyboardEventHandler<HTMLInputElement>}
          autoFocus
        />
        {/* <img className='search__icon' src={SearchIcon} alt="" /> */}
      </div>
      <button className='search__button' onClick={handleClickSearch}>Search</button>
    </div>
  );
};

export default Search;
