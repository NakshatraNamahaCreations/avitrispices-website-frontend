import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure this package is installed
import pepperMasala from "/media/whitepepper.png";
import Masala from "/media/turmericpowder.png";
import Masala1 from "/media/pavbhajikit.jpeg";
import Masala2 from "/media/chole_masala.png";

export default function Collections() {
  const collections = [
    { img: pepperMasala, title: "WHOLE SPICES", link: "/whole-spices" },
    { img: Masala, title: "GROUND SPICES", link: "/ground-spices" },
    { img: Masala1, title: "DIY PAV BHAJI MASALA KIT", link: "/diy-spices" },
    { img: Masala2, title: "SPICES BLENDS", link: "/retails" },
  ];

  // Slick slider settings for Mobile View
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 columns on mobile
    slidesToScroll: 1,
    prevArrow: <ChevronLeft size={40} className="slider-arrow" />,
    nextArrow: <ChevronRight size={40} className="slider-arrow" />,
  };

  return (
    <>
      <div style={{ padding: "50px", backgroundColor: "#FBF9F4" }}>
        <Container fluid>
          <h2
            style={{
              fontSize: "45px",
              fontWeight: "bold",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
              textAlign: "center",
              fontFamily: "kapraneue, sans-serif",
            }}
            className="h2-collection"
          >
            OUR COLLECTIONS
          </h2>

          {/* Desktop View - Fixed 4 Columns */}
          <div
            className="d-none d-md-flex"
            style={{
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px",
              padding: "50px 0",
            }}
          >
            {collections.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    width: "250px",
                    minHeight: "400px",
                    display: "flex",
                    flexDirection: "column",
                    border: "none",
                    borderRadius: "25px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="collection-card"
                >
                  <div
                    style={{
                      width: "100%",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width:
                          item.title === "DIY PAV BHAJI MASALA KIT"
                            ? "125%"
                            : "80%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "0",
                      flexGrow: "1",
                    }}
                  >
                    <Card.Text>
                      <div
                        style={{
                          backgroundImage: "url('/media/red-stripcard.png')",
                          backgroundSize: "cover",
                          padding: "20px",
                          textAlign: "center",
                          borderBottomLeftRadius: "25px",
                          borderBottomRightRadius: "25px",
                          marginTop: "-5px",
                        }}
                        className="collection-card-bg"
                      >
                        <h4
                          style={{
                            letterSpacing: "1px",
                            fontWeight: "900",
                            fontSize: "24px",
                            fontFamily: "kapraneue, sans-serif",
                            color: "white",
                          }}
                          className="collection-title-h4"
                        >
                          {item.title}
                        </h4>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>

          <div className="d-md-none">
  <Slider {...sliderSettings}>
    {collections.map((item, index) => (
      <div key={index} className="text-center"> {/* Adds gap */}
        <Link to={item.link} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "100%",
              margin: "auto",
              borderRadius: "25px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              height: "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "80%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>

            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "0",
                flexGrow: "1",
              }}
            >
              <Card.Text>
                <div
                  style={{
                    backgroundImage: "url('/media/red-stripcard.png')",
                    backgroundSize: "cover",
                    padding: "20px",
                    textAlign: "center",
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    marginTop: "-5px",
                  }}
                >
                  <h4
                    style={{
                      letterSpacing: "1px",
                      fontWeight: "900",
                      fontSize: "20px",
                      fontFamily: "kapraneue, sans-serif",
                      color: "white",
                    }}
                    className="collection-title-h4"
                  >
                    {item.title}
                  </h4>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    ))}
  </Slider>
</div>

        </Container>
      </div>

      <style>
        {`
       .slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  z-index: 10;
}

.slick-prev {
  left: -30px;
}

.slick-next {
  right: -30px;
}
  .slick-slide > div {
  margin: 5px; 
}

     `}
      </style>
    </>
  );
}
