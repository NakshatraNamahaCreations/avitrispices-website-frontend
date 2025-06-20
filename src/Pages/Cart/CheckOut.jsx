import Footer from "../../Components/Footer";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../Home/LearnMore";
import { Row, Col, Form, Button, Container, Table, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Vector from "/media/Vector.png";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Added for toast notifications
import "react-toastify/dist/ReactToastify.css"; // Added for toast styles

export default function CheckOut({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [savedAddressId, setSavedAddressId] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isUsingManualAddress, setIsUsingManualAddress] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const user = useSelector((state) => state.auth?.user || null);
  const [isLoading, setIsLoading] = useState(false); // Added for loading state
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Added for confirmation modal

  const RAPIDSHYP_TOKEN = "f5e498941467ae1f3a4d9e9db8d7dd74e1293d75e8dc81abd902abef41b30f8a";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user && user.id) {
      fetchSavedAddresses();
    }
  }, [user]);

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
    country: "", // Added country to initial state
  });

  const validatePhoneNumber = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length !== 10) {
      return "Phone number must be exactly 10 digits long.";
    }
    if (!/^[6-9]/.test(cleanedPhone)) {
      return "Phone number must start with 6, 7, 8, or 9.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));

    if (name === "phoneNumber") {
      const error = validatePhoneNumber(value);
      setPhoneError(error);
    }

    // if (name === "pincode" && value.length === 6) {
    //   checkServiceability(value);
    // }
  };

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

        if (!selectedAddressId) {
          setSelectedAddressId(response.data[0]._id);
        }

        setIsUsingManualAddress(false);
      } else {
        console.warn("⚠️ No saved addresses found.");
        setSavedAddresses([]);

        setTimeout(() => {
          setIsUsingManualAddress(true);
        }, 100);
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

  const handleSaveAddress = async (e) => {
    e.preventDefault();

    if (!user || !user.id) {
      toast.error("⚠️ Please login before saving your address.");
      navigate("/login");
      return;
    }

    const phoneValidationError = validatePhoneNumber(address.phoneNumber);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      toast.error(phoneValidationError);
      return;
    }

    const shippingData = {
      userId: user.id,
      firstName: address.firstName,
      lastName: address.lastName,
      phoneNumber: address.phoneNumber,
      address: address.address1 + (address.address2 ? ", " + address.address2 : ""),
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
        toast.success("Shipping address saved successfully!");
        fetchSavedAddresses();
        setSelectedAddressId(response.data.shippingAddress._id);
        setIsUsingManualAddress(false);
      } else {
        toast.error("Failed to save address. Try again.");
      }
    } catch (error) {
      console.error("Error saving address:", error.response?.data || error.message);
      toast.error(`Error saving address: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  const checkServiceability = async (deliveryPincode) => {
    try {
      const response = await axios.post(
        "https://api.nncwebsitedevelopment.com/api/rapidshyp/serviceability-check",
        {
          Pickup_pincode: "562123", // Updated to match handlePlaceOrder
          Delivery_pincode: deliveryPincode,
          cod: false, // PREPAID for Cashfree
          total_order_value: total,
          weight: 2,
        },
        {
          headers: {
            "rapidshyp-token": RAPIDSHYP_TOKEN,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Serviceability response:", response.data);

      if (response.data.status === true) {
        toast.success("✅ This pincode is serviceable");
        const couriers = response.data.serviceable_courier_list;
        console.log("Available Couriers:", couriers);

        const origin = couriers[0];
        if (origin.origin_state || origin.origin_city) {
          setAddress((prev) => ({
            ...prev,
            state: origin.origin_state || prev.state,
            city: origin.origin_city || prev.city,
          }));
        }
      } else {
        toast.error("❌ This pincode is not serviceable.");
      }
    } catch (error) {
      console.error("Serviceability error:", error.response?.data || error.message);
      toast.error("Error checking pincode. Try again.");
    }
  };


const handlePlaceOrder = async () => {
  setIsLoading(true);
  try {
    // Step 0: Validation
    if (!selectedAddressId && !isUsingManualAddress) {
      toast.error("Please select or add a shipping address.");
      return;
    }

    if (!user || !user.id) {
      toast.error("Please log in to proceed.");
      navigate("/login");
      return;
    }

    // Step 1: Determine Selected Address
    const selectedAddress = isUsingManualAddress
      ? {
          firstName: address.firstName,
          lastName: address.lastName,
          phone: address.phoneNumber,
          addressLine1: address.address1,
          addressLine2: address.address2 || "",
          city: address.city,
          state: address.state,
          pinCode: address.pincode,
          email: user.email,
        }
      : savedAddresses.find((addr) => addr._id === selectedAddressId);

    if (!selectedAddress) {
      toast.error("Selected address not found.");
      return;
    }

    // Step 2: Clean and Validate Phone Number
    const cleanPhone = (phone) => {
      const cleaned = (phone || "").replace(/\D/g, "");
      if (cleaned.length !== 10) {
        throw new Error("Phone number must be exactly 10 digits.");
      }
      if (!/^[6-9]/.test(cleaned)) {
        throw new Error("Phone number must start with 6, 7, 8, or 9.");
      }
      return cleaned;
    };

    let phoneNumber;
    try {
      phoneNumber = cleanPhone(selectedAddress.phone || selectedAddress.phoneNumber);
    } catch (error) {
      toast.error(`Invalid phone number: ${error.message}`);
      return;
    }

    // Step 3: Prepare Order Payload (to send to backend for temporary storage)
    const generateAlphaString = (length) => {
      const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    };

    const uniquePickupName = `Yantaganahalli${generateAlphaString(5)}`;

    const orderPayload = {
      pickupLocation: {
        contactName: "Harshita Jethender Bhat",
        pickupName: uniquePickupName,
        pickupEmail: "mahesh.mehra@rapidshyp.com",
        pickupPhone: "9513186600",
        pickupAddress1: "24/2, Behind BP petrol bunk, Yantaganahalli",
        pickupAddress2: "Nelamangala, Bengaluru, Karnataka",
        pinCode: "562123",
      },
      shippingAddress: {
        firstName: selectedAddress.firstName,
        lastName: selectedAddress.lastName,
        addressLine1: selectedAddress.addressLine1 || selectedAddress.address,
        addressLine2: selectedAddress.addressLine2 || "",
        pinCode: selectedAddress.pinCode || selectedAddress.pincode,
        email: selectedAddress.email,
        phone: phoneNumber,
      },
      orderItems: cartItems.map((item) => ({
        itemName: item.title,
        sku: item.id,
        description: `${item.title} description`,
        units: item.quantity,
        unitPrice: parseFloat(item.price),
        tax: 0,
        hsn: "6109",
        productLength: 20.0,
        productBreadth: 15.0,
        productHeight: 3.0,
        productWeight: 0.3,
        brand: "BrandX",
        imageURL: item.image,
        isFragile: false,
        isPersonalisable: false,
      })),
      totalOrderValue: Number((subtotal + shipping).toFixed(2)),
      paymentMethod: "Prepaid",
      subtotal,
      shipping,
      tax,
      total,
      userId: user.id,
    };

    const orderId = `ORD-${Date.now()}`;

    // Step 4: Create Payment on Cashfree
    const customerDetails = {
      customer_id: user.id,
      customer_name: `${selectedAddress.firstName} ${selectedAddress.lastName}`,
      customer_email: selectedAddress.email,
      customer_phone: phoneNumber,
    };

    const orderMeta = {
      return_url: `https://avitrispices.in/thank-you?order_id=${orderId}`,
      notify_url: "https://api.nncwebsitedevelopment.com/api/payments/webhook", // Update to your actual webhook URL
    };

    console.log("Sending payment request:", { customerDetails, orderMeta, orderId });

    const maxRetries = 2;
    let retryCount = 0;
    let paymentResponse;

    while (retryCount <= maxRetries) {
      try {
        const token = localStorage.getItem("token");
        paymentResponse = await axios.post(
          "https://api.nncwebsitedevelopment.com/api/payments/create",
          {
            order_amount: Number((subtotal + shipping ).toFixed(2)),
            order_currency: "INR",
            customer_details: customerDetails,
            order_meta: orderMeta,
            order_id: orderId,
            order_payload: orderPayload, // Send order details to backend for temporary storage
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Cashfree Payment Response:", paymentResponse.data);

        if (paymentResponse.status === 201 && paymentResponse.data.payment?.payment_link) {
          // Log the payment link for debugging
          console.log("Payment Link:", paymentResponse.data.payment.payment_link);

          // Save pending order to localStorage (optional, for UI purposes)
          const pendingOrder = {
            orderId,
            payment_id: paymentResponse.data.payment.payment_id,
            status: "Awaiting Payment",
            createdAt: new Date().toISOString(),
          };
          const existingOrders = JSON.parse(localStorage.getItem(`userOrders_${user.id}`)) || [];
          existingOrders.push(pendingOrder);
          localStorage.setItem(`userOrders_${user.id}`, JSON.stringify(existingOrders));

          // Redirect to payment page
          try {
            window.location.href = paymentResponse.data.payment.payment_link;
          } catch (error) {
            console.error("Redirection error:", error);
            toast.error("Failed to redirect to payment page. Please try again.");
            return;
          }
          return;
        } else {
          throw new Error(paymentResponse.data.error || "Failed to create payment link");
        }
      } catch (error) {
        console.error(`Payment Attempt ${retryCount + 1} Failed:`, error.response?.data || error.message);
        toast.error(`Payment error: ${error.response?.data?.message || error.message || "Unable to process payment."}`);
        if (retryCount === maxRetries) {
          return;
        }
        retryCount++;
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
      }
    }
  } catch (error) {
    console.error("Error in handlePlaceOrder:", error);
    toast.error("An unexpected error occurred. Please try again.");
  } finally {
    setIsLoading(false);
  }
};



const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 1),
    0
  );
  const shipping = 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping ;

  const [hovered, setHovered] = useState(false);

  const zoomIn = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.9)",
    opacity: hovered ? 1 : 1,
    config: { tension: 250, friction: 25 },
  });

  const handleConfirmOrder = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    handlePlaceOrder();
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> {/* Added ToastContainer */}
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Navbar_Menu />

        <div style={{ margin: "15% 0% 10% 0%" }} className="div-shippingaddress">
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

          {(isUsingManualAddress || savedAddresses.length === 0) && (
            <div>
              <Container
                fluid
                className="d-flex justify-content-center align-items-center max-vh-100 bg-light pt-5"
              >
                <div className="form-container p-4">
                  <Form onSubmit={handleSaveAddress} style={{ fontSize: "20px" }}>
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
                            isInvalid={!!phoneError}
                          />
                          <Form.Control.Feedback type="invalid">
                            {phoneError}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

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

                    <div className="d-flex justify-content-between mt-3">
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
                <Table className="custom-table" hover responsive style={{ margin: "auto" }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center", padding: "10px" }}>Image</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Product Name</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Quantity</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Price</th>
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
                              whiteSpace: "nowrap",
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
                  SUB TOTAL: <span style={{ float: "right" }}>Rs {subtotal.toFixed(2)}</span>
                </h1>
                <h1
                  style={{ letterSpacing: "1px", fontSize: "28px" }}
                  className="checkout-subtotal-details"
                >
                  SHIPPING: <span style={{ float: "right" }}>Rs {shipping.toFixed(2)}</span>
                </h1>
                {/* <h1
                  style={{ letterSpacing: "1px", fontSize: "28px" }}
                  className="checkout-subtotal-details"
                >
                  TAX (18%): <span style={{ float: "right" }}>Rs {tax.toFixed(2)}</span>
                </h1> */}
                <hr />
                <h1 style={{ letterSpacing: "1px" }}>
                  TOTAL: <span style={{ float: "right" }}>Rs {total.toFixed(2)}</span>
                </h1>
                <p
                  style={{ fontSize: "18px", letterSpacing: "0.5px" }}
                  className="p-paynow"
                >
                  After clicking “PAY NOW” you will be redirected to Cashfree
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
                >
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
                  <h3
                    onClick={handleConfirmOrder} // Changed to show confirmation modal
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
                    {isLoading ? "PROCESSING..." : "PAY NOW"} {/* Show loading text */}
                  </h3>
                </div>
              </div>
            </div>
          </Container>

          {/* Confirmation Modal */}
          <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please review your order details before proceeding to payment:</p>
              <p><strong>Subtotal:</strong> Rs {subtotal.toFixed(2)}</p>
              <p><strong>Shipping:</strong> Rs {shipping.toFixed(2)}</p>
              {/* <p><strong>Tax (18%):</strong> Rs {tax.toFixed(2)}</p> */}
              <p><strong>Total:</strong> Rs {total.toFixed(2)}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.title} (Qty: {item.quantity}) - Rs {(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmSubmit} disabled={isLoading}>
                Confirm and Pay
              </Button>
            </Modal.Footer>
          </Modal>

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