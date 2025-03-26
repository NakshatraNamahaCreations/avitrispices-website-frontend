import { useEffect } from "react";
import chef from "/media/output-onlinepngtools.png";
import nochemical from "/media/nochemical.png";
import fastdelivery from "/media/fastdelivery.png";

export default function Choose() {
  useEffect(() => {
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/media/strip.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          padding: "10px",
          marginTop: "-10px",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          padding: "25px",
          backgroundColor: "#AF261D",
          textAlign: "center",
          color: "white",
        }}
        className="choose-background"
      >
        <h2
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "5%",
            fontFamily: "kapraneue, sans-serif",
          }}
          className="choose-h2"
        >
          WHY CHOOSE US?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              width: "15%",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
            className="zoom-in-image"
          >
            <div>
              <img
                src={chef}
                alt="Highly tasty and nutritious"
                style={{
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                  marginBottom: "5%",
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "KapraNeueMedium, sans-serif",
                fontSize: "16px",
              }}
              className="p-choose"
            >
              Highly tasty and nutritious
            </p>
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              width: "15%",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
            className="zoom-in-image"
          >
            <div>
              <img
                src={nochemical}
                alt="No chemical or pesticides"
                style={{
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                  marginBottom: "5%",
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "KapraNeueMedium, sans-serif",
                fontSize: "16px",
              }}
              className="p-choose"
            >
              Adulterant free Spices
            </p>
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              width: "15%",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
            className="zoom-in-image"
          >
            <div>
              <img
                src={fastdelivery}
                alt="Fastest delivery to your doorsteps"
                style={{
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                  marginBottom: "5%",
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "KapraNeueMedium, sans-serif",
                fontSize: "16px",
              }}
              className="p-choose"
            >
              Quick delivery to your doorsteps
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
