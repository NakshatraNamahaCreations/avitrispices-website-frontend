// import Authenticity from "/media/Authenticity.png";
// import FreshAroma from "/media/FreshAroma.png";
// import NaturalColour from "/media/NaturalColour.png";
// import UniformTexture from "/media/UniformTexture.png";

export default function Advertising() {
  const items = [
    // { icon: Authenticity, text: "Authenticity" },
    // { icon: FreshAroma, text: "Fresh aroma" },
    // { icon: NaturalColour, text: "Natural colour" },
    // { icon: UniformTexture, text: "Uniform texture" },
    {text: "'No Additives, No Preservatives – Just Pure Spices!', 'Sun-Kissed, Naturally Processed Spices' and 'Taste the Purity, Feel the Difference!'"},
   
  ];

  return (
    <div className="advertising-container">
      <div className="slider-wrapper">
        <ul className="advertising-list">
          {[...items, ...items].map((item, index) => (
            <li key={index} className="advertising-item">
              <div className="icon-container">
                {/* <img
                  src={item.icon}
                  alt={item.text}
                  style={{ width: "60%", height: "auto" }}
                /> */}
              </div>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
