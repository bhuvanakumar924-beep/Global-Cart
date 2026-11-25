
import React from "react";
import AddProductForm from "./AddProductForm";

function EditProduct({ product, onClose, onSave }) {
  return (
    <AddProductForm
      open={Boolean(product)}
      product={product}
      onClose={onClose}
      onSave={onSave}
    />
  );
}

export default EditProduct;
