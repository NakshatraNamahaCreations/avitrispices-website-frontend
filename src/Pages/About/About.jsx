import { useEffect, useState } from "react";
import Navbar_Menu from "../../Components/Navbar_Menu";
import Vision_Commitment from "./Vision_Commitment";
import Footer from "../../Components/Footer";
import LearnMore from "../Home/LearnMore";
import History from "./History";
import lightcream from "/media/light-cream.png";
// import stripproducts from "/media/strip-products.png";
import { Row, Col } from "react-bootstrap";
import about_photo from "/media/about_us.png";
import { Link } from "react-router-dom";
import clientowner from "/media/clientowner.jpeg";
import exhibit from "/media/exhibit.jpeg";
import exhibit2 from "/media/exhibit2.jpeg";
import exhibit3 from "/media/exhibit3.jpeg";
import mixmasala from "/media/mixmasala.png";
import stripproducts from "/media/strip-products.png";
import exhibitmasala from "/media/exhibitmasala.jpeg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

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

        {/* ABOUT US */}
        <div style={{ backgroundColor: "#FEE9DA", padding: "5% 0%" }}>
          <div style={{ margin: "0% 10%", padding: "30px", width: "80%" }}>
            <Row>
              <Col sm={6}>
                <h2
                  style={{
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "45px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    marginBottom: "1%",
                  }}
                >
                  ABOUT US
                </h2>
                <p
                  style={{
                    fontSize: "26px",
                    lineHeight: "1.7",
                    letterSpacing: "1px",
                  }}
                >
                  Welcome to Avitri Spices, where tradition meets innovation to
                  deliver the finest spices from India to the world. We’re more
                  than just a brand; we’re curators of flavours, creators of
                  culinary experiences, and passionate storytellers of India’s
                  rich spice heritage.
                </p>
              </Col>
              <Col sm={6}>
                <img
                  src={about_photo}
                  alt="about-img"
                  className="zoom-in-image"
                  style={{
                    width: "55%",
                    height: "auto",
                    margin: "0 25%",
                    boxShadow: "2px 2px 10px darkgrey",
                    borderRadius: "50%",
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <img
            src={lightcream}
            alt="strip"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "-10%",
              position: "absolute",
              zIndex: "-1",
            }}
          />
        </div>

        {/* OUR VISION AND OUR COMMITMENT */}
        <Vision_Commitment />

        {/* OFFER | CHOOSE | CONNECT */}

        <div style={{ backgroundColor: "#FEE9DA" }}>
          <div style={{ margin: "0% 10%", padding: "50px 0", width: "80%" }}>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Left Column - Text Content */}
              <Col
                sm={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  textAlign: "left",
                }}
              >
                <h2
                  style={{
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "45px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    marginBottom: "20px",
                    marginTop: "3%",
                  }}
                >
                  Who We Are
                </h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.7",
                    letterSpacing: "1px",
                  }}
                >
                  Based in the vibrant city of Bangalore, India, Avitri Spices
                  is a modern food and spice processing unit spread across
                  30,000 sq. ft., equipped with cutting-edge technology. From
                  destoners and colour sorters to gravity separators and steam
                  sterilizers, our facility ensures every product that leaves
                  our doors meets the highest standards of quality and safety.
                </p>
                <ul
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.7",
                    letterSpacing: "2px",
                    fontFamily: "kapraneue, sans-serif",
                    listStyleType: "none",
                    paddingLeft: "0",
                  }}
                >
                  <li>We specialize in:</li>
                  <li>
                    Whole Spices:
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "22px",
                        letterSpacing: "1px",
                        fontFamily: "KapraNeueMedium, sans-serif",
                      }}
                    >
                      The essence of unadulterated flavour.
                    </span>
                  </li>
                  <li>
                    Packed Retail Spices:
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "22px",
                        letterSpacing: "1px",
                        fontFamily: "KapraNeueMedium, sans-serif",
                      }}
                    >
                      Convenient and consistent.
                    </span>
                  </li>
                  <li>
                    DIY Spice Kits:
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "22px",
                        letterSpacing: "1px",
                        fontFamily: "KapraNeueMedium, sans-serif",
                      }}
                    >
                      For the chef in everyone.
                    </span>
                  </li>
                  <li>
                    Signature Blends:
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "22px",
                        letterSpacing: "1px",
                        fontFamily: "KapraNeueMedium, sans-serif",
                      }}
                    >
                      Global and regional flavors crafted to perfection.
                    </span>
                  </li>
                </ul>
              </Col>

              {/* Right Column - Image Grid */}
              <Col
                sm={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gridAutoRows: "200px",
                    gap: "10px",
                    width: "100%",
                    maxWidth: "900px",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    gridTemplateAreas: `
      "img1 img1 img2"
      "img3 img4 img2"
    `,
                  }}
                >
                  <img
                    src={clientowner}
                    alt="owner"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      gridArea: "img1",
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <img
                    src={exhibit}
                    alt="exhibit"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      gridArea: "img2",
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <img
                    src={exhibit2}
                    alt="exhibit2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      gridArea: "img3",
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <img
                    src={exhibit3}
                    alt="exhibit3"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      gridArea: "img4",
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              </Col>
            </Row>

            <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
              <img
                src={mixmasala}
                alt="mix-masala"
                style={{ borderRadius: "20px", width: "25%", height: "auto" }}
              />

              <div>
                <h2
                  style={{
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "45px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    marginBottom: "1%",
                    marginTop: "3%",
                  }}
                >
                  WHAT WE OFFER
                </h2>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.7",
                    letterSpacing: "1px",
                    fontFamily: "kapraneue, sans-serif",
                  }}
                >
                  Our extensive range includes:
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.7",
                    letterSpacing: "1px",
                  }}
                >
                  Whole spices like Black Pepper, Green Cardamom, Cloves,
                  Nutmeg, White Pepper, Mace, Cinnamon, Cassia, Amchur, Black
                  Cardamom, Bay Leaves, Cumin seeds, Coriander seeds, Caraway
                  Seeds, Kapok Buds and many more. Ground spices such as Black
                  Pepper Powder, Dry Ginger Powder, Cloves Powder, Coriander
                  Powder, Turmeric Powder, and Cinnamon Powder and many more.
                  Exquisite blends like Garam Masala, Biryani Masala, Taco
                  Seasoning, Rasam Powder, Sambar Powder, Chole Masala, Pav
                  Bhaji Masala, Curry Powders, Butter Paneer masala, and Chinese
                  Five Spice etc. DIY kits designed for global cuisines,
                  blending traditional Indian flavours with modern convenience.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
              <div>
              <h2
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  marginBottom: "1%",
                  marginTop: "3%",
                }}
              >
                WHY CHOOSE US?
              </h2>

              <p
                style={{
                  fontSize: "24px",
                  lineHeight: "1.5",
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                }}
              >
                Quality Assurance:{" "}
                <span
                  style={{
                    fontSize: "22px",
                    letterSpacing: "1px",
                    fontFamily: "KapraNeueMedium, sans-serif",
                  }}
                >
                  From sourcing to packing, our meticulous process ensures
                  purity and consistency.
                </span>
              </p>
              <p
                style={{
                  fontSize: "24px",
                  lineHeight: "1.5",
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                }}
              >
                Global Reach:{" "}
                <span
                  style={{
                    fontSize: "22px",
                    letterSpacing: "1px",
                    fontFamily: "KapraNeueMedium, sans-serif",
                  }}
                >
                  Whether it’s a home kitchen or an international restaurant,
                  our products cater to diverse needs.
                </span>
              </p>
              <p
                style={{
                  fontSize: "24px",
                  lineHeight: "1.5",
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                }}
              >
                Innovation:{" "}
                <span
                  style={{
                    fontSize: "22px",
                    letterSpacing: "1px",
                    fontFamily: "KapraNeueMedium, sans-serif",
                  }}
                >
                  Our DIY Spice Kits make complex recipes simple, empowering
                  even novice cooks.
                </span>
              </p>
              </div>

           
                <img
                  src={exhibitmasala}
                  alt="mix-masala"
                  style={{ borderRadius: "20px", width: "25%", height: "auto" }}
                />
         
            </div>

            <h2
              style={{
                fontFamily: "kapraneue, sans-serif",
                fontSize: "45px",
                fontWeight: "bold",
                letterSpacing: "2px",
                marginBottom: "1%",
                marginTop: "3%",
              }}
            >
              LET’S CONNECT
            </h2>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.7",
                letterSpacing: "1px",
              }}
            >
              Experience the magic of spices with Avitri Spices. Ready to spice
              up your world?{" "}
              <Link
                to="/all-products"
                style={{
                  textDecoration: "underline",
                  color: "inherit",
                  fontSize: "26px",
                  fontFamily: "kapraneue, sans-serif",
                }}
              >
                <span>SHOP NOW</span>
              </Link>{" "}
              or Contact Us to learn more.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "-1%", position: "relative" }}>
          <img
            src={stripproducts}
            alt="strip"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div
            style={{
              backgroundColor: "#F4B65B",
              padding: "50px",
              position: "absolute",
              top: "10%",
            }}
          >
            <h1
              style={{
                fontFamily: "kapraneue, sans-serif",
                fontSize: "45px",
                fontWeight: "bold",
                letterSpacing: "2px",
                lineHeight: "1.5",
                textAlign: "center",
              }}
            >
              A Legacy of Excellence From a humble trading business in Kumta to
              a global spice brand, Avitri Spices stands as a testament to
              decades of dedication, innovation, and a commitment to quality. At
              the heart of this journey is a vision to bring authentic,
              high-quality spices from the farms to kitchens worldwide.
            </h1>
          </div>
        </div>

        {/* BANNER CONTENT */}
        {/* <div
          style={{
            backgroundColor: "#F4B65B",
            position: "relative",
            zIndex: "1",
          }}
        >
          <div style={{ position: "absolute", top: "-7px", zIndex: "-1" }}>
            <img
              src={stripproducts}
              alt="strip-products"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div> */}

        {/* WHERE IT ALL BEGAN */}
        <History />
        <LearnMore />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
