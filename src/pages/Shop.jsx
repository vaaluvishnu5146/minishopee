import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Billboard from "../components/Billboard";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import PropTypes from "prop-types";

export default function Shop({
  cart = {},
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
}) {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.data.length > 0) {
          setProducts(
            result.data.filter((d) => d.subCategory === params.subCategory)
          );
        }
      });
  }, [params]);

  return (
    <div>
      <Billboard />
      <ProductsContainer
        products={products}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        cart={cart}
      />
    </div>
  );
}

Shop.propTypes = {
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  cart: PropTypes.array,
};
