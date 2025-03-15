import AddressForm from "./AddressForm.jsx";
import { Container, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vector from "/media/Vector.png";

export default function AddressDetails() {
  const [addresses, setAddresses] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle new address submission
  const handleAddressSubmit = (data) => {
    const newAddresses = [...addresses, data];
    setAddresses(newAddresses);
    setSelectedIndex(newAddresses.length - 1);
  };

  // Handle dropdown selection change
  const handleSelectChange = (event) => {
    setSelectedIndex(Number(event.target.value));
  };

  const navigate = useNavigate();

  // Handle logout
  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <Container>
      {/* Address Selection Dropdown */}
      {addresses.length > 0 && (
        <Form.Group
          className="mt-3 p-4"
          style={{
            fontFamily: "kapraneue, sans-serif",
            letterSpacing: "1px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <Form.Label>
            <strong>Select Address:</strong>
          </Form.Label>
          <Form.Control
            as="select"
            style={{
              fontFamily: "kapraneue, sans-serif",
              letterSpacing: "1px",
            }}
            onChange={handleSelectChange}
            value={selectedIndex ?? ""}
          >
            <option value="">Choose an address</option>
            {addresses.map((_, index) => (
              <option key={index} value={index}>
                Address {index + 1}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      )}

      {/* Shipping Address Section */}
      <Card
        className="mt-4 p-3 card-shippingaddress"
        style={{
          fontFamily: "kapraneue, sans-serif",
          letterSpacing: "1px",
          border: "1px solid black",
        }}
        
      >
        <h5 style={{ fontSize: "32px", letterSpacing: "1px" }} className="h5-shipping-addressdetails">
          SHIPPING ADDRESS
        </h5>
        {selectedIndex !== null && addresses[selectedIndex] ? (
          <p>
            {addresses[selectedIndex].address1},{" "}
            {addresses[selectedIndex].address2}, {addresses[selectedIndex].city}
            , {addresses[selectedIndex].state} -{" "}
            {addresses[selectedIndex].pincode}
          </p>
        ) : (
          <p className="p-shipping-addressdetails">No shipping address selected.</p>
        )}
      </Card>

      {/* Add Address Form */}

      <AddressForm onSubmit={handleAddressSubmit} />

      {/* Logout Button */}
      <div
        style={{
          position: "relative",
          width: "fit-content",
          maxWidth: "90%",
          height: "70px",
          margin: "5% auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleSignIn}
      >
        <img
          src={Vector}
          alt="Vector-img"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
        <h3
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "28px",
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            fontFamily: "kapraneue, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          LOGOUT
        </h3>
      </div>
    </Container>
  );
}
