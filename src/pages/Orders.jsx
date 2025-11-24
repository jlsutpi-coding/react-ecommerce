import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "./Orders.css";
function Orders() {
  return (
    <>
      <title> Orders</title>
      <Header />
      <div className="orders-page">
        <h4 className="orders-heading">Your Orders</h4>

        <div className="orders-grid">
          <div className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$35.06</div>
                </div>
              </div>
              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img
                  src="images/products/2-slot-toaster-white.jpg"
                  alt="toaster white"
                  className="order-details-image"
                />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">Quantity: 1</div>
                <button className="buy-again-button button-primary">
                  <img
                    src="images/icons/buy-again.png"
                    className="buy-again-icon"
                    alt=""
                  />
                  Add to Cart
                </button>
              </div>

              <div className="product-actions">
                <Link className="link" to="/tracking/sdfderlkadl">
                  <button className=" track-pakage-button product-secondary">
                    Track Pakage
                  </button>
                </Link>
              </div>
              <div className="product-image-container">
                <img
                  src="images/products/2-slot-toaster-white.jpg"
                  alt="toaster white"
                  className="order-details-image"
                />
              </div>
              <div className="product-details">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">Quantity: 1</div>
                <button className="buy-again-button button-primary">
                  <img
                    src="images/icons/buy-again.png"
                    className="buy-again-icon"
                    alt=""
                  />
                  Add to Cart
                </button>
              </div>
              <div className="product-actions">
                <Link className="link" to="/tracking/sdfderlkadl">
                  <button className=" track-pakage-button product-secondary">
                    Track Pakage
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$35.06</div>
                </div>
              </div>
              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img
                  src="images/products/2-slot-toaster-white.jpg"
                  alt="toaster white"
                  className="order-details-image"
                />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">Quantity: 1</div>
                <button className="buy-again-button button-primary">
                  <img
                    src="images/icons/buy-again.png"
                    className="buy-again-icon"
                    alt=""
                  />
                  Add to Cart
                </button>
              </div>

              <div className="product-actions">
                <Link className="link" to="/tracking/sdfderlkadl">
                  <button className=" track-pakage-button product-secondary">
                    Track Pakage
                  </button>
                </Link>
              </div>
              <div className="product-image-container">
                <img
                  src="images/products/2-slot-toaster-white.jpg"
                  alt="toaster white"
                  className="order-details-image"
                />
              </div>
              <div className="product-details">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">Quantity: 1</div>
                <button className="buy-again-button button-primary">
                  <img
                    src="images/icons/buy-again.png"
                    className="buy-again-icon"
                    alt=""
                  />
                  Add to Cart
                </button>
              </div>
              <div className="product-actions">
                <Link className="link" to="/tracking/sdfderlkadl">
                  <button className=" track-pakage-button product-secondary">
                    Track Pakage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
