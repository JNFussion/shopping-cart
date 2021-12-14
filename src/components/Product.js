import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import faker, { random } from "faker";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/product.css";

function simpleProduct({ titleName, price }) {
  return (
    <article className="product-simple trans-hover shadow-persian-green/10  hover:scale-105">
      <div className="p-4">
        <img src={faker.image.image()} alt="" className="responsive" />
      </div>
      <section className="info">
        <h2 className="title">{titleName}</h2>
        <p className="price">{price}</p>
        <button type="button" className="btn-shopping btn-add-to-cart">
          <span>Add to</span>
          <span>
            <FaShoppingCart />
          </span>
        </button>
      </section>
    </article>
  );
}

function fullProduct() {}

const Product = function Product({ onList, product }) {
  return onList ? simpleProduct(product) : fullProduct();
};

Product.propType = {
  onList: PropTypes.bool.isRequired,
};

export default Product;
