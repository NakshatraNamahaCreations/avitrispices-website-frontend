import Navbar_Menu from "../../../Components/Navbar_Menu";
import { useEffect } from "react";
import LearnMore from "../../../Pages/Home/LearnMore";
import Footer from "../../../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import whitepepper from "/media/whitepepper.png";
import blackpepper from "/media/blackpepper.png";
import amchur from "/media/amchur.png";
import star_anise from "/media/star_anise.png";
import cinnamon_sticks from "/media/cinnamon_sticks.png";
import green_cardamom from "/media/green_cardamom.png";
import black_cardamom from "/media/black_cardamom.png";
import nutmeg from "/media/nutmeg.png";
import cloves from "/media/cloves.png";
import Vector from "/media/Vector.png";
import spices from "/media/masala-collection.png";
import masalaBox from "/media/1.png";
import currypowder from "/media/currypowder.png";
import AdvertisingProducts from "../../../Pages/products/AdvertisingProducts";
import WholeProductsAll from "./WholeProductsAll";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

const wholespiceslist = [
  {
    id: 32,
    heading: "BLACK PEPPER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: blackpepper,
    title: "BLACK PEPPER ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 33,
    heading: "WHITE PEPPER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: whitepepper,
    title: "WHITE PEPPER ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 34,
    heading: "AMCHUR",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: amchur,
    title: "AMCHUR ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 35,
    heading: "STAR ANISE",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: star_anise,
    title: "STAR ANISE ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 36,
    heading: "CINNAMON STICKS",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cinnamon_sticks,
    title: "CINNAMON STICKS",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 37,
    heading: "CLOVES",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cloves,
    title: "CLOVES",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 38,
    heading: "GREEN CARDAMOM",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: green_cardamom,
    title: "GREEN CARDAMOM",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 39,
    heading: "BLACK CARDAMOM",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: black_cardamom,
    title: "BLACK CARDAMOM",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 40,
    heading: "NUTMEG",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: nutmeg,
    title: "NUTMEG",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 41,
    heading: "CASIA",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: nutmeg,
    title: "CASIA",
    discountPrice: "135",
    price: "125",
  },
];

export default function WholeSpicePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id, title, discountPrice, price, image) => {
    dispatch(addToCart({ id, title, discountPrice, price, image }));
    navigate("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const whole = wholespiceslist.find((p) => p.id === parseInt(id));

  if (!whole) {
    return <h2>Whole Spices not found</h2>;
  }

  return (
    <>
      {/* Navbar Top */}
      <Navbar_Menu />

      {/* Banner Advertising */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          position: "relative",
          backgroundColor: "#AF261D",
          color: "white",
          textAlign: "center",
          padding: "26% 0",
        }}
      >
        <Container>
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "2px",
              fontSize: "40px",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              margin: "3% 0",
            }}
          >
            {whole.heading}
          </h1>
          <Row className="justify-content-center">
            <Col sm={4} className="d-flex flex-column justify-content-center">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                }}
              >
                {whole.content}
              </p>
            </Col>
            <Col sm={4} className="d-flex flex-column justify-content-center">
              <img
                src={whole.image}
                alt="whitepepper"
                style={{
                  width: "55%",
                  height: "auto",
                  objectFit: "cover",
                  alignSelf: "center",
                }}
              />
            </Col>
            <Col
              sm={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  textAlign: "center",
                  color: "black",
                  width: "300px",
                  height: "300px",
                }}
              >
                <h2
                  style={{
                    fontSize: "35px",
                    margin: "5% 0",
                    letterSpacing: "1px",
                  }}
                >
                  {whole.title}
                </h2>
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
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                >
                  Sale
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "center",
                    fontSize: "45px",
                  }}
                >
                  <p
                    style={{
                      textDecoration: "line-through",
                      margin: 0,
                      fontSize: "25px",
                      opacity: "0.5",
                    }}
                  >
                    Rs {whole.discountPrice}
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    Rs {whole.price}
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "50px",
                    margin: "5% 10%",
                    cursor: "pointer",
                  }}
                  className="zoom-in-image"
                  onClick={() =>
                    handleAddToCart(
                      whole.id,
                      whole.title,
                      whole.discountPrice,
                      whole.price,
                      whole.image
                    )
                  }
                >
                  <img
                    src={Vector}
                    alt="Vector-img"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <h3
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      color: "white",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "5px",
                      width: "100%",
                      fontFamily: "kapraneue, sans-serif",
                    }}
                  >
                    ADD TO CART
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <AdvertisingProducts />

      {/* HEALTH BENEFITS */}
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "kapraneue, sans-serif",
            fontSize: "45px",
            letterSpacing: "2px",
            marginBottom: "5%",
          }}
        >
          SO WHAT ARE THE HEALTH BENEFITS OF OUR WHOLE SPICES
        </h1>
        <Container>
          <Row>
            <Col sm={4}>
              <div
                style={{
                  display: "inline-block",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    boxShadow: "1px 1px 10px darkgrey",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#B0261E",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    src={spices}
                    alt="spices-masala"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* <img
                  src={spices}
                  alt="spices-masala"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                /> */}
                <h2
                  style={{
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  WHOLE SPICES
                </h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                >
                  Whole spices are natural seasonings used to enhance the flavor
                  and aroma of food. They include ingredients like cinnamon
                  sticks, cloves, and cardamom pods, their essence slowly when
                  cooked.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div
                style={{
                  display: "inline-block",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    boxShadow: "1px 1px 10px darkgrey",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#B0261E",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    src={masalaBox}
                    alt="spices-masala"
                    style={{
                      width: "80%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* <img
                  src={spices}
                  alt="spices-masala"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                /> */}
                <h2>DIY KIT</h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                >
                  Whole spices are dried, unprocessed plant parts used in
                  cooking to add depth to dishes. Popular options like bay
                  leaves, peppercorns, and star anise are often used in stews
                  and curries.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div
                style={{
                  display: "inline-block",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    boxShadow: "1px 1px 10px darkgrey",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#B0261E",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    src={currypowder}
                    alt="currypowder"
                    style={{
                      width: "50%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* <img
                  src={spices}
                  alt="spices-masala"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                /> */}
                <h2>GROUND SPICES</h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                >
                  Whole spices retain their full flavor as they are not ground
                  into powder. Their fresh and aromatic qualities make them
                  perfect for slowcooked recipes and seasoning spicy blends and
                  Powders.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* YOU MAY ALSO LIKE... */}
      <WholeProductsAll />

      <LearnMore />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
