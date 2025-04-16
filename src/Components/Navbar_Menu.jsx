import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import whatsapp from "/media/AvitriSocialmedia-04.png";
import instragram from "/media/AvitriSocialmedia-03.png";
import facebook from "/media/AvitriSocialmedia-02.png";
import avitri_logo from "/media/logo.png";
import cart from "/media/shopping-cart.png";
import accounticon from "/media/accounticon.png";
import dropdown from "/media/dropdown.png";
import star_anise from "/media/star_anise.png";
import turmericpowder from "/media/turmericpowder.png";
import box from "/media/1.png";
import ProductImage from "/media/ProductImage.png";
import pavbhaji from "/media/pav_bhaji.png";
import logo from "/media/logo.png";
import { Row, Col, Button } from "react-bootstrap";

export default function Navbar_Menu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <>
    <div className="navbar-container d-none d-lg-block" style={{ position: "relative" }}>
      {/* Fixed Navbar */}
      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          zIndex: 1000,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          justifyContent: "space-around",
          gap: "30%",
        }}
      >
        {/* Desktop Menu */}
        <div className="desktop-menu left-links">
          <ul>
            {["SHOP", "DISCOVER", "RECIPES"].map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className={hoveredItem === index ? "hovered" : ""}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <div className="parent-container">
                  <Link
                    to={item === "RECIPES" ? "/recipes" : ""}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {item}
                    {(item === "SHOP" || item === "DISCOVER") && (
                      <img
                        src={dropdown}
                        style={{
                          width: "35px",
                          height: "auto",
                          marginLeft: "5px",
                          verticalAlign: "middle",
                        }}
                        className="dropUp"
                        alt="dropdown"
                      />
                    )}
                  </Link>
                </div>
                {/* Dropdown Box */}
                {item === "SHOP" && hoveredItem === index && (
                  <div className="dropdown-box">
                    <div className="product-shop">
                      <ul>
                        <li>
                          <Link to="/all-products">ALL PRODUCTS</Link>
                        </li>
                        <li>
                          <Link to="/whole-spices">SHOP BY WHOLE SPICES</Link>
                        </li>
                        <li>
                          <Link to="/ground-spices">SHOP BY GROUND SPICES</Link>
                        </li>
                        <li>
                          <Link to="/diy-spices">SHOP BY DIY SPICES KITS</Link>
                        </li>
                        <li>
                          <Link to="/retails">SHOP BY SPICES BLENDS</Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        alignSelf: "center",
                        position: "absolute",
                        left: "15%",
                        top: "20%",
                        width: "75%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "130px",
                          height: "130px",
                          backgroundColor: "#F4B65B",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "5px solid #AF261D",
                        }}
                      >
                        <Link to="/whole-spices">
                          <img
                            src={star_anise}
                            alt="star_anise"
                            style={{
                              width: "50%",
                              height: "auto",
                              objectFit: "cover",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </Link>
                      </div>

                      {/* <img
                        src={turmericpowder}
                        alt="box"
                        style={{
                          width: "10%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      /> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "130px",
                          height: "130px",
                          backgroundColor: "#AF261D",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "5px solid #F4B65B",
                        }}
                      >
                        <Link to="/ground-spices">
                          <img
                            src={turmericpowder}
                            alt="turmericpowder"
                            style={{
                              width: "50%",
                              height: "auto",
                              objectFit: "cover",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </Link>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "130px",
                          height: "130px",
                          backgroundColor: "#F4B65B",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "5px solid #AF261D",
                        }}
                      >
                        <Link to="/diy-spices">
                          <img
                            src={box}
                            alt="masala-box"
                            style={{
                              width: "80%",
                              height: "auto",
                              objectFit: "cover",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </Link>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "130px",
                          height: "130px",
                          backgroundColor: "#AF261D",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "5px solid #F4B65B",
                        }}
                      >
                        <Link to="/retails">
                          <img
                            src={pavbhaji}
                            alt="masala-box"
                            style={{
                              width: "50%",
                              height: "auto",
                              objectFit: "cover",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </Link>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "130px",
                          height: "130px",
                          backgroundColor: "#F4B65B",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "5px solid #AF261D",
                        }}
                      >
                        <Link to="/all-products">
                          <img
                            src={ProductImage}
                            alt="ProductImage"
                            style={{
                              width: "80%",
                              height: "auto",
                              objectFit: "cover",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        position: "absolute",
                        left: "12%",
                        top: "75%",
                        width: "80%",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "kapraneue, sans-serif",
                          letterSpacing: "1px",
                        }}
                      >
                        WHOLE SPICES
                      </p>
                      <p
                        style={{
                          fontFamily: "kapraneue, sans-serif",
                          letterSpacing: "1px",
                        }}
                      >
                        GROUND SPICES
                      </p>
                      <p
                        style={{
                          fontFamily: "kapraneue, sans-serif",
                          letterSpacing: "1px",
                        }}
                      >
                        DIY SPICES KITS
                      </p>
                      <p
                        style={{
                          fontFamily: "kapraneue, sans-serif",
                          letterSpacing: "1px",
                        }}
                      >
                        SPICES BLENDS
                      </p>
                      <p
                        style={{
                          fontFamily: "kapraneue, sans-serif",
                          letterSpacing: "1px",
                        }}
                      >
                        ALL PRODUCTS
                      </p>
                    </div>
                  </div>
                )}
                {item === "DISCOVER" && hoveredItem === index && (
                  <div className="dropdown-box1">
                    <div className="product-shop1">
                      <ul>
                        <li>
                          <Link to="/about">ABOUT US</Link>
                        </li>
                        <li>
                          <Link to="/all-products">PRODUCTS</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Icons */}
        <div className="right-icons">
          <ul>
            <li className="zoom-in-image">
              <Link
                to="https://api.whatsapp.com/send/?phone=917349444419"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="whatsapp-icon" />
              </Link>
            </li>
            <li className="zoom-in-image">
              <Link
                to="https://www.instagram.com/AvitriSpices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instragram} alt="instagram-icon" />
              </Link>
            </li>
            <li className="zoom-in-image">
              <Link
                to="https://www.facebook.com/AvitriSpices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook-icon" />
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="zoom-in-image"
            >
              <Link to="/cart">
                <img src={cart} alt="cart-icon" />
                <span
                  style={{
                    fontSize: "22px",
                    marginLeft: "5px",
                    fontFamily: "kapraneue,sans-serif",
                  }}
                >
                  CART
                  {/* ({cartCount}) */}
                </span>
              </Link>
            </li>
            <li className="zoom-in-image">
              <Link to="/login">
                <img src={accounticon} alt="Login" />
              </Link>
            </li>
          </ul>
        </div>
        {/* Logo with Zoom Effect */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            boxShadow: "1px 1px 5px lightgrey",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            position: "fixed",
            top: "2%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "9999",
            transition: "all 0.3s ease-in-out",
          }}
          className="avritri-logo"
        >
          <Link to="/">
            <img
              src={avitri_logo}
              alt="avitri-logo"
              style={{
                width: "80%",
                height: "auto",
                margin:'auto',
                display: "block",
                justifySelf: "center",
              }}
            />
          </Link>
        </div>
      </nav>

      <>
        {/* Hamburger Icon (Fixed Bottom) */}
        <div className="hamburger-menu">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
          >
            <FiMenu size={30} />
          </button>
        </div>

        {/* Fullscreen Menu */}
        {menuOpen && (
          <div className="hamburger-content">
            {/* Close Button */}
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <FiX size={30} />
            </button>

            <div>
              <Row className="mt-5 border-line">
                <Col className="border-right">
                  <Link to="/register">
                    <Button className="btn-login">CREATE ACCOUNT</Button>
                  </Link>
                  <Link to="/login">
                    <Button className="btn-login">LOGIN</Button>
                  </Link>
                </Col>
                <Col>
                  <ul className="menu-links follow-us">
                    <li className="zoom-in-image">
                      <Link
                        to="https://api.whatsapp.com/send/?phone=917349444419"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={whatsapp}
                          alt="whatsapp-icon"
                          className="icon-img"
                        />
                      </Link>
                    </li>
                    <li className="zoom-in-image">
                      <Link
                        to="https://www.instagram.com/AvitriSpices/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={instragram}
                          alt="instagram-icon"
                          className="icon-img"
                        />
                      </Link>
                    </li>
                    <li className="zoom-in-image">
                      <Link
                        to="https://www.facebook.com/AvitriSpices/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={facebook}
                          alt="facebook-icon"
                          className="icon-img"
                        />
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            {/* Navigation Links */}
            <ul className="menu-links">
              <li>
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      height: "auto",
                      objectFit: "cover",
                      alignSelf: "flex-start",
                    }}
                    className="logo-footer-mobile"
                  />
                </Link>
              </li>
              {/* SHOP MENU */}
              <li className="menu-item">
                <button
                  onClick={() => toggleDropdown("SHOP")}
                  className="menu-btn"
                >
                  SHOP
                  <img
                    src={dropdown}
                    className={`drop-icon ${
                      activeDropdown === "SHOP" ? "active" : ""
                    }`}
                    alt="dropdown"
                  />
                </button>
                {activeDropdown === "SHOP" && (
                  <div className="dropdown-menu-mobile">
                    <button
                      className="close-dropdown"
                      onClick={() => setActiveDropdown(null)}
                    >
                      ✖
                    </button>
                    <ul className="dropdown-grid-mobile">
                      <li>
                        <Link to="/all-products">ALL PRODUCTS</Link>
                      </li>
                      <li>
                        <Link to="/whole-spices">WHOLE SPICES</Link>
                      </li>
                      <li>
                        <Link to="/ground-spices">GROUND SPICES</Link>
                      </li>
                      <li>
                        <Link to="/diy-spices">DIY SPICE KITS</Link>
                      </li>
                      <li>
                        <Link to="/retails">SPICE BLENDS</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* DISCOVER MENU */}
              <li className="menu-item">
                <button
                  onClick={() => toggleDropdown("DISCOVER")}
                  className="menu-btn"
                >
                  DISCOVER
                  <img
                    src={dropdown}
                    className={`drop-icon ${
                      activeDropdown === "DISCOVER" ? "active" : ""
                    }`}
                    alt="dropdown"
                  />
                </button>
                {activeDropdown === "DISCOVER" && (
                  <div className="dropdown-menu-mobile">
                    <button
                      className="close-dropdown"
                      onClick={() => setActiveDropdown(null)}
                    >
                      ✖
                    </button>
                    <ul className="dropdown-grid-mobile">
                      <li>
                        <Link to="/about">ABOUT US</Link>
                      </li>
                      <li>
                        <Link to="/all-products">PRODUCTS</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* RECIPES MENU */}
              <li className="menu-item">
                <Link to="/recipes">
                  <button
                    onClick={() => toggleDropdown("RECIPES")}
                    className="menu-btn"
                  >
                    RECIPES
                  </button>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/cart">
                  <button className="menu-btn">CART</button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>

      <style>
        {`

/* Mobile Hamburger Menu */
/* 🔻 Bottom Positioned Hamburger Icon */
.border-right{
  border-right: 2px solid rgba(0, 0, 10, 0.43); 
  text-align: center;
}
.border-line {
  border: 2px solid rgba(0, 0, 10, 0.43);  
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.btn-login {
  width: 120px;
  padding: 2px;
  border-radius: 50px;
  font-size: 16px;
   font-family: kapraneue, sans-serif;
   letter-spacing: 0.5px;
   margin : 5px;
   background: none;
   border: 2px solid #af261d;
   color: black;
}

button:hover {
  background: black;
  color: white;
}
.hamburger-menu {
  position: fixed;
  top: 30px;
  right: 0%;
  transform: translateX(-50%);
  background:rgb(255, 255, 255);
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: none;
}

.hamburger-btn {
  background: white;
  border: none;
  cursor: pointer;
  padding: 2px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px lightgrey;
}

/* 🔻 Fullscreen Hamburger Menu */
.hamburger-content {
  position: fixed;
  top: 100px;
  right: 10px;
  // transform: translateX(-50%);
  width: 95vw;
  height: 50vh;
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.57);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  z-index: 10000;
  animation: fadeIn 0.3s ease-in-out;
}

/* 🔻 Close Button */
.close-btn {
  position: absolute;
  top: 10px; 
  right: 5%;  
  transform: translateX(-50%); 
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; 
}



/* 🔻 Navigation Links */
.menu-links {
  list-style: none;
  padding: 15px 0 20px 15px;
  font-family: kapraneue, sans-serif;
  letter-spacing: 1px;
  margin-top: 12px;
 

}

/* Ensure the parent li has a relative position */
.menu-item {
  position: relative;
  width: 95%; 
  text-align: left; 
  margin-bottom: 10px;
   border-bottom: 2px solid rgb(0, 0, 0);
}

.menu-item a {
  text-decoration: none;
        }

.menu-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 🔻 Dropdown Icon */
.drop-icon {
  width: 20px;
  height: auto;
  transition: transform 0.3s ease;
}

.drop-icon.active {
  transform: rotate(180deg);
}

/* Dropdown Styling */

/* Dropdown Styling */
.dropdown-menu-mobile {
  position: absolute;  
  top: 100%;  
  left: 0;  
  width: 95%; 
  background:rgb(0, 0, 0);
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;  
}

.close-dropdown{
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
}

/* Dropdown Grid Layout */
.dropdown-grid-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px;
  list-style: none;
  padding: 0;
  text-align: left;
}

/* Dropdown Items */
.dropdown-grid-mobile li {
  padding: 10px;
  border-radius: 5px;
  text-align: left; 
  transition: background 0.3s ease;

}

.dropdown-grid-mobile li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: kapraneue, sans-serif;
  font-size: 16px;
}

.dropdown-grid-mobile li:hover {
  background: #ddd;

}



@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@media screen and (max-width: 425px) {
  .desktop-menu,
  .right-icons, 
  .avritri-logo-container { 
    display: none !important;
  }

  .hamburger-menu {
    display: block;
  }
    .avritri-logo {
  width: 80%;
  height: auto;
  display: block;
  margin-top: 20px;
}

  .hamburger-content {
    height: 60vh;
    position: fixed;
  }

   .logo-footer-mobile {
  width: 22%;
  padding: 10px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: white; 
  border-radius: 50%; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
   position: absolute;
  bottom: -6%;
  left: 50%;
  transform: translate(-50%, -50%);
 
  }

  .icon-img{
  width: 70%;
  }
  .follow-us{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
      `}
      </style>
    </div>


    
    <div className="d-block d-lg-none">
    <div className="mobile-header-wrapper">
  {/* Header Row: Socials | Logo | Menu */}
  <div className="mobile-header-row">
    {/* Social Icons - Left */}
    <div className="social-icons-left">
      <a href="https://api.whatsapp.com/send/?phone=917349444419" target="_blank">
        <img src={whatsapp} alt="whatsapp" />
      </a>
      <a href="https://www.instagram.com/AvitriSpices/" target="_blank">
        <img src={instragram} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/AvitriSpices/" target="_blank">
        <img src={facebook} alt="facebook" />
      </a>
    </div>

    {/* Menu Icon - Right */}
    <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
      <FiMenu size={28} />
    </button>

    {/* Centered Floating Logo */}
    <div className="mobile-logo-badge">
      <Link to="/">
        <img src={avitri_logo} alt="logo" className="mobile-logo-img" />
      </Link>
    </div>
  </div>

  {/* Offcanvas Menu */}
  {menuOpen && (
    <div className="mobile-offcanvas">
      <button className="close-offcanvas" onClick={() => setMenuOpen(false)}>
        <FiX size={26} />
      </button>

      {/* Account Buttons */}
      <div className="account-buttons">
        <Link to="/register"><button className="btn-login">CREATE ACCOUNT</button></Link>
        <Link to="/login"><button className="btn-login">LOGIN</button></Link>
      </div>

      {/* Navigation */}
      <ul className="mobile-nav-links">
        <li>
          <button className="dropdown-toggle" onClick={() => toggleDropdown("SHOP")}>SHOP</button>
          {activeDropdown === "SHOP" && (
            <ul className="dropdown-items">
              <li><Link to="/all-products">All Products</Link></li>
              <li><Link to="/whole-spices">Whole Spices</Link></li>
              <li><Link to="/ground-spices">Ground Spices</Link></li>
              <li><Link to="/diy-spices">DIY Spice Kits</Link></li>
              <li><Link to="/retails">Spice Blends</Link></li>
            </ul>
          )}
        </li>

        <li>
          <button className="dropdown-toggle" onClick={() => toggleDropdown("DISCOVER")}>DISCOVER</button>
          {activeDropdown === "DISCOVER" && (
            <ul className="dropdown-items">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/all-products">Products</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/recipes">RECIPES</Link></li>
        <li><Link to="/cart">CART</Link></li>
      </ul>
    </div>
  )}

  {/* Inline CSS */}
  <style>{`
    .mobile-header-wrapper {
     position: sticky; 
      top: 0;
      background: white;
      padding: 12px 15px 24px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      z-index: 100;
    }

    .mobile-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .social-icons-left {
      display: flex;
      gap: 10px;
      z-index: 2;
    }

    .social-icons-left img {
      width: 20px;
      height: 20px;
    }

    .mobile-menu-btn {
      background: none;
      border: none;
      cursor: pointer;
      z-index: 2;
    }

    /* Floating Logo */
    .mobile-logo-badge {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
    }

    .mobile-logo-img {
      width: 55%;
      height: auto;
       margin-left: 20%;
    }

    .mobile-offcanvas {
      position: fixed;
      top: 0;
      right: 0;
      width: 80vw;
      height: 100vh;
      background: white;
      box-shadow: -2px 0 8px rgba(0,0,0,0.2);
      padding: 20px;
      z-index: 9999;
      animation: slideIn 0.3s ease;
    }

    .close-offcanvas {
      background: none;
      border: none;
      font-size: 22px;
      position: absolute;
      top: 15px;
      right: 20px;
    }

    .account-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 60px;
    }

    .btn-login {
      padding: 10px;
      border-radius: 30px;
      border: 2px solid #AF261D;
      background: none;
      color: #333;
      font-family: kapraneue, sans-serif;
      font-size: 14px;
    }

    .btn-login:hover {
      background: black;
      color: white;
    }

    .mobile-nav-links {
      list-style: none;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 18px;
      font-family: kapraneue, sans-serif;
    }

    .mobile-nav-links li a,
    .dropdown-toggle {
      font-size: 18px;
      color: #222;
      text-decoration: none;
      font-weight: 600;
      background: none;
      border: none;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }

    .dropdown-items {
      margin-top: 10px;
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .dropdown-items li a {
      font-size: 16px;
      color: #444;
      font-weight: 500;
      text-decoration: none;
    }

    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
  `}</style>
</div>





</div>

    </>
  );
}
