
import React from "react";

function DeleteProduct({ product, onClose, onConfirm }) {
  if (!product) {
    return null;
  }

  const handleDelete = () => {
    onConfirm(product.id);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2>Delete Product</h2>

        <p>
          Are you sure you want to delete
          <strong> {product.name}</strong>?
        </p>

        <div className="form-buttons">
          <button onClick={handleDelete}>
            Yes, Delete
          </button>

          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
