import "./CheckoutHeader.css";
import "./Checkout.css";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="checkout-left-section">
          <Link to={"/"} className="checkout-header-link">
            <img src="images/logo.png" className="logo" alt="logo-white" />
            <img
              src="images/mobile-logo.png"
              className="mobile-logo"
              alt="mobile-logo"
            />
          </Link>
        </div>
        <div className="checkout-middle-section">
          Checkout {"("}
          <span className="checkout-cart-quantity">3 items</span>
          {")"}
        </div>
        <div className="checkout-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
      <div className="checkout-page">
        <div className="page-title">Review you order</div>
        <div className="checkout-grid">
          <div className="order-summary">
            <div className="cart-item-container ">
              <div className="delivery-date">Delivery day: Tuesday June 21</div>
              <div className="cart-item-detail-grid">
                <img
                  src="images/products/2-slot-toaster-white.jpg"
                  className="product-img"
                  alt=""
                />
                <div className="cart-item-details">
                  <div className="cart-title">
                    Black and Gray Athletic Cotton Socks- 6 Pair
                  </div>
                  <div className="cart-price"> $ 10.90</div>
                  <div className="cart-quantity">
                    {" "}
                    Quantity : 1{" "}
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>{" "}
                    <span className="update-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
                <div className="delivery-option-container">
                  <div className="delivery-option-title">
                    Choose a delivery option:{" "}
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
            <div className="cart-item-container ">
              <div className="delivery-date">Delivery day: Tuesday June 21</div>
              <div className="cart-item-detail-grid">
                <img
                  src="images/products/intermediate-composite-basketball.jpg"
                  className="product-img"
                  alt=""
                />
                <div className="cart-item-details">
                  <div className="cart-title">Intermediate Size Basketball</div>
                  <div className="cart-price">$20.95</div>
                  <div className="cart-quantity">
                    {" "}
                    Quantity : 1{" "}
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>{" "}
                    <span className="update-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
                <div className="delivery-option-container">
                  <div className="delivery-option-title">
                    Choose a delivery option:{" "}
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
            <div className="cart-item-container ">
              <div className="delivery-date">Delivery day: Tuesday June 21</div>
              <div className="cart-item-detail-grid">
                <img
                  src="images/products/2-slot-toaster-white.jpg"
                  className="product-img"
                  alt=""
                />
                <div className="cart-item-details">
                  <div className="cart-title">
                    Black and Gray Athletic Cotton Socks- 6 Pair
                  </div>
                  <div className="cart-price"> $ 10.90</div>
                  <div className="cart-quantity">
                    {" "}
                    Quantity : 1{" "}
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>{" "}
                    <span className="update-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
                <div className="delivery-option-container">
                  <div className="delivery-option-title">
                    Choose a delivery option:{" "}
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
