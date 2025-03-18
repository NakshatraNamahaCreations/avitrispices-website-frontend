import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons

import SelectionCard from "/media/SelectionCard.png";
import Vector from "/media/Vector.png";
import chole from "/media/cholemasalakit.jpeg";
import curry from "/media/currypowderkit.jpeg";
import rasam from "/media/rasampowderkit.jpeg";
import butterpaneerkit from "/media/butterpaneerkit.jpeg";

// Spice Kits Data
const spiceKits = [
  {
    id: 45,
    title: "DIY CHOLE MASALA KIT",
    image: chole,
    originalPrice: 135,
    discountedPrice: 125,
  },
  {
    id: 53,
    title: "DIY CURRY POWDER KIT",
    image: curry,
    originalPrice: 125,
    discountedPrice: 115,
  },
  {
    id: 47,
    title: "DIY RASAM POWDER KIT",
    image: rasam,
    originalPrice: 140,
    discountedPrice: 120,
  },
  {
    id: 48,
    title: "DIY BUTTER PANEER MASALA",
    image: butterpaneerkit,
    originalPrice: 145,
    discountedPrice: 135,
  },
];

export default function Spice_Kits() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const zoomIn = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.9)",
    opacity: 1,
    config: { tension: 250, friction: 25 },
  });

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "7% 10%" }}>
      <h2
        className="banner-heading"
        style={{
          fontWeight: "bold",
          fontSize: "35px",
          padding: "1% 0",
          fontFamily: "kapraneue, sans-serif",
          letterSpacing: "2px",
        }}
      >
        DIY SPICE KITS RANGE
      </h2>

      <Container style={{ marginBottom: "5%" }}>
        <Slider {...sliderSettings}>
          {spiceKits.map((kit) => (
            <div key={kit.id} style={{ padding: "10px" }}>
              <Card
                className="card-item"
                style={{
                  width: "15rem",
                  borderRadius: "25px 25px 50px 50px",
                  border: "none",
                  boxShadow: "1px 1px 5px lightgrey",
                  height: "400px",
                  textAlign: "center",
                  margin: "20px auto",
                }}
                onClick={() => navigate(`/diy-spices/${kit.id}`)}
              >
                <Card.Title
                  style={{
                    paddingTop: "20px",
                    fontWeight: "bold",
                    fontSize: "24px",
                    fontFamily: "kapraneue, sans-serif",
                  }}
                >
                  {kit.title}
                </Card.Title>
                <p
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    width: "150px",
                    margin: "15px auto",
                    clipPath:
                      "polygon(20% 0%, 80% 0%, 85% 50%, 80% 100%, 20% 100%, 15% 50%)",
                  }}
                  className="sale-tag"
                >
                  SALE
                </p>
                <Card.Img
                  variant="top"
                  src={kit.image}
                  style={{ width: "80%", margin: "auto" }}
                />
                <Card.Body>
                  <img
                    src={SelectionCard}
                    alt="SelectionCard-img"
                    style={{
                      width: "115%",
                      display: "block",
                      justifySelf: "center",
                    }}
                    className="selection-card"
                  />
                  <h4
                    style={{
                      position: "absolute",
                      top: "87%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "22px",
                      fontWeight: "bold",
                      fontFamily: "kapraneue, sans-serif",
                      letterSpacing: "1px",
                    }}
                    className="view-product"
                  >
                    VIEW PRODUCT
                  </h4>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",

                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="price-container"
                  >
                    <p
                      style={{ textDecoration: "line-through", opacity: 0.5 }}
                      className="cut-price"
                    >
                      Rs {kit.originalPrice}
                    </p>
                    <p
                      style={{ fontWeight: "bold", fontSize: "25px" }}
                      className="originalprice"
                    >
                      Rs {kit.discountedPrice}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>

      {/* Find More Like This Section */}
      <Link to="/all-products" style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            width: "30%",
            height: "50px",
            margin: "0px 33%",
          }}
          className="find-more-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <animated.img
            src={Vector}
            alt="Vector-img"
            style={{
              ...zoomIn,
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
          <h3
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "white",
              textAlign: "center",
              fontFamily: "kapraneue, sans-serif",
            }}
          >
            FIND MORE LIKE THIS
          </h3>
        </div>
      </Link>
    </div>
  );
}

// Custom Arrow Components
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-5%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        cursor: "pointer",
      }}
    >
      <ChevronLeft size={40} color="black" />
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "-5%",
        top: "50%",
        transform: "translate(50%, -50%)",
        zIndex: 10,
        cursor: "pointer",
      }}
    >
      <ChevronRight size={40} color="black" />
    </div>
  );
}
