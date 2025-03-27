import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import currypowder from "/media/currypowder.png";
import birani_masala from "/media/birani_masala.png";
import chole_masala from "/media/chole_masala.png";
import rasam_powder from "/media/rasam_powder.png";
import pav_bhaji from "/media/pav_bhaji.png";
import Navbar_Menu from "../../../Components/Navbar_Menu";
import Footer from "../../../Components/Footer";
import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews";

import LearnMoreRetail from "./LearnMoreRetail";

// const wholespices = [
//   {
//     id: 55,
//     title: "CURRY POWDER",
//     image: currypowder,
//     originalPrice: 135,
//     discountedPrice: 125,
//   },
//   {
//     id: 56,
//     title: "BIRYANI MASALA",
//     image: birani_masala,
//     originalPrice: 125,
//     discountedPrice: 115,
//   },
//   {
//     id: 57,
//     title: "CHOLE MASALA",
//     image: chole_masala,
//     originalPrice: 140,
//     discountedPrice: 120,
//   },
//   {
//     id: 58,
//     title: "RASAM MASALA",
//     image: rasam_powder,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 59,
//     title: "PAV BHAJI MASALA",
//     image: pav_bhaji,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
// ];

export default function RetailSpices() {
  const [isVisible, setIsVisible] = useState(false);
  const [retailSpices, setRetailSpices] = useState([])

  useEffect(() => {
    const fetchDiySpices = async () => {
      try {
        const response = await fetch("https://api.nncwebsitedevelopment.com/api/products/category/SPICES%20BLENDS");
  
        const data = await response.json();
        if (data.success) {
          setRetailSpices(data.data);
        } else {
          console.error("Failed to fetch DIY spices:", data.message);
        }
      } catch (err) {
        console.error("Error fetching DIY spices:", err);
      }
    };
  
    fetchDiySpices();
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
    navigate(`/retails/${id}`);
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
              <div
                style={{ margin: "10% 20% 15%" }}
                className="div-blend-top"
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
                  SHOP BY SPICES BLENDS
                </h1>
              </div>
            </Container>
          </div>
        </div>

        <Container style={{ marginBottom: "10%", marginTop: "15%" }}>
          <Row className="text-center" style={{ justifyContent: "left" }}>
            {retailSpices.map((kit) => {
              return (
                <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                key={kit._id}
                className="card-item-products"
              >
                  <Card
                      style={{
                        width: "100%", 
                        borderRadius: "25px 25px 60px 60px",
                        border: "none",
                        cursor:'pointer',
                        boxShadow: "1px 1px 5px lightgrey",
                        height: "auto",
                        marginBottom: "50px",
                      }}
                    onClick={() => handleCardClick(kit._id)}
                    // className="zoom-in-image"
                  >
                    <Card.Title
                      style={{
                        padding: "20px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        textAlign: "center",
                        fontFamily: "kapraneue, sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      {kit.name}
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
                    className="d-none d-lg-block"
                      style={{
                        width: "50%",
                        height: "auto",
                        marginBottom: "15px",
                        alignSelf: "",
                      }}
                    >
                      {" "}
                      <Card.Img
  variant="top"
  className="responsive-image-card"
  src={
    kit.images?.[0]
      ? `https://api.nncwebsitedevelopment.com/uploads/${kit.images[0].split("/").pop()}`
      : "/media/fallback.jpg"
  }
  alt={kit.name}
  style={{ objectFit: "cover", width: "305px", height: "300px" }}
/>
                    </div>
                    <div
                    className="d-block d-lg-none"
                      style={{
                        width: "50%",
                        height: "auto",
                        marginBottom: "15px",
                        alignSelf: "center",
                      }}
                    >
                      {" "}
                      <Card.Img
  variant="top"
  className="responsive-image-card"
  src={
    kit.images?.[0]
      ? `https://api.nncwebsitedevelopment.com/uploads/${kit.images[0].split("/").pop()}`
      : "/media/fallback.jpg"
  }
  alt={kit.name}
  style={{ objectFit: "cover", width: "100%", height: "100px" }}
/>
                    </div>
                    <div>
                      <Card.Body style={{ padding: "0px" }}>
                        <div style={{ position: "relative", width: "100%" }}>
                          <img
                            src={SelectionCard}
                            alt="SelectionCard-img"
                            style={{
                              width: "100%",
                              height: "70px",
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
                                 className="discount-price"
                              >
                                {/* Rs {150} */}
                              </p>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  margin: 0,
                                  fontSize: "25px",
                                }}
                                className="original-price"
                              >
                                   {/* Rs {kit.price} */}
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
        <LearnMoreRetail />
       
        <Footer />
      </div>
    </div>
  );
}
