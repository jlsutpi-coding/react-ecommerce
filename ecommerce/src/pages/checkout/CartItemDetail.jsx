import { fromatMoney } from "../../utils/formatMoney";

export const CartItemDetail = ({ cartItem }) => {
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
          Quantity : {cartItem.quantity}
          <span className="update-quantity-link link-primary">Update</span>
          <span className="update-quantity-link link-primary">Delete</span>
        </div>
      </div>
    </>
  );
};
