
import React from "react";

function ProductDetails({ product, onClose, onAdd, onWishlist }) {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="product-details">

        <button onClick={onClose}>✖ Close</button>

        <img
          src={product.image || "https://placehold.co/300"}
          alt={product.name}
        />

        <h2>{product.name}</h2>

        <p>Category: {product.category}</p>

        <p>Price: ₹{product.price}</p>

        <p>Original Price: ₹{product.originalPrice || product.price}</p>

        <p>Rating: ⭐ {product.rating || 0}</p>

        <p>Available Stock: {product.stock || 0}</p>

        <p>{product.description || "No description available."}</p>

        <button onClick={() => onAdd(product.id)}>
          Add to Cart
        </button>

        <button onClick={() => onWishlist(product.id)}>
          Add to Wishlist
        </button>

      </div>
    </div>
  );
}

export default ProductDetails;
