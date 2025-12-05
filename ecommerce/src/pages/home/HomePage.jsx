import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";

      const response = await axios.get(urlPath);

      setProducts(response.data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <link rel="icon" href="favicon/home-favicon.png" />
      <title>Ecommerce Project</title>
      <Header />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;
