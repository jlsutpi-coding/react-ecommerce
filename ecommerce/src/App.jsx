import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import HomePage from "./pages/home/HomePage";
import { NotFound } from "./pages/NotFound";
import Tracking from "./pages/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

// This makes axios available in the Console.
// - Then, you can try running axios.post('/api/reset') in the Console.
window.axios = axios;

// More details:
// - Normally, we can't access values (like axios) outside of a file.
// - However, JavaScript has a built-in, global object called window
//   (this represents the browser window).
// - So one way to make a value accessible anywhere (including in the
//   Console), is to attach it to the window object. That's why we
//   do window.axios = axios;
// - Now, in the Console, we can run window.axios.post(...)
// - And JavaScript has another shortcut we can use. If we just type
//   "axios", this is a shortcut for "window.axios"
// - That's why the code window.axios = axios; lets us use "axios"
//   anywhere (including in the Conosle).

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage loadCart={loadCart} cart={cart} />} />
      <Route
        path="/checkout"
        element={<Checkout cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="/orders"
        element={<Orders loadCart={loadCart} cart={cart} />}
      />
      <Route path="*" element={<NotFound cart={cart} />} />
      <Route
        path="/tracking/:orderId/:productId"
        element={<Tracking cart={cart} />}
      />
    </Routes>
  );
}

export default App;
