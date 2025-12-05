import { Header } from "../../components/Header";
import "./Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { OrdersHeader } from "./OrdersHeader";
import { OrdersGrid } from "./OrdersGrid";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <link rel="icon" href="favicon/orders-favicon.png" />
      <title> Orders</title>
      <Header />
      <div className="orders-page">
        <h4 className="orders-heading">Your Orders</h4>

        <div className="orders-grid">
          {orders &&
            orders.map((order) => {
              return (
                <div key={order.id} className="order-container">
                  <OrdersHeader order={order} />
                  <OrdersGrid order={order} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Orders;
