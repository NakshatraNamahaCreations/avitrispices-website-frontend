import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { Form, Button,  Row, Col } from "react-bootstrap";
import axios from "axios"; 

const AddressForm = ({ onSubmit }) => {
  const navigate = useNavigate(); 

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });

   
    setErrors({ ...errors, [e.target.name]: "" });
  };


  const validateForm = () => {
    let newErrors = {};
    if (!address.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!address.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!address.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";
    if (!address.address1.trim()) newErrors.address1 = "Address is required";
    if (!address.city.trim()) newErrors.city = "City is required";
    if (!address.state.trim()) newErrors.state = "State is required";
    if (!address.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!address.region.trim()) newErrors.region = "Region is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!validateForm()) {
        console.error("Form validation failed:", errors);
        return;
    }
    
    try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.id) {
            setError("User ID is missing. Cannot save address.");
            console.error("User ID is missing from localStorage.");
            return;
        }

        setLoading(true);
        setSuccess("");

        const payload = {
            userId: storedUser.id,  
            firstName: address.firstName,
            lastName: address.lastName,
            phoneNumber: address.phoneNumber,
            address: address.address1 + ", " + address.address2,
            city: address.city,
            state: address.state,
            pincode: address.pincode,
            country: "India",
            email: storedUser.email,
        };

        console.log("Sending Address Data:", payload);

        const response = await axios.post(
            "https://api.avitrispices.in/api/shipping-address", 
            payload, 
            { headers: { "Content-Type": "application/json" } }
        );

        console.log("Address successfully added:", response.data);
        setSuccess("Address added successfully!");
        setLoading(false);

        setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    } catch (error) {
        console.error("Error adding address:", error.response?.data || error.message);
        setErrors({ server: `Failed to add address: ${error.response?.data?.message || "Please try again."}` });
        setLoading(false);
    }
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
        {success && <p style={{ color: "green" }}>{success}</p>}
        {errors.server && <p style={{ color: "red" }}>{errors.server}</p>}

        <Form onSubmit={handleAddressSubmit} style={{ fontSize: "20px" }}>

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
                 <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
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
                 <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
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
                 <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">{errors.address1}</Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
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
                 <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
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
              <option value="India">India</option>
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
         {loading ? "Saving..." : "ADD ADDRESS"}
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
