import { useState, useEffect } from "react";
import Billboard from "../components/Billboard";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import PropTypes from "prop-types";
import axios from "axios";

export default function Store({
  cart = {},
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5173/products.json", {
    //   method: "DELETE",
    //   headers: {
    //     testing: true,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result && result.data.length > 0) {
    //       setProducts(result.data);
    //     }
    //   });
    axios
      .get("http://localhost:5173/products.json")
      .then((response) => {
        console.log(response);
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", {
    //     userId: 100,
    //     id: 100,
    //     title: "Testing post call",
    //     body: "dummy body",
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios
    //   .put("https://jsonplaceholder.typicode.com/posts/1", {
    //     userId: 2,
    //     id: 2,
    //     title: "Testing post call",
    //     body: "dummy body",
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios
    //   .delete("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
