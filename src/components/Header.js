import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdShoppingBasket } from "react-icons/md";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/">Home</Link>
            <Link to="/women">Women</Link>
            <Link to="/man">Men</Link>
            <Link to="/denim">Denim</Link>
            <Link to="/shop" className="orange">
              {" "}
              The Gift Shop
            </Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="logo">
          <h1>Eshopland</h1>
        </div>

        <div className="right">
          <div className="search">
            <BsSearch className="search-icon" />
            <button className="sch-btn">Search</button>
          </div>

          <div className="right-buttons">
            <button>
              <Link to="/login">Log In</Link>
            </button>
            <button>
              <Link to="/sign-up">Sign Up</Link>
            </button>
            <MdShoppingBasket className="basket" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
