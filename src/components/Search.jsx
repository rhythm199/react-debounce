import React from 'react'

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <h1 style={{ padding: '10px' }}>Debouncing in ReactJs</h1>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Restaurants"
        autoFocus
      />
    </>
  )
}

export default Search;
