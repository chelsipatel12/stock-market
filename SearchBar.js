import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Implement search functionality here
  };

  return (
    <div className='search-bar-container'>
      <input
        type='text'
        placeholder='Search for stocks...'
        className='search-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' onClick={handleSearch}>
        <i className='fas fa-search'></i>
      </button>
    </div>
  );
}

export default SearchBar;
