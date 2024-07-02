import ProductCard from "../ProductCard";
import PropTypes from "prop-types";

export default function ProductsContainer({
  products = [],
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
  handleQuantityChange = () => {},
  cart = [],
  Card,
}) {
  console.log("====>", cart);
  function findCartStatus(product = {}) {
    return cart?.some((d) => d.name == product.name);
  }
  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {products.map((data, index) =>
            Card ? (
              <Card
                key={`${data.name}-${index}`}
                data={data}
                handleQuantityChange={handleQuantityChange}
              />
            ) : (
              <ProductCard
                key={`${data.name}-${index}`}
                data={data}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                isAddedToCart={findCartStatus(data)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  cart: PropTypes.array,
  Card: PropTypes.func,
  handleQuantityChange: PropTypes.func,
};
