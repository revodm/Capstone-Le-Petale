import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <a href="#" className="logo">
            <img src="images/le-petale-website-favicon-color.png" alt="" />
          </a>

          <i className="bx bx-menu" id="menu-icon"></i>

          <ul className="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#customers">Customers</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>

          <div className="header-icon">
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-search" id="search-icon"></i>
          </div>

          <div className="search-box">
            <input type="search" name="" id="" placeholder="Search Here..." />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
