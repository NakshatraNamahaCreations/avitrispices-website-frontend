import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Select from "react-select";
import Vector from "/media/Vector.png";
import { useNavigate } from "react-router-dom";

const countryCodes = [
  { value: "+91", label: "+91 (India)" },
  { value: "+1", label: "+1 (USA)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+61", label: "+61 (Australia)" },
  { value: "+81", label: "+81 (Japan)" },
];

export default function AccountForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: countryCodes[0], // Default: USA
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, countryCode: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Container
        style={{
          maxWidth: "600px",
          marginTop: "50px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid black",
        }}
        className="container-accountform"
      >
        <Form
          onSubmit={handleSubmit}
          style={{
            fontFamily: "kapraneue, sans-serif",
            letterSpacing: "1px",
            fontSize: "20px",
          }}
          className="accountform"
        >
          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                fontSize: "18px",
                padding: "12px",
                letterSpacing: "1px",
                fontFamily: "KapraNeueMedium, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                border: "1px solid #ccc",
              }}
              className="input-account-forms"
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                fontSize: "20px",
                padding: "12px",
                letterSpacing: "1px",
                fontFamily: "KapraNeueMedium, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                border: "1px solid #ccc",
              }}
              className="input-account-forms"
            />
          </Form.Group>

          {/* Phone Number */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <div style={{ display: "flex", gap: "15px" }}>
              {/* Country Code */}
              <div style={{ flex: "0.4" }}>
                <Select
                  options={countryCodes}
                  value={formData.countryCode}
                  onChange={handleSelectChange}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "20px",
                      padding: "12px",
                      letterSpacing: "1px",
                      fontFamily: "KapraNeueMedium, sans-serif",
                      borderRadius: "10px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #ccc",
                    }),
                  }}
                  className="input-account-forms"
                />
              </div>
              {/* Phone Input */}
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  flex: "0.6",
                  fontSize: "20px",
                  padding: "12px",
                  letterSpacing: "1px",
                  fontFamily: "KapraNeueMedium, sans-serif",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                }}
                className="input-account-forms"
              />
            </div>
          </Form.Group>
        </Form>
      </Container>
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
          borderRadius: "10px",
          padding: "10px 20px",
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
    </>
  );
}
