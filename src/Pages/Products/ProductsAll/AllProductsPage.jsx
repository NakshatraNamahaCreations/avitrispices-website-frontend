import Navbar_Menu from "../../../Components/Navbar_Menu";
// import Product from "../../../Components/Product";
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
// import WholeProductsAll from "./WholeProductsAll";
import { useParams } from "react-router-dom";
import blackpepper1 from "/media/blackpepper1.png";
import gingerpowder from "/media/gingerpowder.png";
import pav_bhaji from "/media/pav_bhaji.png";
import turmericpowder from "/media/turmericpowder.png";
import box from "/media/1.png";
import cholemasalakit from "/media/cholemasalakit.jpeg";
import rasampowderkit from "/media/rasampowderkit.jpeg";
import butterpaneerkit from "/media/butterpaneerkit.jpeg";
import carolekittop from "/media/carolekittop.jpeg";
import pavbhajidiytop from "/media/pavbhajidiytop.jpeg";
import tacoseasoningtop from "/media/tacoseasoningtop.jpeg";
import biyranimasalaside from "/media/biyranimasalaside.jpeg";
import currypowderkit from "/media/currypowderkit.jpeg";
import fivespieceside from "/media/fivespieceside.jpeg";
import birani_masala from "/media/birani_masala.png";
import chole_masala from "/media/chole_masala.png";
import rasam_powder from "/media/rasam_powder.png";
import cuminseed from "/media/cuminseed.png";
import bayleaf from "/media/bayleaf.png";
import coriseed from "/media/coriseed.png";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

const allproductslist = [
  {
    id: 1,
    heading: "BLACK PEPPER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: blackpepper,
    title: "BLACK PEPPER ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 2,
    heading: "WHITE PEPPER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: whitepepper,
    title: "WHITE PEPPER ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 3,
    heading: "AMCHUR",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: amchur,
    title: "AMCHUR ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 4,
    heading: "STAR ANISE",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: star_anise,
    title: "STAR ANISE ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 5,
    heading: "CINNAMON STICKS",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cinnamon_sticks,
    title: "CINNAMON STICKS",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 6,
    heading: "CLOVES",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cloves,
    title: "CLOVES",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 7,
    heading: "GREEN CARDAMOM",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: green_cardamom,
    title: "GREEN CARDAMOM",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 8,
    heading: "BLACK CARDAMOM",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: black_cardamom,
    title: "BLACK CARDAMOM",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 9,
    heading: "NUTMEG",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: nutmeg,
    title: "NUTMEG",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 10,
    heading: "CASIA",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: nutmeg,
    title: "CASIA",
    discountPrice: "135",
    price: "125",
  },

  {
    id: 11,
    heading: "BLACK PEPPER POWDER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: blackpepper1,
    title: "BLACK PEPPER POWDER",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 12,
    heading: "CURRY POWDER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: currypowder,
    title: "CURRY POWDER",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 13,
    heading: "GINGER POWDER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: gingerpowder,
    title: "GINGER POWDER ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 14,
    heading: "PAV BAJI MASALA",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: pav_bhaji,
    title: "PAV BAJI MASALA",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 15,
    heading: "TURMERIC POWDER",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: turmericpowder,
    title: "TURMERIC POWDER",
    discountPrice: "135",
    price: "125",
  },

  {
    id: 16,
    heading: "DIY CHOLE MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cholemasalakit,
    title: "DIY CHOLE MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 17,
    heading: "DIY CURRY POWDER KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: currypowderkit,
    title: "DIY CURRY POWDER KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 18,
    heading: "DIY RASAM POWDER KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: rasampowderkit,
    title: "DIY RASAM POWDER KIT ",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 19,
    heading: "DIY BUTTER PANEER MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: butterpaneerkit,
    title: "DIY BUTTER PANEER MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 20,
    heading: "DIY CAROLE SEASONING KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: carolekittop,
    title: "DIY CAROLE SEASONING KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 21,
    heading: "DIY PAV BHAJI MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: pavbhajidiytop,
    title: "DIY PAV BHAJI MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 22,
    heading: "DIY TACO SEASONING MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: tacoseasoningtop,
    title: "DIY TACO SEASONING MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 23,
    heading: "DIY BIRYANI MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: biyranimasalaside,
    title: "DIY BIRYANI MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 24,
    heading: "DIY GARAM MASALA KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: box,
    title: "DIY GARAM MASALA KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 25,
    heading: "DIY CHINESE FIVE SPICE KIT",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: fivespieceside,
    title: "DIY CHINESE FIVE SPICE KIT",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 26,
    heading: "BIRYANI MASALA",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: birani_masala,
    title: "BIRYANI MASALA",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 27,
    heading: "CHOLE MASALA",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: chole_masala,
    title: "CHOLE MASALA",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 28,
    heading: "RASAM MASALA",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: rasam_powder,
    title: "RASAM MASALA",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 29,
    heading: "CUMIN SEEDS",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: cuminseed,
    title: "CUMIN SEEDS",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 30,
    heading: "BAY LEAVES",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: bayleaf,
    title: "BAY LEAVES",
    discountPrice: "135",
    price: "125",
  },
  {
    id: 31,
    heading: "CORIANDER SEEDS",
    content:
      "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
    image: coriseed,
    title: "CORIANDER SEEDS",
    discountPrice: "135",
    price: "125",
  },
  // {
  //   id: 32,
  //   heading: "BIRYANI MASALA KIT",
  //   content:
  //     "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
  //   image: cloves,
  //   title: "BIRYANI MASALA KIT",
  //   discountPrice: "135",
  //   price: "125",
  // },
];

export default function AllProductsPage() {
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
  const allproduct = allproductslist.find((p) => p.id === parseInt(id));

  if (!allproduct) {
    return <h2>All Product Spices not found</h2>;
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
        className="div-background-carts"
      >
        <Container>
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "2px",
              fontSize: "6opx",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              margin: "1% 0",
            }}
          >
            {allproduct.heading}
          </h1>
          <Row className="justify-content-center">
            <Col sm={4} className="d-flex flex-column justify-content-center">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                }}
                className="p-contents-products"
              >
                {allproduct.content}
              </p>
            </Col>
            <Col sm={4} className="d-flex flex-column justify-content-center">
              <img
                src={allproduct.image}
                alt="whitepepper"
                style={{
                  width: "55%",
                  height: "auto",
                  objectFit: "cover",
                  alignSelf: "center",
                }}
                className="addtoproduct-img"
              />
            </Col>
            <Col
              sm={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "50px",
                  textAlign: "center",
                  color: "black",
                  width: "80%",
                }}
                className="background-cartbox"
              >
                <h2
                  style={{
                    fontSize: "35px",
                    margin: "5% 0",
                    letterSpacing: "1px",
                  }}
                  className="h2-products-title"
                >
                  {allproduct.title}
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
                  className="sale-box"
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
                  className="price"
                >
                  <p
                    style={{
                      textDecoration: "line-through",
                      margin: 0,
                      fontSize: "25px",
                      opacity: "0.5",
                    }}
                    className="cutprice"
                  >
                    Rs {allproduct.discountPrice}
                  </p>
                  <p
                    style={{
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                      margin: 0,
                    }}
                  >
                    Rs {allproduct.price}
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
                      allproduct.id,
                      allproduct.title,
                      allproduct.discountPrice,
                      allproduct.price,
                      allproduct.image
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
                    className="addtocart-btn"
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
      <div style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "kapraneue, sans-serif",
            fontSize: "45px",
            letterSpacing: "2px",
            marginBottom: "5%",
          }}
          className="h1-healthbenefits"
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
                  className="img-healthbenefits"
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
                  className="h2-spices-title"
                >
                  WHOLE SPICES
                </h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                  className="p-spices-contents"
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
                  className="img-healthbenefits"
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
                <h2 className="h2-spices-title">DIY KIT</h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                  className="p-spices-contents"
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
                  className="img-healthbenefits"
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
                <h2 className="h2-spices-title">GROUND SPICES</h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                  className="p-spices-contents"
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
      {/* <WholeProductsAll /> */}

      <LearnMore />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
