import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";

import garammasalacurry from "/media/garammasalacurry.png";
import PavBhaji from "/media/PavBhaji.png";
import PUNJABICHOLERECIPE from "/media/PUNJABICHOLERECIPE.png";
import biryani1 from "/media/biryani1.png";
import CHINESEFIVE from "/media/CHINESEFIVE.png";
import BUTTERPANEERMASALA from "/media/BUTTERPANEERMASALA.png";
import ChickenCurry from "/media/ChickenCurry.png";
import VegetarianCurry from "/media/VegetarianCurry.png";
import CREOLESHRIMPPASTARECIPE from "/media/CREOLESHRIMPPASTARECIPE.png";
import VEGETARIANCREOLERICEBOWL from "/media/VEGETARIANCREOLERICEBOWL.png";
import taco from "/media/taco.png";

const products = [
  { id: 1, title: "GARAM MASALA CURRY", image: garammasalacurry, hasta: "#GaramMasalaCurry" },
  { id: 2, title: "PAV BHAJI", image: PavBhaji, hasta: "#ClassicPavBhaji" },
  { id: 3, title: "PUNJABI CHOLE RECIPE", image: PUNJABICHOLERECIPE, hasta: "#PunjabiChole" },
  { id: 4, title: "BIRYANI", image: biryani1, hasta: "#AuthenticBiryani" },
  { id: 5, title: "RASAM", image: garammasalacurry, hasta: "#Rasam" },
  { id: 6, title: "BUTTER PANEER MASALA", image: BUTTERPANEERMASALA, hasta: "#ButterPannerMasala" },
  { id: 7, title: "TACO", image: taco, hasta: "#Taco" },
  { id: 8, title: "CHICKEN CURRY", image: ChickenCurry, hasta: "#ChickenCurry" },
  { id: 9, title: "VEGETARIAN CURRY", image: VegetarianCurry, hasta: "#VegetarianCurry" },
  { id: 10, title: "CHINESE FIVE SPICE STIR-FRY", image: CHINESEFIVE, hasta: "#ChineseFiveSpiceStirFry" },
  { id: 11, title: "CREOLE SHRIMP PASTA RECIPE", image: CREOLESHRIMPPASTARECIPE, hasta: "#CREOLESHRIMPPASTA" },
  { id: 12, title: "VEGETARIAN CREOLE RICE BOWL", image: VEGETARIANCREOLERICEBOWL, hasta: "#VEGETARIANCREOLERICEBOWL" },
];

export default function RecipesGrid() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container fluid style={{ padding: "40px 20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {products.map(({ id, title, image, hasta }) => (
          <Card
            key={id}
            style={{
              height: "380px",
              borderRadius: "25px 25px 65px 65px",
              border: "none",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#faf7f1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop:'5%'
            }}
            onClick={() => handleCardClick(id)}
            className="zoom-in-image card-receipes-grid"
          >
            <Card.Title
              style={{
                padding: "15px",
                fontWeight: "bold",
                fontFamily: "kapraneue, sans-serif",
                fontSize: "20px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
              className="recipes-title-grid"
            >
              {title}
            </Card.Title>

            <div
              style={{
                width: "90%",
                objectFit: "contain",
                margin: "0 auto",
                paddingBottom: "15px",
              }}
            >
              <Card.Img variant="top" src={image} alt={title} style={{ width: "100%", height: "auto" }} className="img-recipes-grid" />
            </div>

            <Card.Body style={{ padding: "0px", width: "100%" }}>
              <div style={{ position: "relative", width: "100%" }}>
                <img
                  src={SelectionCard}
                  alt="SelectionCard-img"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <h4
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "kapraneue, sans-serif",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {hasta}
                </h4>
                <p
                  style={{
                    position: "absolute",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  RECIPES
                </p>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
