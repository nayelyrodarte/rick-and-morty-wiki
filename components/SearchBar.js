import React from 'react';

function SearchBar({ search }) {
  return (
    <div>
      <input
        type='text'
        placeholder='Find by name...'
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
