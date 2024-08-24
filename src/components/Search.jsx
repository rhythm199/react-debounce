import React from 'react'

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="search-input"
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search Restaurants"
      autoFocus
    />
  )
}

export default Search;
