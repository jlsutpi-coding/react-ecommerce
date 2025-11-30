import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/Orders";
import HomePage from "./pages/home/HomePage";
import { NotFound } from "./pages/NotFound";
import Tracking from "./pages/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
