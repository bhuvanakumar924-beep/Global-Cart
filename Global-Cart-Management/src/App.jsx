
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import AddProductForm from "./components/AddProductForm";
import CategoryMenu from "./components/CategoryMenu";
import DeleteProduct from "./components/DeleteProduct";
import EditProduct from "./components/EditProduct";
import FilterPanel from "./components/FilterPanel";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import LoginSignup from "./components/LoginSignup";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import ShoppingCart from "./components/ShoppingCart";
import SortDropdown from "./components/SortDropdown";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Wishlist from "./components/Wishlist";

import sampleProducts from "./data/sampleProducts";
import { loadData, saveData } from "./utils/storage";

import "./App.css";

// LOAD PRODUCTS
function getInitialProducts() {
  const savedProducts = loadData("products", []);

  if (!Array.isArray(savedProducts)) {
    return sampleProducts;
  }

  // Keep manually added products
  const userProducts = savedProducts.filter(
    (product) => Number(product.id) > 1000000000000
  );

  // Load updated sample products
  return [...sampleProducts, ...userProducts];
}

function App() {
  const [products, setProducts] = useState(getInitialProducts);

  const [cart, setCart] = useState(() =>
    loadData("cart", [])
  );

  const [wishlist, setWishlist] = useState(() =>
    loadData("wishlist", [])
  );

  const [theme, setTheme] = useState(() =>
    loadData("theme", "light")
  );

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("featured");

  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // SAVE PRODUCTS
  useEffect(() => {
    saveData("products", products);
  }, [products]);

  // SAVE CART
  useEffect(() => {
    saveData("cart", cart);
  }, [cart]);

  // SAVE WISHLIST
  useEffect(() => {
    saveData("wishlist", wishlist);
  }, [wishlist]);

  // SAVE THEME
  useEffect(() => {
    saveData("theme", theme);
  }, [theme]);

  // ADD PRODUCT
  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      price: Number(product.price) || 0,
      rating: Number(product.rating) || 4.0,
    };

    setProducts((previous) => [
      newProduct,
      ...previous,
    ]);

    setShowAdd(false);
  };

  // EDIT PRODUCT
  const handleEditProduct = (updatedProduct) => {
    setProducts((previous) =>
      previous.map((product) =>
        String(product.id) === String(updatedProduct.id)
          ? { ...product, ...updatedProduct }
          : product
      )
    );

    setEditing(null);
  };

  // DELETE PRODUCT
  const handleDeleteProduct = (id) => {
    setProducts((previous) =>
      previous.filter(
        (product) => String(product.id) !== String(id)
      )
    );

    setDeleting(null);
  };

  // ADD TO CART
  const handleAddToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => String(item.id) === String(product.id)
      );

      if (existing) {
        return previous.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...previous,
        {
          id: product.id,
          qty: 1,
        },
      ];
    });
  };

  // CHANGE QUANTITY
  const handleQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCart((previous) =>
      previous.map((item) =>
        String(item.id) === String(id)
          ? { ...item, qty: quantity }
          : item
      )
    );
  };

  // REMOVE FROM CART
  const handleRemoveFromCart = (id) => {
    setCart((previous) =>
      previous.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  // WISHLIST
  const handleWishlist = (product) => {
    setWishlist((previous) => {
      const exists = previous.some(
        (item) => String(item.id) === String(product.id)
      );

      if (exists) {
        return previous.filter(
          (item) => String(item.id) !== String(product.id)
        );
      }

      return [...previous, product];
    });
  };

  // REMOVE WISHLIST
  const handleRemoveWishlist = (id) => {
    setWishlist((previous) =>
      previous.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  // CART ITEMS
  const cartItems = cart
    .map((item) => {
      const product = products.find(
        (product) =>
          String(product.id) === String(item.id)
      );

      return product
        ? { ...product, qty: item.qty }
        : null;
    })
    .filter(Boolean);

  // CART COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  // FILTER PRODUCTS
  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesSearch =
      product.name?.toLowerCase().includes(search.toLowerCase()) ||
      product.category?.toLowerCase().includes(search.toLowerCase());

    const matchesPrice =
      Number(product.price) <= Number(maxPrice);

    const matchesRating =
      Number(product.rating || 0) >= Number(minRating);

    return (
      matchesCategory &&
      matchesSearch &&
      matchesPrice &&
      matchesRating
    );
  });

  // SORT PRODUCTS
  if (sort === "price-low") {
    filteredProducts.sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  } else if (sort === "price-high") {
    filteredProducts.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  } else if (sort === "rating") {
    filteredProducts.sort(
      (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
    );
  } else if (sort === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  // PLACE ORDER
  const handlePlaceOrder = (orderDetails) => {
    saveData("lastOrder", orderDetails);
    setCart([]);
  };

  return (
    <div className={`app ${theme}`}>

      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCart={() => setCartOpen(true)}
        onWishlist={() => setWishlistOpen(true)}
        onAdmin={() => setShowAdd(true)}
      />

      <main className="main-content">

        <HeroBanner
          onShop={() => {
            setCategory("All");
            window.scrollTo({
              top: 500,
              behavior: "smooth",
            });
          }}
        />

        <CategoryMenu
          selected={category}
          onSelect={setCategory}
        />

        <div className="store-toolbar">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <SortDropdown
            value={sort}
            onChange={setSort}
          />

          <ThemeSwitcher
            theme={theme}
            onToggle={() =>
              setTheme(
                theme === "light" ? "dark" : "light"
              )
            }
          />

          <button
            className="add-product-button"
            onClick={() => setShowAdd(true)}
          >
            + Add Product
          </button>

        </div>

        <FilterPanel
          maxPrice={maxPrice}
          onMaxPrice={setMaxPrice}
          minRating={minRating}
          onMinRating={setMinRating}
        />

        <section className="products-section">

          <div className="products-heading">
            <h2>
              {category === "All"
                ? "All Products"
                : category}
            </h2>

            <p>
              Showing {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.some(
                    (item) =>
                      String(item.id) === String(product.id)
                  )}
                  onWishlist={() =>
                    handleWishlist(product)
                  }
                  onAdd={() =>
                    handleAddToCart(product)
                  }
                  onView={() =>
                    setSelectedProduct(product)
                  }
                  onEdit={() =>
                    setEditing(product)
                  }
                  onDelete={() =>
                    setDeleting(product)
                  }
                />
              ))}

            </div>
          ) : (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try another search or category.</p>
            </div>
          )}

        </section>

      </main>

      <Footer />

      {/* ADD PRODUCT */}
      <AddProductForm
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onSave={handleAddProduct}
        product={null}
      />

      {/* EDIT PRODUCT */}
      {editing && (
        <EditProduct
          product={editing}
          onClose={() => setEditing(null)}
          onSave={handleEditProduct}
        />
      )}

      {/* DELETE PRODUCT */}
      {deleting && (
        <DeleteProduct
          product={deleting}
          onClose={() => setDeleting(null)}
          onConfirm={handleDeleteProduct}
        />
      )}

      {/* PRODUCT DETAILS */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={() => handleAddToCart(selectedProduct)}
          onWishlist={() =>
            handleWishlist(selectedProduct)
          }
        />
      )}

      {/* SHOPPING CART */}
      <ShoppingCart
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onQty={handleQuantity}
        onRemove={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
      />

      {/* WISHLIST */}
      <Wishlist
        open={wishlistOpen}
        products={wishlist}
        onClose={() => setWishlistOpen(false)}
        onAdd={handleAddToCart}
        onRemove={handleRemoveWishlist}
      />

      {/* LOGIN */}
      <LoginSignup
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
      />

    </div>
  );
}

export default App;
