import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import HomePage from "./pages/home/HomePage";
import { NotFound } from "./pages/NotFound";
import Tracking from "./pages/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCart();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage getCart={getCart} cart={cart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="*" element={<NotFound cart={cart} />} />
      <Route
        path="/tracking/:orderId/:productId"
        element={<Tracking cart={cart} />}
      />
    </Routes>
  );
}

export default App;
