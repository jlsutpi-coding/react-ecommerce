import { useEffect, useRef, useState } from "react";
import { fromatMoney } from "../../utils/formatMoney";
import axios from "axios";

export const CartItemDetail = ({ cartItem, loadCart }) => {
  const inputRef = useRef(null);

  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  useEffect(() => {
    if (isUpdating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isUpdating]);

  useEffect(() => {
    // Close when clicking outside
    function handleClickOutside(e) {
      if (
        isUpdating &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setIsUpdating(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUpdating]);

  const onUpdate = async () => {
    if (isUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
    }

    setIsUpdating(!isUpdating);
  };

  const onKeyDownHandler = async (e) => {
    if (e.key === "Enter") {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdating(!isUpdating);
    }

    if (e.key === "Escape") {
      setIsUpdating(false);
    }
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
              ref={inputRef}
              type="number"
              value={quantity}
              onKeyDown={(e) => onKeyDownHandler(e)}
              onChange={(e) => {
                setQuantity(e.target.value);
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
