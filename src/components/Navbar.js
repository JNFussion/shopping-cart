import React from "react";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "./Logo";
import Cart from "./Cart";

function handleClick() {
  document.getElementById("cart-container").classList.toggle("hidden");
}

const Navbar = function Navbar({ list, dispatchCart }) {
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav-links">
        <Link to="/shoping-cart">
          <li>Home</li>
        </Link>
        <Link to="/shoping-cart/shop">
          <li>Shop</li>
        </Link>
        <Link to="/shoping-cart/cart">
          <li>Cart</li>
        </Link>
      </ul>
      <div className="cart-container">
        <button
          type="button"
          className="btn-cart trans-hover"
          onClick={handleClick}
        >
          <FaShoppingCart />
        </button>
      </div>
      <div
        id="cart-container"
        className="hidden z-50 fixed right-4 top-20 w-72 border bg-white text-black"
      >
        <Cart isNav list={list} dispatchCart={dispatchCart} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchCart: PropTypes.func.isRequired,
};

export default Navbar;
