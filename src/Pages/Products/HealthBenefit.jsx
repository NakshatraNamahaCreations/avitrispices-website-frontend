import spices from "/media/masala-collection.png";
import masalaBox from "/media/1.png";
import currypowder from "/media/currypowder.png";
import { Container, Row, Col } from "react-bootstrap";

export default function HealthBenefit(){
    return(
        <div style={{ marginTop: "10%", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "kapraneue, sans-serif",
            fontSize: "45px",
            letterSpacing: "2px",
            marginBottom: "5%",
          }}
        >
          SO WHAT ARE THE HEALTH BENEFITS OF OUR DIY KIT SPICES
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
                   boxShadow:'1px 1px 10px darkgrey',
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
                  SPICES
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
                   boxShadow:'1px 1px 10px darkgrey',
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
                    boxShadow:'1px 1px 10px darkgrey',
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
                  perfect for slowcooked recipes and seasoning spicy blends &
                  Powders.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
