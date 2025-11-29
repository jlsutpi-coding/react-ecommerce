import { Link } from "react-router-dom";
import "./CheckoutHeader.css";
export const CheckoutHeader = () => {
  return (
    <div className="checkout-header">
      <div className="checkout-left-section">
        <Link to={"/"} className="checkout-header-link">
          <img src="images/logo.png" className="logo" alt="logo-white" />
          <img
            src="images/mobile-logo.png"
            className="mobile-logo"
            alt="mobile-logo"
          />
        </Link>
      </div>
      <div className="checkout-middle-section">
        Checkout {"("}
        <span className="checkout-cart-quantity">3 items</span>
        {")"}
      </div>
      <div className="checkout-right-section">
        <img src="images/icons/checkout-lock-icon.png" />
      </div>
    </div>
  );
};
