import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import blackpepper from "/media/blackpepper.png";
import whitepepper from "/media/whitepepper.png";
import amchur from "/media/amchur.png";
import star_anise from "/media/star_anise.png";
import cinnamon_sticks from "/media/cinnamon_sticks.png";
import cloves from "/media/cloves.png";
import green_cardamom from "/media/green_cardamom.png";
import black_cardamom from "/media/black_cardamom.png";
import nutmeg from "/media/nutmeg.png";
import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews";
import currypowder from "/media/currypowder.png";
import gingerpowder from "/media/gingerpowder.png";
import pav_bhaji from "/media/pav_bhaji.png";
import turmericpowder from "/media/turmericpowder.png";
import box from "/media/1.png";
import birani_masala from "/media/birani_masala.png";
import chole_masala from "/media/chole_masala.png";
import rasam_powder from "/media/rasam_powder.png";
import cuminseed from "/media/cuminseed.png";
import bayleaf from "/media/bayleaf.png";

import coriseed from "/media/coriseed.png";
import LearnMoreProducts from "./LearnMoreProducts";
import Footer from "../../Components/Footer";
import Navbar_Menu from "../../Components/Navbar_Menu";

const allproducts = [
  {
    id: 1,
    title: "BLACK PEPPER",
    image: blackpepper,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 2,
    title: "WHITE PEPPER",
    image: whitepepper,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 3,
    title: "AMCHUR",
    image: amchur,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 4,
    title: "STAR ANISE",
    image: star_anise,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 5,
    title: "CINNAMON STICKS",
    image: cinnamon_sticks,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 6,
    title: "CLOVES",
    image: cloves,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 7,
    title: "GREEN CARDAMOM",
    image: green_cardamom,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 8,
    title: "BLACK CARDAMOM",
    image: black_cardamom,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 9,
    title: "NUTMEG",
    image: nutmeg,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 10,
    title: "CASIA",
    image: nutmeg,
    originalPrice: 145,
    discountedPrice: 135,
  },

  {
    id: 11,
    title: "BLACK PEPPER POWDER",
    image: blackpepper,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 12,
    title: "CURRY POWDER",
    image: currypowder,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 13,
    title: "GINGER POWDER",
    image: gingerpowder,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 14,
    title: "PAV BAJI MASALA",
    image: pav_bhaji,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 15,
    title: "TURMERIC POWDER",
    image: turmericpowder,
    originalPrice: 145,
    discountedPrice: 135,
  },

  {
    id: 16,
    title: "DIY CHOLE MASALA KIT",
    image: box,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 17,
    title: "DIY CURRY POWDER KIT",
    image: box,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 18,
    title: "DIY RASAM POWDER KIT",
    image: box,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 19,
    title: "DIY BUTTER PANEER MASALA KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 20,
    title: "DIY CAROLE SEASONING KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 21,
    title: "DIY PAV BHAJI MASALA KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 22,
    title: "DIY TACO SEASONING MASALA KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 23,
    title: "DIY BIRYANI MASALA KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 24,
    title: "DIY GARAM MASALA KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 25,
    title: "DIY CHINESE FIVE SPICE KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },

  {
    id: 26,
    title: "BIRYANI MASALA",
    image: birani_masala,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 27,
    title: "CHOLE MASALA",
    image: chole_masala,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 28,
    title: "RASAM MASALA",
    image: rasam_powder,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 29,
    title: "CUMIN SEEDS",
    image: cuminseed,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 30,
    title: "BAY LEAVES",
    image: bayleaf,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 31,
    title: "CORIANDER SEEDS",
    image: coriseed,
    originalPrice: 145,
    discountedPrice: 135,
  },

  {
    id: 32,
    title: "BIRYANI MASALA KIT",
    image: box,
    originalPrice: 145,
    discountedPrice: 135,
  },
];

export default function ProductsCarts() {
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
    navigate(`/all-products/${id}`);
  };

  return (
    <div>
       <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          overflow:'hidden'
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
           SHOP BY WHOLE SPICES
          </h1>
        </div>
      </Container> */}
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
                ALL PRODUCTS
              </h1>
            </div>
          </Container>
        </div>
      </div>

      <Container style={{ marginBottom: "10%", marginTop: "15%" }}>
        <Row className="text-center" style={{ justifyContent: "left" }}>
          {allproducts.map((kit) => {
            return (
              <Col sm={3} key={kit.id} className="card-item">
                <Card
                  style={{
                    width: "18rem",
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
                      paddingTop: "15px",
                      fontWeight: "bold",
                      fontSize: "28px",
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
      <LearnMoreProducts />
    <Footer />
    </div>
    </div>
  );
}
