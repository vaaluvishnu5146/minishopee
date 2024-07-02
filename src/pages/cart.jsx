import CartCard from "../components/ProductCard/CartCard";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import PropTypes from "prop-types";

export default function Cart({
  cart = [],
  handleRemoveFromCart = () => {},
  handleQuantityChange = () => {},
}) {
  return (
    <div>
      <ProductsContainer
        products={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleQuantityChange={handleQuantityChange}
        Card={CartCard}
      />
    </div>
  );
}

Cart.propTypes = {
  handleRemoveFromCart: PropTypes.func,
  handleQuantityChange: PropTypes.func,
  cart: PropTypes.array,
};
