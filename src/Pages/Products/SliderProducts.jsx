import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import chole from "/media/3.png";

// Sample product data
const products = [
  { id: 1, title: "DIY GARAM MASALA KIT" },
  { id: 2, title: "DIY CURRY POWDER KIT" },
  { id: 3, title: "DIY RASAM POWDER KIT" },
  { id: 4, title: "DIY PANEER MASALA KIT" },
];

export default function SliderProducts() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation Hook
  const springProps = useSpring({
    transform: hoveredCard ? "translateY(0)" : "translateY(20px)",
    opacity: hoveredCard ? 1 : 0,
    config: { tension: 350, friction: 15 },
  });

  return (
    <div style={{ padding: "5% 0" }}>
      <h2 style={{ margin: "3% 5%", fontSize: "45px", letterSpacing: "1px" }}>
        YOU MAY ALSO LIKE...
      </h2>
      <Container>
        <Row>
          {products.map(({ id, title }) => (
            <Col sm={3} key={id}>
              <Card
                style={{
                  width: "20rem",
                  borderRadius: "25px 25px 65px 65px",
                  border: "none",
                  boxShadow: "1px 1px 5px lightgrey",
                  textAlign: "center",
                  height:'520px'
                }}
                onMouseEnter={() => setHoveredCard(id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Title
                  style={{
                    padding: "20px",
                    marginTop: "20px",
                    fontWeight: "bold",
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  {title}
                </Card.Title>

                {/* Sale Tag */}
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
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  Sale
                </p>

                <Card.Img variant="top" src={chole} />

                {/* Animated Content */}
                {hoveredCard === id && (
                  <animated.div style={springProps}>
                    <Card.Body style={{ padding: "0px" }}>
                      <div style={{ position: "relative", width: "100%" }}>
                        <img
                          src={SelectionCard}
                          alt="SelectionCard-img"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />

                        {/* View Product Text */}
                        <h4
                          style={{
                            position: "absolute",
                            top: "35%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "28px",
                            fontWeight: "bold",
                            fontFamily: "kapraneue, sans-serif",
                            letterSpacing: "1px",
                          }}
                        >
                          VIEW PRODUCT
                        </h4>

                        {/* Price Container */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "80%",
                            transform: "translateX(-50%)",
                            display: "inline-flex",
                            gap: "10px",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <p
                            style={{
                              textDecoration: "line-through",
                              margin: 0,
                              fontSize: "20px",
                            }}
                          >
                            Rs 135
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              margin: 0,
                              fontSize: "26px",
                            }}
                          >
                            Rs 125
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </animated.div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
