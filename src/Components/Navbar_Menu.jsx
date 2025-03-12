import { Link } from "react-router-dom";
import { useState } from "react";
import whatsapp from "/media/AvitriSocialmedia-04.png";
import instragram from "/media/AvitriSocialmedia-03.png";
import facebook from "/media/AvitriSocialmedia-02.png";
import avitri_logo from "/media/logo.png";
import cart from "/media/shopping-cart.png";
import dropdown from "/media/dropdown.png";
import star_anise from "/media/star_anise.png";
import turmericpowder from "/media/turmericpowder.png";
import box from "/media/1.png";
// import LatestProducts from "/media/LatestProducts.png";
import ProductImage from "/media/ProductImage.png";
// import CartSidebar from "./CartSidebar";
import pavbhaji from "/media/pav_bhaji.png";
import accounticon from "/media/accounticon.png";
// import { useSelector } from "react-redux";

export default function Navbar_Menu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  // const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <div className="navbar-container" style={{ position: "relative" }}>
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
        {/* Left Links */}
        <div className="left-links">
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
      </nav>

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
        className="zoom-in-image"
      >
        <Link to="/">
          <img
            src={avitri_logo}
            alt="avitri-logo"
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              justifySelf: "center",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
