import { Fragment, useEffect, useState } from "react";
import "./Checkout.css";
import { CheckoutHeader } from "./CheckoutHeader";
import dayjs from "dayjs";
import axios from "axios";
import { fromatMoney } from "../../utils/formatMoney";

function Checkout({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => setDeliveryOptions(response.data));

    axios
      .get("/api/payment-summary")
      .then((response) => setPaymentSummary(response.data));
  }, []);

  return (
    <>
      <link rel="icon" href="favicon/cart-favicon.png" />

      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review you order</div>
        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOptions.length > 0 &&
              cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find(
                  (deliveryOption) =>
                    deliveryOption.id === cartItem.deliveryOptionId
                );
                return (
                  <Fragment key={cartItem.id}>
                    <div className="cart-item-container ">
                      <div className="delivery-date">
                        Delivery date:
                        {dayjs(
                          selectedDeliveryOption.estimatedDeliveryTimeMs
                        ).format("dddd, MMMM D")}
                      </div>
                      <div className="cart-item-detail-grid">
                        <img
                          src={cartItem.product.image}
                          className="product-img"
                          alt=""
                        />
                        <div className="cart-item-details">
                          <div className="cart-title">
                            {cartItem.product.name}
                          </div>
                          <div className="cart-price">
                            {fromatMoney(cartItem.product.priceCents)}
                          </div>
                          <div className="cart-quantity">
                            Quantity : {cartItem.quantity}
                            <span className="update-quantity-link link-primary">
                              Update
                            </span>
                            <span className="update-quantity-link link-primary">
                              Delete
                            </span>
                          </div>
                        </div>
                        <div className="delivery-option-container">
                          <div className="delivery-option-title">
                            Choose a delivery option:
                          </div>

                          {deliveryOptions.map((deliveryOption) => {
                            return (
                              <div
                                key={deliveryOption.id}
                                className="delivery-option"
                              >
                                <input
                                  className="delivery-option-input"
                                  name={`delivery-option-${cartItem.product.id}`}
                                  type="radio"
                                  checked={
                                    deliveryOption.id ===
                                    cartItem.deliveryOptionId
                                  }
                                />
                                <div>
                                  <div>
                                    <div className="delivery-option-date">
                                      {dayjs(
                                        deliveryOption.estimatedDeliveryTimeMs
                                      ).format("dddd, MMMM D")}
                                    </div>
                                    <div className="delivery-option-price">
                                      {deliveryOption.priceCents === 0 &&
                                        "Free Shipping"}
                                      {`${fromatMoney(
                                        deliveryOption.priceCents
                                      )} - Shipping`}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
          </div>
          {paymentSummary && (
            <div className="payment-summary">
              <div className="payment-summary-title"> Payment Summary</div>
              <div className="payment-summary-row">
                <div>
                  Item {"("}
                  {paymentSummary.totalItems}
                  {")"}:
                </div>
                <div>{fromatMoney(paymentSummary.productCostCents)}</div>
              </div>
              <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div>{fromatMoney(paymentSummary.shippingCostCents)}</div>
              </div>
              <div className="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">
                  {fromatMoney(paymentSummary.totalCostBeforeTaxCents)}
                </div>
              </div>

              <div className="payment-summary-row total-row">
                <div>Order toal: </div>
                <div>{fromatMoney(paymentSummary.totalCostCents)}</div>
              </div>

              <button className="place-order-button button-primary">
                Place your order
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
