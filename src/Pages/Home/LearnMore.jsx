import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Vector from "/media/Vector.png";
import { Link } from "react-router-dom";

export default function LearnMore() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getZoomInEffect = (index) => {
    return useSpring({
      transform: hoveredIndex === index ? "scale(1)" : "scale(0.9)",
      opacity: hoveredIndex === index ? 1 : 1,
      config: { tension: 250, friction: 25 },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundImage: "url('/media/strip-products.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "20px",
        padding: "50px",
        marginTop: "-6px",
      }}
      className="diy-learn-buy"
    >
      {/* Card 1 */}
      <Link to="/diy-spices" style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Image */}
          <animated.img
            src={Vector}
            alt="Vector-img"
            style={{
              ...getZoomInEffect(1),
              width: "40%",
              height: "100%",
              display: "block",
            }}
            className="vector-img"
          />

          {/* Text Inside Image */}
          <h3
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "white",
              textAlign: "center",
              padding: "5px",
              borderRadius: "5px",
              width: "80%",
              fontFamily: "kapraneue, sans-serif",
            }}
            className="diy-learn-buy-h3"
          >
            DIY KIT
          </h3>
        </div>
      </Link>

      {/* Card 2 */}
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Image */}
          <animated.img
            src={Vector}
            alt="Vector-img"
            style={{
              ...getZoomInEffect(3),
              width: "40%",
              height: "100%",
              display: "block",
            }}
            className="vector-img"
          />

          {/* Text Inside Image */}
          <h3
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "white",
              textAlign: "center",
              padding: "5px",
              borderRadius: "5px",
              width: "80%",
              fontFamily: "kapraneue, sans-serif",
            }}
            className="diy-learn-buy-h3"
          >
            BUY NOW
          </h3>
        </div>
      </Link>
    </div>
  );
}
