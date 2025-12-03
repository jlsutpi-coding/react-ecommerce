import dayjs from "dayjs";
import { fromatMoney } from "../../utils/formatMoney";
import axios from "axios";

export const DeliveryOptions = ({ deliveryOptions, cartItem, loadCart }) => {
  return (
    <div className="delivery-option-container">
      <div className="delivery-option-title">Choose a delivery option:</div>

      {deliveryOptions.map((deliveryOption) => {
        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });
          await loadCart();
        };

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              className="delivery-option-input"
              name={`delivery-option-${cartItem.product.id}`}
              type="radio"
              onChange={() => {}}
              checked={deliveryOption.id === cartItem.deliveryOptionId}
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
