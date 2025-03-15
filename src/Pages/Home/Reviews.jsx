import TestimonialCard from "/media/TestimonialCard.png";
import TestimonialCard1 from "/media/TestimonialCard1.png";
import { Container, Row, Col } from "react-bootstrap";
import star from "/media/RedStar.png";
import stargrey from "/media/GreyStar.png";
import quotes from "/media/Testimonial.png";
import quotes1 from "/media/Testimonial1.png";

export default function Reviews() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/media/yellowish.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          padding: "20px",
          marginTop: "-10px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#F4B65B",
          padding: "50px",
        }}
        className="review-background"
      >
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={5}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ position: "absolute", left: "-10%", top: "-10%" }}
                  className="quotes-position"
                >
                  <img
                    src={quotes}
                    alt="quotes"
                    style={{ width: "25%", height: "auto" }}
                  />
                </div>
                {/* Image */}
                <img
                  src={TestimonialCard}
                  alt="message-vector"
                  style={{ width: "95%", height: "auto", display: "block" }}
                  className="testimonial-img"
                />

                {/* Centered Text */}
                <div style={{ position: "absolute", top: "-7%", left: "20%" }}>
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={stargrey}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontWeight: "bold",
                    width: "80%",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "5px",
                      fontSize: "20px",
                      letterSpacing: "1px",
                    }}
                    className="p-review"
                  >
                    SPICY TASTY YUMMY SPICES...!!
                  </p>
                  <h3
                    style={{
                      fontWeight: "900",
                      letterSpacing: "2px",
                      fontSize: "35px",
                      marginTop: "35px",
                    }}
                    className="h3-review"
                  >
                    SANDEEP
                  </h3>
                </div>
              </div>
            </Col>
            <Col sm={2} style={{ width: "5%" }}></Col>
            <Col sm={5}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ position: "absolute", right: "-40%", bottom: "0%" }}
                  className="quotes-position1"
                >
                  <img
                    src={quotes1}
                    alt="quotes"
                    style={{ width: "25%", height: "auto" }}
                  />
                </div>
                {/* Image */}
                <img
                  src={TestimonialCard1}
                  alt="message-vector"
                  style={{ width: "95%", height: "auto", display: "block" }}
                />

                {/* Centered Text */}
                <div style={{ position: "absolute", top: "-7%", left: "20%" }}>
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                  <img
                    src={star}
                    alt="star-icon"
                    style={{ width: "15%", height: "auto" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontWeight: "bold",
                    width: "80%",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "5px",
                      fontSize: "20px",
                      letterSpacing: "1px",
                    }}
                    className="p-review"
                  >
                    THE TASTE OF THE FOOD HAS INCREASED BY ADDING AVITRI SPICES.
                    THANK YOU!!
                  </p>
                  <h3
                    style={{
                      fontWeight: "900",
                      letterSpacing: "2px",
                      fontSize: "35px",
                      marginTop: "35px",
                    }}
                    className="h3-review"
                  >
                    SHREYA
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
