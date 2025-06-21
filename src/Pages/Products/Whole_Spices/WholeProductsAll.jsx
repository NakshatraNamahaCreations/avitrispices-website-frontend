import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import blackpepper from "/media/blackpepper.png";
import whitepepper from "/media/whitepepper.png";
import amchur from "/media/amchur.png";
import star_anise from "/media/star_anise.png";

// Sample product data
const products = [
  { id: 1, title: "BLACK PEPPER", image: blackpepper, route: "/whole-spices" },
  { id: 2, title: "WHITE PEPPER", image: whitepepper, route: "/whole-spices" },
  { id: 3, title: "AMCHUR", image: amchur, route: "/whole-spices" },
  { id: 4, title: "STAR ANISE", image: star_anise, route: "/whole-spices" },
];

export default function WholeProductsAll() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "5% 0" }}>
      <h2 style={{ margin: "3% 5%", fontSize: "45px", letterSpacing: "2px" }} className="h2-youmaylike">
        YOU MAY ALSO LIKE...
      </h2>
      <Row className="justify-content-center">
        {products.map(({ id, title, image, route }) => (
          <Col xs={6} sm={4} md={3} key={id} className="cards-youmayalsolike">
            <Card
              onClick={() => navigate(route)}
              style={{
                width: "15rem",
                borderRadius: "25px 25px 65px 65px",
                border: "none",
                boxShadow: "1px 1px 5px lightgrey",
                textAlign: "center",
                margin: "10px auto",
              }}
              className="zoom-in-image cards-youmaylike"
            >
              <Card.Title
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  fontFamily: "kapraneue, sans-serif",
                  fontSize: "22px",
                  letterSpacing: "1px",
                }}
                className="cards-title-products"
              >
                {title}
              </Card.Title>

              <div style={{ width: "60%", margin: "0 auto 10px" }}>
                <Card.Img variant="top" src={image} />
              </div>
              <Card.Body style={{ padding: "0px", position: "relative", width: "100%" }}>
                <img
                  src={SelectionCard}
                  alt="SelectionCard-img"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  className="selectioncard-img"
                />

                {/* View Product Text */}
                <h4
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "22px",
                    fontFamily: "kapraneue, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                  className="h4-view-products"
                >
                  VIEW PRODUCT
                </h4>

                {/* Price Container */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    // left: "50%",
                    // transform: "translateX(-50%)",
                    display: "flex",
                   justifyContent:'center',
                   gap:'10px',
                    alignItems: "center",
                    width: "100%",
                  }}
                  className="price-cardbox"
                >
                  <p
                    style={{
                      textDecoration: "line-through",
                      margin: 0,
                      fontSize: "20px",
                      opacity: "0.5",
                    }}
                    className="cut-price"
                  >
                    Rs 135
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                      fontSize: "26px",
                    }}
                    className="price-original"
                  >
                    Rs 125
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
