import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import faker from "faker";
import uniqid from "uniqid";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Shop from "./components/Shop";
import Item from "./item";
import DispatchContext from "./context";

function reducer(state, { type, id, product, quantity }) {
  switch (type) {
    case "add":
      if (state.find((i) => i.product.id === product.id)) {
        return state.map((i) => {
          if (i.product.id === product.id) {
            // eslint-disable-next-line no-param-reassign
            return { product: i.product, quantity: i.quantity + quantity };
          }
          return i;
        });
      }

      return [...state, { product, quantity }];
    case "remove":
      return state.filter((i) => i.product.id !== id);
    case "update":
      return state.map((i) => {
        if (i.product.id === id) {
          // eslint-disable-next-line no-param-reassign
          i.quantity = quantity;
        }
        return i;
      });
    default:
      return state;
  }
}

const App = function App() {
  const [cartItems, dispatch] = useReducer(reducer, []);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const initProductList = [];
    for (let i = 0; i < 8; i += 1) {
      initProductList.push(
        new Item(
          uniqid(),
          faker.commerce.product(),
          faker.commerce.productName(),
          faker.commerce.price(5, 250, 2, "€"),
          faker.commerce.department(),
          faker.commerce.color(),
          faker.commerce.productMaterial(),
          faker.lorem.paragraphs(4)
        )
      );
    }
    setProductList(initProductList);
  }, []);
  return (
    <BrowserRouter>
      <Navbar list={cartItems} dispatchCart={dispatch} />
      <Routes>
        <Route path="/shoping-cart" element={<Home />} />

        <Route
          path="/shoping-cart/shop"
          element={
            <DispatchContext.Provider value={dispatch}>
              <Shop productList={productList} />
            </DispatchContext.Provider>
          }
        />
        <Route path="/shoping-cart/shop/:name" element={<Product />} />
        <Route
          path="/shoping-cart/cart"
          element={<Cart list={cartItems} dispatchCart={dispatch} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
