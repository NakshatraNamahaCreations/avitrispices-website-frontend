import { Container, Row, Col } from "react-bootstrap";
import vision from "/media/vision.png";
import commentment from "/media/commentment.png";
import certification from "/media/certification.png";

export default function Vision_Commitment() {
  return (
    <div style={{ margin: "5% 0 0 0" }}>
      <Container className="text-center">
        <Row>
          <Col sm={6}>
            <div>
              <img
                src={vision}
                alt="vision-img"
                style={{
                  width: "40%",
                  height: "auto",
                  boxShadow: "1px 1px 10px darkgrey",
                  borderRadius: "50%",
                }}
                className="zoom-in-image"
              />
            </div>
            <div style={{ margin: "0 10%" }}>
              <h2
                style={{
                  margin: "5% 0",
                  fontSize: "45px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                OUR VISION
              </h2>
              <p style={{ fontSize: "26px", letterSpacing: "1px" }}>
                At Avitri Spices, our vision is to transform cooking into an art
                form by delivering spices that inspire. We aim to bring the
                bold, authentic flavors of India to homes and businesses
                worldwide, celebrating the diversity and richness of every dish.
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <img
                src={commentment}
                alt="vision-img"
                style={{
                  width: "40%",
                  height: "auto",
                  boxShadow: "1px 1px 10px darkgrey",
                  borderRadius: "50%",
                }}
                className="zoom-in-image"
              />
            </div>
            <div style={{ margin: "0 10%" }}>
              <h2
                style={{
                  margin: "5% 0",
                  fontSize: "45px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                OUR COMMITMENT
              </h2>
              <p style={{ fontSize: "26px", letterSpacing: "1px" }}>
                We’re committed to delivering authentic flavours, enhancing
                culinary experiences, and building lasting partnerships. Whether
                you’re a home cook, a professional chef, or a food business,
                Avitri Spices is your trusted companion in the kitchen.
              </p>
            </div>
          </Col>
        </Row>
        
      </Container>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "20px",
            gap: "20px",
            width: "100%",
            marginTop:'5%'
          }}
        >
          <h2
            style={{
              fontFamily: "kapraneue, sans-serif",
              fontSize: "45px",
              textAlign: "center",
              letterSpacing:"2px"
            }}
          >
            OUR CERTIFICATIONS
          </h2>
          <img src={certification} alt="certification" style={{width:'30%', height:'auto'}} />

        </div>
    </div>
  );
}
