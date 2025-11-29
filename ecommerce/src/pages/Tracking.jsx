import { Link } from "react-router-dom";
import { Header } from "../components/Header";

import "./Tracking.css";

const Tracking = () => {
  return (
    <>
      <link rel="icon" href="favicon/tracking-favicon.png" />
      <title>Tracking</title>
      <Header />
      <div className="tracking-page">
        <Link to={"/orders"} style={{ color: "rgb(25, 135, 84)" }}>
          View all orders
        </Link>
        <div className="tracking-delivery-date">
          Delivered on Saturday, November 29
        </div>
        <div className="tracking-product-name">
          Black and Gray Atheletic Cotton Socks - 6 pairs
        </div>
        <div className="quantity">Quantity : 1</div>
        <img src="images/products/bathroom-mat.jpg" alt="product-img" />
        <div className="range-labels">
          <div></div>
          <div></div>
          <div>isDelivered</div>
        </div>
        <div className="progress-bar"></div>
      </div>
    </>
  );
};

export default Tracking;
