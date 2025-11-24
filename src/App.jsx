import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
