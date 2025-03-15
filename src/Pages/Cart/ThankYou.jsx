import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import thankyou from "/media/Group.png";
import LearnMore from "../Home/LearnMore";
import Footer from "../../Components/Footer";
import gift from "/media/Thankyou_Gift.png";
import { useEffect, useState } from "react";
import Navbar_Menu from "../../Components/Navbar_Menu";

export default function ThankYou() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        
        <Container className="div-thankyou">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
            }}
          >
            {/* Background Image */}
            <img
              src={thankyou}
              alt="Decoration"
              style={{ width: "100%", height: "auto", display: "block" }}
              className="thankyou-img"
            />
            {/* Centered Check Icon */}
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                position: "absolute",
                top: "64%",
                left: "48%",
                //   transform: "translate(-50%, -50%)",
                fontSize: "100px", 
                color: "white",
              }}
              className="correct-icon"
            />
          </div>

          <div
            style={{
              textAlign: "center",
              margin: "2% 0",
              fontFamily: "kapraneue, sans-serif",
            }}
          >
            <h1 style={{ fontSize: "100px", letterSpacing: "2px" }} className="thankyou-h1">
              THANK YOU!
            </h1>
            <p style={{ letterSpacing: "1px", fontSize: "28px", textTransform:"uppercase" }} className="p-orderconfirmed">
              Your order has been confirmed.
            </p>
          </div>
          <div style={{ margin: "2% 0" }}>
            <img
              src={gift}
              alt="gift-icon"
              style={{
                width: "35%",
                height: "auto",
                display: "flex",
                justifySelf: "center",
              }}
            />
          </div>
        </Container>
        <LearnMore />
        <Footer />
      </div>
    </>
  );
}
