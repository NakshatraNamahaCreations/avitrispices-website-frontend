import logo from "/media/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  // Handle screen resize for mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "1px",
          height: "auto",
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
          {/* Footer Sections */}
          {[
            {
              title: "SHOP SUPER-SPICES",
              links: [
                { name: "WHOLE SPICES", path: "/whole-spices" },
                { name: "GROUND SPICES", path: "/ground-spices" },
                { name: "DIY SPICE KITS", path: "/diy-spices" },
                { name: "SPICES BLENDS", path: "/retails" },
              ],
            },
            {
              title: "ABOUT",
              links: [
                { name: "RECIPES", path: "/recipes" },
                { name: "ACCOUNT", path: "/account" },
                { name: "ABOUT US", path: "/about" },
              ],
            },
            {
              title: "SUPPORT",
              links: [
                { name: "SIGN UP", path: "/register" },
                { name: "CONTACT US", path: "/contact" },
              ],
            },
            {
              title: "SOCIALS",
              links: [
                {
                  name: "INSTAGRAM",
                  path: "https://www.instagram.com/AvitriSpices/",
                },
                {
                  name: "FACEBOOK",
                  path: "https://www.facebook.com/AvitriSpices/",
                },
                { name: "EMAIL", path: "/email" },
              ],
            },
            {
              title: "HELP",
              links: [
                { name: "TERMS OF SERVICE", path: "/terms" },
                { name: "PRIVACY POLICY", path: "/privacy" },
                { name: "SHIPPING POLICY", path: "/shipping" },
                { name: "REFUND POLICY", path: "/refund" },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="footer-section" style={{fontFamily: "kapraneue, sans-serif"}}>
              {/* Only show dropdown in mobile */}
              {isMobile ? (
                <>
                  <div
                    className="footer-title"
                    onClick={() => toggleDropdown(index)}
                  >
                    <h5>{section.title}</h5>
                    {openSection === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>

                  <ul
                    className={`footer-links ${
                      openSection === index ? "show" : ""
                    }`}
                  >
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                <ul className="Footer-ul">
                  <h5 className="Footer-ul-title">{section.title}</h5>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
