import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import blackpepper from "/media/blackpepper.png";
// import currypowder from "/media/currypowder.png";
import gingerpowder from "/media/gingerpowder.png";
// import pav_bhaji from "/media/pav_bhaji.png";
import turmericpowder from "/media/turmericpowder.png";
import Navbar_Menu from "../../../Components/Navbar_Menu";
import Footer from "../../../Components/Footer";
// import LearnMore from "../../Home/LearnMore";
import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews";
import LearnMoreGround from "./LearnMoreGround";

const groundspices = [
  {
    id: 42,
    title: "BLACK PEPPER POWDER",
    image: blackpepper,
    originalPrice: 135,
    discountedPrice: 125,
  },
  // {
  //   id: 2,
  //   title: "CURRY POWDER",
  //   image: currypowder,
  //   originalPrice: 125,
  //   discountedPrice: 115,
  // },
  {
    id: 43,
    title: "GINGER POWDER",
    image: gingerpowder,
    originalPrice: 140,
    discountedPrice: 120,
  },
  // {
  //   id: 4,
  //   title: "PAV BAJI MASLA",
  //   image: pav_bhaji,
  //   originalPrice: 145,
  //   discountedPrice: 135,
  // },
  {
    id: 44,
    title: "TURMERIC POWDER",
    image: turmericpowder,
    originalPrice: 145,
    discountedPrice: 135,
  },
];

export default function GroundSpices() {
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
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/ground-spices/${id}`);
  };

  return (
    <div>
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Navbar Top */}
        <Navbar_Menu />
        {/* <Container>
        <div style={{ margin: "10% 20% 5% 20%" }}>
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "3px",
              fontSize: "85px",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              textAlign: "center",
            }}
          >
            SHOP BY GROUND SPICES
          </h1>
        </div>
      </Container> */}
        <div
          style={{
            backgroundColor: "#AF261D",
            position: "relative",
            width: "100vw",
            height: "25vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1%",
              backgroundImage: 'url("/media/strip-reverse.png")',
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "auto",
            }}
          >
            <Container>
              <div
                style={{ margin: "10% 20% 15%" }}
                className="div-ground-top"
              >
                <h1
                  style={{
                    lineHeight: "1.5",
                    letterSpacing: "3px",
                    fontSize: "75px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                    fontFamily: "kapraneue, sans-serif",
                    textAlign: "center",
                    color: "white",
                  }}
                  className="h1-groundspices"
                >
                  SHOP BY GROUND SPICES
                </h1>
              </div>
            </Container>
          </div>
        </div>

        <Container style={{ marginBottom: "10%", marginTop: "15%" }}>
          <Row className="text-center" style={{ justifyContent: "left" }}>
            {groundspices.map((kit) => {
              return (
                <Col sm={3} key={kit.id} className="card-item">
                  <Card
                    style={{
                      width: "15rem",
                      borderRadius: "25px 25px 60px 60px",
                      border: "none",
                      boxShadow: "1px 1px 5px lightgrey",
                      height: "auto",
                      marginBottom: "40px",
                    }}
                    onClick={() => handleCardClick(kit.id)}
                    className="zoom-in-image"
                  >
                    <Card.Title
                      style={{
                        padding: "20px",
                        fontWeight: "bold",
                        fontSize: "22px",
                        textAlign: "center",
                        fontFamily: "kapraneue, sans-serif",
                      }}
                    >
                      {kit.title}
                    </Card.Title>
                    {/* <p
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
                  </p> */}

                    <div
                      style={{
                        width: "50%",
                        height: "auto",
                        marginBottom: "15px",
                        alignSelf: "center",
                      }}
                    >
                      {" "}
                      <Card.Img variant="top" src={kit.image} />
                    </div>
                    <div>
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
                              fontSize: "22px",
                              fontWeight: "bold",
                              fontFamily: "kapraneue, sans-serif",
                              letterSpacing: "1px",
                            }}
                            className="view-allproducts"
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
                            className="allproducts-price"
                          >
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                              className="allproducts-price-display"
                            >
                              <p
                                style={{
                                  textDecoration: "line-through",
                                  margin: 0,
                                  opacity: "0.7",
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
                                className="original-price"
                              >
                                Rs {kit.discountedPrice}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Reviews />
        {/* <LearnMore /> */}
        <LearnMoreGround />
        <Footer />
      </div>
    </div>
  );
}
