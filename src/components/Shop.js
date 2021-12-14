import React, { useEffect, useState } from "react";
import faker from "faker";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import Product from "./Product";
import Item from "../item";

const Shop = function Shop() {
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
          faker.commerce.productMaterial()
        )
      );
    }
    setProductList(initProductList);
  }, []);

  return (
    <section>
      <header>
        <nav>
          <ul>
            <li>SOME LINK</li>
          </ul>
        </nav>
      </header>
      <section className="w-8/12 mx-auto grid grid-cols-auto gap-6 gap-y-16">
        {productList.length &&
          productList.map((product) => <Product onList product={product} />)}
      </section>
    </section>
  );
};

export default Shop;
