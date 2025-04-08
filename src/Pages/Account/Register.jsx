import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { Container, Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar_Menu from "../../Components/Navbar_Menu";
import Footer from "../../Components/Footer";
import Vector from "/media/Vector.png";
import axios from "axios";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobilenumber:"",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleSignIn = () => {
    navigate("/account");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobilenumber:"",
    });
     setErrorMessage("");
  };


  const handleRegister = async () => {
    setErrorMessage(""); 
  
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.mobilenumber) {
      setErrorMessage("All fields are required.");
      return;
    }
  
    try {
      const response = await axios.post("https://api.nncwebsitedevelopment.com/api/customers/register", {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        mobilenumber: formData.mobilenumber,
        password: formData.password,
      });
  
      if (response.status === 201) {
        alert(" Registration successful! Redirecting to login.");
        navigate("/login"); 
      }
    } catch (error) {
      console.error("Registration Error:", error.response?.data);
      if (error.response?.status === 400) {
        setErrorMessage(" Please check your inputs and try again.");
      } else if (error.response?.status === 409) {
        setErrorMessage(" Email already exists. Please log in instead.");
      } else {
        setErrorMessage(error.response?.data?.message || " Registration failed. Try again.");
      }
    }
  };

  return (
    <>
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          overflow:'hidden'
        }}
      >
        <Navbar_Menu />

        <Container>
          <div style={{ margin: "12% 20% 10% 20%" }} className="div-register">
            <h1
              style={{
                lineHeight: "1.5",
                letterSpacing: "3px",
                fontSize: "85px",
                maxWidth: "100%",
                fontWeight: "bold",
                fontFamily: "kapraneue, sans-serif",
                textAlign: "center",
                marginBottom: "5%",
              }}
              className="h1-createaccount"
            >
              CREATE ACCOUNT
            </h1>

            {/* FORM LOGIN */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "500px",
                  fontFamily: "kapraneue, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                {/* First Name */}
                <FloatingLabel
                  controlId="floatingFirstName"
                  label="First Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                  />
                </FloatingLabel>

                {/* Last Name */}
                <FloatingLabel
                  controlId="floatingLastName"
                  label="Last Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                  />
                </FloatingLabel>

                {/* Email Address */}
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                  />
                </FloatingLabel>

                {/* Mobile number */}
      
                <FloatingLabel
                  controlId="floatingMobilenumber"
                  label="Mobile Number"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="mobilenumber"
                    value={formData.mobilenumber}
                    onChange={handleChange}
                    placeholder="enter mobile number"
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                  />
                </FloatingLabel>

                {/* Password */}
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                  />
                </FloatingLabel>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
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
              onClick={handleRegister}
            >
              <img
                src={Vector}
                alt="Vector-img"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                 className="vector-signin"
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
                className="submit-btn-createaccount"
              >
                SUBMIT
              </h3>
            </div>

            {/* CANCEL BUTTON */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {/* Reset Button */}
              <Button
                onClick={handleCancel}
                variant="outline-dark"
                style={{
                  fontSize: "20px",
                  padding: "5px 20px",
                  fontFamily: "kapraneue, sans-serif",
                  marginRight: "15px",
                  letterSpacing: "1px",
                }}
                className="reset-cancel-create"
              >
                Reset
              </Button>

              {/* Cancel Button - Navigates to another page */}
              <Button
                onClick={() => navigate("/")}
                variant="outline-dark"
                style={{
                  fontSize: "20px",
                  padding: "5px 20px",
                  fontFamily: "kapraneue, sans-serif",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                }}
                className="reset-cancel-create"
              >
                Cancel
              </Button>
            </div>

            <hr />

            {/* SIGN IN BUTTON */}
            <div style={{ textAlign: "center", gap: "20px" }}>
              <p
                style={{
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                  fontSize: "22px",
                }}
              >
                Have an account?
              </p>
              <div
                style={{
                  position: "relative",
                  width: "80%",
                  maxWidth: "350px",
                  height: "70px",
                  margin: "5% auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
              >
                <img
                  src={Vector}
                  alt="Vector-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                  className="vector-create-btn"
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
                  className="create-account-btn"
                >
                  SIGN IN
                </h3>
              </div>
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}
