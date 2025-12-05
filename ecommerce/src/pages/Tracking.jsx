import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";

import "./Tracking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const Tracking = () => {
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

  const totalDeliveryTimesMs =
    productDetail.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let deliveryPercent = (timePassedMs / totalDeliveryTimesMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
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
          {deliveryPercent >= 100 ? "Delivered on" : "Ariving on"}
          {dayjs(productDetail.estimatedDeliveryTimeMs).format(" dddd, MMMM D")}
        </div>

        <div className="tracking-product-name">
          {productDetail.product.name}
        </div>

        <div className="quantity">Quantity : {productDetail.quantity}</div>

        <img src={productDetail.product.image} alt="product-img" />

        <div className="range-labels">
          <div className="progress-label">
            {deliveryPercent < 33 ? "isPreparing" : ""}
          </div>
          <div className="progress-label current-status">
            {deliveryPercent >= 33 && deliveryPercent < 100 ? "isShipping" : ""}
          </div>
          <div className="progress-label">
            {deliveryPercent === 100 ? "isDeilvered" : ""}
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${1}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Tracking;
