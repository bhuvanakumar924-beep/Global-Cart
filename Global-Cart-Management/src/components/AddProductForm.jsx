
import React, { useState, useEffect } from "react";

function AddProductForm({ open, onClose, onSave, product }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    price: "",
    originalPrice: "",
    rating: "",
    stock: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "Electronics",
        price: product.price ?? "",
        originalPrice: product.originalPrice ?? "",
        rating: product.rating ?? "",
        stock: product.stock ?? "",
        image: product.image || "",
        description: product.description || ""
      });
    } else {
      setFormData({
        name: "",
        category: "Electronics",
        price: "",
        originalPrice: "",
        rating: "",
        stock: "",
        image: "",
        description: ""
      });
    }
  }, [product, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || Number(formData.price) <= 0) {
      alert("Enter a valid product name and price");
      return;
    }

    const updatedProduct = {
      ...(product || {}),
      ...formData,
      id: product?.id,
      price: Number(formData.price),
      originalPrice: Number(
        formData.originalPrice || formData.price
      ),
      rating: Number(formData.rating || 0),
      stock: Number(formData.stock || 0)
    };

    onSave(updatedProduct);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="product-form">
        <h2>{product ? "Edit Product" : "Add New Product"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Selling Price"
            value={formData.price}
            onChange={handleChange}
            min="1"
            required
          />

          <input
            type="number"
            name="originalPrice"
            placeholder="Original Price"
            value={formData.originalPrice}
            onChange={handleChange}
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating (0 to 5)"
            min="0"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            min="0"
            value={formData.stock}
            onChange={handleChange}
          />

          <input
            type="url"
            name="image"
            placeholder="Product Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
          />

          <div className="form-buttons">
            <button type="submit">
              {product ? "Update Product" : "Add Product"}
            </button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
