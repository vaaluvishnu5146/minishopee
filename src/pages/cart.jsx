import { useState, useEffect } from "react";
import CartCard from "../components/ProductCard/CartCard";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import PropTypes from "prop-types";

export default function Cart({
  cart = [],
  handleRemoveFromCart = () => {},
  handleQuantityChange = () => {},
}) {
  const [cartTotal, setCartTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const shippingCost = 50;
  const gst = 18;

  useEffect(() => {
    let currCartTotal = 0;
    cart.forEach((item) => {
      currCartTotal += item.quantity * item.actualCost;
    });
    setCartTotal(currCartTotal);
    if (shippingCost > 0) {
      currCartTotal += shippingCost;
    }
    if (gst > 0) {
      currCartTotal += (currCartTotal / 100) * 18;
    }
    setGrandTotal(currCartTotal);
  }, [cart]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ProductsContainer
            products={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleQuantityChange={handleQuantityChange}
            Card={CartCard}
          />
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h1 className="mb-5">Cart</h1>
              <div className="row">
                <div className="col-8">
                  <h5>Sub Total</h5>
                </div>
                <div className="col-4">{cartTotal}</div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h5>Shipping Charge</h5>
                </div>
                <div className="col-4">{shippingCost}</div>
              </div>
              <div className="row mb-3">
                <div className="col-8">
                  <h5>GST</h5>
                </div>
                <div className="col-4">18%</div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h2>Grand Total</h2>
                </div>
                <div className="col-4">
                  <h2>{grandTotal}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  handleRemoveFromCart: PropTypes.func,
  handleQuantityChange: PropTypes.func,
  cart: PropTypes.array,
};
