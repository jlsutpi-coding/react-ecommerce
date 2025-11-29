import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/Orders";
import HomePage from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
