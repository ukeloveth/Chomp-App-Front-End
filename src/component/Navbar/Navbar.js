import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../asset/logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

 const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Order",
      url: "/order",
    },
    {
      title: "Company",
      url: "/company",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <nav className="navbar ">
      <div className="container navbar-wrapper">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="icons" /> : <FaBars className="icons" />}
        </div>
        <div className={click ? "navbar__right active" : "navbar__right"}>
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  exact={true}
                  className="li"
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
