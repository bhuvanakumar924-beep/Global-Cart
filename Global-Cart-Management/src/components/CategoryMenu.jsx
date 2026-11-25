
import React from "react";

function CategoryMenu({ selected, onSelect }) {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home"
  ];

  return (
    <div className="category-menu">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selected === category ? "active-category" : ""
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
