/**
 * Step 2
 */
import { Route, Routes } from "react-router-dom";
import Store from "./pages/store";
import Shop from "./pages/Shop";
import Cart from "./pages/cart";
import NavBar from "./components/Header";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(data) {
    const cartCopy = [...cart];
    data.quantity = 1;
    cartCopy.push(data);
    setCart(cartCopy);
  }

  function handleRemoveFromCart(data) {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((item) => item.id != data.id);
    setCart(cartCopy);
  }

  function handleQuantityChange(id = 0, type = "increment") {
    let cartCopy = [...cart];
    let filteredData = cartCopy.find((item) => item.id === id);

    if (type === "increment") {
      filteredData.quantity += 1;
    } else {
      filteredData.quantity -= 1;
    }
    setCart(cartCopy);
  }

  return (
    <>
      <NavBar quantity={cart.length} />
      <Routes>
        <Route
          Component={() => (
            <Store
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
          path="/"
        />
        <Route
          Component={() => (
            <Shop
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
          path="/:category/:subCategory"
        />
        <Route
          Component={() => (
            <Cart
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleQuantityChange={handleQuantityChange}
            />
          )}
          path="/cart"
        />
      </Routes>
    </>
  );
}

export default App;
