
import React from "react";

function ThemeSwitcher({ theme, onToggle }) {
  return (
    <div className="theme-switcher">
      <button onClick={onToggle}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
