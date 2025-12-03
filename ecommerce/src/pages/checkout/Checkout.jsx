import { useEffect, useState } from "react";

import axios from "axios";

import "./Checkout.css";

import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

function Checkout({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const deliveryOptionsResponse = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(deliveryOptionsResponse.data);
      const paymentSummaryResponse = await axios.get("/api/payment-summary");
      setPaymentSummary(paymentSummaryResponse.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <link rel="icon" href="favicon/cart-favicon.png" />

      <title>Checkout</title>
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review you order</div>
        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}

export default Checkout;
