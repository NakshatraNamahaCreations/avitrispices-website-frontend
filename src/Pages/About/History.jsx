import { Container, Row, Col } from "react-bootstrap";
import card from "/media/timeline.png";
import card1 from "/media/timeline.png";
import logo from "/media/logo.png";
import img_1956 from "/media/1956_1.png";
import img_1990 from "/media/esspieces.jpeg";
import img_1997 from "/media/1997_3.png";
import img_2005 from "/media/2005_4.png";
import img_2010 from "/media/2010_5.png";
import img_2016 from "/media/2016_6.png";
import img_2020 from "/media/2020_7.png";
import img_2024 from "/media/2024_8.png";
import redcircle from "/media/redcircle.png";
import redline from "/media/redline.png";

export default function History() {
  return (
    <>
      <div style={{ padding: "30px", marginTop: "28%", position: "relative" }} className="div-history">
        <h2
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "3%",
            textAlign: "center",
          }}
          className="h2-whereitallbegan"
        >
          WHERE IT ALL BEGAN
        </h2>

        <Container style={{ marginTop: "10%" }}>
          {[
            {
              year: "1956: THE HUMBLE BEGINNINGS",
              img: img_1956,
              text: "The story of avitri spices trackes back to 1956, when Mr. Subray Bhat began a small farm-toshop trading business in Kumta, India, focusing on betel nut and black pepper. With a vision to connect local farmers with markets, he laid the foundation of a business deeply rooted in integrity and quality.",
            },
            {
              year: "1990: EXPANSION TO BANGALORE",
              img: img_1990,
              text: "In 1990, Mr. Ganesh Bhat moved to Bangalore, recognizing the growing demand for spices in urban food manufacturing. He established E.S Trading Co, a unit dedicated to supplying highquality spices to food manufacturing companies across Karnataka, marking the family’s first step toward large-scale operations.",
            },
            {
              year: "1997: SUSTAINABLE SOURCING IN SIRSI",
              img: img_1997,
              text: "To further strengthen the supply chain and support sustainable practices, Mr. Nagaraj Bhat set up Raja & Co in Sirsi, nestled in the heart of the western ghats. This initative ensured the ethical sourcing of spices directly from farmer’s while maintaining the ecosystem’s balance.”",
            },
            {
              year: "2005: A NATIONWIDE PRESENCE",
              img: img_2005,
              text: "By 2005, these family-run firms-E.S Trading Co and Raja & Co; had grown into trusted suppliers of spices, catering to major cities across India. Their reputation for consistency and quality made them indispensable partners for the food industry.",
            },
            {
              year: "2010: Stepping into Global Markets",
              img: img_2010,
              text: "The year 2010 marked a new milestone with the beginning of exports to Gulf countries. This move not only expanded the business geographically but also introduced the world to the rich flavors of Indian spices.",
            },
            {
              year: "2016: The Birth of Avitri",
              img: img_2016,
              text: "To unify the family legacy and scale operations, Avitri Spices was established in 2016. With a state-of-the-art 30,000 sq. ft. facility in Bangalore, equipped with advanced machinery like Destoners, Colour Sorters, Steam Sterilizers, and Metal Detectors, Avitri emerged as a powerhouse in spice processing and manufacturing.",
            },
            {
              year: "2020: A Trusted Partner Across India",
              img: img_2020,
              text: "By 2020, Avitri Spices had become a household name, supplying spices and blends to all major retail and FMCG companies across India. The commitment to quality, innovation, and customer satisfaction remained the cornerstone of their success.",
            },
            {
              year: "2024: Conquering Western Markets",
              img: img_2024,
              text: "In 2024, Avitri Spices entered the Western markets, bringing Indian flavors to new audiences. With a strong export presence in Europe, North America and Australia, Avitri continues to make strides in becoming a global leader in the spice industry. Starting new and unique products such as the DIY Spice kits Avitri looks to its future with a head on spirit.",
            },
          ].map((item, index) => (
            <Row key={index} className="align-items-center mb-5 mt-5">
              {index % 2 === 0 ? (
                <>
                  <Col md={6} className="text-center">
                    <img
                      src={item.img}
                      alt={item.year}
                      style={{
                        width: "50%",
                        height: "auto",
                        borderRadius: "50%",
                        boxShadow: "2px 2px 5px lightgrey",
                      }}
                       
                      className="zoom-in-image img-history"
                    />
                  </Col>
                  <Col md={6}>
                    <div
                      className="background-container"
                      style={{
                        position: "absolute",
                        left: "48%",
                        zIndex: "1",
                        width: "45%",
                        marginTop: "-10%",
                        textAlign: "left",
                      }}
                    >
                      <img
                        src={index % 4 === 0 ? card : card1}
                        alt="card-icon"
                        className="background-image"
                        style={{ width: "100%" }}
                      />
                      <div className="content-overlay p-3">
                        <h3
                          style={{
                            fontSize: "32px",
                            color: "#B0261E",
                            letterSpacing: "2px",
                            fontFamily: "kapraneue, sans-serif",
                          }}
                          className="h3-history-title"
                        >
                          {item.year}
                        </h3>
                        <p style={{ fontSize: "18px", letterSpacing: "1px" }} className="p-history-description">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6}>
                    <div
                      className="background-container"
                      style={{
                        position: "absolute",
                        zIndex: "1",
                        width: "45%",
                        marginTop: "-10%",
                        textAlign: "right",
                  
                      }}
                      
                    >
                      <img
                        src={index % 4 === 0 ? card : card1}
                        alt="card-icon"
                        className="background-image"
                        style={{ width: "100%" }}
                      />
                      <div className="content-overlay p-3">
                        <h3
                          style={{
                            fontSize: "32px",
                            color: "#B0261E",
                            letterSpacing: "2px",
                            fontFamily: "kapraneue, sans-serif",
                          }}
                          className="h3-history-title"
                        >
                          {item.year}
                        </h3>
                        <p style={{ fontSize: "18px", letterSpacing: "1px" }} className="p-history-description">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src={item.img}
                      alt={item.year}
                      style={{
                        width: "50%",
                        height: "auto",
                        borderRadius: "50%",
                        boxShadow: "2px 2px 5px lightgrey",
                      }}
                      className="zoom-in-image img-history"
                    />
                  </Col>
                </>
              )}
            </Row>
          ))}

          <div className="red-circle-container">
            <img
              src={redcircle}
              alt="red-circle"
              className="responsive-image"
            />
          </div>
          <div className="red-line-container">
            <img src={redline} alt="red-line" className="responsive-image" />
          </div>

          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              boxShadow: "1px 1px 5px lightgrey",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              margin: "0 auto",
              position: "relative",
              zIndex: "1",
            }}
          >
            <img
              src={logo}
              alt="avitri-logo"
              style={{
                width: "70%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
