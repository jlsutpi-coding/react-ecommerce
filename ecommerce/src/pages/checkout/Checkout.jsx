import { Fragment } from "react";
import "./Checkout.css";
import { CheckoutHeader } from "./CheckoutHeader";
import dayjs from "dayjs";
function Checkout({ cart }) {
  return (
    <>
      <link rel="icon" href="favicon/cart-favicon.png" />

      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review you order</div>
        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((cartItem) => {
              return (
                <Fragment key={cartItem.id}>
                  <div className="cart-item-container ">
                    <div className="delivery-date">
                      Delivery day:{" "}
                      {dayjs(cartItem.updateAt).format("dddd MMMM D")}
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
                          ${(cartItem.product.priceCents / 100).toFixed(2)}
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

                        <div className="delivery-option">
                          <input
                            className="delivery-option-input"
                            name="delivery-date"
                            type="radio"
                            id=""
                          />
                          <label htmlFor="">
                            <div>
                              <div className="delivery-option-date">
                                Tuesday, June 21
                              </div>
                              <div className="delivery-option-price">
                                Free Shipping
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="delivery-option">
                          <input
                            className="delivery-option-input"
                            name="delivery-date"
                            type="radio"
                            id=""
                          />
                          <label htmlFor="">
                            <div>
                              <div className="delivery-option-date">
                                Tuesday, June 21
                              </div>
                              <div className="delivery-option-price">
                                Free Shipping
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="delivery-option">
                          <input
                            className="delivery-option-input"
                            name="delivery-date"
                            type="radio"
                            id=""
                          />
                          <label htmlFor="">
                            <div>
                              <div className="delivery-option-date">
                                Tuesday, June 21
                              </div>
                              <div className="delivery-option-price">
                                Free Shipping
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="payment-summary">
            <div className="payment-summary-title"> Payment Summary</div>
            <div className="payment-summary-row">
              <div>
                Item {"("}3{")"}:
              </div>
              <div>$42.75</div>
            </div>
            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div>$4.99</div>
            </div>
            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order toal: </div>
              <div>$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
