
import React, { useState } from "react";

function ShoppingCart({
  open,
  items = [],
  onClose,
  onQty,
  onRemove,
  onPlaceOrder,
}) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [success, setSuccess] = useState(false);

  const [sizes, setSizes] = useState({});
  const [payment, setPayment] = useState("Cash on Delivery");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    city: "",
    state: "",
    pincode: "",
  });

  if (!open) return null;

  const total = items.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  const delivery = total >= 499 ? 0 : 40;
  const grandTotal = total + delivery;

  const updateAddress = (event) => {
    const { name, value } = event.target;

    setAddress((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const placeOrder = (event) => {
    event.preventDefault();

    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderDetails = {
      products: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        size: sizes[item.id] || "Free Size",
      })),
      address,
      paymentMethod: payment,
      totalAmount: grandTotal,
      orderDate: new Date().toLocaleString(),
    };

    onPlaceOrder(orderDetails);
    setSuccess(true);
  };

  const closeCart = () => {
    setShowCheckout(false);
    setSuccess(false);
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.panel}>
        <div style={styles.header}>
          <h2>{success ? "Order Status" : showCheckout ? "Checkout" : "My Cart"}</h2>
          <button style={styles.closeButton} onClick={closeCart}>×</button>
        </div>

        {success ? (
          <div style={styles.successBox}>
            <div style={styles.tick}>✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for shopping with Global Cart.</p>
            <p>Your order has been confirmed.</p>
            <button style={styles.primaryButton} onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        ) : !showCheckout ? (
          <>
            <div style={styles.content}>
              {items.length === 0 ? (
                <p style={styles.empty}>Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div style={styles.product} key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.image}
                    />

                    <div style={styles.productInfo}>
                      <h3>{item.name}</h3>
                      <p>₹{item.price}</p>

                      {item.category === "Fashion" ? (
                        <select
                          style={styles.select}
                          value={sizes[item.id] || "M"}
                          onChange={(event) =>
                            setSizes((previous) => ({
                              ...previous,
                              [item.id]: event.target.value,
                            }))
                          }
                        >
                          <option value="S">Size S</option>
                          <option value="M">Size M</option>
                          <option value="L">Size L</option>
                          <option value="XL">Size XL</option>
                          <option value="XXL">Size XXL</option>
                        </select>
                      ) : (
                        <p style={styles.smallText}>Size: Free Size</p>
                      )}

                      <div style={styles.quantity}>
                        <button
                          onClick={() => onQty(item.id, item.qty - 1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() => onQty(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        style={styles.removeButton}
                        onClick={() => onRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div style={styles.bottom}>
                <div style={styles.priceRow}>
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div style={styles.priceRow}>
                  <span>Delivery</span>
                  <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
                </div>
                <div style={styles.totalRow}>
                  <strong>Total Amount</strong>
                  <strong>₹{grandTotal}</strong>
                </div>

                <button
                  style={styles.primaryButton}
                  onClick={() => setShowCheckout(true)}
                >
                  Continue to Checkout
                </button>
              </div>
            )}
          </>
        ) : (
          <form onSubmit={placeOrder} style={styles.checkout}>
            <h3>Delivery Address</h3>

            <input
              style={styles.input}
              name="name"
              placeholder="Full Name"
              value={address.name}
              onChange={updateAddress}
              required
            />

            <input
              style={styles.input}
              name="phone"
              placeholder="Mobile Number"
              value={address.phone}
              onChange={updateAddress}
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
              required
            />

            <textarea
              style={styles.input}
              name="house"
              placeholder="House No, Street, Area"
              value={address.house}
              onChange={updateAddress}
              required
            />

            <input
              style={styles.input}
              name="city"
              placeholder="City"
              value={address.city}
              onChange={updateAddress}
              required
            />

            <input
              style={styles.input}
              name="state"
              placeholder="State"
              value={address.state}
              onChange={updateAddress}
              required
            />

            <input
              style={styles.input}
              name="pincode"
              placeholder="6-digit Pincode"
              value={address.pincode}
              onChange={updateAddress}
              pattern="[0-9]{6}"
              title="Enter a valid 6-digit pincode"
              required
            />

            <h3>Payment Method</h3>

            <label style={styles.paymentOption}>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={payment === "Cash on Delivery"}
                onChange={(event) => setPayment(event.target.value)}
              />
              Cash on Delivery
            </label>

            <label style={styles.paymentOption}>
              <input
                type="radio"
                value="UPI"
                checked={payment === "UPI"}
                onChange={(event) => setPayment(event.target.value)}
              />
              UPI
            </label>

            <label style={styles.paymentOption}>
              <input
                type="radio"
                value="Credit / Debit Card"
                checked={payment === "Credit / Debit Card"}
                onChange={(event) => setPayment(event.target.value)}
              />
              Credit / Debit Card
            </label>

            <div style={styles.checkoutTotal}>
              <span>Payable Amount</span>
              <strong>₹{grandTotal}</strong>
            </div>

            <button type="submit" style={styles.primaryButton}>
              Place Order
            </button>

            <button
              type="button"
              style={styles.backButton}
              onClick={() => setShowCheckout(false)}
            >
              Back to Cart
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "flex-end",
  },
  panel: {
    width: "100%",
    maxWidth: "480px",
    height: "100%",
    background: "#fff",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    padding: "18px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    border: "none",
    background: "none",
    fontSize: "30px",
    cursor: "pointer",
  },
  content: {
    padding: "16px",
    overflowY: "auto",
    flex: 1,
  },
  product: {
    display: "flex",
    gap: "14px",
    padding: "14px 0",
    borderBottom: "1px solid #eee",
  },
  image: {
    width: "105px",
    height: "115px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productInfo: {
    flex: 1,
  },
  select: {
    padding: "7px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "8px",
  },
  smallText: {
    fontSize: "13px",
    color: "#666",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "8px",
  },
  removeButton: {
    border: "none",
    background: "none",
    color: "#d6336c",
    cursor: "pointer",
    padding: "8px 0",
  },
  bottom: {
    padding: "18px",
    borderTop: "1px solid #eee",
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #ddd",
    paddingTop: "14px",
    marginTop: "10px",
    fontSize: "18px",
  },
  primaryButton: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    border: "none",
    borderRadius: "7px",
    background: "#9f2089",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  checkout: {
    padding: "18px",
    overflowY: "auto",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    margin: "7px 0",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  paymentOption: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    border: "1px solid #eee",
    borderRadius: "6px",
    margin: "8px 0",
  },
  checkoutTotal: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    marginTop: "10px",
    borderTop: "1px solid #ddd",
    fontSize: "18px",
  },
  backButton: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "1px solid #9f2089",
    borderRadius: "7px",
    background: "white",
    color: "#9f2089",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    padding: "40px 10px",
  },
  successBox: {
    textAlign: "center",
    padding: "50px 22px",
  },
  tick: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    background: "#e3f8e8",
    color: "#168a3b",
    fontSize: "55px",
    lineHeight: "85px",
    margin: "15px auto",
  },
};

export default ShoppingCart;
