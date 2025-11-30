import dayjs from "dayjs";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const OrdersGrid = ({ order }) => {
  return (
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
              <div className="product-name">{orderProduct.product.name}</div>
              <div className="product-delivery-date">
                Arriving on:
                {dayjs(orderProduct.estimatedDeliveryTimeMs).format(" MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img
                  src={BuyAgainIcon}
                  className="buy-again-icon"
                  alt="buy-again-icon"
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
  );
};
