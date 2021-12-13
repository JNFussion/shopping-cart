import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "./Logo";

const Navbar = function Navbar() {
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
      <div className="cart-container">
        <button type="button" className="btn-cart trans-hover">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
