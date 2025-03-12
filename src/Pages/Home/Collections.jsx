import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import pepperMasala from "/media/whitepepper.png";
import Masala from "/media/turmericpowder.png";
import Masala1 from "/media/pavbhajikit.jpeg";
import Masala2 from "/media/chole_masala.png";

export default function Collections() {
  return (
    <div style={{ padding: "50px", backgroundColor: "#FBF9F4" }}>
      <Container fluid>
        {/* Flex Row Container */}
        <h2
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            letterSpacing: "2px",
            whiteSpace: "nowrap",
            flexShrink: 0,
            marginRight: "20px",
            fontFamily: "kapraneue, sans-serif",
            textAlign:'center'
          }}
        >
          OUR COLLECTIONS
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            padding: "50px 0",
          }}
        >
          {/* Card Container */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
              flexGrow: 1,
            }}
          >
            {[
              { img: pepperMasala, title: " WHOLE SPICES" },
              { img: Masala, title: "GROUND SPICES" },
              { img: Masala1, title: "DIY PAV BHAJI MASALA KIT" },
              { img: Masala2, title: "SPICES BLENDS" },
            ].map((item, index) => (
              <Card
                key={index}
                style={{
                  width: "250px",
                  minHeight: "370px",
                  display: "flex",
                  flexDirection: "column",
                  border: "none",
                  borderRadius: "25px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Card Image */}
                <div
                  style={{
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: item.title === "DIY PAV BHAJI MASALA KIT" ? "125%" : "80%", 
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Card Text Section */}
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
                        backgroundRepeat: "repeat",
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
                          fontSize: "24px",
                          fontFamily: "kapraneue, sans-serif",
                          color: "white",
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
