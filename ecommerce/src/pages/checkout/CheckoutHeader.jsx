import { Link } from "react-router-dom";
import "./CheckoutHeader.css";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import CheckoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";

export const CheckoutHeader = ({ cart }) => {
  const totalQuantity = cart.reduce((ac, cv) => ac + cv.quantity, 0);
  return (
    <div className="checkout-header">
      <div className="checkout-left-section">
        <Link to={"/"} className="checkout-header-link">
          <img src={Logo} className="logo" alt="logo-white" />
          <img src={MobileLogo} className="mobile-logo" alt="mobile-logo" />
        </Link>
      </div>
      <div className="checkout-middle-section">
        Checkout {"("}
        <span className="checkout-cart-quantity">{totalQuantity} items</span>
        {")"}
      </div>
      <div className="checkout-right-section">
        <img src={CheckoutLockIcon} />
      </div>
    </div>
  );
};
