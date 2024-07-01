import { useState, useEffect } from "react";
import Billboard from "../components/Billboard";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import PropTypes from "prop-types";

export default function Store({
  cart = {},
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.data.length > 0) {
          setProducts(result.data);
        }
      });
  }, []);

  return (
    <>
      <Billboard />
      <ProductsContainer
        products={products}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        cart={cart}
      />
    </>
  );
}

Store.propTypes = {
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  cart: PropTypes.array,
};
