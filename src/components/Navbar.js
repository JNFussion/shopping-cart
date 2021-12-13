import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-container skew-x-12">
        <h1 className="logo -skew-x-12">eCommerce</h1>
      </div>

      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
      <div className="cart-container">
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
