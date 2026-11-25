
import React, { useState } from "react";

function ProductCard({
  product,
  isWishlisted,
  onWishlist,
  onAdd,
  onView,
  onEdit,
  onDelete
}) {
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions?.[0] || product.sizes?.[0] || "1kg"
  );

  const fallbackImages = {
    Fruits:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600",
    Vegetables:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
    Grocery:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
  };

  const fallbackImage =
    fallbackImages[product.category] || fallbackImages.Grocery;

  const imageUrl = product.image || fallbackImage;

  const getPrice = () => {
    const weight = selectedWeight.toLowerCase();

    if (weight === "250g") return Math.round(product.price * 0.25);
    if (weight === "500g") return Math.round(product.price * 0.5);
    if (weight === "2kg") return product.price * 2;
    if (weight === "5kg") return product.price * 5;
    if (weight === "10kg") return product.price * 10;

    return product.price;
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd({
        ...product,
        selectedSize: selectedWeight,
        selectedWeight: selectedWeight,
        price: getPrice(),
        cartKey: `${product.id}-${selectedWeight}`
      });
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={imageUrl}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
        />

        <button
          className="wishlist-btn"
          onClick={() => onWishlist && onWishlist(product)}
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-category">{product.category}</p>

        <p>⭐ {product.rating || 4.5}</p>

        <h3>₹{getPrice()}</h3>

        <label>Select Quantity:</label>

        <select
          value={selectedWeight}
          onChange={(e) => setSelectedWeight(e.target.value)}
        >
          {(product.weightOptions || product.sizes || ["1kg"]).map(
            (weight) => (
              <option key={weight} value={weight}>
                {weight}
              </option>
            )
          )}
        </select>

        <button onClick={handleAdd}>
          Add to Cart
        </button>

        <button onClick={() => onView && onView(product)}>
          View Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
