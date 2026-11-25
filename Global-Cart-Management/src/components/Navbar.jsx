
import React from "react";

function Navbar({
  cartCount,
  wishlistCount,
  onCart,
  onWishlist,
  onAdmin
}) {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Global Cart</h2>
      </div>

      <div className="nav-buttons">

        <button onClick={onAdmin}>
          + Add Product
        </button>

        <button onClick={onWishlist}>
          ❤️ Wishlist ({wishlistCount || 0})
        </button>

        <button onClick={onCart}>
          🛒 Cart ({cartCount || 0})
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
