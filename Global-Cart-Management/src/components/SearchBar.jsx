
import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <span>🔍</span>
    </div>
  );
}

export default SearchBar;
