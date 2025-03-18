import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Vector from "/media/Vector.png";

const countryCodes = [
  { value: "+91", label: "+91 (India)" },
  { value: "+1", label: "+1 (USA)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+61", label: "+61 (Australia)" },
  { value: "+81", label: "+81 (Japan)" },
];

export default function AccountForm() {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: countryCodes[0], 
  });

  useEffect(() => {
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setFormData({
        firstName: storedUser.firstName || "",
        lastName: storedUser.lastName || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        countryCode: countryCodes.find(c => c.value === storedUser.countryCode) || countryCodes[0],
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
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
          border: "1px solid black",
        }}
      >
        <Form
          style={{
            fontFamily: "kapraneue, sans-serif",
            letterSpacing: "1px",
            fontSize: "20px",
          }}
        >
          {/* First Name */}
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              readOnly
              style={{
                fontSize: "18px",
                padding: "12px",
                letterSpacing: "1px",
                fontFamily: "KapraNeueMedium, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #ccc",
              }}
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              readOnly
              style={{
                fontSize: "18px",
                padding: "12px",
                letterSpacing: "1px",
                fontFamily: "KapraNeueMedium, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #ccc",
              }}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              readOnly
              style={{
                fontSize: "20px",
                padding: "12px",
                letterSpacing: "1px",
                fontFamily: "KapraNeueMedium, sans-serif",
                borderRadius: "10px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #ccc",
              }}
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
                  isDisabled
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "20px",
                      padding: "12px",
                      letterSpacing: "1px",
                      fontFamily: "KapraNeueMedium, sans-serif",
                      borderRadius: "10px",
                      backgroundColor: "#f8f9fa",
                      border: "1px solid #ccc",
                    }),
                  }}
                />
              </div>
              {/* Phone Input */}
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                readOnly
                style={{
                  flex: "0.6",
                  fontSize: "20px",
                  padding: "12px",
                  letterSpacing: "1px",
                  fontFamily: "KapraNeueMedium, sans-serif",
                  borderRadius: "10px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #ccc",
                }}
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
        onClick={handleLogout}
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
