import React, { useState } from "react";
import "../styles/SubscriptionForm.css";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="subscription-container">
      <h2>Stay Ahead with Exclusive <br /> Startupathon Updates!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your e-mail id"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
