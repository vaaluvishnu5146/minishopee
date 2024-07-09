import { useEffect } from "react";
import { addItemToCart } from "./redux/reducers/cart.reducer";
import { saveAllProducts } from "./redux/reducers/products.reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { products = {} } = useSelector((store) => store);
  console.log("Products data", products);
  const dispatcher = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(saveAllProducts(result));
      });
  }, []);

  function handleCartClick() {
    console.log("Cart");
    dispatcher(addItemToCart());
  }

  return (
    <>
      <button onClick={handleCartClick}>Cart</button>
    </>
  );
}

export default App;
