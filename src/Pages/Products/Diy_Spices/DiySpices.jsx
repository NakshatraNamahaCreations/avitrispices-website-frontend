import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import garammasalakit from "/media/garammasalakit.jpeg";
import cholemasalakit from "/media/cholemasalakit.jpeg";
import rasampowderkit from "/media/rasampowderkit.jpeg";
import butterpaneerkit from "/media/butterpaneerkit.jpeg";
import carolekittop from "/media/carolekittop.jpeg";
import pavbhajidiytop from "/media/pavbhajidiytop.jpeg";
import tacoseasoningtop from "/media/tacoseasoningtop.jpeg";
import biyranimasalaside from "/media/biyranimasalaside.jpeg";
import currypowderkit from "/media/currypowderkit.jpeg";
import fivespieceside from "/media/fivespieceside.jpeg";
import Navbar_Menu from "../../../Components/Navbar_Menu";
import Footer from "../../../Components/Footer";
// import LearnMore from "../../Home/LearnMore";
import LearnMoreDiy from "./LearnMoreDiy";
import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews";

const dispices = [
  {
    id: 45,
    title: "DIY CHOLE MASALA KIT",
    image: cholemasalakit,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 46,
    title: "DIY GARAM MASALA KIT",
    image: garammasalakit,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 47,
    title: "DIY RASAM POWDER KIT",
    image: rasampowderkit,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 48,
    title: "DIY BUTTER PANEER MASALA KIT",
    image: butterpaneerkit,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 49,
    title: "DIY CAROLE SEASONING KIT",
    image: carolekittop,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 50,
    title: "DIY PAV BHAJI MASALA KIT",
    image: pavbhajidiytop,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 51,
    title: "DIY TACO SEASONING MASALA KIT",
    image: tacoseasoningtop,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 52,
    title: "DIY BIRYANI MASALA KIT",
    image: biyranimasalaside,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 53,
    title: "DIY CURRY POWDER KIT",
    image: currypowderkit,
    originalPrice: 125,
    discountedPrice: 115,
  },

  {
    id: 54,
    title: "DIY CHINESE FIVE SPICE KIT",
    image: fivespieceside,
    originalPrice: 145,
    discountedPrice: 135,
  },
];

export default function DiySpices() {
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
    navigate(`/diy-spices/${id}`);
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
        <div
          style={{
            backgroundColor: "#AF261D",
            position: "relative",
            width: "100vw",
            height: "30vh",
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
              <div style={{ margin: "10% 20% 15%" }}>
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
                >
                  SHOP BY DIY SPICES KIT
                </h1>
              </div>
            </Container>
          </div>
        </div>

        <Container style={{ marginBottom: "10%", marginTop: "10%" }}>
          <Row className="text-center" style={{ justifyContent: "left" }}>
            {dispices.map((kit) => {
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
                        fontSize: "18px",
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
                        width: "75%",
                        height: "auto",
                        marginBottom: "10%",
                        marginTop: "5%",
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
        <LearnMoreDiy />
        <Footer />
      </div>
    </div>
  );
}
