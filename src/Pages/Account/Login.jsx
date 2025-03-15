import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar_Menu from "../../Components/Navbar_Menu";
import Footer from "../../Components/Footer";
import Vector from "/media/Vector.png";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
          <div style={{ margin: "12% 20% 10% 20%" }} className="div-login">
            <h1
              style={{
                lineHeight: "1.5",
                letterSpacing: "3px",
                fontSize: "75px",
                maxWidth: "100%",
                fontWeight: "bold",
                fontFamily: "kapraneue, sans-serif",
                textAlign: "center",
                marginBottom: "5%",
              }}
              className="login-h1"
            >
              LOGIN
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
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{
                      fontFamily: "KapraNeueMedium, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                    className="input-login"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{
                      fontFamily: "KapraNeueMedium, sans-serif",
                      letterSpacing: "1px",
                      fontSize: "22px",
                      borderRadius: "10px",
                    }}
                    className="input-login"
                  />
                </FloatingLabel>
                <div style={{ marginTop: "20px", textDecoration: "underline" }}>
                  <p
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    Forget your Password
                  </p>
                </div>
              </div>
            </div>

            {/* SIGN IN BUTTON */}
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
                className="vector-signin"
              />
              <h3
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "26px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                  fontFamily: "kapraneue, sans-serif",
                  whiteSpace: "nowrap",
                }}
                className="signin-btn"
              >
                SIGN IN
              </h3>
            </div>

            <hr />

            {/* CREATE ACCOUNT BUTTON */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                  fontSize: "22px",
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
                    fontSize: "26px",
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
