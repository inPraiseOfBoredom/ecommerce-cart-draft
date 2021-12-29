import React, { useState } from "react";
import Menu from "../components/Menu";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button className="menu-button" onClick={openMenu}>
          <img className="menu" src={menu} />
        </button>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

        <img className="logo" src={logo} />
      </div>
      <div className="navbar-right">
        <img className="cart" src={cart} />
        <img className="avatar" src={avatar} />
      </div>
    </div>
  );
};

export default Navbar;
