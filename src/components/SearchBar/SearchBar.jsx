import React from "react";
import './SearchBar.css'
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by ID, Name, Email"
            className="search-bar"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginLeft: "10px", padding: "5px", width: "250px" }}
    />
  );
};

export default SearchBar;
