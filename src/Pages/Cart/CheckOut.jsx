import Footer from "../../Components/Footer";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../Home/LearnMore";
import { Row, Col, Form, Button, Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Vector from "/media/Vector.png";
import mongoose from "mongoose";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function CheckOut({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [savedAddressId, setSavedAddressId] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isUsingManualAddress, setIsUsingManualAddress] = useState(false);

  const user = useSelector((state) => state.auth?.user || null);

  console.log("User Data in Redux:", user);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+91",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    region: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user && user.id) {
      fetchSavedAddresses();
    }
  }, [user]); // ✅ Ensures the effect runs when `user` changes

  const fetchSavedAddresses = async () => {
    if (!user || !user.id) {
      console.error("🚨 Error: User not logged in!");
      return;
    }

    try {
      console.log("📤 Fetching addresses for user:", user.id);
      const response = await axios.get(
        `https://api.nncwebsitedevelopment.com/api/shipping-address/user/${user.id}`
      );

      if (response.status === 200 && response.data.length > 0) {
        console.log("✅ Addresses fetched:", response.data);
        setSavedAddresses(response.data);

        // ✅ Automatically select the first address if none is selected
        if (!selectedAddressId) {
          setSelectedAddressId(response.data[0]._id);
        }

        // ✅ Ensure manual form is hidden if addresses exist
        setIsUsingManualAddress(false);
      } else {
        console.warn("⚠️ No saved addresses found.");
        setSavedAddresses([]);

        // ✅ Automatically show form if no saved addresses exist
        setTimeout(() => {
          setIsUsingManualAddress(true);
        }, 100); // 🔹 Small delay to ensure state updates properly
      }
    } catch (error) {
      console.error(
        "🚨 Error fetching addresses:",
        error.response?.data || error.message
      );
    }
  };

  const handleSelectAddress = (id) => {
    if (selectedAddressId === id) {
      setSelectedAddressId(null);
      setIsUsingManualAddress(true);
    } else {
      setSelectedAddressId(id);
      setIsUsingManualAddress(false);
    }
  };

  //   const handleSaveAddress = async (e) => {
  //     e.preventDefault();

  //     if (!user || !user.id) {
  //         alert("⚠️ Please login before saving your address.");
  //         navigate("/login");
  //         return;
  //     }

  //     const shippingData = {
  //         userId: user.id, // ✅ Send userId in request
  //         firstName: address.firstName,
  //         lastName: address.lastName,
  //         phoneNumber: address.phoneNumber,
  //         address: address.address1 + (address.address2 ? ", " + address.address2 : ""),
  //         city: address.city,
  //         state: address.state,
  //         pincode: address.pincode,
  //         country: address.country,
  //         email: user.email,
  //     };

  //     console.log("🔹 Shipping Data Sent to API:", shippingData); // ✅ Debugging

  //     try {
  //         const response = await axios.post("https://api.nncwebsitedevelopment.com/api/shipping-address", shippingData);

  //         if (response.status === 201) {
  //             alert("✅ Shipping address saved successfully!");
  //             // fetchSavedAddresses();
  //             setSavedAddressId(response.data.shippingAddress._id);
  //         } else {
  //             alert("❌ Failed to save address. Try again.");
  //         }
  //     } catch (error) {
  //         console.error("🚨 Error saving address:", error.response?.data || error.message);
  //         alert(`❌ Error saving address: ${error.response?.data?.message || "Unknown error"}`);
  //     }
  // };

  //   const handlePlaceOrder = async () => {
  //     if (!savedAddressId) {
  //         alert("Please save your shipping address before placing an order.");
  //         return;
  //     }

  //     if (!user || !user.id) {
  //         alert(" Please log in to proceed to checkout.");
  //         navigate("/login");
  //         return;
  //     }

  //     console.log(" Cart Items Before Fix:", cartItems);

  //     if (!cartItems || cartItems.length === 0) {
  //         alert(" No valid products in the cart. Please add items again.");
  //         return;
  //     }

  //     const cartItemsFixed = cartItems.map((item) => ({
  //         _id: String(item.id),
  //         name: item.title || "Unnamed Product",
  //         price: parseFloat(item.price) || 0,
  //         quantity: item.quantity || 1,
  //         images: item.image ? [item.image] : [],
  //         category: item.category || "Uncategorized",
  //     }));

  //     console.log(" Cart Items After Fix:", cartItemsFixed);

  //     if (cartItemsFixed.length === 0) {
  //         alert("No valid products found in the cart. Please add items again.");
  //         return;
  //     }

  //     const orderData = {
  //         email: user.email,
  //         firstName: address.firstName,
  //         lastName: address.lastName,
  //         phoneNumber: address.phoneNumber,
  //         shippingAddress: savedAddressId,
  //         cartItems: cartItemsFixed,
  //         paymentMethod: "Online Payment",
  //         totalAmount: total,
  //         userId: user.id,
  //     };

  //     console.log("🔹 Order Data Sent to API:", orderData);
  //     try {
  //         const response = await axios.post("https://api.nncwebsitedevelopment.com/api/orders", orderData);

  //         if (response.status === 201) {
  //             alert(" Order placed successfully!");
  //             navigate("/thank-you");
  //         } else {
  //             alert(" Failed to place order. Try again.");
  //         }
  //     } catch (error) {
  //         console.error(" Error placing order:", error.response?.data || error.message);
  //         alert(` Error placing order: ${error.response?.data?.message || "Unknown error"}`);
  //     }
  // };

  const handleSaveAddress = async (e) => {
    e.preventDefault();

    if (!user || !user.id) {
      alert("⚠️ Please login before saving your address.");
      navigate("/login");
      return;
    }

    const shippingData = {
      userId: user.id,
      firstName: address.firstName,
      lastName: address.lastName,
      phoneNumber: address.phoneNumber,
      address:
        address.address1 + (address.address2 ? ", " + address.address2 : ""),
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      country: address.country,
      email: user.email,
    };

    console.log("🔹 Shipping Data Sent to API:", shippingData);

    try {
      const response = await axios.post(
        "https://api.nncwebsitedevelopment.com/api/shipping-address",
        shippingData
      );

      if (response.status === 201) {
        alert("Shipping address saved successfully!");

        fetchSavedAddresses();

        setSelectedAddressId(response.data.shippingAddress._id);

        setIsUsingManualAddress(false);
      } else {
        alert("Failed to save address. Try again.");
      }
    } catch (error) {
      console.error(
        "Error saving address:",
        error.response?.data || error.message
      );
      alert(
        `Error saving address: ${
          error.response?.data?.message || "Unknown error"
        }`
      );
    }
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddressId && !isUsingManualAddress) {
      alert("Please select or add a shipping address before placing an order.");
      return;
    }

    if (!user || !user.id) {
      alert("Please log in to proceed to checkout.");
      navigate("/login");
      return;
    }

    let selectedAddress = null;

    if (isUsingManualAddress) {
      selectedAddress = {
        firstName: address.firstName,
        lastName: address.lastName,
        phoneNumber: address.phoneNumber,
        address:
          address.address1 + (address.address2 ? ", " + address.address2 : ""),
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        country: address.country,
      };
    } else {
      selectedAddress = savedAddresses.find(
        (addr) => addr._id === selectedAddressId
      );

      if (!selectedAddress) {
        alert("Selected address not found. Please try again.");
        return;
      }
    }

    const orderData = {
      email: user.email,
      firstName: selectedAddress.firstName,
      lastName: selectedAddress.lastName,
      phoneNumber: selectedAddress.phoneNumber,
      shippingAddress: isUsingManualAddress ? null : selectedAddressId,
      cartItems: cartItems.map((item) => ({
        _id: String(item.id),
        name: item.title || "Unnamed Product",
        price: parseFloat(item.price) || 0,
        quantity: item.quantity || 1,
        images: item.image ? [item.image] : [],
        category: item.category || "Uncategorized",
      })),
      paymentMethod: "Online Payment",
      totalAmount: total,
      userId: user.id,
    };

    console.log("🔹 Order Data Sent to API:", orderData);

    try {
      const response = await axios.post(
        "https://api.nncwebsitedevelopment.com/api/orders",
        orderData
      );

      if (response.status === 201) {
        alert(" Order placed successfully!");
        navigate("/thank-you");
      } else {
        alert("Failed to place order. Try again.");
      }
    } catch (error) {
      console.error(
        " Error placing order:",
        error.response?.data || error.message
      );
      alert(
        ` Error placing order: ${
          error.response?.data?.message || "Unknown error"
        }`
      );
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 1),
    0
  );
  // Fixed shipping cost
  const shipping = 50;

  // Tax (18% of subtotal)
  const tax = subtotal * 0.18;

  // Total (Subtotal + Shipping + Tax)
  const total = subtotal + shipping + tax;

  const [hovered, setHovered] = useState(false);

  const zoomIn = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.9)",
    opacity: hovered ? 1 : 1,
    config: { tension: 250, friction: 25 },
  });

  return (
    <>
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          // overflow:'hidden'
        }}
      >
        {/* Navbar */}
        <Navbar_Menu />

        <div
          style={{ margin: "15% 0% 10% 0%" }}
          className="div-shippingaddress"
        >
          <h1
            style={{
              letterSpacing: "3px",
              fontSize: "75px",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              textAlign: "center",
            }}
            className="shippingaddress-h1"
          >
            SHIPPING ADDRESS
          </h1>

          {/* Show saved addresses in card format if available */}
          {savedAddresses.length > 0 && (
            <div className="address-list">
              <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                SELECT SHIPPING ADDRESS
              </h3>

              {savedAddresses.map((address) => (
                <div
                  key={address._id}
                  className={`address-card p-3 mb-3 ${
                    selectedAddressId === address._id ? "selected-address" : ""
                  }`}
                  onClick={() => handleSelectAddress(address._id)}
                  style={{
                    cursor: "pointer",
                    width: "50%",
                    margin: "auto",
                    border:
                      selectedAddressId === address._id
                        ? "2px solid blue"
                        : "1px solid black",
                    borderRadius: "8px",
                    background: "#FAF7F1",
                  }}
                >
                  <p>
                    <strong>
                      {address.firstName} {address.lastName}
                    </strong>
                  </p>
                  <p>
                    {address.address}, {address.city}, {address.state} -{" "}
                    {address.pincode}, {address.country}
                  </p>
                  <p>
                    <strong>Phone:</strong> {address.phoneNumber}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Show the form only if no address is selected OR user is using manual entry */}
          {(isUsingManualAddress || savedAddresses.length === 0) && (
            <div>
              <Container
                fluid
                className="d-flex justify-content-center align-items-center max-vh-100 bg-light pt-5"
              >
                <div className="form-container p-4">
                  <Form
                    onSubmit={handleSaveAddress}
                    style={{ fontSize: "20px" }}
                  >
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="firstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            style={{
                              fontSize: "18px",
                              letterSpacing: "1px",
                              fontFamily: "KapraNeueMedium, sans-serif",
                            }}
                            className="input-shippingaddress"
                            placeholder="Enter first name"
                            value={address.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="lastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            style={{
                              fontSize: "18px",
                              letterSpacing: "1px",
                              fontFamily: "KapraNeueMedium, sans-serif",
                            }}
                            className="input-shippingaddress"
                            placeholder="Enter last name"
                            value={address.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Phone Number */}
                    <Row className="mt-3">
                      <Col md={4}>
                        <Form.Group controlId="phoneCode">
                          <Form.Label>Phone Code</Form.Label>
                          <Form.Control
                            as="select"
                            name="phoneCode"
                            style={{
                              fontSize: "18px",
                              letterSpacing: "1px",
                              fontFamily: "KapraNeueMedium, sans-serif",
                            }}
                            className="input-shippingaddress"
                            value={address.phoneCode}
                            onChange={handleChange}
                            required
                          >
                            <option value="+1">+1 (USA)</option>
                            <option value="+91">+91 (India)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+61">+61 (Australia)</option>
                            <option value="+81">+81 (Japan)</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>

                      <Col md={8}>
                        <Form.Group controlId="phoneNumber">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="text"
                            name="phoneNumber"
                            style={{
                              fontSize: "18px",
                              letterSpacing: "1px",
                              fontFamily: "KapraNeueMedium, sans-serif",
                            }}
                            className="input-shippingaddress"
                            placeholder="Enter phone number"
                            value={address.phoneNumber}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Address Fields */}
                    <Form.Group controlId="address1" className="mt-3">
                      <Form.Label>Address 1</Form.Label>
                      <Form.Control
                        type="text"
                        name="address1"
                        style={{
                          fontSize: "18px",
                          letterSpacing: "1px",
                          fontFamily: "KapraNeueMedium, sans-serif",
                        }}
                        className="input-shippingaddress"
                        placeholder="Enter address line 1"
                        value={address.address1}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="address2" className="mt-3">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        type="text"
                        name="address2"
                        style={{
                          fontSize: "18px",
                          letterSpacing: "1px",
                          fontFamily: "KapraNeueMedium, sans-serif",
                        }}
                        className="input-shippingaddress"
                        placeholder="Enter address line 2 (optional)"
                        value={address.address2}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Row className="mt-3">
                      <Col md={4}>
                        <Form.Group controlId="city">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            className="input-shippingaddress"
                            placeholder="Enter city"
                            value={address.city}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={4}>
                        <Form.Group controlId="state">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            name="state"
                            className="input-shippingaddress"
                            placeholder="Enter state"
                            value={address.state}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={4}>
                        <Form.Group controlId="pincode">
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control
                            type="text"
                            name="pincode"
                            className="input-shippingaddress"
                            placeholder="Enter pincode"
                            value={address.pincode}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="country" className="mt-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        as="select"
                        name="country"
                        value={address.country}
                        className="input-shippingaddress"
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Japan">Japan</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                      </Form.Control>
                    </Form.Group>

                    {/* Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                      {/* Left side button */}
                      <Button
                        type="submit"
                        variant="dark"
                        style={{ letterSpacing: "1px" }}
                      >
                        SAVE ADDRESS
                      </Button>
                    </div>
                  </Form>
                </div>
              </Container>
            </div>
          )}

          {/* {savedAddresses.length === 0 && ( */}
          <Container>
            <div style={{ marginTop: "5%" }}>
              <h1
                style={{
                  letterSpacing: "2px",

                  fontWeight: "bold",
                  fontFamily: "kapraneue, sans-serif",
                  textAlign: "center",
                }}
              >
                ORDER SUMMARY
              </h1>
            </div>

            <div style={{ fontFamily: "kapraneue, sans-serif" }}>
              <div>
                {/* Cart Table */}
                <Table
                  className="custom-table"
                  hover
                  responsive
                  style={{ margin: "auto" }}
                >
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center", padding: "10px" }}>
                        Image
                      </th>
                      <th style={{ textAlign: "center", padding: "10px" }}>
                        Product Name
                      </th>
                      <th style={{ textAlign: "center", padding: "10px" }}>
                        Quantity
                      </th>
                      <th style={{ textAlign: "center", padding: "10px" }}>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => {
                      const itemPrice = parseFloat(item.price) || 0;
                      const itemQuantity = parseInt(item.quantity) || 1;
                      const totalItemPrice = itemPrice * itemQuantity;

                      return (
                        <tr key={item.id} style={{ textAlign: "center" }}>
                          <td style={{ padding: "10px" }}>
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{
                                width: "100px",
                                height: "auto",
                                objectFit: "contain",
                              }}
                              className="cart-img-item"
                            />
                          </td>
                          <td style={{ padding: "10px" }}>
                            <h3
                              style={{
                                fontSize: "30px",
                                marginBottom: "10px",
                                fontFamily: "kapraneue, sans-serif",
                                letterSpacing: "1px",
                              }}
                              className="order-products-title"
                            >
                              {item.title}
                            </h3>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                              }}
                              className="cart-product-price"
                            >
                              <div
                                style={{
                                  textDecoration: "line-through",
                                  fontSize: "18px",
                                  opacity: "0.5",
                                }}
                                className="discount-price-cart"
                              >
                                {" "}
                                Rs {item.discountPrice}
                              </div>
                              <div
                                style={{
                                  fontFamily: "kapraneue, sans-serif",
                                  fontSize: "24px",
                                }}
                                className="price-cart"
                              >
                                Rs {itemPrice.toFixed(2)}
                              </div>
                            </div>

                            <Button
                              variant="outline-dark"
                              style={{
                                fontSize: "16px",
                                padding: "4px 10px",
                                marginTop: "10px",
                              }}
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              Remove
                            </Button>
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              whiteSpace:'nowrap',
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: Math.max(1, itemQuantity - 1),
                                  })
                                )
                              }
                              style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                                backgroundColor: "#f8f9fa",
                                cursor: "pointer",
                                marginRight: "15px",
                              }}
                               className="minus-btn"
                            >
                              −
                            </button>
                            <span
                              style={{
                                width: "40px",
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                              className="count-size"
                            >
                              {itemQuantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: itemQuantity + 1,
                                  })
                                )
                              }
                              style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                                backgroundColor: "#f8f9fa",
                                cursor: "pointer",
                                marginLeft: "15px",
                              }}
                               className="minus-btn"
                            >
                              +
                            </button>
                          </td>

                          <td style={{ padding: "10px" }}>
                            Rs {totalItemPrice.toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>

              {/* Subtotal Section */}
              <div
                style={{
                  display: "block",
                  justifySelf: "end",
                  margin: "5% 0",
                  width: "30%",
                }}
                className="subtotal-checkout"
              >
                <h1 style={{ letterSpacing: "1px" }}>
                  SUB TOTAL:{" "}
                  <span style={{ float: "right" }}>
                    Rs {subtotal.toFixed(2)}
                  </span>
                </h1>
                <h1
                  style={{ letterSpacing: "1px", fontSize: "28px" }}
                  className="checkout-subtotal-details"
                >
                  SHIPPING:{" "}
                  <span style={{ float: "right" }}>
                    Rs {shipping.toFixed(2)}
                  </span>
                </h1>
                <h1
                  style={{ letterSpacing: "1px", fontSize: "28px" }}
                  className="checkout-subtotal-details"
                >
                  TAX (18%):{" "}
                  <span style={{ float: "right" }}>Rs {tax.toFixed(2)}</span>
                </h1>
                <hr />
                <h1 style={{ letterSpacing: "1px" }}>
                  TOTAL:{" "}
                  <span style={{ float: "right" }}>Rs {total.toFixed(2)}</span>
                </h1>
                <p
                  style={{ fontSize: "18px", letterSpacing: "0.5px" }}
                  className="p-paynow"
                >
                  After clicking “PAY NOW” you will be redirected to PhonePe
                  Payment Gateway (UPI, Cards & Net Banking) to complete your
                  purchase securely.
                </p>

                <div
                  style={{
                    position: "relative",
                    width: "80%",
                    height: "70px",
                    margin: "5% auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/thank-you")}
                >
                  {/* Image */}
                  <animated.img
                    src={Vector}
                    alt="Vector-img"
                    style={{
                      ...zoomIn,
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                  />

                  {/* Text Inside Image */}
                  <h3
                    onClick={handlePlaceOrder}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "28px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      color: "white",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    PAY NOW
                  </h3>
                </div>
              </div>
            </div>
          </Container>
          {/* )} */}
          <LearnMore />
          <Footer />

          <style>{`
        .form-container {
          background-color: #ffffff;
          max-width: 700px;
          width: 100%;
          border-radius: 12px;
          border: 1px solid black;
          font-family: KapraNeueMedium, sans-serif;
          letter-spacing: 1px;
        }
        .bg-light {
          background-color: #FAF7F1 !important;
        }
      `}</style>
        </div>
      </div>
    </>
  );
}
