import React from "react";
import close from "../assets/icon-close.svg";

const Menu = ({ setShowMenu, showMenu }) => {
  const closeMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const menuClassName = showMenu ? "menu display" : "display-none";

  return (
    <div className={menuClassName}>
      <div className="menu-container">
        <button className="menu-button" onClick={closeMenu}>
          <img src={close} />
        </button>
        <ul>
          <li> Collections</li>
          <li> Men</li>
          <li> Women</li>
          <li> About</li>
          <li> Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
