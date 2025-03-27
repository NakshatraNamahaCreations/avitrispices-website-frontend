import Navbar_Menu from "../../../Components/Navbar_Menu";
import { useEffect, useState } from "react";
import LearnMore from "../../../Pages/Home/LearnMore";
import Footer from "../../../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import currypowder from "/media/currypowder.png";
import birani_masala from "/media/birani_masala.png";
import chole_masala from "/media/chole_masala.png";
import rasam_powder from "/media/rasam_powder.png";
import pav_bhaji from "/media/pav_bhaji.png";
import Vector from "/media/Vector.png";
import spices from "/media/masala-collection.png";
import masalaBox from "/media/1.png";
import certification from "../../../../public/media/certification.png"
import AdvertisingProducts from "../../../Pages/Products/AdvertisingProducts";
import { useParams } from "react-router-dom";
import RetailProductsAll from "./RetailProductsAll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

// const retailist = [
//   {
//     id: 55,
//     heading: "CURRY POWDER",
//     content:
//       "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
//     image: currypowder,
//     title: "CURRY POWDER",
//     discountPrice: "135",
//     price: "125",
//   },
//   {
//     id: 56,
//     heading: "BIRYANI MASALA",
//     content:
//       "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
//     image: birani_masala,
//     title: "BIRYANI MASALA",
//     discountPrice: "135",
//     price: "125",
//   },
//   {
//     id: 57,
//     heading: "CHOLE MASALA",
//     content:
//       "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
//     image: chole_masala,
//     title: "CHOLE MASALA",
//     discountPrice: "135",
//     price: "125",
//   },
//   {
//     id: 58,
//     heading: "RASAM MASALA",
//     content:
//       "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
//     image: rasam_powder,
//     title: "RASAM MASALA",
//     discountPrice: "135",
//     price: "125",
//   },
//   {
//     id: 59,
//     heading: "PAV BHAJI MASALA",
//     content:
//       "Introducing the Avitri Spices DIY Biryani Masala Kit – your ticket to cooking up a delicious, aromatic biryani right at home! No more guessing the right spice blends or measuring out tiny quantities. We have done the hard work for you, so you can focus on what matters most: making (and enjoying) that mouth-watering biryani!",
//     image: pav_bhaji,
//     title: "PAV BHAJI MASALA",
//     discountPrice: "135",
//     price: "125",
//   },
// ];

export default function RetailSpicesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.nncwebsitedevelopment.com/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setProduct(data.data);
            setSelectedImage(data.data.images?.[0] || null); // Set the first image by default
          } else {
            console.error("Product fetch failed");
          }
        } else {
          console.error("Product fetch failed with status:", response.status);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  

  const handleAddToCart = () => {
     dispatch(
       addToCart({
         id: product._id,
         title: product.name,
         price: product.variants?.[selectedVariantIndex]?.price || "0",
         image: product.images?.[0]
         ? `https://api.nncwebsitedevelopment.com${product.images[0]}`
         : "/media/fallback.jpg",
       })
     );
     navigate("/cart");
   };
 
   if (!product) {
     return (
       <>
         <Navbar_Menu />
         <div style={{ padding: "10%", textAlign: "center" }}>
           <h2>Loading Product...</h2>
         </div>
         <Footer />
       </>
     );
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
          padding: "25% 0",
        }}
        className="div-background-carts"
      >
        <Container className="conatiner-background-carts">
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
              {product.name}
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
             {product.description} 
              </p>
            </Col>
            <Col sm={4} className="d-flex flex-column justify-content-center">
              {/* Display main selected image */}
              <img
                src={
                  selectedImage
                    ? `https://api.nncwebsitedevelopment.com${selectedImage}`
                    : "/media/fallback.jpg"
                }
                alt={product.name}
                style={{
                  width: "55%",
                  height: "auto",
                  objectFit: "cover",
                  alignSelf: "center",
                }}
                className="addtoproduct-img"
              />
              {/* Thumbnails of all images */}
              <div style={{ display: "flex", marginTop: "15px", justifyContent: "center" }}>
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`https://api.nncwebsitedevelopment.com${image}`}
                    alt={`Thumbnail ${index}`}
                    onClick={() => setSelectedImage(image)} // Update selected image on click
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      margin: "0 5px",
                      cursor: "pointer",
                      border: selectedImage === image ? "2px solid #AF261D" : "none", // Highlight selected thumbnail
                    }}
                  />
                ))}
              </div>
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
                    fontSize: "30px",
                    margin: "5% 0",
                    letterSpacing: "1px",
                  }}
                   className="h2-products-title"
                >
                   {product.name}
                </h2>
                <div
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
    height: "80px", 
  }}
  className="sale-box"
>
  {product.variants?.length > 0 ? (
    <select
      style={{
        background: "transparent",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        border: "none",
        textAlign: "center",
        padding: "5px 10px",
        cursor: "pointer",
        WebkitAppearance: "none", 
      }}
      value={selectedVariantIndex}
      onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
    >
      {product.variants.map((variant, index) => (
        <option
          key={variant._id}
          value={index}
          style={{ color: "black" }} 
        >
          {variant.quantity} - ₹{variant.price}
        </option>
      ))}
    </select>
  ) : (
    "Sale"
  )}
</div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
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
                    Rs {150}
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    Rs {product.variants?.[selectedVariantIndex]?.price || "0"}
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
                  onClick={handleAddToCart}
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
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                  <img
                                    src={certification} 
                                    alt="Certification"
                                    style={{
                                      width: "200px",
                                      height: "auto",
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <AdvertisingProducts />

      {/* HEALTH BENEFITS */}
      <div style={{ marginTop: "10%", textAlign: "center" }} className="div-healthbenefits">
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
                <h2>DIY KIT</h2>
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
                <h2>GROUND SPICES</h2>
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
      <RetailProductsAll />

      <LearnMore />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
