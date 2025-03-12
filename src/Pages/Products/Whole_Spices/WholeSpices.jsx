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
import axios from "axios";
import green_cardamom from "/media/green_cardamom.png";
import black_cardamom from "/media/black_cardamom.png";
import nutmeg from "/media/nutmeg.png";
import Navbar_Menu from "../../../Components/Navbar_Menu";
import Footer from "../../../Components/Footer";
// import LearnMore from "../../Home/LearnMore";
import LearnMoreWhole from "./LearnMoreWhole";
import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews";

const wholespices = [
  {
    id: 32,
    title: "BLACK PEPPER",
    image: blackpepper,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 33,
    title: "WHITE PEPPER",
    image: whitepepper,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 34,
    title: "AMCHUR",
    image: amchur,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 35,
    title: "STAR ANISE",
    image: star_anise,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 36,
    title: "CINNAMON STICKS",
    image: cinnamon_sticks,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 37,
    title: "CLOVES",
    image: cloves,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 38,
    title: "GREEN CARDAMOM",
    image: green_cardamom,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 39,
    title: "BLACK CARDAMOM",
    image: black_cardamom,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 40,
    title: "NUTMEG",
    image: nutmeg,
    originalPrice: 145,
    discountedPrice: 135,
  },
  {
    id: 41,
    title: "CASIA",
    image: nutmeg,
    originalPrice: 145,
    discountedPrice: 135,
  },
];

export default function WholeSpices() {
  const [isVisible, setIsVisible] = useState(false);

  const [apiProducts, setApiProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.nncwebsitedevelopment.com/api/products");
      const productsData = response.data.data || [];

     
      const wholeSpicesFromAPI = productsData.filter(
        (product) => product.category === "WHOLE SPICES"
      );

      setApiProducts(wholeSpicesFromAPI);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
    navigate(`/whole-spices/${id}`);
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
           SHOP BY WHOLE SPICES
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
                  SHOP BY WHOLE SPICES
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
                        paddingTop: "15px",
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
        <LearnMoreWhole />
        <Footer />
      </div>
    </div>
  );
}
