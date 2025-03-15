import { Container, Row, Col } from "react-bootstrap";
import latest_products from "/media/latest_products.png";
import Vector from "/media/Vector.png";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

export default function Products() {
  const [hovered, setHovered] = useState(false);

  const zoomIn = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.9)",
    opacity: hovered ? 1 : 1,
    config: { tension: 250, friction: 25 },
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/media/strip-products.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          padding: "10px",
          marginTop: "-1%",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#F4B65B",
          padding: "25px",
        }}
      >
        <Container>
          <Row>
            <Col sm={8}>
              <h2
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontFamily: "kapraneue, sans-serif",
                  marginBottom: "3%",
                }}
                className="h2-our-products"
              >
                BROWSE OUR LATEST PRODUCTS
              </h2>
              <p
                style={{
                  fontSize: "26px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                  width: "80%",
                  fontFamily: "KapraNeueMedium, sans-serif",
                }}
                className="p-our-products"
              >
                Experience the richness of authentic flavors, crafted from
                carefully selected, pure spices that honor our traditional
                roots. Each blend is a tribute to time-honored recipes, bringing
                warmth and depth to every dish.
              </p>
              <Link to="/all-products">
                <div
                  style={{
                    position: "relative",
                    width: "35%",
                    height: "50px",
                  }}
                  className="ourproducts-btn"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {/* Animated Image */}
                  <animated.img
                    src={Vector}
                    alt="Vector-img"
                    style={{
                      ...zoomIn,
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    
                  />

                  {/* Text Inside Image */}
                  <h3
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "18px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      color: "white",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "5px",
                      width: "100%",
                      fontFamily: "kapraneue, sans-serif",
                    }}
                    className="our-products-h3"
                  >
                    OUR PRODUCTS
                  </h3>
                </div>
              </Link>
            </Col>
            <Col sm={4}>
              <div>
                <img
                  src={latest_products}
                  alt="LatestProducts-image"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  className="img-ourproducts"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
