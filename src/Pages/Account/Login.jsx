import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar_Menu from "../../Components/Navbar_Menu";
import Footer from "../../Components/Footer";
import Vector from "/media/Vector.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const user = localStorage.getItem("user");
    if (user) navigate("/account");

    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleForgot = async () => {
  try {
    const res = await axios.post("https://api.avitrispices.in/api/customers/forgot-password", { email });
    setMessage(res.data.message);
  } catch (err) {
    setMessage(err.response?.data?.message || "Something went wrong.");
  }
};

  const handleLogin = async () => {
    setErrorMessage("");

    if (!formData.email || !formData.password) {
      setErrorMessage("Email and Password are required.");
      return;
    }

    try {
      const response = await axios.post("https://api.avitrispices.in/api/customers/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        alert("✅ Login successful!");

        const { id, firstname, lastname, email, phone, countryCode } = response.data.user;
        const userData = {
          id,
          firstName: firstname || "",
          lastName: lastname || "",
          email: email || "",
          phone: phone || "",
          countryCode: countryCode || "+91",
        };

        dispatch(loginSuccess(userData));
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "❌ Login failed. Try again.");
    }
  };

  return (
    <>
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Navbar_Menu />

        <Container>
          <div
            className="div-login"
            style={{
              margin: "8% auto",
              maxWidth: "90%",
              width: "100%",
              padding: "0 20px",
            }}
          >
            <h1
              className="login-h1"
              style={{
                lineHeight: "1.5",
                letterSpacing: "3px",
                fontSize: "50px",
                fontWeight: "bold",
                fontFamily: "kapraneue, sans-serif",
                textAlign: "center",
                marginBottom: "5%",
              }}
            >
              LOGIN
            </h1>

            {errorMessage && (
              <p style={{ color: "red", textAlign: "center", fontSize: "16px" }}>
                {errorMessage}
              </p>
            )}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto",
                  fontFamily: "kapraneue, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                {isForgotPassword ? (
                  <>
                    <FloatingLabel label="Enter your email to reset password" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ fontFamily: "KapraNeueMedium, sans-serif", fontSize: "18px" }}
                      />
                    </FloatingLabel>
                    <div
                      style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        textAlign: "center",
                        padding: "12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      onClick={handleForgot}
                    >
                      Send Reset Link
                    </div>
                    {message && (
                      <p style={{ marginTop: "10px", color: "green", textAlign: "center" }}>
                        {message}
                      </p>
                    )}
                    <p
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                        color: "black",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setIsForgotPassword(false);
                        setMessage("");
                        setEmail("");
                      }}
                    >
                      Back to Login
                    </p>
                  </>
                ) : (
                  <>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          fontFamily: "KapraNeueMedium, sans-serif",
                          letterSpacing: "1px",
                          fontSize: "18px",
                          borderRadius: "10px",
                        }}
                      />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password" className="position-relative">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </FloatingLabel>

                    <div
                      style={{ marginTop: "20px", textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => setIsForgotPassword(true)}
                    >
                      <p
                        style={{
                          fontFamily: "kapraneue, sans-serif",
                          letterSpacing: "1px",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        Forgot your Password?
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* SIGN IN BUTTON */}
            {!isForgotPassword && (
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
                onClick={handleLogin}
              >
                <img
                  src={Vector}
                  alt="Vector-img"
                  style={{ width: "100%", height: "100%", display: "block" }}
                  className="vector-signin"
                />
                <h3
                  className="signin-btn"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "22px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "white",
                    fontFamily: "kapraneue, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  SIGN IN
                </h3>
              </div>
            )}

            <hr />

            {/* CREATE ACCOUNT */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                  fontSize: "20px",
                }}
              >
                Don’t have an account?
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
                onClick={() => navigate("/register")}
              >
                <img
                  src={Vector}
                  alt="Vector-img"
                  style={{ width: "100%", height: "100%", display: "block" }}
                  className="vector-create-btn"
                />
                <h3
                  className="create-account-btn"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "22px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "white",
                    fontFamily: "kapraneue, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  CREATE ACCOUNT
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
