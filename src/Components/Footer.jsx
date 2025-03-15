import logo from "/media/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "1px",
        }}
      >
        <div style={{ margin: "4% 20%" }} className="div-subscribe">
          <InputGroup
            className="mb-3 "
            style={{ padding: "0", borderRadius: "0px" }}
          >
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
              style={{
                padding: "20px",
                borderRadius: "0px",
                fontFamily: "kapraneue, sans-serif",
                letterSpacing: "1px",
              }}
              className="input-subscribe"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{
                borderRadius: "0px",
                padding: "10px 15px",
                backgroundColor: "#AF261D",
                borderColor: "#AF261D",
                color: "white",
                fontFamily: "kapraneue, sans-serif",
                letterSpacing: "1px",
              }}
            >
              SUBSCRIBE
            </Button>
          </InputGroup>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            color: "white",
          }}
          className="div-footer-display"
        >
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                // width: "10%",
                height: "auto",
                objectFit: "cover",
                alignSelf: "flex-start",
              }}
              className="logo-footer"
            />
          </Link>

          <ul className="Footer-ul">
            <h5 className="Footer-ul-title">SHOP SUPER-SPICES</h5>
            <li>
              <Link to="/whole-spices">WHOLE SPICES</Link>
            </li>
            <li>
              <Link to="/ground-spices">GROUND SPICES</Link>
            </li>
            <li>
              <Link to="/diy-spices">DIY SPICE KITS</Link>
            </li>
            <li>
              <Link to="/retails">SPICES BLENDS</Link>
            </li>
          </ul>

          <ul className="Footer-ul">
            <h5 className="Footer-ul-title">ABOUT</h5>
            {/* <li>
              <Link to="/avitri-spices">AVITRI SPICES</Link>
            </li> */}
            <li>
              <Link to="/recipes">RECIPES</Link>
            </li>
            <li>
              <Link to="/account">ACCOUNT</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>

          <ul className="Footer-ul">
            <h5 className="Footer-ul-title">SUPPORT</h5>
            {/* <li>
              <Link to="/wholesale">WHOLESALE</Link>
            </li> */}
            <li>
              <Link to="/register">SIGN UP</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>

          <ul className="Footer-ul">
            <h5 className="Footer-ul-title">SOCIALS</h5>
            <li>
              <Link to="https://www.instagram.com/AvitriSpices/">
                INSTAGRAM
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/AvitriSpices/">FACEBOOK</Link>
            </li>
            <li>
              <Link to="/email">EMAIL</Link>
            </li>
          </ul>

          <ul className="Footer-ul">
            <h5 className="Footer-ul-title">HELP</h5>
            <li>
              <Link to="/terms">TERMS OF SERVICE</Link>
            </li>
            <li>
              <Link to="/privacy">PRIVACY POLICY</Link>
            </li>
            <li>
              <Link to="/shipping">SHIPPING POLICY</Link>
            </li>
            <li>
              <Link to="/refund">REFUND POLICY</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
