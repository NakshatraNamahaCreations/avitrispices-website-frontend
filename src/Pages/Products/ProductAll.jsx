import Navbar_Menu from "../../Components/Navbar_Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LearnMore from "../Home/LearnMore";
import Footer from "../../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import SelectionCard from "/media/SelectionCard.png";
import black_cardamom from "/media/black_cardamom.png";
import whitepepper from "/media/whitepepper.png";
import currypowder from "/media/currypowder.png";
import blackpepper from "/media/blackpepper.png";

const wholespices = [
  {
    id: 1,
    title: "ALL",
    image: black_cardamom,
    originalPrice: 135,
    discountedPrice: 125,
    route: "/retails",
  },
  {
    id: 2,
    title: "WHOLE SPICES",
    image: whitepepper,
    originalPrice: 125,
    discountedPrice: 115,
    route: "/whole-spices",
  },
  {
    id: 3,
    title: "GROUND SPICES",
    image: currypowder,
    originalPrice: 140,
    discountedPrice: 120,
    route: "/ground-spices",
  },
  {
    id: 4,
    title: "DIY SPICES KIT",
    image: black_cardamom,
    originalPrice: 145,
    discountedPrice: 135,
    route: "/diy-spices",
  },
  {
    id: 5,
    title: "RETAIL SPICES",
    image: blackpepper,
    originalPrice: 145,
    discountedPrice: 135,
    route: "/retails",
  },
   {
      id: 6,
      title: "BLACK PEPPER POWDER",
      image: blackpepper,
      originalPrice: 135,
      discountedPrice: 125,
    },
    {
      id: 7,
      title: "CURRY POWDER",
      image: currypowder,
      originalPrice: 125,
      discountedPrice: 115,
    },
    {
      id: 8,
      title: "GINGER POWDER",
      image: gingerpowder,
      originalPrice: 140,
      discountedPrice: 120,
    },
    {
      id: 9,
      title: "PAV BAJI MASLA",
      image: pav_bhaji,
      originalPrice: 145,
      discountedPrice: 135,
    },
    {
      id: 10,
      title: "TURMERIC POWDER",
      image: turmericpowder,
      originalPrice: 145,
      discountedPrice: 135,
    },
];

export default function ProductAll() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar_Menu />
      <div
        style={{
          backgroundColor: "#AF261D",
          position: "relative",
          width: "100vw",
          height: "20vh",
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
                  fontSize: "85px",
                  maxWidth: "100%",
                  fontWeight: "bold",
                  fontFamily: "kapraneue, sans-serif",
                  textAlign: "center",
                  color: "white",
                }}
              >
                PRODUCTS
              </h1>
            </div>
          </Container>
        </div>
      </div>
      <Container style={{ marginBottom: "10%", marginTop: "15%" }}>
        <Row className="text-center" style={{ justifyContent: "left" }}>
          {wholespices.map((kit) => {
            return (
              <Col sm={3} key={kit.id} className="card-item">
                <div
                 onClick={() => navigate(kit.route)}
                 style={{ cursor: "pointer", marginBottom: "20px" }}
                >
                  <Card
                    style={{
                      width: "18rem",
                      borderRadius: "25px 25px 60px 60px",
                      border: "none",
                      boxShadow: "1px 1px 5px lightgrey",
                      height: "auto",
                      marginBottom: "40px",
                    }}
                    className="zoom-in-image"
                  >
                    <Card.Title
                      style={{
                        paddingTop: "15px",
                        fontWeight: "bold",
                        fontSize: "30px",
                        textAlign: "center",
                        fontFamily: "kapraneue, sans-serif",
                      }}
                    >
                      {kit.title}
                    </Card.Title>

                    <div
                      style={{
                        width: "50%",
                        height: "auto",
                        marginBottom: "15px",
                        alignSelf: "center",
                      }}
                    >
                      <Card.Img variant="top" src={kit.image} />
                    </div>
                    <div>
                      <Card.Body style={{ padding: "0px" }}>
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            marginTop: "3%",
                          }}
                        >
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
                              fontSize: "26px",
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
                    </div>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <LearnMore />
      <Footer />
    </>
  );
}
