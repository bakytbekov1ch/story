import React from "react";

import { IoAddCircleOutline } from "react-icons/io5";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png"
              alt=""
            />
          </Link>
          <input type="text" placeholder="Видите дата" />

          <Link to="/wishlist">
            <IoAddCircleOutline className="header__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
