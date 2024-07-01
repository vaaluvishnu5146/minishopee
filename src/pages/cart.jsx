import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import PropTypes from "prop-types";

export default function Cart({ cart = [], handleRemoveFromCart = () => {} }) {
  return (
    <div>
      <ProductsContainer
        products={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

Cart.propTypes = {
  handleRemoveFromCart: PropTypes.func,
  cart: PropTypes.array,
};
