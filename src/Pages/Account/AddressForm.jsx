import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Form, Button,  Row, Col } from "react-bootstrap";

const AddressForm = ({ onSubmit }) => {
  const navigate = useNavigate(); // Hook for navigation
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  const handleCancel = () => {
    setAddress({
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
  };

  return (
  
      <div className="form-container p-4">
        <h2 className="text-left mb-3 h2-add-address" style={{ letterSpacing: "1px" }}>
          ADD ADDRESS
        </h2>

        <Form onSubmit={handleSubmit} style={{ fontSize: "20px" }} className="form-adressdetails">
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
                  className="input-addressdetails"
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
                  className="input-addressdetails"
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
                  className="input-addressdetails"
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
                  className="input-addressdetails"
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
              className="input-addressdetails"
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
              className="input-addressdetails"
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
                  placeholder="Enter city"
                  value={address.city}
                  className="input-addressdetails"
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
                  placeholder="Enter state"
                  value={address.state}
                  className="input-addressdetails"
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
                  placeholder="Enter pincode"
                  value={address.pincode}
                  className="input-addressdetails"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="region" className="mt-3">
            <Form.Label>Region</Form.Label>
            <Form.Control
              as="select"
              name="region"
              value={address.region}
              className="input-addressdetails"
              onChange={handleChange}
              required
            >
              <option value="">Select Region</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="South America">South America</option>
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
              ADD ADDRESS
            </Button>

            {/* Right side buttons */}
            <div>
              <Button
                onClick={handleCancel}
                variant="outline-dark"
                style={{ marginRight: "15px", letterSpacing: "1px" }}
              >
                Reset
              </Button>

              <Button
                onClick={() => navigate("/")}
                variant="outline-dark"
                style={{ letterSpacing: "1px" }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Form>
            {/* CSS Styles */}
      <style>{`
        .form-container {
          background-color: #ffffff;
          max-width: 735px;
          width: 100%;
          border-radius: 12px;
          border: 1px solid black;
          font-family: KapraNeueMedium, sans-serif;
          letter-spacing: 1px;
          margin-top:5%;
        }
        .bg-light {
          background-color: #FAF7F1 !important;
        }
      `}</style>
      </div>

  
  
  );
};

export default AddressForm;
