import React, { useState } from "react";
import { CartProvider } from "react-use-cart";
import "./App.css";
import Page from "./components/Page";
import Cart from "./components/Cart";

function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <CartProvider>
        <Page quantity={quantity} setQuantity={setQuantity} />
      </CartProvider>
    </div>
  );
}

export default App;
