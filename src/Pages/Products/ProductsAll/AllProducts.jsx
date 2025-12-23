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
import Navbar_Menu from "../../../Components/Navbar_Menu";
import Footer from "../../../Components/Footer";
import { useEffect, useState } from "react";
import Reviews from "../../Home/Reviews";
import currypowder from "/media/currypowder.png";
import gingerpowder from "/media/gingerpowder.png";
import pav_bhaji from "/media/pav_bhaji.png";
import turmericpowder from "/media/turmericpowder.png";
// import box from "/media/1.png";
import fivespieceside from "/media/fivespieceside.jpeg";
import garammasalakit from "/media/garammasalakit.jpeg";

import tacoseasoningtop from "/media/tacoseasoningtop.jpeg";
import pavbhajidiytop from "/media/pavbhajidiytop.jpeg";
import carolekittop from "/media/carolekittop.jpeg";
import butterpaneerkit from "/media/butterpaneerkit.jpeg";
import rasampowderkit from "/media/rasampowderkit.jpeg";
import currypowderkit from "/media/currypowderkit.jpeg";
import cholemasalakit from "/media/cholemasalakit.jpeg";
import birani_masala from "/media/birani_masala.png";
import chole_masala from "/media/chole_masala.png";
import rasam_powder from "/media/rasam_powder.png";
import cuminseed from "/media/cuminseed.png";
import bayleaf from "/media/bayleaf.png";
import coriseed from "/media/coriseed.png";
import LearnMoreProducts from "./LearnMoreProducts";

function ShimmerCard() {
  return (
    <Col xs={6} sm={6} md={4} lg={3} className="card-item-products">
      <div
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "25px 25px 60px 60px",
          boxShadow: "1px 1px 5px lightgrey",
          marginBottom: "50px",
          padding: "15px",
        }}
      >
        <div className="shimmer" style={{ height: "40px", marginBottom: "20px" }} />
        <div className="shimmer" style={{ height: "200px", marginBottom: "20px" }} />
        <div className="shimmer" style={{ height: "70px" }} />
      </div>
    </Col>
  );
}

export default function AllProducts() {
  const [isVisible, setIsVisible] = useState(false);
const[allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchDiySpices = async () => {
      try {
        const response = await fetch("https://api.avitrispices.in/api/products");
  
        const data = await response.json();
        if (data.success) {
          setAllProducts(data.data);
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
    navigate(`/all-products/${id}`);
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
            className="strip-background-top"
          >
            <Container>
              <div
                style={{ margin: "10% 20% 15%" }}
                className="div-all-products-top"
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
                  className="h1-all-products"
                >
                  ALL PRODUCTS
                </h1>
              </div>
            </Container>
          </div>
        </div>

        <Container style={{ marginBottom: "10%", marginTop: "15%" }}>
          <Row className="text-center" style={{ justifyContent: "left" }}>
            {/* {allProducts.map((kit) => (
               */}
                {allProducts.length === 0
              ? Array.from({ length: 8 }).map((_, index) => <ShimmerCard key={index} />)
              : allProducts.map((kit) => (
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
                      paddingTop: "15px",
                      fontWeight: "bold",
                      fontSize: "22px",
                      textAlign: "center",
                      fontFamily: "kapraneue, sans-serif",
                    }}
                    className="allproducts-title"
                  >
                     {kit.name}
                  </Card.Title>

                  <div
                    className="d-none d-lg-block"
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
      ? `https://api.avitrispices.in/uploads/${kit.images[0].split("/").pop()}`
      : "/media/fallback.jpg"
  }
  alt={kit.name}
  style={{ objectFit: "cover", width: "100%", height: "200px" }}
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
      ? `https://api.avitrispices.in/uploads/${kit.images[0].split("/").pop()}`
      : "/media/fallback.jpg"
  }
  alt={kit.name}
  style={{ objectFit: "cover", width: "100%", height: "100px" }}
/>
                    </div>

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
                              fontFamily: "kapraneue, sans-serif",
                              letterSpacing: "1px",
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
                </Card>
              </Col>
            ))}
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
