import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";

function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <Page quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}

export default App;
