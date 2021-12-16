/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import React, { useContext, useReducer } from "react";
import faker from "faker";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/product.css";
import { Link, useLocation } from "react-router-dom";
import Item from "../item";
import DispatchContext from "../context";

function simpleProduct(p, dispatchCart) {
  return (
    <article className="product-simple trans-hover shadow-persian-green/10  hover:scale-105">
      <Link to={p.id} state={p}>
        <div className="p-4">
          <img src={faker.image.image()} alt="" className="responsive" />
        </div>
      </Link>
      <section className="info">
        <h2 className="title">
          <Link to={p.id} state={p}>
            {p.titleName}
          </Link>
        </h2>
        <p className="price">{p.price}</p>
        <button
          type="button"
          className="btn-shopping btn-add-to-cart"
          onClick={() => {
            dispatchCart({ type: "add", product: p, quantity: 1 });
          }}
        >
          <span>Add to</span>
          <span>
            <FaShoppingCart />
          </span>
        </button>
      </section>
    </article>
  );
}

function reducer(state, { type, value }) {
  switch (type) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state === 1) {
        return state;
      }
      return state - 1;
    case "set":
      return value;
    default:
      return state;
  }
}

function handleChange(e, dispatch) {
  dispatch({ type: "set", value: e.target.value });
}

function handleSubmit(e) {
  e.preventDefault();
}

const Product = function Product({ onList, product }) {
  const data = useLocation();
  const targetProduct = data.state;
  const [units, dispatch] = useReducer(reducer, 1);
  const dispatchCart = useContext(DispatchContext);

  return onList ? (
    simpleProduct(product, dispatchCart)
  ) : (
    <article className="w-2/3 my-10 mx-auto grid gap-5 grid-cols-6 grid-rows-8">
      <div className=" row-span-3 col-span-2">
        <img
          src={faker.image.image()}
          alt={targetProduct.name}
          className="responsive"
        />
      </div>
      <div className="col-span-2 px-4 py-1">
        <h2 className="font-semibold text-2xl">{targetProduct.titleName}</h2>
        <div className="p-4">
          <p className="text-black/50">
            <Link to="/shop" className="underline">
              shop
            </Link>{" "}
            <span>&gt;</span> <span>{targetProduct.department}</span>
          </p>
          <ul className="list-disc my-4">
            <li>
              {targetProduct.name} is {targetProduct.color}
            </li>
            <li>
              {targetProduct.name} is made of {targetProduct.material}
            </li>
          </ul>
        </div>
        <p className="font-black text-4xl text-burnt-sienna">
          {targetProduct.price}
        </p>
      </div>
      <form
        action="#"
        className="col-span-2 flex flex-wrap gap-2 items-center content-center"
      >
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="px-2 rounded-full border border-persian-green/20  font-bold text-xl"
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            +
          </button>

          <input
            min="1"
            value={units}
            type="text"
            onChange={(e) => {
              handleChange(e, dispatch);
            }}
            className="w-10 p-2 rounded border border-solid border-persian-green/10 caret-persian-green focus:outline-none focus:border-persian-green text-center bg-zinc-300"
          />
          <button
            type="button"
            className="px-2 rounded-full border border-persian-green/20  font-bold text-xl"
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
            disabled={units === 1}
          >
            -
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="btn-shopping btn-add-to-cart"
            onClick={handleSubmit}
          >
            <Link
              to="/shoping-cart/cart"
              state={{ product: targetProduct, units }}
              className="flex items-center"
            >
              <span>Add to</span>
              <span>
                <FaShoppingCart />
              </span>
            </Link>
          </button>
        </div>
      </form>

      <p className="col-span-full row-start-6">{targetProduct.description}</p>
    </article>
  );
};

Product.propTypes = {
  onList: PropTypes.bool,
  product: PropTypes.instanceOf(Item),
};

export default Product;
