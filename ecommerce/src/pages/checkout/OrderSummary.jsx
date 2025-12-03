import { Fragment } from "react";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetail } from "./CartItemDetail";
import { DeliveryDate } from "./DeliveryDate";

export const OrderSummary = ({ deliveryOptions, cart, loadCart }) => {
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
                <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                <div className="cart-item-detail-grid">
                  <CartItemDetail cartItem={cartItem} loadCart={loadCart} />
                  <DeliveryOptions
                    cartItem={cartItem}
                    deliveryOptions={deliveryOptions}
                    loadCart={loadCart}
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};
