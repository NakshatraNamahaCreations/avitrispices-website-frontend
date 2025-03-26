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

// const allproducts = [
//   {
//     id: 1,
//     title: "BLACK PEPPER",
//     image: blackpepper,
//     originalPrice: 135,
//     discountedPrice: 125,
//   },
//   {
//     id: 2,
//     title: "WHITE PEPPER",
//     image: whitepepper,
//     originalPrice: 125,
//     discountedPrice: 115,
//   },
//   {
//     id: 3,
//     title: "AMCHUR",
//     image: amchur,
//     originalPrice: 140,
//     discountedPrice: 120,
//   },
//   {
//     id: 4,
//     title: "STAR ANISE",
//     image: star_anise,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 5,
//     title: "CINNAMON STICKS",
//     image: cinnamon_sticks,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 6,
//     title: "CLOVES",
//     image: cloves,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 7,
//     title: "GREEN CARDAMOM",
//     image: green_cardamom,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 8,
//     title: "BLACK CARDAMOM",
//     image: black_cardamom,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 9,
//     title: "NUTMEG",
//     image: nutmeg,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 10,
//     title: "CASIA",
//     image: nutmeg,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },

//   {
//     id: 11,
//     title: "BLACK PEPPER POWDER",
//     image: blackpepper,
//     originalPrice: 135,
//     discountedPrice: 125,
//   },
//   {
//     id: 12,
//     title: "CURRY POWDER",
//     image: currypowder,
//     originalPrice: 125,
//     discountedPrice: 115,
//   },
//   {
//     id: 13,
//     title: "GINGER POWDER",
//     image: gingerpowder,
//     originalPrice: 140,
//     discountedPrice: 120,
//   },
//   {
//     id: 14,
//     title: "PAV BAJI MASALA",
//     image: pav_bhaji,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 15,
//     title: "TURMERIC POWDER",
//     image: turmericpowder,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },

//   {
//     id: 16,
//     title: "DIY CHOLE MASALA KIT",
//     image: cholemasalakit,
//     originalPrice: 135,
//     discountedPrice: 125,
//   },
//   {
//     id: 17,
//     title: "DIY CURRY POWDER KIT",
//     image: currypowderkit,
//     originalPrice: 125,
//     discountedPrice: 115,
//   },
//   {
//     id: 18,
//     title: "DIY RASAM POWDER KIT",
//     image: rasampowderkit,
//     originalPrice: 140,
//     discountedPrice: 120,
//   },
//   {
//     id: 19,
//     title: "DIY BUTTER PANEER MASALA KIT",
//     image: butterpaneerkit,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 20,
//     title: "DIY CAROLE SEASONING KIT",
//     image: carolekittop,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 21,
//     title: "DIY PAV BHAJI MASALA KIT",
//     image: pavbhajidiytop,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 22,
//     title: "DIY TACO SEASONING MASALA KIT",
//     image: tacoseasoningtop,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 23,
//     title: "DIY BIRYANI MASALA KIT",
//     image: biyranimasalaside,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 24,
//     title: "DIY GARAM MASALA KIT",
//     image: garammasalakit,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 25,
//     title: "DIY CHINESE FIVE SPICE KIT",
//     image: fivespieceside,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },

//   {
//     id: 26,
//     title: "BIRYANI MASALA",
//     image: birani_masala,
//     originalPrice: 125,
//     discountedPrice: 115,
//   },
//   {
//     id: 27,
//     title: "CHOLE MASALA",
//     image: chole_masala,
//     originalPrice: 140,
//     discountedPrice: 120,
//   },
//   {
//     id: 28,
//     title: "RASAM MASALA",
//     image: rasam_powder,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 29,
//     title: "CUMIN SEEDS",
//     image: cuminseed,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 30,
//     title: "BAY LEAVES",
//     image: bayleaf,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },
//   {
//     id: 31,
//     title: "CORIANDER SEEDS",
//     image: coriseed,
//     originalPrice: 145,
//     discountedPrice: 135,
//   },

//   // {
//   //   id: 32,
//   //   title: "BIRYANI MASALA KIT",
//   //   image: box,
//   //   originalPrice: 145,
//   //   discountedPrice: 135,
//   // },
// ];

export default function AllProducts() {
  const [isVisible, setIsVisible] = useState(false);
const[allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchDiySpices = async () => {
      try {
        const response = await fetch("https://api.nncwebsitedevelopment.com/api/products");
  
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
            {allProducts.map((kit) => (
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
                    className="allproducts-title"
                  >
                     {kit.name}
                  </Card.Title>

                  <div
                    style={{
                      width: "50%",
                      height: "auto",
                      marginBottom: "15px",
                      alignSelf: "center",
                    }}
                    className="allproducts-img"
                  >
                    <Card.Img
  variant="top"
  src={
    kit.images?.[0]
      ? `https://api.nncwebsitedevelopment.com/uploads/${kit.images[0].split("/").pop()}`
      : "/media/fallback.jpg"
  }
  alt={kit.name}
  style={{ objectFit: "cover", width: "100%", height: "200px" }}
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
