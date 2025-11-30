import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";

import "./Tracking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const Tracking = ({ cart }) => {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchData();
  }, [orderId]);

  if (!order) return null;

  const productDetail = order.products.find(
    (orderProduct) => orderProduct.productId === productId
  );
  return (
    <>
      <link rel="icon" href="favicon/tracking-favicon.png" />
      <title>Tracking</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <Link to={"/orders"} style={{ color: "rgb(25, 135, 84)" }}>
          View all orders
        </Link>

        <div className="tracking-delivery-date">
          Delivered on
          {dayjs(productDetail.estimatedDeliveryTimeMs).format(" dddd, MMMM D")}
        </div>

        <div className="tracking-product-name">
          {productDetail.product.name}
        </div>

        <div className="quantity">Quantity : {productDetail.quantity}</div>

        <img src={productDetail.product.image} alt="product-img" />

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
