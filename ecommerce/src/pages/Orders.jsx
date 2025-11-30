import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "./Orders.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { fromatMoney } from "../utils/formatMoney";
import BuyAgainIcon from "../assets/images/icons/buy-again.png";

function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/api/orders?expand=products")
      .then((response) => setOrders(response.data));
  }, []);

  return (
    <>
      <link rel="icon" href="favicon/orders-favicon.png" />
      <title> Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <h4 className="orders-heading">Your Orders</h4>

        <div className="orders-grid">
          {orders &&
            orders.map((order) => {
              return (
                <div key={order.id} className="order-container">
                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                      </div>
                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{fromatMoney(order.totalCostCents)}</div>
                      </div>
                    </div>
                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div>{order.id}</div>
                    </div>
                  </div>

                  <div className="order-details-grid">
                    {order.products.map((orderProduct) => {
                      return (
                        <Fragment key={orderProduct.productId}>
                          <div className="product-image-container">
                            <img
                              src={orderProduct.product.image}
                              alt="toaster white"
                              className="order-details-image"
                            />
                          </div>

                          <div className="product-details">
                            <div className="product-name">
                              {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                              Arriving on:
                              {dayjs(
                                orderProduct.estimatedDeliveryTimeMs
                              ).format(" MMMM D")}
                            </div>
                            <div className="product-quantity">
                              Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                              <img
                                src={BuyAgainIcon}
                                className="buy-again-icon"
                                alt=""
                              />
                              Add to Cart
                            </button>
                          </div>

                          <div className="product-actions">
                            <Link className="link" to="/tracking">
                              <button className=" track-pakage-button product-secondary">
                                Track Pakage
                              </button>
                            </Link>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Orders;
