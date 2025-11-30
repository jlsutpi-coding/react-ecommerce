import dayjs from "dayjs";
import { fromatMoney } from "../../utils/formatMoney";
import { Fragment } from "react";
import { DeliveryOptions } from "./DeliveryOptions";

export const OrderSummary = ({ deliveryOptions, cart }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => deliveryOption.id === cartItem.deliveryOptionId
          );
          return (
            <Fragment key={cartItem.id}>
              <div className="cart-item-container ">
                <div className="delivery-date">
                  Delivery date:
                  {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D"
                  )}
                </div>
                <div className="cart-item-detail-grid">
                  <img
                    src={cartItem.product.image}
                    className="product-img"
                    alt=""
                  />
                  <div className="cart-item-details">
                    <div className="cart-title">{cartItem.product.name}</div>
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
                  <DeliveryOptions
                    cartItem={cartItem}
                    deliveryOptions={deliveryOptions}
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};
