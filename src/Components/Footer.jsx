import logo from "/media/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import axios from "axios";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openSection, setOpenSection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("https://api.nncwebsitedevelopment.com/api/subscribe", { email });
      alert("Subscription successful! Thank you.");
      setEmail(""); 
      setIsLoading(false);
    } catch (error) {
      console.error("Error subscribing", error);
      alert("Failed to subscribe. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "1px",
          height: "auto",
        // overflow:'hidden'     
           }}
      >
        <div style={{ margin: "1% 20%" }} className="div-subscribe">
          <label style={{fontSize:'24px', fontWeight:'bold', color:'white'  ,marginLeft:'40%' , marginBottom:'2%', fontFamily: "kapraneue, sans-serif",}}  className="label-tag-title">
            NEWSLETTER
          </label>
        <InputGroup className="mb-3" style={{ padding: "0", borderRadius: "0px" }}>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            aria-describedby="basic-addon2"
            style={{
              padding: "20px",
              borderRadius: "0px",
              fontFamily: "kapraneue, sans-serif",
              letterSpacing: "1px",
            }}
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
            onClick={handleSubscribe}
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "SUBSCRIBE"}
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
              title: "SHOP SPICES",
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
                { name: "WHOLESALE", path: "/wholesale" },
                { name: "EXPORT", path: "/export" },
              ],
            },
            {
              title: "SUPPORT",
              links: [
                { name: "SIGN UP", path: "/register" },
                { name: "CONTACT US", path: "/contact" },
                { name: "BLOGS", path: "/blogs" },

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
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
    >
      <h5>{section.title}</h5>
      {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </div>

    <ul
      className={`footer-links ${openSection === index ? "show" : ""}`}
      style={{ display: openSection === index ? "block" : "none", marginTop: "0.5rem" }}
    >
      {section.links.map((link, i) => (
        <li key={i}>
          <Link to={link.path} style={{ color: 'white', fontSize: '0.9rem' }}>{link.name}</Link>
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
          <Link to={link.path} style={{ color: 'white', fontSize: '0.9rem' }}>{link.name}</Link>
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
