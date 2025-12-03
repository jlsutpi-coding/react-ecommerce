import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <link rel="icon" href="favicon/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid loadCart={loadCart} products={products} />
      </div>
    </>
  );
}

export default HomePage;
