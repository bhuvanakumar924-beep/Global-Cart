
import React from "react";

function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-dropdown">
      <label>Sort By: </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
        <option value="name">Name: A to Z</option>
      </select>
    </div>
  );
}

export default SortDropdown;
