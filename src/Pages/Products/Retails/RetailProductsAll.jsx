import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import blackpepper from "/media/blackpepper.png"

// Sample product data
const products = [
  { id: 1, title: "BLACK PEPPER", image: blackpepper },
  { id: 2, title: "WHITE PEPPER", image: blackpepper },
  { id: 3, title: "AMCHUR", image: blackpepper },
  { id: 4, title: "STAR ANISE", image: blackpepper },
];

export default function RetailProductsAll() {

  return (
    <div style={{ padding: "5% 0" }}>
      <h2 style={{ margin: "3% 5%", fontSize: "45px", letterSpacing: "1px" }} className="h2-youmaylike">
        YOU MAY ALSO LIKE...
      </h2>
      <Container>
        <Row>
          {products.map(({ id, title, image }) => (
             <Col xs={6} sm={4} md={3} key={id} className="cards-youmayalsolike">
              <Card
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
                    padding: "20px",
                    marginTop: "20px",
                    fontWeight: "bold",
                    fontFamily: "kapraneue, sans-serif",
                    fontSize: "24px",
                    letterSpacing: "1px",
                  }}
                >
                  {title}
                </Card.Title>

                {/* Sale Tag */}
                {/* <p
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
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  Sale
                </p> */}
                  <div style={{width:'50%', height:'auto', alignSelf:'center'}}>
                <Card.Img variant="top" src={image} />
                </div>
                  <div>
                    <Card.Body style={{ padding: "0px" }}>
                      <div style={{ position: "relative", width: "100%" }}>
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
                            fontWeight: "bold",
                            fontFamily: "kapraneue, sans-serif",
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
                        justifyContent: "center",
                        gap: "10px",
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
                      </div>
                    </Card.Body>
                  </div>
            
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
