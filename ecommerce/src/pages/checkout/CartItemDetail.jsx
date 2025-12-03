import { useState } from "react";
import { fromatMoney } from "../../utils/formatMoney";
import axios from "axios";

export const CartItemDetail = ({ cartItem, loadCart }) => {
  const [isUpdating, setIsUpDating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const onUpdate = async () => {
    if (isUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, { quantity });
      await loadCart();
    }
    setIsUpDating(!isUpdating);
  };

  const onDelete = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };
  return (
    <>
      <img
        src={cartItem.product.image}
        className="product-img"
        alt="product-img"
      />
      <div className="cart-item-details">
        <div className="cart-title">{cartItem.product.name}</div>
        <div className="cart-price">
          {fromatMoney(cartItem.product.priceCents)}
        </div>
        <div className="cart-quantity">
          {!isUpdating && `Quantity : ${quantity}`}
          {isUpdating && (
            <input
              style={{ width: "50px" }}
              value={quantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            />
          )}

          <span
            onClick={onUpdate}
            className="update-quantity-link link-primary"
          >
            Update
          </span>
          <span
            onClick={onDelete}
            className="update-quantity-link link-primary"
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
};
