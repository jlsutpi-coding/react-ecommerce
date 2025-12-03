import dayjs from "dayjs";
import { fromatMoney } from "../../utils/formatMoney";

export const DeliveryOptions = ({ deliveryOptions, cartItem }) => {
  return (
    <div className="delivery-option-container">
      <div className="delivery-option-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              className="delivery-option-input"
              name={`delivery-option-${cartItem.product.id}`}
              type="radio"
              defaultChecked={deliveryOption.id === cartItem.deliveryOptionId}
            />
            <div>
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D"
                  )}
                </div>
                <div className="delivery-option-price">
                  {deliveryOption.priceCents === 0 && "Free Shipping"}
                  {`${fromatMoney(deliveryOption.priceCents)} - Shipping`}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
