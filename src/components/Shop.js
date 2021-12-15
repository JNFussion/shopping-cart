import React from "react";

import PropTypes from "prop-types";

import Product from "./Product";

const Shop = function Shop({ productList, dispatchCart }) {
  return (
    <section className="my-4">
      <section className="w-8/12 mx-auto grid grid-cols-auto gap-6 gap-y-16">
        {productList.length &&
          productList.map((product) => (
            <Product
              key={product.id}
              onList
              product={product}
              dispatchCart={dispatchCart}
            />
          ))}
      </section>
    </section>
  );
};

Shop.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchCart: PropTypes.func.isRequired,
};

export default Shop;
