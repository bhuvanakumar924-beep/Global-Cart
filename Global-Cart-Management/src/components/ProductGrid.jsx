
import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  wishlist,
  onWishlist,
  onAdd,
  onView,
  onEdit,
  onDelete
}) {
  return (
    <div className="product-grid">

      {products.length === 0 ? (
        <h2>No Products Found</h2>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onWishlist={onWishlist}
            onAdd={onAdd}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}

    </div>
  );
}

export default ProductGrid;
