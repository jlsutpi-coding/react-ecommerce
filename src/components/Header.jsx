import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <Link to={"/"} className="header-link">
          <img src="images/logo-white.png" className="logo" alt="logo-white" />
          <img
            src="images/mobile-logo-white.png"
            className="mobile-logo"
            alt="mobile-logo"
          />
        </Link>
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-button">
          <img
            src="images/icons/search-icon.png"
            className="search-icon"
            alt="button-search-icon"
          />
        </button>
      </div>
      <div className="right-section">
        <Link to={"/orders"} className="cart-link header-link">
          <span className="orders-text">Orders</span>
        </Link>
        <Link to={"/checkout"} className="cart-link header-link">
          <img src="images/icons/cart-icon.png" className="cart-icon" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
