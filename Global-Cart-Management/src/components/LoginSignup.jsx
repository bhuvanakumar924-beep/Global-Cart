
import React, { useState } from "react";

function LoginSignup({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter your details");
      return;
    }

    alert("Welcome to Global Cart, " + name);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="login-form">
        <h2>Login / Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Continue</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
