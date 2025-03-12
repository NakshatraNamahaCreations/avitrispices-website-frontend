import { Container, Row, Col } from "react-bootstrap";
import spiceMasala from "/media/1.png";
import Vector from "/media/Vector.png";

export default function ProductBanner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        backgroundColor: "#AF261D",
        color: "white",
        textAlign: "center",
        padding: "27% 0",
      }}
    >
      <Container>
        <h1
          style={{
            lineHeight: "1.5",
            letterSpacing: "2px",
            fontSize: "75px",
            maxWidth: "100%",
            fontWeight: "bold",
            fontFamily: "kapraneue, sans-serif",
            margin: "3% 0",
          }}
        >
          DIY GARAMA MASALA KIT
        </h1>
        <Row className="justify-content-center">
          <Col sm={4} className="d-flex flex-column justify-content-center">
            <p
              style={{
                fontSize: "28px",
                lineHeight: "1.7",
                letterSpacing: "1px",
              }}
            >
              Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket
              to cooking up a delicious, aromatic biryani right at home! No more
              guessing the right spice blends or measuring out tiny quantities.
              We've done the hard work for you, so you can focus on what matters
              most: making (and enjoying) that mouth-watering biryani!
            </p>
          </Col>
          <Col sm={4} className="d-flex flex-column justify-content-center">
            <img
              src={spiceMasala}
              alt="SpicesMasala"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Col>
          <Col
            sm={4}
            className="d-flex flex-column justify-content-center align-items-end"
          >
            <div
              style={{
                // backgroundImage:'url("/media/tt.png")',
                // backgroundSize: "contain",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                backgroundColor:'white',
                padding: "30px",
                textAlign: "center",
                color: "black",
              }}
            >
              <h2 style={{ fontSize: "45px", margin: "5% 0" }}>
                DIY GARAM MASALA KIT
              </h2>
              <p
                style={{
                  backgroundImage: "url('/media/Sale.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                Sale
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "45px",
                }}
              >
                <p
                  style={{
                    textDecoration: "line-through",
                    margin: 0,
                    fontSize: "35px",
                  }}
                >
                  Rs 135
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  Rs 125
                </p>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "50px",
                  margin: "5% 10%",
                }}
              >
                {/* Animated Image */}
                <img
                  src={Vector}
                  alt="Vector-img"
                  style={{
                    width: "80%",
                    height: "100%",
                  }}
                />

                {/* Text Inside Image */}
                <h3
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "24px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    color: "white",
                    textAlign: "center",
                    padding: "5px",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                >
                  ADD TO CART
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
