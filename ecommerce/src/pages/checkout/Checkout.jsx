import { useContext, useEffect, useState } from "react";

import axios from "axios";

import "./Checkout.css";

import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { AppContext } from "../../AppContext";

function Checkout() {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  const { cart } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const deliveryOptionsResponse = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(deliveryOptionsResponse.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const paymentSummaryResponse = await axios.get("/api/payment-summary");
      setPaymentSummary(paymentSummaryResponse.data);
    };
    fetchPaymentSummary();
  }, [cart]);
  return (
    <>
      <link rel="icon" href="favicon/cart-favicon.png" />

      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review you order</div>
        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}

export default Checkout;
