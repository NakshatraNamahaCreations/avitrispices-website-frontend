// import { useState } from "react";
import React from "react";
// import { useSpring, animated } from "react-spring";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import spiece from "/media/spices-vector.png";
import pavbhaji from "/media/PavBhaji.png";
import chole from "/media/chole-curry.jpg";
import taco from "/media/taco.png";
import vegBiryani from "/media/CHINESEFIVE.png";
import save from "/media/save-icon.png";

const foodItems = [
  { title: "Chole Masala", image: chole, route: "/ground-spices" },
  { title: "Pav Bhaji", image: pavbhaji, route: "/ground-spices" },
  { title: "Taco Seasoning", image: taco, route: "/ground-spices" },
  { title: "Chinese Five Spices", image: vegBiryani, route: "/ground-spices" },
];

export default function FoodCards() {
  // const [hoveredCard, setHoveredCard] = useState(null);

  // const slideIn = (cardIndex) =>
  //   useSpring({
  //     transform:
  //       hoveredCard === cardIndex ? "translateY(0)" : "translateY(20px)",
  //     opacity: hoveredCard === cardIndex ? 1 : 0,
  //     config: { tension: 350, friction: 15 },
  //   });

  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#AF261D" }}>
      {/* Left Section - Image & Title */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            letterSpacing: "2px",
            textAlign: "center",
            fontFamily: "kapraneue, sans-serif",
            color: "white",
            lineHeight: "1.7",
          }}
          className="spices-card-h2"
        >
          Spice It Up with Avitri - Recipes that Inspire!
        </h2>
      </div>
      <div
        style={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexWrap: "wrap",
          // gap: "30px",
          width: "100%",
        }}
      >
        {/* Right Section - Food Items Grid */}
        <div
          style={
            {
              // flex: "2",
              // display: "flex",
              // gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              // gap: "20px",
              // width: "100%",
              // justifyContent: "center",
            }
          }
          className="food-items-container"
        >
          {foodItems.map((item, index) => (
            <Card
              key={index}
              style={{
                width: "100%",
                maxWidth: "300px",
                border: "none",
                backgroundColor: "#AF261D",
              }}

              // className="zoom-in-image"
              // onMouseEnter={() => setHoveredCard(index)}
              // onMouseLeave={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                className="img-card-spices"
              />
              <Card.Body style={{ padding: "0" }}>
                <Card.Text>
                  <div
                    style={{
                      // ...slideIn(index),
                      backgroundImage: "url('/media/strip-cards.png')",
                      backgroundSize: "cover",
                      backgroundRepeat: "repeat",
                      marginTop: "-5%",
                      padding: "15px",
                      borderBottomLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textTransform: "uppercase",
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        flex: 1,
                        textAlign: "left",
                        letterSpacing: "1px",
                        whiteSpace:'nowrap',
                        // fontFamily:'KapraNeueMedium, sans-serif'
                        fontFamily: "kapraneue, sans-serif",
                      }}
                      className="card-spices-h4"
                    >
                      {item.title.split("<br />").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                    <img
                      src={save}
                      alt="save-icon"
                      style={{
                        width: "25px",
                        height: "25px",
                        objectFit: "contain",
                        marginLeft: "10px",
                      }}
                      className="card-save-icon"
                    />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
