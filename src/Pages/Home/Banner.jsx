import { Container } from "react-bootstrap";
// import SpicesGroup from "/media/SpicesGroup.png";
import bannercoverimage from "/media/bannercoverimage.png";
import bgspices from "/media/bg-spices.png";

export default function Banner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // height: "100vh",
        position: "relative",
        backgroundColor: "#AF261D",
        color: "white",
      }}
    >
      <Container fluid>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "90vh",
            overflow: "hidden",
          }}
          className="background-banner"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${bgspices})`,
              backgroundSize: "contain",
              opacity: "0.2",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              // zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // zIndex: 2,
              }}
            ></div>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 3,
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              marginTop: "12%",
            }}
            className="banner-top"
          >
            <img
              src={bannercoverimage}
              alt="SpicesGroup-img"
              style={{
                width: "70%",
                height: "auto",
                objectFit: "cover",
                display: "block",
                justifySelf: "center",
                marginTop: "-2%",
              }}
              className="banner-img-products"
            />
            <h1
              style={{
                // lineHeight: "1.5",
                letterSpacing: "3px",
                fontSize: "45px",
                maxWidth: "100%",
                fontWeight: "bold",
                fontFamily: "kapraneue, sans-serif",
                padding: "0% 0",
                display: "block",
                justifySelf: "center",
              }}
              className="h1-banner"
            >
              BRINGING THE FLAVOURS TO YOU!
            </h1>
          </div>
        </div>

        {/* <img
          src={bannercoverimage}
          alt="SpicesGroup-img"
          style={{
            width: "70%",
            height: "auto",
            objectFit: "cover",
            display: "block",
            marginTop:'10%',
            justifySelf:'center'
          }}
        /> */}
      </Container>
    </div>
  );
}
