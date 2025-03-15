import Bynature from "/media/Bynature.png";

export default function Nourished() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* Image */}
      <img
        src={Bynature}
        alt="nature"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Text Inside Image */}
      <h2
        style={{
          position: "absolute",
          top: "25%",
          left: "15%",
          fontSize: "75px",
          fontWeight: "bold",
          letterSpacing: "3px",
          padding: "5px",
          borderRadius: "5px",
          width: "80%",
          lineHeight: "1.5",
        }}
        className="h2-symphony"
      >
       A SYMPHONY OF TASTE, <br /> PERFECTED BY AVITRI
      </h2>
    </div>
  );
}
