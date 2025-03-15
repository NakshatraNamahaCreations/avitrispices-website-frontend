import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import Vector from "/media/Vector.png";
import chole from "/media/cholemasalakit.jpeg";
import curry from "/media/currypowderkit.jpeg";
import rasam from "/media/rasampowderkit.jpeg";
import butterpaneerkit from "/media/butterpaneerkit.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Spice Kits Data
const spiceKits = [
  {
    id: 45,
    title: "DIY CHOLE MASALA KIT",
    image: chole,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 53,
    title: "DIY CURRY POWDER KIT",
    image: curry,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 47,
    title: "DIY RASAM POWDER KIT",
    image: rasam,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 48,
    title: "DIY BUTTER PANEER MASALA",
    image: butterpaneerkit,
    originalPrice: 145,
    discountedPrice: 135,
  },
];

export default function Spice_Kits() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hovered, setHovered] = useState(false);

  const zoomIn = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.9)",
    opacity: hovered ? 1 : 1,
    config: { tension: 250, friction: 25 },
  });

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/diy-spices/${id}`);
  };

  return (
    <div style={{ margin: "7% 10%" }}>
      <h2
        className="banner-heading"
        style={{
          fontWeight: "bold",
          fontSize: "35px",
          padding: "1% 0",
          fontFamily: "kapraneue, sans-serif",
          letterSpacing: "2px",
        }}
      >
        DIY SPICE KITS RANGE
      </h2>

      <Container className="mt-4" style={{ marginBottom: "5%" }}>
        <Row className="text-center" style={{ justifyContent: "space-around" }}>
          {spiceKits.map((kit) => {
            const slideIn = useSpring({
              transform:
                hoveredCard === kit.id ? "translateY(0)" : "translateY(20px)",
              opacity: hoveredCard === kit.id ? 1 : 0,
              config: { tension: 350, friction: 15 },
            });

            return (
              <Col xs={6} sm={6} md={3} key={kit.id} className="card-item">
                <Card
                  style={{
                    width: "15rem",
                    borderRadius: "25px 25px 60px 60px",
                    border: "none",
                    boxShadow: "1px 1px 5px lightgrey",
                    height: "auto",
                  }}
                  onClick={() => handleCardClick(kit.id)}
                  onMouseEnter={() => setHoveredCard(kit.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Title
                    style={{
                      padding: "20px",
                      fontWeight: "bold",
                      fontSize: "24px",
                      textAlign: "center",
                      fontFamily: "kapraneue, sans-serif",
                    }}
                    
                  >
                    {kit.title}
                  </Card.Title>
                  <p
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                      textAlign: "center",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      height: "30px",
                      width: "150px",
                      letterSpacing: "1px",
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 85% 50%, 80% 100%, 20% 100%, 15% 50%)",
                    }}
                  >
                    SALE
                  </p>

                  <Card.Img
                    variant="top"
                    src={kit.image}
                    style={{ width: "80%", height: "auto", margin: "0 auto" }}
                  />
                  <animated.div style={slideIn}>
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
                        <h4
                          style={{
                            position: "absolute",
                            top: "35%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: "kapraneue, sans-serif",
                            letterSpacing: "1px",
                          }}
                        >
                          VIEW PRODUCT
                        </h4>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              alignItems: "center",
                            }}
                          >
                            <p
                              style={{
                                textDecoration: "line-through",
                                margin: 0,
                              }}
                            >
                              Rs {kit.originalPrice}
                            </p>
                            <p
                              style={{
                                fontWeight: "bold",
                                margin: 0,
                                fontSize: "25px",
                              }}
                            >
                              Rs {kit.discountedPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </animated.div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Find More Like This Section */}
      <Link to="/all-products" style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            width: "30%",
            height: "50px",
            margin: "0px 33%",
          }}
          className="find-more-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
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
              fontFamily: "kapraneue, sans-serif",
            }}
          >
            FIND MORE LIKE THIS
          </h3>
        </div>
      </Link>
    </div>
  );
}
