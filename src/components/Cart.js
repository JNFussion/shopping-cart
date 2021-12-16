/* eslint-disable no-param-reassign */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function getSubtotal(list) {
  return list.reduce((sum, i) => {
    sum += parseInt(i.product.price.slice(1), 10) * 0.79 * i.quantity;
    return sum;
  }, 0);
}

function getTaxes(list) {
  return list.reduce((sum, i) => {
    sum += parseInt(i.product.price.slice(1), 10) * 0.21 * i.quantity;
    return sum;
  }, 0);
}

function getTotal(list) {
  return getSubtotal(list) + getTaxes(list) + 4.5;
}

function renderItem(isNav, item, dispatch) {
  return (
    <article className="flex gap-2 items-center">
      <div className={isNav ? "w-20" : "w-60"}>
        <img
          src={faker.image.image()}
          alt={item.product.name}
          className="responsive"
        />
      </div>

      <div className={!isNav ? "grid gap-4" : undefined}>
        <h3 className={isNav ? "text-md font-medium" : "text-lg font-medium"}>
          {item.product.titleName}
        </h3>
        <p className="font-black text-burnt-sienna">{item.product.price}</p>
        <p>Qty: {item.quantity}</p>
      </div>
      <div className={!isNav ? "ml-auto" : undefined}>
        <button
          type="button"
          className="p-1"
          onClick={() => dispatch({ type: "remove", id: item.product.id })}
        >
          <FaTrash className="text-rose-700 hover:text-rose-800 hover:scale-95" />
        </button>
      </div>
    </article>
  );
}

function renderList(isNav, list, dispatch) {
  return (
    <ul className="divide-y border-b border-b-persian-green">
      {list.map((i) => (
        <li key={i.product.id} className="py-2">
          {renderItem(isNav, i, dispatch)}
        </li>
      ))}
    </ul>
  );
}
const formatter = new Intl.NumberFormat("es-Es", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Cart = function Cart({ isNav, list, dispatchCart }) {
  const data = useLocation();

  useEffect(() => {
    if (data.state) {
      dispatchCart({
        type: "add",
        product: data.state.product,
        quantity: data.state.units,
      });
    }
  }, []);

  return (
    <article className={isNav ? "p-4" : "p-4 max-w-5xl mx-auto"}>
      <h2 className="font-bold text-lg border-b border-b-persian-green">
        Cart
      </h2>
      {list.length ? (
        renderList(isNav, list, dispatchCart)
      ) : (
        <p className="text-burnt-sienna font-medium">Cart is empty</p>
      )}
      <div className="flex justify-between p-4">
        <div>Subtotal:</div>{" "}
        <div className="font-medium">
          {list.length ? formatter.format(getSubtotal(list)) : "0"}€
        </div>
      </div>
      {!isNav && (
        <div className="flex justify-between p-4">
          <div>Taxes:</div>{" "}
          <div className="font-medium">
            {list.length ? formatter.format(getTaxes(list)) : "0"}€
          </div>
        </div>
      )}
      {!isNav && (
        <div className="flex justify-between p-4">
          <div>Shipping:</div>{" "}
          <div className="font-medium">{list.length ? "4.50" : "0"}€</div>
        </div>
      )}
      {!isNav && (
        <div className="flex justify-between p-4">
          <div>Total:</div>{" "}
          <div className="font-bold ">
            {list.length ? formatter.format(getTotal(list)) : "0"}€
          </div>
        </div>
      )}
      {!isNav && (
        <div className="w-fit ml-auto p-4">
          <button type="button" className="btn-shopping">
            Checkout
          </button>
        </div>
      )}
    </article>
  );
};

Cart.propTypes = {
  isNav: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchCart: PropTypes.func.isRequired,
};

export default Cart;
