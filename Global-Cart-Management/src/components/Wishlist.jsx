
import React from "react";

function Wishlist({
  open,
  products,
  onClose,
  onAdd,
  onRemove
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="wishlist">

        <h2>My Wishlist ❤️</h2>

        <button onClick={onClose}>Close</button>

        {products.length === 0 ? (
          <p>Your wishlist is empty!</p>
        ) : (
          products.map((product) => (
            <div className="wishlist-item" key={product.id}>

              <img
                src={product.image || "https://placehold.co/100"}
                alt={product.name}
                width="100"
              />

              <h3>{product.name}</h3>

              <p>Price: ₹{product.price}</p>

              <button onClick={() => onAdd(product.id)}>
                Add to Cart
              </button>

              <button onClick={() => onRemove(product.id)}>
                Remove
              </button>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Wishlist;
