import { useState, useEffect, useRef } from "react";
import cart from "/media/Cart.png";

const CartSidebar = () => {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference for sidebar

  const toggleSidebar = (e) => {
    e.preventDefault(); // Prevent navigation
    setSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
       <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          // overflow:"hidden"
        }}
      >
      {/* Cart Button */}
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        className="zoom-in-image"
        onClick={toggleSidebar}
      >
        <img src={cart} alt="cart-icon" />
        <span
          style={{
            fontSize: "24px",
            marginLeft: "5px",
            fontFamily: "kapraneue,sans-serif",
          }}
        >
          CART
        </span>
      </li>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
      >
        <button className="close-btn" onClick={toggleSidebar}>X</button>
        <h2>Your Cart</h2>
        <p>Items will be displayed here...</p>
      </div>
    </div>
    </div>
  );
};

export default CartSidebar;
