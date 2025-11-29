import { NavLink } from "react-router-dom";
import "./header.css";
import MobileLogoWhite from "../assets/images/mobile-logo-white.png";
import SearchIcon from "../assets/images/icons/search-icon.png";
import CartIcon from "../assets/images/icons/cart-icon.png";
import LogoWhite from "../assets/images/logo-white.png";

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to={"/"} className="header-link">
          <img src={LogoWhite} className="logo" alt="logo-white" />
          <img
            src={MobileLogoWhite}
            className="mobile-logo"
            alt="mobile-logo"
          />
        </NavLink>
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-button">
          <img
            src={SearchIcon}
            className="search-icon"
            alt="button-search-icon"
          />
        </button>
      </div>
      <div className="right-section">
        <NavLink to={"/orders"} className="cart-link header-link">
          <span className="orders-text">Orders</span>
        </NavLink>
        <NavLink to={"/checkout"} className="cart-link header-link">
          <img src={CartIcon} className="cart-icon" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
